import { motion } from "framer-motion";
import { Shield, Zap, Users } from "lucide-react";
import TechIllustration from "@/components/decorations/TechIllustration";

const benefits = [
  {
    icon: Shield,
    title: "Estabilidad garantizada",
    description: "Monitoreamos y mantenemos tus sistemas para que funcionen sin interrupciones.",
  },
  {
    icon: Zap,
    title: "Respuesta inmediata",
    description: "Cuando algo falla, actuamos rápido. No vas a esperar días por una solución.",
  },
  {
    icon: Users,
    title: "Acompañamiento real",
    description: "No somos un proveedor más. Somos tu equipo de tecnología externo.",
  },
];

const Solution = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl" />

      <div className="container px-4 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto mb-16">
          {/* Left side - Illustration */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="hidden lg:block"
          >
            <div className="relative p-8 rounded-3xl bg-card/30 border border-primary/20 backdrop-blur-sm shadow-xl">
              <TechIllustration variant="network" />
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-2xl blur-xl" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/5 rounded-2xl blur-xl" />
            </div>
          </motion.div>

          {/* Right side - Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full border border-primary/30 bg-card/50 backdrop-blur-sm shadow-lg shadow-primary/5">
              <Zap className="w-4 h-4 text-primary" />
              <span className="text-sm text-primary/80 font-medium">La solución</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-balance">
              Con <span className="gradient-text">Sojit Digital</span>, tu tecnología{" "}
              <br className="hidden md:block" />
              deja de ser un problema
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Nos encargamos de que todo funcione para que vos puedas enfocarte en lo que mejor sabés hacer: hacer crecer tu negocio.
            </p>

            {/* Benefits list */}
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex gap-4 p-4 rounded-xl bg-card/50 border border-border/50 backdrop-blur-sm hover:border-primary/30 transition-colors"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 border border-primary/20">
                    <benefit.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">{benefit.title}</h3>
                    <p className="text-sm text-muted-foreground">{benefit.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto"
        >
          {[
            { value: "98%", label: "Problemas resueltos en menos de 24hs" },
            { value: "+50", label: "Pymes confían en nosotros" },
            { value: "2hs", label: "Tiempo promedio de primera respuesta" },
            { value: "24/7", label: "Monitoreo de sistemas críticos" },
          ].map((stat, index) => (
            <motion.div
              key={stat.value}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
              className="p-6 rounded-2xl bg-card/50 border border-primary/20 backdrop-blur-sm text-center shadow-lg hover:shadow-primary/10 transition-shadow"
            >
              <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">{stat.value}</div>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Solution;
