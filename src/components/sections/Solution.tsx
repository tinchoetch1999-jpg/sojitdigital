import { motion } from "framer-motion";
import { Shield, Zap, Users } from "lucide-react";

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
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />

      <div className="container px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full border border-primary/30 bg-primary/5">
            <Zap className="w-4 h-4 text-primary" />
            <span className="text-sm text-primary/80">La solución</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-balance">
            Con <span className="gradient-text">Sojit Digital</span>, tu tecnología{" "}
            <br className="hidden md:block" />
            deja de ser un problema
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Nos encargamos de que todo funcione para que vos puedas enfocarte en lo que mejor sabés hacer: hacer crecer tu negocio.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="group relative"
            >
              <div className="relative p-8 rounded-2xl border border-primary/20 card-gradient backdrop-blur-sm h-full transition-all duration-500 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/10">
                {/* Glow effect on hover */}
                <div className="absolute inset-0 rounded-2xl bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 transition-all duration-300 group-hover:bg-primary/20 group-hover:scale-110">
                    <benefit.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats or social proof */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto text-center"
        >
          <div>
            <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">98%</div>
            <p className="text-sm text-muted-foreground">Problemas resueltos en menos de 24hs</p>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">+50</div>
            <p className="text-sm text-muted-foreground">Pymes confían en nosotros</p>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">2hs</div>
            <p className="text-sm text-muted-foreground">Tiempo promedio de primera respuesta</p>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">24/7</div>
            <p className="text-sm text-muted-foreground">Monitoreo de sistemas críticos</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Solution;
