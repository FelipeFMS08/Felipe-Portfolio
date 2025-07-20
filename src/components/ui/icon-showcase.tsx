import { motion } from "framer-motion";
import { DivideIcon as LucideIcon } from "lucide-react";

interface IconShowcaseProps {
  icon: LucideIcon;
  title: string;
  description: string;
  color?: string;
  delay?: number;
}

export function IconShowcase({ 
  icon: Icon, 
  title, 
  description, 
  color = "text-red-500",
  delay = 0 
}: IconShowcaseProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.6 }}
      viewport={{ once: true }}
      className="text-center group"
    >
      <motion.div
        whileHover={{ scale: 1.1, rotate: 5 }}
        transition={{ type: "spring", stiffness: 300, damping: 25 }}
        className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-gray-900 to-black border border-gray-800 flex items-center justify-center group-hover:border-red-500 transition-colors duration-300`}
      >
        <Icon size={32} className={color} />
      </motion.div>
      <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
      <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
    </motion.div>
  );
}