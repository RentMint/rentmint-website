import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";

const FAQSection = () => {
  const faqs = [
    {
      question: "Do my tenants need to know DeFi or connect wallets to use RentMint?",
      answer: "No. RentMint gives tenants a familiar Web2 experience—they pay rent using USDT or USDC from any wallet or exchange. No DeFi knowledge or wallet connections to our app are needed; tenants pay using a simple payment link sent to their email or phone."
    },
    {
      question: "Which stablecoins and blockchains are supported, and who chooses them?",
      answer: "RentMint supports USDT and USDC on Arbitrum, Base, Solana, Tron, and Binance Smart Chain (BSC). The tenant selects which chain and stablecoin they want to pay with; RentMint generates a unique payment address and amount for each invoice. For withdrawals, the landlord chooses their preferred network and wallet address."
    },
    {
      question: "How does RentMint work for landlords?",
      answer: "Landlords create properties and tenants, set rent and deposit amounts (in local currency or USDT/USDC), and RentMint automatically sends invoices. Tenants pay in stablecoins, and funds are secured until withdrawal."
    },
    {
      question: "How is my rent money kept safe?",
      answer: "All payments are forwarded directly into a secure, audited multisig vault powered by Safe (safe.global), trusted by leading crypto companies. Only the landlord can withdraw funds through their RentMint dashboard."
    },
    {
      question: "Can I collect and refund a security deposit?",
      answer: "Yes. You can require a security deposit with the first invoice. The deposit is held securely until the end of the lease. To withdraw the deposit, the tenant must approve or reject your request before funds are released."
    },
    {
      question: "Do I need to complete KYC or provide personal info?",
      answer: "No. RentMint does not require KYC or identity verification for landlords or tenants. All you need is an email or wallet address to use the platform."
    },
    {
      question: "How do withdrawals work, and what are the fees?",
      answer: "You can request withdrawals at any time, choosing your preferred wallet and blockchain network. RentMint charges zero fees on rent collection; only a 1% fee applies when you withdraw. Withdrawals are processed within an hour, 24/7."
    },
    {
      question: "How does FX conversion work for invoicing?",
      answer: "You can generate invoices in your choice of 25 supported local currencies. RentMint instantly converts the rent amount to USDT or USDC using the latest exchange rates, so tenants always know exactly what to pay."
    },
    {
      question: "Is RentMint compliant with local regulations or taxes?",
      answer: "RentMint provides exportable receipts and full payment logs, but does not provide tax compliance or regulatory advice. You are responsible for following your own local laws."
    },
    {
      question: "What notifications do landlords and tenants receive?",
      answer: "Both landlords and tenants get instant email, WhatsApp, and Telegram notifications for every invoice, payment, receipt, deposit action, and reminder—so you never miss a rent cycle."
    },
    {
      question: "How is my privacy protected?",
      answer: "RentMint never collects personal identity or bank information. All activity is encrypted and only essential information is required."
    },
    {
      question: "Who is behind RentMint?",
      answer: "RentMint is co-founded by Shuhaib Shariff and Deves Rawat — experienced engineers and exited founders who previously built SaaS and fintech products. They're passionate about solving rent and cross-border payment friction for landlords and digital nomads."
    }
  ];

  return (
    <section id="faq" className="py-24 px-4 bg-background">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <HelpCircle className="h-8 w-8 text-rentmint-accent" />
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-rentmint-primary to-rentmint-accent bg-clip-text text-transparent">
              Frequently Asked Questions
            </h2>
          </div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Everything you need to know about RentMint's secure crypto rent collection platform
          </p>
        </div>

        <div className="bg-card rounded-2xl border border-border shadow-sm overflow-hidden">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border-b border-border last:border-b-0"
              >
                <AccordionTrigger className="px-8 py-6 text-left hover:bg-muted/50 transition-colors duration-200">
                  <span className="text-lg font-medium text-foreground pr-4">
                    {faq.question}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="px-8 pb-6 pt-2">
                  <p className="text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;