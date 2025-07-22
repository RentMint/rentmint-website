import { Building2, Bell, Coins, Receipt, ArrowRight, Check } from "lucide-react";

const HowItWorksSection = () => {
  const steps = [
    {
      icon: Building2,
      title: "Set Up Your Property",
      subtitle: "Add your property and invite your tenant. Set rent and deposit amounts in your local currency.",
      gradient: "from-blue-500 to-blue-600",
      bgGradient: "from-blue-50/50 to-indigo-50/50 dark:from-blue-950/20 dark:to-indigo-950/20",
      borderColor: "border-blue-100/50 dark:border-blue-800/30"
    },
    {
      icon: Bell,
      title: "Automatic Invoices & Reminders",
      subtitle: "RentMint sends invoices and gentle reminders for you—no more chasing payments.",
      gradient: "from-purple-500 to-violet-600",
      bgGradient: "from-purple-50/50 to-violet-50/50 dark:from-purple-950/20 dark:to-violet-950/20",
      borderColor: "border-purple-100/50 dark:border-purple-800/30"
    },
    {
      icon: Coins,
      title: "Tenant Pays in USDT",
      subtitle: "Tenant pays the exact USDT/USDC equivalent, with real-time conversion—no banks, no borders.",
      gradient: "from-orange-500 to-amber-500",
      bgGradient: "from-orange-50/50 to-amber-50/50 dark:from-orange-950/20 dark:to-amber-950/20",
      borderColor: "border-orange-100/50 dark:border-orange-800/30"
    },
    {
      icon: Receipt,
      title: "Instant Receipts & Proof",
      subtitle: "You receive rent in your dashboard. Your tenant get instant receipts—no paperwork, no delays.",
      gradient: "from-rentmint-accent to-green-500",
      bgGradient: "from-green-50/50 to-emerald-50/50 dark:from-green-950/20 dark:to-emerald-950/20",
      borderColor: "border-green-100/50 dark:border-green-800/30"
    }
  ];

  return (
    <section id="how-it-works" className="bg-background py-16 md:py-20 lg:py-24 px-6 lg:px-8 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-rentmint-accent/2 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 md:mb-6">
            How RentMint Works
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground font-medium max-w-2xl mx-auto">
            Four simple steps to transform your rent collection process
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-6 lg:gap-8 relative">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <div key={index} className="relative group">
                {/* Animated arrow between steps */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 lg:-right-6 transform -translate-y-1/2 z-10">
                    <div className="flex items-center">
                      <div className="w-8 lg:w-12 h-0.5 bg-gradient-to-r from-rentmint-accent/30 to-rentmint-accent/60"></div>
                      <ArrowRight className="h-4 w-4 text-rentmint-accent/60 ml-1 animate-pulse" />
                    </div>
                  </div>
                )}

                {/* Step Card */}
                <div className={`bg-gradient-to-br ${step.bgGradient} backdrop-blur-sm border ${step.borderColor} rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-500 group-hover:scale-105 relative overflow-hidden`}>
                  {/* Step number */}
                  <div className="absolute top-4 right-4 w-8 h-8 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/20">
                    <span className="text-sm font-bold text-foreground">{index + 1}</span>
                  </div>

                  {/* Icon */}
                  <div className={`w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br ${step.gradient} rounded-2xl flex items-center justify-center shadow-lg mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="h-7 w-7 md:h-8 md:w-8 text-white" />
                  </div>

                  {/* Content */}
                  <div className="space-y-3">
                    <h3 className="text-xl md:text-2xl font-bold text-foreground">
                      {step.title}
                    </h3>
                    <p className="text-sm md:text-base text-muted-foreground font-medium leading-relaxed">
                      {step.subtitle}
                    </p>
                  </div>

                  {/* Floating decoration */}
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-gradient-to-br from-white/10 to-white/5 rounded-full blur-sm opacity-60"></div>
                </div>

                {/* Mobile arrow */}
                {index < steps.length - 1 && (
                  <div className="md:hidden flex justify-center my-6">
                    <div className="flex flex-col items-center">
                      <div className="w-0.5 h-8 bg-gradient-to-b from-rentmint-accent/30 to-rentmint-accent/60"></div>
                      <ArrowRight className="h-4 w-4 text-rentmint-accent/60 rotate-90 animate-pulse" />
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Badge */}
        <div className="flex justify-center mt-12 md:mt-16">
          <div className="bg-gradient-to-r from-rentmint-accent/10 to-green-500/10 backdrop-blur-sm border border-rentmint-accent/20 rounded-full px-6 py-3 flex items-center gap-2 shadow-lg">
            <Check className="h-4 w-4 text-rentmint-accent" />
            <span className="text-sm md:text-base font-semibold bg-gradient-to-r from-rentmint-accent to-green-500 bg-clip-text text-transparent">
              It's this simple
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;