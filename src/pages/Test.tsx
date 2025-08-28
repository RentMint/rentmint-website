import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ImageOptimizer } from "@/components/ImageOptimizer";

const Test = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8 text-foreground">
          Infographic Analysis
        </h1>
        
        <div className="mb-8">
          <ImageOptimizer />
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Founder Fails Column */}
          <Card className="h-fit">
            <CardHeader>
              <CardTitle className="text-2xl">Founder Fails: 9 Traps to Avoid</CardTitle>
              <CardDescription>
                Critical mistakes that can derail startup success
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex justify-center">
                <img 
                  src="/founder-fails.png" 
                  alt="Founder Fails: 9 Traps to Avoid infographic" 
                  className="max-w-full h-auto rounded-lg shadow-lg"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    const nextEl = e.currentTarget.nextElementSibling as HTMLElement;
                    if (nextEl) nextEl.style.display = 'block';
                  }}
                />
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 p-8 rounded-lg border-2 border-dashed border-blue-300 dark:border-blue-700" style={{display: 'none'}}>
                  <div className="text-center">
                    <h4 className="text-lg font-semibold mb-2">Founder Fails: 9 Traps to Avoid</h4>
                    <p className="text-sm text-muted-foreground mb-4">Infographic displays 9 common founder mistakes:</p>
                    <div className="grid grid-cols-3 gap-2 text-xs">
                      <div>• Lack of Research</div>
                      <div>• Ignoring Competition</div>
                      <div>• Poor Idea Validation</div>
                      <div>• Poor Time Management</div>
                      <div>• No Clear Vision</div>
                      <div>• Team Conflict</div>
                      <div>• Scaling Too Fast</div>
                      <div>• No Customer Feedback</div>
                      <div>• Isolation</div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Analysis & Commentary</h3>
                
                <div className="space-y-3 text-sm leading-relaxed">
                  <p>
                    <strong>Market Research is Foundation:</strong> The infographic correctly identifies "Lack of Research" as a critical failure point. Too many founders fall in love with their solution before validating the problem exists. Building what users actually want requires deep market understanding and continuous customer discovery.
                  </p>
                  
                  <p>
                    <strong>Competition Blindness:</strong> "Ignoring Competition" is particularly dangerous in today's saturated markets. Successful founders study competitors not to copy, but to differentiate meaningfully. Understanding the competitive landscape helps identify gaps and positioning opportunities.
                  </p>
                  
                  <p>
                    <strong>Vision Without Strategy:</strong> "No Clear Vision" paired with "Poor Time Management" creates a deadly combination. Founders need both north star clarity and tactical execution discipline. Without clear goals, every opportunity becomes a distraction.
                  </p>
                  
                  <p>
                    <strong>Growth vs. Sustainability:</strong> "Scaling Too Fast" reflects a common trap where founders prioritize growth metrics over sustainable systems. Premature scaling often leads to operational chaos and customer experience degradation.
                  </p>
                  
                  <p>
                    <strong>Customer-Centricity:</strong> "No Customer Feedback" highlights the importance of building feedback loops early. Successful products evolve through continuous customer input, not founder assumptions.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Luxury Watch Prices Column */}
          <Card className="h-fit">
            <CardHeader>
              <CardTitle className="text-2xl">Used Luxury Watch Price Ranges</CardTitle>
              <CardDescription>
                Market insights into pre-owned luxury timepiece values
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex justify-center">
                <img 
                  src="/luxury-watches.png" 
                  alt="Used Luxury Watch Price Ranges table" 
                  className="max-w-full h-auto rounded-lg shadow-lg"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    const nextEl = e.currentTarget.nextElementSibling as HTMLElement;
                    if (nextEl) nextEl.style.display = 'block';
                  }}
                />
                <div className="bg-gradient-to-br from-amber-50 to-amber-100 dark:from-amber-900/20 dark:to-amber-800/20 p-8 rounded-lg border-2 border-dashed border-amber-300 dark:border-amber-700" style={{display: 'none'}}>
                  <div className="text-center w-full">
                    <h4 className="text-lg font-semibold mb-4">Used Luxury Watch Price Ranges</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between border-b pb-1"><span>Rolex:</span><span>$1,500 - $800,000+</span></div>
                      <div className="flex justify-between border-b pb-1"><span>Patek Philippe:</span><span>$6,000 - $500,000+</span></div>
                      <div className="flex justify-between border-b pb-1"><span>Audemars Piguet:</span><span>$5,000 - $250,000+</span></div>
                      <div className="flex justify-between border-b pb-1"><span>Omega:</span><span>$1,000 - $57,000+</span></div>
                      <div className="flex justify-between"><span>Cartier:</span><span>$1,300 - $60,000+</span></div>
                    </div>
                    <p className="text-xs text-muted-foreground mt-3">*Approximate pre-owned asking prices</p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Market Analysis</h3>
                
                <div className="space-y-3 text-sm leading-relaxed">
                  <p>
                    <strong>Rolex Dominance:</strong> With prices ranging from $1,500 to $800,000+, Rolex demonstrates the strongest market position and broadest appeal. The wide range reflects everything from entry-level Oyster Perpetual models to rare vintage Daytonas and Paul Newman editions.
                  </p>
                  
                  <p>
                    <strong>Patek Philippe Premium:</strong> Starting at $6,000 but reaching $500,000+, Patek Philippe commands the highest average prices, reflecting their "you never actually own a Patek Philippe" positioning and exceptional craftsmanship heritage.
                  </p>
                  
                  <p>
                    <strong>Accessibility Ladder:</strong> The pricing structure shows clear market segmentation - Omega provides accessible luxury ($1,000-$57,000), while Audemars Piguet ($5,000-$250,000) bridges premium and ultra-luxury segments.
                  </p>
                  
                  <p>
                    <strong>Investment Perspective:</strong> These ranges reflect the luxury watch market's resilience as an alternative asset class. Unlike cars, luxury watches often appreciate, especially limited editions and discontinued models from prestigious manufacturers.
                  </p>
                  
                  <p>
                    <strong>Brand Positioning:</strong> Cartier's range ($1,300-$60,000) reflects their jewelry heritage, where watch functionality combines with fashion appeal, justifying premium pricing across diverse collections.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Test;