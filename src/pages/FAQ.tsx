import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  {
    question: "What file formats do you accept for printing?",
    answer: "We accept JPG, PNG, PDF, AI, and PSD files. For best results, we recommend high-resolution PDF files with embedded fonts and images."
  },
  {
    question: "How long does delivery take?",
    answer: "Standard delivery takes 3-5 business days. We also offer same-day printing for urgent orders and express shipping options that deliver within 1-2 business days."
  },
  {
    question: "What is your minimum order quantity?",
    answer: "Our minimum order quantity is 100 business cards. For other products like canvas prints, mugs, and t-shirts, you can order as few as 1 piece."
  },
  {
    question: "Can I see a proof before printing?",
    answer: "Yes! We provide a digital proof for all custom orders. You'll receive it via email within 24 hours of placing your order. We won't proceed with printing until you approve the proof."
  },
  {
    question: "What paper quality do you use for business cards?",
    answer: "We offer multiple paper options: 300 GSM matte, 300 GSM glossy, and 350 GSM premium cardstock. All our papers are high-quality and give a professional finish."
  },
  {
    question: "Do you offer design services?",
    answer: "Yes, we have professional designers who can help create or modify your design. Basic design modifications are free, while custom design creation starts at ₹500."
  },
  {
    question: "What if I'm not satisfied with my order?",
    answer: "Customer satisfaction is our priority. If you're not happy with your order, contact us within 7 days of delivery and we'll either reprint it or provide a full refund."
  },
  {
    question: "Can I track my order?",
    answer: "Absolutely! Once your order is dispatched, you'll receive a tracking number via email and SMS. You can track your order in real-time through our website or the courier's tracking portal."
  },
  {
    question: "Do you ship internationally?",
    answer: "Currently, we only ship within India. We're working on expanding our services internationally soon. Stay tuned!"
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept all major payment methods including credit/debit cards, UPI, net banking, and digital wallets. We also offer cash on delivery for orders above ₹500."
  }
];

const FAQ = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <WhatsAppButton />
      
      <main className="flex-1">
        <div className="relative py-16 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-hero"></div>
          <div className="relative container mx-auto px-4">
            <h1 className="text-5xl font-bold text-white mb-4">Frequently Asked Questions</h1>
            <p className="text-white/90 text-xl">Find answers to common questions about our products and services</p>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="bg-card border-2 border-border rounded-lg px-6 hover:border-primary transition-colors"
                >
                  <AccordionTrigger className="text-left hover:no-underline py-6">
                    <span className="font-semibold text-lg">{faq.question}</span>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>

            <div className="mt-12 text-center bg-secondary/30 rounded-lg p-8">
              <h2 className="text-2xl font-bold mb-4">Still have questions?</h2>
              <p className="text-muted-foreground mb-6">
                Can't find the answer you're looking for? Our customer support team is here to help.
              </p>
              <a 
                href="https://wa.me/919718008087" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block bg-gradient-cta text-white px-8 py-3 rounded-lg font-semibold hover:shadow-glow transition-all"
              >
                Contact Support
              </a>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default FAQ;
