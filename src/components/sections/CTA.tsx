import { motion } from "framer-motion";
import { Send, Mail, Instagram } from "lucide-react";
import ContactForm from "./ContactForm";

const CTA = () => {
  return (
    <section id="contacto" className="py-24 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/10 to-background" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary/15 rounded-full blur-3xl" />

      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-20 h-20 rounded-2xl border border-primary/20 bg-card/30 backdrop-blur-sm rotate-12" />
      <div className="absolute bottom-20 right-10 w-16 h-16 rounded-2xl border border-primary/20 bg-card/30 backdrop-blur-sm -rotate-12" />
      <div className="absolute top-1/3 right-20 w-12 h-12 rounded-xl border border-primary/10 bg-primary/5 backdrop-blur-sm rotate-6" />

      <div className="container px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          {/* Card container */}
          <div className="p-8 md:p-12 rounded-3xl bg-card/50 border border-primary/20 backdrop-blur-sm shadow-2xl shadow-primary/10 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full border border-primary/30 bg-primary/10">
              <Send className="w-4 h-4 text-primary" />
              <span className="text-sm text-primary font-medium">Hablemos</span>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-balance">
              <span className="text-primary/80">¿Listo para que tu tecnología</span>{" "}
              <span className="gradient-text">deje de ser un dolor de cabeza?</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
              Completá el formulario y en menos de 2 horas un especialista de Sojit Digital se va a poner en contacto con vos para entender tu situación y proponerte una solución.
            </p>

            <ContactForm />

            <div className="mt-8 pt-6 border-t border-primary/10">
              <p className="text-sm text-muted-foreground mb-4">
                Sin compromisos. Sin costos ocultos. Solo una conversación para ver cómo podemos ayudarte.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <a
                  href="https://t.me/sojitdigital"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  <Send className="w-4 h-4" />
                  <span>Telegram: @sojitdigital</span>
                </a>
                <span className="text-border">|</span>
                <a
                  href="https://instagram.com/sojitdigital"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  <Instagram className="w-4 h-4" />
                  <span>@sojitdigital</span>
                </a>
                <span className="text-border">|</span>
                <a
                  href="mailto:sojitdigital@gmail.com"
                  className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  <span>sojitdigital@gmail.com</span>
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
