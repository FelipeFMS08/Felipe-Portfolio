import { t } from "@/translate/language";
import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "../ui/button";
import { ChevronDown } from "lucide-react";


export function Hero( { lang }: { lang: "pt" | "en" }) {
    // Scroll to next section
    const scrollToAbout = () => {
        const aboutSection = document.getElementById('about');
        if (aboutSection) {
            aboutSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="relative min-h-screen flex flex-col justify-center">
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-2xl mt-40"
            >
              <motion.span 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="inline-block px-4 py-1 text-xs rounded-full bg-zinc-800 text-zinc-300 border border-zinc-700"
              >
                Felipe Messias | Full-stack Developer
              </motion.span>
              
              <motion.h2 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="text-5xl md:text-6xl font-extrabold leading-tight mb-6 mt-4"
              >
                {t[lang].developer}
                <span className="gradient-text"> Full-stack</span>
              </motion.h2>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="text-zinc-400 text-lg mb-8 leading-relaxed"
              >
                {t[lang].hero}
              </motion.p>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Link href="mailto:felipe.messias.fms@gmail.com">
                  <Button className="bg-red-600 text-white px-8 py-4 hover:bg-red-700 btn-ripple hover-glow text-base">
                    {t[lang].contact}
                  </Button>
                </Link>
                <button
                  onClick={scrollToAbout}
                  className="border border-zinc-600 text-white px-8 py-4 rounded-2xl hover:border-red-500 hover:text-red-400 transition-all duration-300 hover-glow text-base"
                >
                  {t[lang].viewProjects}
                </button>
              </motion.div>
            </motion.section>
            
            {/* Scroll indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.6 }}
              className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            >
              <motion.button
                onClick={scrollToAbout}
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="text-zinc-400 hover:text-red-400 transition-colors"
                aria-label="Scroll to next section"
              >
                <ChevronDown size={24} />
              </motion.button>
            </motion.div>
        </div>
    )
}