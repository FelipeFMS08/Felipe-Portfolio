import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect } from "react";

interface StatsCounterProps {
  value: number;
  label: string;
  suffix?: string;
  delay?: number;
}

export function StatsCounter({ value, label, suffix = "", delay = 0 }: StatsCounterProps) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));

  useEffect(() => {
    const timer = setTimeout(() => {
      const controls = animate(count, value, { duration: 2 });
      return controls.stop;
    }, delay * 200);

    return () => clearTimeout(timer);
  }, [count, value, delay]);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ delay: delay * 0.1, duration: 0.6 }}
      viewport={{ once: true }}
      className="text-center p-6 rounded-2xl bg-gradient-to-br from-gray-900 to-black border border-gray-800 hover:border-red-500 transition-colors duration-300"
    >
      <div className="text-3xl font-bold text-red-500 mb-2">
        <motion.span>{rounded}</motion.span>
        {suffix}
      </div>
      <div className="text-gray-400 text-sm font-medium">{label}</div>
    </motion.div>
  );
}