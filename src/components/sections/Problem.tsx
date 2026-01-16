import { motion } from "framer-motion";
import { AlertTriangle, Clock, DollarSign, Frown } from "lucide-react";

const problems = [
  {
    icon: Clock,
    title: "Horas perdidas",
    description: "Cuando un sistema falla, todo tu equipo queda paralizado esperando una solución que nunca llega.",
  },
  {
    icon: DollarSign,
    title: "Dinero en juego",
    description: "Cada minuto sin operar es una venta perdida, un cliente frustrado, una oportunidad que se escapa.",
  },
  {
    icon: Frown,
    title: "Estrés innecesario",
    description: "Lidiar con problemas técnicos cuando deberías enfocarte en hacer crecer tu negocio.",
  },
];

const Problem = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Distinct background */}
      <div className="absolute inset-0 bg-card/30" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-destructive/5 to-transparent" />
      
      <div className="container px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full border border-destructive/30 bg-destructive/10 backdrop-blur-sm shadow-lg shadow-destructive/5">
            <AlertTriangle className="w-4 h-4 text-destructive" />
            <span className="text-sm text-destructive/80 font-medium">El costo de no actuar</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-balance">
            <span className="text-primary/80">¿Qué pasa cuando la tecnología</span> <br className="hidden md:block" />
            <span className="gradient-text">te falla?</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Sabemos lo que sentís. Tu negocio depende de sistemas que no siempre funcionan como deberían.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {problems.map((problem, index) => (
            <motion.div
              key={problem.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="group relative"
            >
              <div className="relative p-8 rounded-2xl border border-border/50 bg-card/80 backdrop-blur-sm h-full transition-all duration-300 hover:border-destructive/40 hover:bg-destructive/5 shadow-lg shadow-background/50 hover:shadow-destructive/10">
                {/* Top accent */}
                <div className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-destructive/30 to-transparent" />
                
                <div className="w-14 h-14 rounded-2xl bg-destructive/10 flex items-center justify-center mb-6 transition-colors group-hover:bg-destructive/20 border border-destructive/20">
                  <problem.icon className="w-7 h-7 text-destructive/80" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{problem.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{problem.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Visual accent */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <div className="inline-block px-8 py-4 rounded-2xl bg-card/50 border border-primary/20 backdrop-blur-sm shadow-lg">
            <p className="text-2xl md:text-3xl font-medium">
              <span className="text-muted-foreground">No tiene por qué ser así.</span>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Problem;
