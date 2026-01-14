import { motion } from "framer-motion";
import { MessageCircle, ArrowRight, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const CTA = () => {
  return (
    <section id="contacto" className="py-24 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary/10 rounded-full blur-3xl" />
      
      <div className="container px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-balance">
            ¿Listo para que tu tecnología{" "}
            <span className="gradient-text">deje de ser un dolor de cabeza?</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
            Escribinos ahora y en menos de 2 horas un especialista de Sojit Digital se va a poner en contacto con vos para entender tu situación y proponerte una solución.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Button
              size="lg"
              className="group px-8 py-6 text-base font-semibold bg-primary text-primary-foreground hover:bg-primary/90 glow-box transition-all duration-300"
              asChild
            >
              <a href="https://wa.me/542995925998?text=Hola%2C%20quiero%20más%20información%20sobre%20los%20servicios%20de%20Sojit%20Digital" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2 h-5 w-5" />
                Contactar por WhatsApp
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="px-8 py-6 text-base font-medium border-border hover:bg-secondary/50 transition-all duration-300"
              asChild
            >
              <a href="mailto:sojitdigital@gmail.com">
                <Mail className="mr-2 h-5 w-5" />
                Enviar email
              </a>
            </Button>
          </div>

          <p className="text-sm text-muted-foreground">
            Sin compromisos. Sin costos ocultos. Solo una conversación para ver cómo podemos ayudarte.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
