"use client";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Globe,
  Mail,
  Moon,
  Sun,
  Github,
  Linkedin,
  Twitter,
  Languages,
  Code,
  Database,
  Server,
  Smartphone,
} from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { t } from "@/translate/language";
import Image from "next/image";
import { Switch } from "@radix-ui/react-switch";
import { Header } from "@/components/header/header";
import { Hero } from "@/components/hero/hero";
import { SectionReveal } from "@/components/ui/section-reveal";
import { ContactForm } from "@/components/ui/contact-form";

export default function Home() {
  const [darkMode, setDarkMode] = useState(true);
  const [lang, setLang] = useState<"pt" | "en">("pt");
  
  const toggleTheme = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark");
  };

  const toggleLanguage = () => {
    setLang(lang === "pt" ? "en" : "pt");
  };



  return (
    <main className="min-h-screen bg-gradient-to-br from-zinc-900 via-black to-zinc-950 text-white font-sans scroll-smooth">
      <section id="home" className="min-h-screen justify-center p-8">
        <Header lang={lang} toggleLanguage={toggleLanguage} toggleTheme={toggleTheme} darkMode={darkMode} />
        <Hero lang={lang} />
      </section>

      <SectionReveal>
        <section
          id="about"
          className="mb-20 px-8 max-w-6xl mx-auto"
        >
          <h2 className="text-4xl font-bold mb-8 text-center">
            {lang === 'pt' ? 'Sobre Mim' : 'About Me'}
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-zinc-300 text-lg leading-relaxed mb-6">
                {lang === 'pt' 
                  ? 'Sou um desenvolvedor full-stack apaixonado por criar soluções digitais inovadoras. Com experiência sólida em tecnologias modernas, transformo ideias em aplicações funcionais e escaláveis.'
                  : 'I am a full-stack developer passionate about creating innovative digital solutions. With solid experience in modern technologies, I transform ideas into functional and scalable applications.'
                }
              </p>
              <p className="text-zinc-400 leading-relaxed">
                {lang === 'pt'
                  ? 'Minha jornada na programação começou em 2019 e desde então venho me especializando em React, Next.js, Node.js e outras tecnologias do ecossistema JavaScript/TypeScript.'
                  : 'My programming journey started in 2019 and since then I have been specializing in React, Next.js, Node.js and other technologies from the JavaScript/TypeScript ecosystem.'
                }
              </p>
            </div>
            <div className="relative">
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full border-2 border-red-500/20"
              />
              <div className="w-80 h-80 mx-auto bg-gradient-to-br from-red-500/20 to-orange-500/20 rounded-full flex items-center justify-center">
                <div className="w-60 h-60 bg-zinc-800 rounded-full flex items-center justify-center">
                  <Code size={80} className="text-red-500" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </SectionReveal>

      <SectionReveal>
        <section
        id="skills"
        className="mb-20 px-8 max-w-6xl mx-auto"
        >
          <h2 className="text-4xl font-bold mb-12 text-center">{t[lang].skills}</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <Code size={32} />,
                title: "Frontend",
                skills: "React, Next.js, Tailwind CSS, TypeScript",
                color: "from-blue-500/20 to-cyan-500/20",
                iconColor: "text-blue-400"
              },
              {
                icon: <Server size={32} />,
                title: "Backend",
                skills: "Node.js, Express, Prisma, REST APIs",
                color: "from-green-500/20 to-emerald-500/20",
                iconColor: "text-green-400"
              },
              {
                icon: <Database size={32} />,
                title: "Database",
                skills: "PostgreSQL, SQLite, MongoDB",
                color: "from-purple-500/20 to-violet-500/20",
                iconColor: "text-purple-400"
              },
              {
                icon: <Smartphone size={32} />,
                title: "DevOps & Tools",
                skills: "Git, GitHub, Vercel, Figma, Discord API",
                color: "from-orange-500/20 to-red-500/20",
                iconColor: "text-orange-400"
              }
            ].map((skill, index) => (
              <motion.div
                key={skill.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="skill-card"
              >
                <Card className={`bg-gradient-to-br ${skill.color} border border-zinc-700/50 backdrop-blur-sm h-full`}>
                  <CardContent className="p-6">
                    <div className={`${skill.iconColor} mb-4`}>
                      {skill.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-white">{skill.title}</h3>
                    <p className="text-sm text-zinc-300 leading-relaxed">
                      {skill.skills}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>
      </SectionReveal>

      <SectionReveal>
        <section
          id="projects"
          className="mb-20 px-8 max-w-6xl mx-auto"
        >
          <h2 className="text-4xl font-bold mb-12 text-center">{t[lang].projects}</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "E-commerce Platform",
                description: lang === 'pt' 
                  ? "Plataforma completa de e-commerce com carrinho, pagamentos e dashboard administrativo."
                  : "Complete e-commerce platform with cart, payments and administrative dashboard.",
                tech: ["Next.js", "TypeScript", "Stripe", "Prisma"],
                image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=600",
                link: "#"
              },
              {
                title: "Task Management App",
                description: lang === 'pt'
                  ? "Aplicativo de gerenciamento de tarefas com colaboração em tempo real."
                  : "Task management application with real-time collaboration.",
                tech: ["React", "Node.js", "Socket.io", "MongoDB"],
                image: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=600",
                link: "#"
              },
              {
                title: "Weather Dashboard",
                description: lang === 'pt'
                  ? "Dashboard meteorológico com previsões detalhadas e mapas interativos."
                  : "Weather dashboard with detailed forecasts and interactive maps.",
                tech: ["Vue.js", "Chart.js", "Weather API"],
                image: "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=600",
                link: "#"
              }
            ].map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="group"
              >
                <Card className="bg-zinc-800 border border-zinc-700 overflow-hidden hover-glow h-full">
                  <div className="relative overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={400}
                      height={200}
                      className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/80 to-transparent" />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-2 text-white">{project.title}</h3>
                    <p className="text-zinc-400 text-sm mb-4 leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 bg-red-600/20 text-red-400 text-xs rounded-full border border-red-600/30"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <Link
                      href={project.link}
                      className="inline-flex items-center text-red-400 hover:text-red-300 text-sm font-medium transition-colors"
                    >
                      {lang === 'pt' ? 'Ver Projeto' : 'View Project'} →
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>
      </SectionReveal>

      <SectionReveal>
        <section
        id="trajetoria"
        className="mb-20 px-8 max-w-6xl mx-auto"
        >
          <h2 className="text-4xl font-bold mb-12 text-center">{t[lang].trajectory}</h2>
          <div className="space-y-12">
            <div>
              <h3 className="text-2xl font-bold mb-8 text-center">{t[lang].career}</h3>
              <div className="relative">
                <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-red-500"></div>
                
                {[
                  {
                    period: "2022 - Atual",
                    title: t[lang].devStack,
                    company: "CuboConnect · Efetivo",
                    description: "Desenvolvimento e manutenção de softwares utilizando tecnologias modernas como React, Next.js e Node.js."
                  },
                  {
                    period: "2021 - 2022",
                    title: t[lang].devMobile,
                    company: "Dskils · Estágio",
                    description: "Desenvolvimento e manutenção de aplicativos web construídos em TypeScript, React e Node.js, além de tecnologias como Firebase."
                  }
                ].map((job, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.2, duration: 0.6 }}
                    viewport={{ once: true }}
                    className={`relative flex items-center mb-8 ${
                      index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                    }`}
                  >
                    <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-1/2 w-4 h-4 bg-red-500 rounded-full border-4 border-zinc-900"></div>
                    <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                      <Card className="bg-zinc-800 border border-zinc-700 hover-glow">
                        <CardContent className="p-6">
                          <p className="text-sm text-red-400 mb-2">{job.period}</p>
                          <h4 className="text-lg font-bold text-white mb-1">{job.title}</h4>
                          <p className="text-sm text-zinc-300 italic mb-3">{job.company}</p>
                          <p className="text-sm text-zinc-400">{job.description}</p>
                        </CardContent>
                      </Card>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold mb-8 text-center">{t[lang].education}</h3>
              <div className="relative">
                <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-red-500"></div>
                
                {[
                  {
                    period: "fev de 2022 - dez de 2024",
                    title: "Tecnólogo em Análise e Desenvolvimento de Sistemas",
                    institution: "Faculdade de Tecnologia de Santana de Parnaíba - São Paulo · Concluído"
                  },
                  {
                    period: "fev de 2019 - dez de 2021",
                    title: "Ensino médio integrado ao técnico de Informática para Web",
                    institution: "ETEC Bartolomeu Bueno da Silva - São Paulo · Concluído"
                  }
                ].map((edu, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.2, duration: 0.6 }}
                    viewport={{ once: true }}
                    className={`relative flex items-center mb-8 ${
                      index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                    }`}
                  >
                    <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-1/2 w-4 h-4 bg-red-500 rounded-full border-4 border-zinc-900"></div>
                    <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                      <Card className="bg-zinc-800 border border-zinc-700 hover-glow">
                        <CardContent className="p-6">
                          <p className="text-sm text-red-400 mb-2">{edu.period}</p>
                          <h4 className="text-lg font-bold text-white mb-1">{edu.title}</h4>
                          <p className="text-sm text-zinc-300 italic">{edu.institution}</p>
                        </CardContent>
                      </Card>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </SectionReveal>

      <SectionReveal>
        <section
        id="feedbacks"
        className="mb-20 px-8 max-w-6xl mx-auto"
        >
          <h2 className="text-4xl font-bold mb-12 text-center">{t[lang].feedbacks}</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                text: "Tenho aprendido demais, eu iniciei do zero e hoje já tô fazendo JavaScript. É um novo mundo que se abriu pra mim, e nunca imaginei que eu teria capacidade de codar.",
                name: "Grace Kelly",
                role: "Aluno da Rocketseat",
                image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop",
              },
              {
                text: "Fiz muitas conexões que me levaram a hoje me redescobrir dentro da tecnologia.",
                name: "Henrique Weiland",
                role: "Techlead/Developer",
                image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop",
              },
              {
                text: "Me sinto feliz de ter conseguido minha primeira vaga e ter realizado meu sonho.",
                name: "Estudante",
                role: "Dev Júnior",
                image: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop",
              },
            ].map((fb, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="group"
              >
                <Card className="bg-zinc-800 p-6 border border-zinc-700 shadow-md hover-glow h-full">
                  <CardContent className="p-0">
                    <div className="mb-6">
                      <div className="text-red-400 text-4xl mb-4">"</div>
                      <p className="text-zinc-300 text-sm leading-relaxed italic">
                        {fb.text}
                      </p>
                    </div>
                    <div className="flex items-center gap-4">
                      <Image
                        src={fb.image}
                        alt={fb.name}
                        width={48}
                        height={48}
                        className="rounded-full border-2 border-zinc-700"
                      />
                      <div>
                        <p className="text-sm font-bold text-white">{fb.name}</p>
                        <p className="text-xs text-zinc-400">{fb.role}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>
      </SectionReveal>

      <SectionReveal>
        <section
        id="contato"
        className="mb-20 px-8 max-w-4xl mx-auto"
        >
          <div className="glass rounded-2xl p-10 border border-zinc-800">
            <h2 className="text-4xl font-bold text-white mb-4 text-center">
              {t[lang].contactFormTitle}
            </h2>
            <p className="text-zinc-400 text-center mb-8 max-w-2xl mx-auto">
              {t[lang].contactFormDesc}
            </p>
            <ContactForm lang={lang} />
          </div>
        </section>
      </SectionReveal>

      <footer className="px-8 py-10 border-t border-zinc-800 max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <h3 className="text-xl font-bold text-white mb-2">
              Felipe Messias<span className="text-red-500">.</span>
            </h3>
            <p className="text-sm text-zinc-500">
              {lang === 'pt' ? 'Entre em contato:' : 'Get in touch:'}
            </p>
          </div>
          
          <div className="flex gap-6">
            <Link 
              href="mailto:felipe.messias.fms@gmail.com" 
              className="text-zinc-400 hover:text-red-400 transition-colors p-2 rounded-lg hover:bg-zinc-800"
              aria-label="Email"
            >
              <Mail size={20} />
            </Link>
            <Link
              href="https://github.com/FelipeFMS08"
              target="_blank"
              className="text-zinc-400 hover:text-red-400 transition-colors p-2 rounded-lg hover:bg-zinc-800"
              aria-label="GitHub"
            >
              <Github size={20} />
            </Link>
            <Link
              href="https://linkedin.com/in/felipemessias"
              target="_blank"
              className="text-zinc-400 hover:text-red-400 transition-colors p-2 rounded-lg hover:bg-zinc-800"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </Link>
            <Link
              href="https://twitter.com/felipemessias"
              target="_blank"
              className="text-zinc-400 hover:text-red-400 transition-colors p-2 rounded-lg hover:bg-zinc-800"
              aria-label="Twitter"
            >
              <Twitter size={20} />
            </Link>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-zinc-800 text-center">
          <p className="text-xs text-zinc-600">
            © {new Date().getFullYear()} Felipe Messias. 
            {lang === 'pt' ? ' Todos os direitos reservados.' : ' All rights reserved.'}
          </p>
        </div>



      </footer>
    </main>
  );
}
