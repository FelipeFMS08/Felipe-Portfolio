import { motion } from "framer-motion";
import { Code, Users, Zap } from "lucide-react";
import { ModernCard } from "@/components/ui/modern-card";
import { StatsCounter } from "@/components/ui/stats-counter";
import { ModernButton } from "@/components/ui/modern-button";
import { t } from "@/translate/language";

interface AboutSectionProps {
  lang: "pt" | "en";
}

export function AboutSection({ lang }: AboutSectionProps) {
  const highlights = [
    {
      icon: <Code size={24} />,
      title: lang === 'pt' ? 'Código Limpo' : 'Clean Code',
      description: lang === 'pt' ? 'Desenvolvimento com as melhores práticas' : 'Development with best practices'
    },
    {
      icon: <Users size={24} />,
      title: lang === 'pt' ? 'Comunicação Clara' : 'Clear Communication',
      description: lang === 'pt' ? 'Atualizações constantes do progresso' : 'Constant progress updates'
    },
    {
      icon: <Zap size={24} />,
      title: lang === 'pt' ? 'Entrega Rápida' : 'Fast Delivery',
      description: lang === 'pt' ? 'Projetos entregues no prazo' : 'Projects delivered on time'
    }
  ];

  return (
    <section id="about" className="section-padding bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-6xl mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {t[lang].aboutTitle}
          </h2>
          <div className="w-20 h-1 bg-red-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-white mb-6">
              {lang === 'pt' ? 'Desenvolvedor Experiente, Freelancer Iniciante' : 'Experienced Developer, Beginner Freelancer'}
            </h3>
            
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              {t[lang].aboutDescription}
            </p>
            
            <p className="text-gray-400 leading-relaxed mb-8">
              {t[lang].aboutExperience}
            </p>

            <div className="grid grid-cols-3 gap-4 mb-8">
              <StatsCounter value={15} label={t[lang].projectsCompleted} suffix="+" delay={0} />
              <StatsCounter value={3} label={t[lang].yearsExp} suffix="+" delay={1} />
              <StatsCounter value={100} label={lang === 'pt' ? 'Dedicação' : 'Dedication'} suffix="%" delay={2} />
            </div>

            <ModernButton 
              size="lg"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              {t[lang].hireMe}
            </ModernButton>
          </motion.div>

          {/* Highlights */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {highlights.map((highlight, index) => (
              <motion.div
                key={highlight.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <ModernCard className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center text-red-500 flex-shrink-0">
                      {highlight.icon}
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-white mb-2">
                        {highlight.title}
                      </h4>
                      <p className="text-gray-400 leading-relaxed">
                        {highlight.description}
                      </p>
                    </div>
                  </div>
                </ModernCard>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}