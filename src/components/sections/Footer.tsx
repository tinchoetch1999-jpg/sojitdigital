import { motion } from "framer-motion";
import { Monitor, Cog, Megaphone, MapPin, Mail, Send, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-16 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-card/50" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      
      <div className="container px-4 relative">
        <div className="grid md:grid-cols-4 gap-12 max-w-6xl mx-auto">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="md:col-span-2"
          >
            <h3 className="text-2xl font-bold mb-4">
              <span className="gradient-text">Sojit</span> Digital
            </h3>
            <p className="text-muted-foreground mb-6 max-w-sm leading-relaxed">
              Soluciones digitales para pymes que quieren crecer sin que la tecnología sea un obstáculo. Tu equipo de IT externo, siempre disponible.
            </p>
            <div className="flex items-center gap-2 text-sm text-muted-foreground px-4 py-2 rounded-full bg-card/50 border border-border/50 w-fit">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              Respondemos en menos de 2 horas
            </div>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="font-semibold mb-4 text-foreground">Servicios</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>
                <a href="#servicios" className="flex items-center gap-2 hover:text-primary transition-colors group">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Monitor className="w-4 h-4 text-primary" />
                  </div>
                  Soporte IT
                </a>
              </li>
              <li>
                <a href="#servicios" className="flex items-center gap-2 hover:text-primary transition-colors group">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Cog className="w-4 h-4 text-primary" />
                  </div>
                  Automatizaciones
                </a>
              </li>
              <li>
                <a href="#servicios" className="flex items-center gap-2 hover:text-primary transition-colors group">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Megaphone className="w-4 h-4 text-primary" />
                  </div>
                  Campañas digitales
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="font-semibold mb-4 text-foreground">Contacto</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>
                <a
                  href="https://t.me/sojitdigital"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-primary transition-colors group"
                >
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Send className="w-4 h-4 text-primary" />
                  </div>
                  Telegram: @sojitdigital
                </a>
              </li>
              <li>
                <a 
                  href="mailto:sojitdigital@gmail.com"
                  className="flex items-center gap-2 hover:text-primary transition-colors group"
                >
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Mail className="w-4 h-4 text-primary" />
                  </div>
                  sojitdigital@gmail.com
                </a>
              </li>
              <li>
                <a 
                  href="https://instagram.com/sojitdigital"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-primary transition-colors group"
                >
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Instagram className="w-4 h-4 text-primary" />
                  </div>
                  @sojitdigital
                </a>
              </li>
              <li className="flex items-center gap-2 pt-2">
                <div className="w-8 h-8 rounded-lg bg-secondary/50 flex items-center justify-center">
                  <MapPin className="w-4 h-4 text-muted-foreground" />
                </div>
                Argentina / Latinoamérica
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16 pt-8 border-t border-border/30 text-center"
        >
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Sojit Digital. Todos los derechos reservados.
            {" "}|{" "}
            <a href="/privacy" className="hover:text-primary transition-colors">
              Política de Privacidad
            </a>
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
