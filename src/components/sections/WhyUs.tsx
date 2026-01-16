import { motion } from "framer-motion";
import { Heart, MessageSquare, Target, Clock } from "lucide-react";
import TechIllustration from "@/components/decorations/TechIllustration";

const differentiators = [
  {
    icon: Heart,
    title: "Enfoque personalizado",
    description: "No aplicamos soluciones genéricas. Entendemos tu negocio y diseñamos estrategias a medida.",
  },
  {
    icon: MessageSquare,
    title: "Lenguaje simple y humano",
    description: "Nada de jerga técnica incomprensible. Te explicamos todo de forma clara y directa.",
  },
  {
    icon: Target,
    title: "Resultados medibles",
    description: "Cada acción que tomamos tiene un propósito claro y resultados que podés ver.",
  },
  {
    icon: Clock,
    title: "Respuesta rápida garantizada",
    description: "Tu tiempo es valioso. Nos comprometemos a responder en menos de 2 horas.",
  },
];

const WhyUs = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      
      <div className="container px-4 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          {/* Left side - Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full border border-primary/30 bg-card/50 backdrop-blur-sm shadow-lg shadow-primary/5">
              <span className="text-sm text-primary/80 font-medium">¿Por qué elegirnos?</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-balance">
              <span className="text-primary/80">Más que proveedores,</span>{" "}
              <span className="gradient-text">socios de tu crecimiento</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Trabajamos con vos, no solo para vos. Entendemos que detrás de cada problema técnico hay un negocio que necesita seguir funcionando, clientes que atender, y objetivos que alcanzar.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Por eso, nuestro compromiso va más allá de resolver tickets: nos involucramos en tu operación para anticipar problemas, optimizar procesos y ayudarte a crecer.
            </p>

            {/* Illustration for mobile */}
            <div className="lg:hidden mb-8">
              <div className="relative p-6 rounded-2xl bg-card/30 border border-primary/20 backdrop-blur-sm">
                <TechIllustration variant="automation" />
              </div>
            </div>
          </motion.div>

          {/* Right side - Cards + Illustration */}
          <div className="relative">
            {/* Desktop illustration behind cards */}
            <div className="hidden lg:block absolute -top-8 -right-8 -bottom-8 -left-8 rounded-3xl overflow-hidden">
              <div className="absolute inset-0 bg-card/20 backdrop-blur-sm border border-primary/10 rounded-3xl" />
              <div className="absolute inset-0 flex items-center justify-center opacity-20">
                <TechIllustration variant="circuit" />
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="grid sm:grid-cols-2 gap-4 relative z-10"
            >
              {differentiators.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  className="group"
                >
                  <div className="p-6 rounded-xl border border-border/50 bg-card/80 backdrop-blur-sm h-full transition-all duration-300 hover:border-primary/40 hover:bg-primary/5 shadow-lg hover:shadow-primary/10">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 transition-colors group-hover:bg-primary/20 border border-primary/20">
                      <item.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-semibold mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
