import { motion } from "framer-motion";
import { ChevronDown, Download, Star, Zap, Clock, Shield } from "lucide-react";
import { ModernButton } from "@/components/ui/modern-button";
import { t } from "@/translate/language";

interface HeroSectionProps {
  lang: "pt" | "en";
}

export function HeroSection({ lang }: HeroSectionProps) {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const benefits = [
    {
      icon: <Clock size={16} />,
      text: lang === 'pt' ? 'Entrega em 30 dias' : '30-day delivery'
    },
    {
      icon: <Zap size={16} />,
      text: lang === 'pt' ? 'Suporte 24/7' : '24/7 support'
    },
    {
      icon: <Shield size={16} />,
      text: lang === 'pt' ? 'Garantia de qualidade' : 'Quality guarantee'
    }
  ];

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          animate={{ 
            rotate: [0, 360],
            scale: [1, 1.2, 1]
          }}
          transition={{ 
            duration: 20, 
            repeat: Infinity, 
            ease: "linear" 
          }}
          className="absolute top-1/4 right-1/4 w-96 h-96 bg-red-500/5 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ 
            rotate: [360, 0],
            scale: [1.2, 1, 1.2]
          }}
          transition={{ 
            duration: 25, 
            repeat: Infinity, 
            ease: "linear" 
          }}
          className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-red-500/3 rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-6xl mx-auto px-8 text-center relative z-10">
        {/* Status Badges */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap justify-center gap-4 mb-8"
        >
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 text-green-400">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span className="text-sm font-medium">
              {lang === 'pt' ? 'Novo freelancer - Disponível' : 'New freelancer - Available'}
            </span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400">
            <Star size={16} className="text-yellow-400" />
            <span className="text-sm font-medium">
              {lang === 'pt' ? '3+ anos de experiência' : '3+ years experience'}
            </span>
          </div>
        </motion.div>

        {/* Main Heading */}
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-5xl md:text-7xl font-bold leading-tight mb-6"
        >
          <span className="text-white">Software</span>
          <br />
          <span className="gradient-text">Developer</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed"
        >
          {t[lang].hero}
        </motion.p>

        {/* Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="flex flex-wrap justify-center gap-6 mb-10"
        >
          {benefits.map((benefit, index) => (
            <div key={index} className="flex items-center gap-2 text-gray-400">
              <div className="text-red-500">{benefit.icon}</div>
              <span className="text-sm">{benefit.text}</span>
            </div>
          ))}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
        >
          <ModernButton 
            size="lg"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            {t[lang].hireMe}
          </ModernButton>
          <ModernButton 
            variant="outline" 
            size="lg"
            onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
          >
            {t[lang].viewProjects}
          </ModernButton>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="grid grid-cols-3 gap-8 max-w-md mx-auto"
        >
          <div className="text-center">
            <div className="text-3xl font-bold text-red-500">15+</div>
            <div className="text-sm text-gray-400">{lang === 'pt' ? 'Projetos' : 'Projects'}</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-red-500">3+</div>
            <div className="text-sm text-gray-400">{lang === 'pt' ? 'Anos' : 'Years'}</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-red-500">New</div>
            <div className="text-sm text-gray-400">Freelancer</div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gray-400 hover:text-red-400 transition-colors"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown size={24} />
        </motion.div>
      </motion.button>
    </section>
  );
}