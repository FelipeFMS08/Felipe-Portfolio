import { t } from "@/translate/language";
import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "../ui/button";
import { ChevronDown, Download, Star } from "lucide-react";

export function Hero({ lang }: { lang: "pt" | "en" }) {
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
        className="max-w-4xl mt-40"
      >
        {/* Status Badge */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="flex items-center gap-4 mb-6"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 text-sm rounded-full bg-green-600/20 text-green-400 border border-green-600/30">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            {lang === 'pt' ? 'Disponível para novos projetos' : 'Available for new projects'}
          </span>
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={16} className="text-yellow-500 fill-current" />
            ))}
            <span className="text-sm text-zinc-400 ml-2">5.0 (50+ {lang === 'pt' ? 'avaliações' : 'reviews'})</span>
          </div>
        </motion.div>
        
        {/* Main Heading */}
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-5xl md:text-7xl font-extrabold leading-tight mb-6"
        >
          {t[lang].developer}
          <br />
          <span className="gradient-text">Full-stack</span>
        </motion.h1>
        
        {/* Description */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="text-zinc-400 text-xl mb-8 leading-relaxed max-w-3xl"
        >
          {t[lang].hero}
        </motion.p>
        
        {/* Key Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="flex flex-wrap gap-6 mb-8 text-sm text-zinc-300"
        >
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-red-500 rounded-full"></div>
            {lang === 'pt' ? 'Entrega em 30 dias' : 'Delivery in 30 days'}
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-red-500 rounded-full"></div>
            {lang === 'pt' ? 'Suporte 24/7' : '24/7 Support'}
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-red-500 rounded-full"></div>
            {lang === 'pt' ? 'Garantia de qualidade' : 'Quality guarantee'}
          </div>
        </motion.div>
        
        {/* CTA Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <Link href="#contact">
            <Button className="bg-red-600 text-white px-8 py-4 hover:bg-red-700 btn-ripple hover-glow text-lg font-semibold">
              {t[lang].hireMe}
            </Button>
          </Link>
          <Link href="#portfolio">
            <Button 
              variant="outline"
              className="border-2 border-zinc-600 text-white px-8 py-4 rounded-2xl hover:border-red-500 hover:text-red-400 transition-all duration-300 hover-glow text-lg bg-transparent"
            >
              {t[lang].viewProjects}
            </Button>
          </Link>
        </motion.div>

        {/* Social Proof */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="mt-12 flex items-center gap-8 text-sm text-zinc-500"
        >
          <div>
            <div className="text-2xl font-bold text-white">50+</div>
            <div>{lang === 'pt' ? 'Projetos entregues' : 'Projects delivered'}</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-white">5+</div>
            <div>{lang === 'pt' ? 'Anos de experiência' : 'Years of experience'}</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-white">100%</div>
            <div>{lang === 'pt' ? 'Clientes satisfeitos' : 'Satisfied clients'}</div>
          </div>
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

      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ 
            rotate: [0, 360],
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            duration: 20, 
            repeat: Infinity, 
            ease: "linear" 
          }}
          className="absolute top-1/4 right-1/4 w-64 h-64 bg-red-500/5 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ 
            rotate: [360, 0],
            scale: [1.1, 1, 1.1]
          }}
          transition={{ 
            duration: 25, 
            repeat: Infinity, 
            ease: "linear" 
          }}
          className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-red-500/3 rounded-full blur-3xl"
        />
      </div>
    </div>
  );
}