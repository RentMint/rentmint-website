import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { toast } from "sonner";

interface OptimizationResult {
  originalSize: number;
  optimizedSize: number;
  compressionRatio: number;
  originalUrl: string;
  optimizedUrl: string;
}

export const ImageOptimizer = () => {
  const [results, setResults] = useState<OptimizationResult[]>([]);
  const [isProcessing, setIsProcessing] = useState(false);
  const [progress, setProgress] = useState(0);

  const formatFileSize = (bytes: number): string => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  const optimizeImage = async (imageUrl: string, maxWidth: number = 1200, quality: number = 0.8): Promise<OptimizationResult> => {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.crossOrigin = "anonymous";
      
      img.onload = () => {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        
        if (!ctx) {
          reject(new Error('Could not get canvas context'));
          return;
        }

        // Calculate new dimensions while maintaining aspect ratio
        let { width, height } = img;
        if (width > maxWidth) {
          height = (height * maxWidth) / width;
          width = maxWidth;
        }

        canvas.width = width;
        canvas.height = height;

        // Draw and compress the image
        ctx.drawImage(img, 0, 0, width, height);
        
        canvas.toBlob((blob) => {
          if (!blob) {
            reject(new Error('Failed to create optimized blob'));
            return;
          }

          const optimizedUrl = URL.createObjectURL(blob);
          
          // Fetch original image size
          fetch(imageUrl)
            .then(response => response.blob())
            .then(originalBlob => {
              const result: OptimizationResult = {
                originalSize: originalBlob.size,
                optimizedSize: blob.size,
                compressionRatio: ((originalBlob.size - blob.size) / originalBlob.size) * 100,
                originalUrl: imageUrl,
                optimizedUrl: optimizedUrl
              };
              resolve(result);
            })
            .catch(reject);
        }, 'image/jpeg', quality);
      };

      img.onerror = () => reject(new Error(`Failed to load image: ${imageUrl}`));
      img.src = imageUrl;
    });
  };

  const optimizeAllImages = async () => {
    setIsProcessing(true);
    setProgress(0);
    setResults([]);

    const imageUrls = [
      '/founder-fails.png',
      '/luxury-watches.png'
    ];

    try {
      const optimizationResults: OptimizationResult[] = [];
      
      for (let i = 0; i < imageUrls.length; i++) {
        const url = imageUrls[i];
        setProgress(((i + 0.5) / imageUrls.length) * 100);
        
        try {
          const result = await optimizeImage(url);
          optimizationResults.push(result);
          toast.success(`Optimized ${url}`);
        } catch (error) {
          console.error(`Failed to optimize ${url}:`, error);
          toast.error(`Failed to optimize ${url}`);
        }
        
        setProgress(((i + 1) / imageUrls.length) * 100);
      }

      setResults(optimizationResults);
      
      const totalOriginalSize = optimizationResults.reduce((sum, r) => sum + r.originalSize, 0);
      const totalOptimizedSize = optimizationResults.reduce((sum, r) => sum + r.optimizedSize, 0);
      const totalSavings = ((totalOriginalSize - totalOptimizedSize) / totalOriginalSize) * 100;
      
      toast.success(`Optimization complete! Total savings: ${totalSavings.toFixed(1)}%`);
    } catch (error) {
      console.error('Optimization failed:', error);
      toast.error('Optimization failed');
    } finally {
      setIsProcessing(false);
    }
  };

  const downloadOptimizedImage = (result: OptimizationResult) => {
    const link = document.createElement('a');
    link.href = result.optimizedUrl;
    link.download = `optimized-${result.originalUrl.split('/').pop()}`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    toast.success('Download started!');
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Image Optimizer</CardTitle>
        <CardDescription>
          Optimize images for faster loading while maintaining quality
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="flex gap-4">
          <Button 
            onClick={optimizeAllImages} 
            disabled={isProcessing}
            className="flex-1"
          >
            {isProcessing ? 'Optimizing...' : 'Optimize Images'}
          </Button>
        </div>

        {isProcessing && (
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>Progress</span>
              <span>{Math.round(progress)}%</span>
            </div>
            <Progress value={progress} />
          </div>
        )}

        {results.length > 0 && (
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Optimization Results</h3>
            
            {results.map((result, index) => (
              <Card key={index} className="border-l-4 border-l-green-500">
                <CardContent className="p-4">
                  <div className="flex justify-between items-start mb-3">
                    <h4 className="font-medium">{result.originalUrl}</h4>
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => downloadOptimizedImage(result)}
                    >
                      Download
                    </Button>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-muted-foreground">Original Size:</span>
                      <div className="font-medium">{formatFileSize(result.originalSize)}</div>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Optimized Size:</span>
                      <div className="font-medium text-green-600">{formatFileSize(result.optimizedSize)}</div>
                    </div>
                  </div>
                  
                  <div className="mt-3 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                    <div className="text-sm">
                      <span className="text-muted-foreground">Size Reduction:</span>
                      <span className="ml-2 font-semibold text-green-600">
                        {result.compressionRatio.toFixed(1)}% smaller
                      </span>
                    </div>
                  </div>
                  
                  <div className="mt-4 grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-xs text-muted-foreground mb-2">Original</p>
                      <img 
                        src={result.originalUrl} 
                        alt="Original" 
                        className="w-full h-24 object-cover rounded border"
                      />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground mb-2">Optimized</p>
                      <img 
                        src={result.optimizedUrl} 
                        alt="Optimized" 
                        className="w-full h-24 object-cover rounded border"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
            
            {results.length > 1 && (
              <Card className="bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800">
                <CardContent className="p-4">
                  <h4 className="font-semibold mb-2">Total Savings Summary</h4>
                  <div className="grid grid-cols-3 gap-4 text-sm">
                    <div>
                      <span className="text-muted-foreground">Total Original:</span>
                      <div className="font-medium">
                        {formatFileSize(results.reduce((sum, r) => sum + r.originalSize, 0))}
                      </div>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Total Optimized:</span>
                      <div className="font-medium text-green-600">
                        {formatFileSize(results.reduce((sum, r) => sum + r.optimizedSize, 0))}
                      </div>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Total Savings:</span>
                      <div className="font-semibold text-blue-600">
                        {(((results.reduce((sum, r) => sum + r.originalSize, 0) - 
                          results.reduce((sum, r) => sum + r.optimizedSize, 0)) / 
                          results.reduce((sum, r) => sum + r.originalSize, 0)) * 100).toFixed(1)}%
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  );
};