import { motion } from "framer-motion";

interface TechIllustrationProps {
  variant: "network" | "circuit" | "server" | "automation" | "digital";
  className?: string;
}

const TechIllustration = ({ variant, className = "" }: TechIllustrationProps) => {
  const illustrations = {
    network: (
      <svg viewBox="0 0 400 300" className={`w-full h-full ${className}`} fill="none">
        {/* Network nodes */}
        <motion.circle
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
          cx="200" cy="150" r="20"
          className="fill-primary/20 stroke-primary"
          strokeWidth="2"
        />
        <motion.circle
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          cx="100" cy="80" r="12"
          className="fill-primary/10 stroke-primary/60"
          strokeWidth="1.5"
        />
        <motion.circle
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          cx="300" cy="80" r="12"
          className="fill-primary/10 stroke-primary/60"
          strokeWidth="1.5"
        />
        <motion.circle
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          cx="80" cy="200" r="15"
          className="fill-primary/10 stroke-primary/60"
          strokeWidth="1.5"
        />
        <motion.circle
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          cx="320" cy="200" r="15"
          className="fill-primary/10 stroke-primary/60"
          strokeWidth="1.5"
        />
        <motion.circle
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          cx="150" cy="250" r="10"
          className="fill-primary/10 stroke-primary/60"
          strokeWidth="1.5"
        />
        <motion.circle
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          cx="250" cy="250" r="10"
          className="fill-primary/10 stroke-primary/60"
          strokeWidth="1.5"
        />
        {/* Connection lines */}
        <motion.path
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          d="M200 150 L100 80 M200 150 L300 80 M200 150 L80 200 M200 150 L320 200 M200 150 L150 250 M200 150 L250 250"
          className="stroke-primary/30"
          strokeWidth="1"
          strokeDasharray="4 4"
        />
      </svg>
    ),
    circuit: (
      <svg viewBox="0 0 400 300" className={`w-full h-full ${className}`} fill="none">
        {/* Circuit paths */}
        <motion.path
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.5 }}
          d="M50 150 H150 V80 H250 V150 H350"
          className="stroke-primary/40"
          strokeWidth="2"
        />
        <motion.path
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.5, delay: 0.3 }}
          d="M50 200 H100 V250 H200 V200 H300 V250 H350"
          className="stroke-primary/30"
          strokeWidth="2"
        />
        {/* Circuit nodes */}
        <motion.rect
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.3, delay: 0.5 }}
          x="140" y="70" width="20" height="20" rx="3"
          className="fill-primary/20 stroke-primary"
          strokeWidth="1.5"
        />
        <motion.rect
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.3, delay: 0.7 }}
          x="240" y="140" width="20" height="20" rx="3"
          className="fill-primary/20 stroke-primary"
          strokeWidth="1.5"
        />
        <motion.circle
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.3, delay: 0.9 }}
          cx="200" cy="250" r="8"
          className="fill-primary/30 stroke-primary"
          strokeWidth="1.5"
        />
      </svg>
    ),
    server: (
      <svg viewBox="0 0 400 300" className={`w-full h-full ${className}`} fill="none">
        {/* Server rack */}
        <motion.rect
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 0.5 }}
          x="120" y="40" width="160" height="220" rx="8"
          className="fill-card stroke-primary/40"
          strokeWidth="2"
          style={{ transformOrigin: "center bottom" }}
        />
        {/* Server units */}
        {[0, 1, 2, 3].map((i) => (
          <motion.g key={i}>
            <motion.rect
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.5 + i * 0.15 }}
              x="135" y={60 + i * 50} width="130" height="35" rx="4"
              className="fill-secondary stroke-primary/30"
              strokeWidth="1"
            />
            <motion.circle
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.2, delay: 0.8 + i * 0.15 }}
              cx="155" cy={77 + i * 50} r="4"
              className="fill-green-500"
            />
            <motion.rect
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.3, delay: 0.9 + i * 0.15 }}
              x="170" y={73 + i * 50} width="80" height="8" rx="2"
              className="fill-primary/20"
            />
          </motion.g>
        ))}
      </svg>
    ),
    automation: (
      <svg viewBox="0 0 400 300" className={`w-full h-full ${className}`} fill="none">
        {/* Gear 1 */}
        <motion.g
          animate={{ rotate: 360 }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          style={{ transformOrigin: "150px 150px" }}
        >
          <circle cx="150" cy="150" r="40" className="fill-primary/10 stroke-primary/60" strokeWidth="2" />
          <circle cx="150" cy="150" r="15" className="fill-card stroke-primary" strokeWidth="2" />
          {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
            <rect
              key={angle}
              x="145" y="100" width="10" height="20" rx="2"
              className="fill-primary/40"
              transform={`rotate(${angle} 150 150)`}
            />
          ))}
        </motion.g>
        {/* Gear 2 */}
        <motion.g
          animate={{ rotate: -360 }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          style={{ transformOrigin: "260px 130px" }}
        >
          <circle cx="260" cy="130" r="30" className="fill-primary/10 stroke-primary/60" strokeWidth="2" />
          <circle cx="260" cy="130" r="10" className="fill-card stroke-primary" strokeWidth="2" />
          {[0, 60, 120, 180, 240, 300].map((angle) => (
            <rect
              key={angle}
              x="256" y="92" width="8" height="15" rx="2"
              className="fill-primary/40"
              transform={`rotate(${angle} 260 130)`}
            />
          ))}
        </motion.g>
        {/* Connection arrows */}
        <motion.path
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          d="M200 150 L220 140"
          className="stroke-primary/40"
          strokeWidth="2"
          markerEnd="url(#arrow)"
        />
        <defs>
          <marker id="arrow" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
            <path d="M0,0 L0,6 L9,3 z" className="fill-primary/40" />
          </marker>
        </defs>
      </svg>
    ),
    digital: (
      <svg viewBox="0 0 400 300" className={`w-full h-full ${className}`} fill="none">
        {/* Abstract digital pattern */}
        <motion.rect
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          x="80" y="60" width="240" height="180" rx="12"
          className="fill-card/50 stroke-primary/30"
          strokeWidth="2"
        />
        {/* Screen content */}
        <motion.rect
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.3, delay: 0.3 }}
          x="100" y="80" width="120" height="8" rx="4"
          className="fill-primary/40"
        />
        <motion.rect
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.3, delay: 0.4 }}
          x="100" y="100" width="180" height="4" rx="2"
          className="fill-muted-foreground/20"
        />
        <motion.rect
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.3, delay: 0.5 }}
          x="100" y="115" width="160" height="4" rx="2"
          className="fill-muted-foreground/20"
        />
        <motion.rect
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.3, delay: 0.6 }}
          x="100" y="130" width="140" height="4" rx="2"
          className="fill-muted-foreground/20"
        />
        {/* Chart */}
        <motion.path
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1, delay: 0.7 }}
          d="M100 200 L140 180 L180 190 L220 160 L260 170 L300 140"
          className="stroke-primary"
          strokeWidth="2"
          fill="none"
        />
        <motion.circle
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.2, delay: 1.2 }}
          cx="300" cy="140" r="5"
          className="fill-primary"
        />
      </svg>
    ),
  };

  return illustrations[variant];
};

export default TechIllustration;
