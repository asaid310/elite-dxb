import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "What payment methods do you accept?",
    a: "We accept Apple Pay, Ziina, and Cash on Delivery (COD) across the GCC.",
  },
  {
    q: "How long does shipping take?",
    a: "Delivery takes 3–7 business days across the GCC. All orders ship with free delivery!",
  },
  {
    q: "What is the return policy?",
    a: "All purchases are final. Please make sure to check sizing before ordering. If you have questions, contact us on WhatsApp!",
  },
  {
    q: "Do you ship internationally?",
    a: "Currently we ship across the entire GCC region — UAE, Saudi Arabia, Kuwait, Bahrain, Qatar, and Oman.",
  },
  {
    q: "How can I contact support?",
    a: "You can reach us anytime via WhatsApp. We usually reply within 10 minutes!",
  },
];

const FAQSection = () => {
  return (
    <section className="py-14 px-4">
      <div className="container mx-auto max-w-2xl">
        <h2 className="text-2xl sm:text-3xl font-heading font-bold text-center mb-8">
          Frequently Asked Questions
        </h2>
        <Accordion type="single" collapsible className="space-y-2">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`faq-${i}`} className="border border-border/50 rounded-xl px-4 bg-card">
              <AccordionTrigger className="text-sm font-medium text-foreground hover:no-underline">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-sm text-muted-foreground">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;
