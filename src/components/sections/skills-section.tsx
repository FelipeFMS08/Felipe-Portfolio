import { motion } from "framer-motion";
import { Code, Server, Database, Smartphone, Globe, Zap } from "lucide-react";
import { ModernCard, ModernCardContent, ModernCardHeader } from "@/components/ui/modern-card";
import { SkillBar } from "@/components/ui/skill-bar";
import { t } from "@/translate/language";

interface SkillsSectionProps {
  lang: "pt" | "en";
}

export function SkillsSection({ lang }: SkillsSectionProps) {
  const skillCategories = [
    {
      icon: <Code size={32} />,
      title: "Frontend",
      color: "from-blue-500/20 to-cyan-500/20",
      iconColor: "text-blue-400",
      skills: [
        { name: "React/Next.js", level: 90 },
        { name: "TypeScript", level: 85 },
        { name: "Tailwind CSS", level: 95 },
        { name: "Vue.js", level: 75 }
      ]
    },
    {
      icon: <Server size={32} />,
      title: "Backend",
      color: "from-green-500/20 to-emerald-500/20",
      iconColor: "text-green-400",
      skills: [
        { name: "Node.js", level: 88 },
        { name: "Python", level: 80 },
        { name: "Express/FastAPI", level: 85 },
        { name: "REST APIs", level: 92 }
      ]
    },
    {
      icon: <Database size={32} />,
      title: "Database",
      color: "from-purple-500/20 to-violet-500/20",
      iconColor: "text-purple-400",
      skills: [
        { name: "PostgreSQL", level: 85 },
        { name: "MongoDB", level: 80 },
        { name: "Redis", level: 70 },
        { name: "Prisma", level: 88 }
      ]
    },
    {
      icon: <Zap size={32} />,
      title: "DevOps & Tools",
      color: "from-orange-500/20 to-red-500/20",
      iconColor: "text-orange-400",
      skills: [
        { name: "Docker", level: 75 },
        { name: "AWS/Vercel", level: 80 },
        { name: "Git/GitHub", level: 95 },
        { name: "CI/CD", level: 70 }
      ]
    }
  ];

  return (
    <section id="skills" className="section-padding bg-black">
      <div className="max-w-6xl mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {t[lang].skills}
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            {lang === 'pt' 
              ? 'Tecnologias e ferramentas que domino para criar soluções completas'
              : 'Technologies and tools I master to create complete solutions'
            }
          </p>
          <div className="w-20 h-1 bg-red-500 mx-auto rounded-full mt-6" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <ModernCard className={`h-full bg-gradient-to-br ${category.color} border-gray-800`} glow>
                <ModernCardHeader>
                  <div className={`${category.iconColor} mb-4`}>
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white">{category.title}</h3>
                </ModernCardHeader>
                <ModernCardContent>
                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <SkillBar
                        key={skill.name}
                        skill={skill.name}
                        percentage={skill.level}
                        delay={index * 2 + skillIndex}
                      />
                    ))}
                  </div>
                </ModernCardContent>
              </ModernCard>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-bold text-white mb-8">
            {lang === 'pt' ? 'Outras Competências' : 'Other Skills'}
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              'Agile/Scrum',
              'UI/UX Design',
              'Testing',
              'Performance Optimization',
              'Security',
              'Mobile Development'
            ].map((skill, index) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
                viewport={{ once: true }}
                className="px-4 py-2 bg-gray-800 border border-gray-700 rounded-full text-gray-300 hover:border-red-500 hover:text-red-400 transition-colors duration-300"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}