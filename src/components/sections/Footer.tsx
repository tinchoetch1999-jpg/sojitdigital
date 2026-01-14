import { motion } from "framer-motion";
import { Monitor, Cog, Megaphone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-16 border-t border-border/50 relative">
      <div className="container px-4">
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
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
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
            <h4 className="font-semibold mb-4">Servicios</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-center gap-2 hover:text-foreground transition-colors cursor-pointer">
                <Monitor className="w-4 h-4 text-primary" />
                Soporte IT
              </li>
              <li className="flex items-center gap-2 hover:text-foreground transition-colors cursor-pointer">
                <Cog className="w-4 h-4 text-primary" />
                Automatizaciones
              </li>
              <li className="flex items-center gap-2 hover:text-foreground transition-colors cursor-pointer">
                <Megaphone className="w-4 h-4 text-primary" />
                Campañas digitales
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
            <h4 className="font-semibold mb-4">Contacto</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>
                <a 
                  href="https://wa.me/5491100000000" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  WhatsApp
                </a>
              </li>
              <li>
                <a 
                  href="mailto:sojitdigital@gmail.com"
                  className="hover:text-primary transition-colors"
                >
                  sojitdigital@gmail.com
                </a>
              </li>
              <li className="pt-2">Argentina / Latinoamérica</li>
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
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
