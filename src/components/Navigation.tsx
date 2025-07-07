import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const navItems = ["Home", "Generate", "Pricing", "Login"];

  return (
    <motion.nav 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="w-full px-6 py-4 granite-texture border-b border-border/50"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-2xl font-bold text-foreground"
        >
          StageAi
        </motion.div>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.slice(0, -1).map((item, index) => (
            <motion.a
              key={item}
              initial={{ y: -10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
              href="#"
              className="text-foreground/80 hover:text-foreground transition-colors duration-300 font-medium"
            >
              {item}
            </motion.a>
          ))}
        </div>

        {/* Login Button */}
        <motion.div
          initial={{ x: 20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Button variant="aurora" className="font-semibold">
            Login
          </Button>
        </motion.div>
      </div>
    </motion.nav>
  );
};

export default Navigation;