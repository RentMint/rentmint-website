import { Globe, Shield, Receipt, UserCheck, Bell, DollarSign } from "lucide-react";

const WhyTenantsLoveSection = () => {
  const benefits = [
    {
      icon: Globe,
      title: "Global Mobility, Zero Hassle",
      subtitle: "Move countries, change jobs, travel—your rent experience never changes. Pay from any wallet, anywhere.",
      gradient: "from-blue-500 to-indigo-600",
      bgGradient: "from-blue-50/50 to-indigo-50/50 dark:from-blue-950/20 dark:to-indigo-950/20",
      borderColor: "border-blue-100/50 dark:border-blue-800/30"
    },
    {
      icon: Shield,
      title: "Protect Your Security Deposit",
      subtitle: "Deposits are locked on-chain; landlord can't touch them unless you approve. No more \"lost deposit\" disputes.",
      gradient: "from-emerald-500 to-teal-600",
      bgGradient: "from-emerald-50/50 to-teal-50/50 dark:from-emerald-950/20 dark:to-teal-950/20",
      borderColor: "border-emerald-100/50 dark:border-emerald-800/30"
    },
    {
      icon: Receipt,
      title: "Instant Proof for Visas & Employers",
      subtitle: "Instantly download formal rent receipts for visas, reimbursements, or proof of address—no waiting, no admin.",
      gradient: "from-purple-500 to-violet-600",
      bgGradient: "from-purple-50/50 to-violet-50/50 dark:from-purple-950/20 dark:to-violet-950/20",
      borderColor: "border-purple-100/50 dark:border-purple-800/30"
    },
    {
      icon: UserCheck,
      title: "Stay Private—No Paperwork",
      subtitle: "You never share your real-world identity or banking info. No background checks or KYC forms.",
      gradient: "from-yellow-500 to-orange-500",
      bgGradient: "from-yellow-50/50 to-orange-50/50 dark:from-yellow-950/20 dark:to-orange-950/20",
      borderColor: "border-yellow-100/50 dark:border-yellow-800/30"
    },
    {
      icon: Bell,
      title: "Never Miss a Payment, Ever",
      subtitle: "Friendly, automated reminders on WhatsApp, Telegram, and email—no late fees, no stress.",
      gradient: "from-rose-500 to-pink-600",
      bgGradient: "from-rose-50/50 to-pink-50/50 dark:from-rose-950/20 dark:to-pink-950/20",
      borderColor: "border-rose-100/50 dark:border-rose-800/30"
    },
    {
      icon: DollarSign,
      title: "No Hidden Costs, Ever",
      subtitle: "Transparent payments. What you see is what you pay. No deductions, no tricks.",
      gradient: "from-green-500 to-emerald-600",
      bgGradient: "from-green-50/50 to-emerald-50/50 dark:from-green-950/20 dark:to-emerald-950/20",
      borderColor: "border-green-100/50 dark:border-green-800/30"
    }
  ];

  return (
    <section className="bg-background py-16 md:py-20 lg:py-24 px-6 lg:px-8 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-rentmint-accent/1 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 md:mb-6">
            Why Tenants Love RentMint
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground font-medium max-w-2xl mx-auto">
            Freedom, security, and peace of mind for the next generation of renters
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <div key={index} className="group">
                {/* Benefit Card */}
                <div className={`bg-gradient-to-br ${benefit.bgGradient} backdrop-blur-sm border ${benefit.borderColor} rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-500 group-hover:scale-105 relative overflow-hidden h-full`}>
                  
                  {/* Icon */}
                  <div className={`w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br ${benefit.gradient} rounded-xl flex items-center justify-center shadow-lg mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="h-6 w-6 md:h-7 md:w-7 text-white" />
                  </div>

                  {/* Content */}
                  <div className="space-y-3">
                    <h3 className="text-xl md:text-2xl font-bold text-foreground leading-tight">
                      {benefit.title}
                    </h3>
                    <p className="text-sm md:text-base text-muted-foreground font-medium leading-relaxed">
                      {benefit.subtitle}
                    </p>
                  </div>

                  {/* Floating decoration */}
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-gradient-to-br from-white/10 to-white/5 rounded-full blur-sm opacity-60"></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyTenantsLoveSection;