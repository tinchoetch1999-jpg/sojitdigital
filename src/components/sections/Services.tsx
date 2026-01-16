import { motion } from "framer-motion";
import { Monitor, Cog, Megaphone, ArrowRight, Server, Workflow, BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Monitor,
    secondaryIcon: Server,
    title: "Soporte IT para PyMEs",
    description: "Mantenemos tu infraestructura tecnológica funcionando sin interrupciones. Desde servidores hasta estaciones de trabajo, pasando por redes y seguridad.",
    features: [
      "Diagnóstico y resolución de problemas",
      "Mantenimiento preventivo",
      "Gestión de servidores y redes",
      "Seguridad informática",
      "Backup y recuperación de datos",
    ],
    gradient: "from-primary/20 via-primary/10 to-transparent",
  },
  {
    icon: Cog,
    secondaryIcon: Workflow,
    title: "Automatizaciones",
    description: "Eliminamos tareas manuales y repetitivas para que tu equipo pueda enfocarse en lo que realmente importa. Más productividad, menos errores.",
    features: [
      "Automatización de procesos internos",
      "Integración entre sistemas",
      "Flujos de trabajo inteligentes",
      "Reportes automáticos",
      "Bots y notificaciones",
    ],
    gradient: "from-purple-500/20 via-purple-500/10 to-transparent",
  },
  {
    icon: Megaphone,
    secondaryIcon: BarChart3,
    title: "Campañas Digitales",
    description: "Llevamos tu mensaje a las personas correctas. Estrategias de marketing digital que generan resultados medibles para tu negocio.",
    features: [
      "Publicidad en redes sociales",
      "Google Ads y SEM",
      "Email marketing",
      "Análisis y optimización",
      "Reportes de performance",
    ],
    gradient: "from-pink-500/20 via-pink-500/10 to-transparent",
  },
];

const Services = () => {
  return (
    <section id="servicios" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-card/20" />
      
      <div className="container px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full border border-border bg-card/50 backdrop-blur-sm shadow-lg">
            <span className="text-sm text-muted-foreground font-medium">Nuestros servicios</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-balance">
            <span className="text-primary/80">Todo lo que tu negocio necesita</span>{" "}
            <br className="hidden md:block" />
            <span className="gradient-text">en un solo lugar</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Soluciones integrales diseñadas para pymes que quieren crecer sin complicaciones técnicas.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="group relative"
            >
              <div className="relative h-full p-8 rounded-2xl border border-border/50 bg-card/80 backdrop-blur-sm transition-all duration-500 hover:border-primary/40 shadow-xl shadow-background/50 hover:shadow-2xl hover:shadow-primary/10 overflow-hidden">
                {/* Background gradient */}
                <div className={`absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl ${service.gradient} rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                
                {/* Top accent line */}
                <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Icons */}
                <div className="relative flex items-center gap-3 mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center transition-all duration-300 group-hover:bg-primary/20 border border-primary/20">
                    <service.icon className="w-7 h-7 text-primary" />
                  </div>
                  <div className="w-10 h-10 rounded-xl bg-secondary/50 flex items-center justify-center border border-border/50">
                    <service.secondaryIcon className="w-5 h-5 text-muted-foreground" />
                  </div>
                </div>
                
                <h3 className="text-2xl font-semibold mb-4 relative">{service.title}</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed relative">{service.description}</p>
                
                <ul className="space-y-3 mb-8 relative">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Button
                  variant="ghost"
                  className="group/btn text-primary hover:text-primary hover:bg-primary/10 p-0 relative"
                  asChild
                >
                  <a href="#contacto" className="flex items-center gap-2">
                    Saber más
                    <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                  </a>
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
