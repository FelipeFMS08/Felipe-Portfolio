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
  Code,
  Database,
  Server,
  Smartphone,
  CheckCircle,
  Star,
  ArrowRight,
  Download,
  Calendar,
  MapPin,
  Users,
  Zap,
  Target,
  Award,
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
        <section id="about" className="mb-20 px-8 max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-8 text-center">
            {t[lang].aboutTitle}
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-zinc-300 text-lg leading-relaxed mb-6">
                {t[lang].aboutDescription}
              </p>
              <p className="text-zinc-400 leading-relaxed mb-6">
                {t[lang].aboutExperience}
              </p>
              
              {/* Key Stats */}
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="text-center p-4 bg-zinc-800/50 rounded-lg border border-zinc-700">
                  <div className="text-2xl font-bold text-red-500">5+</div>
                  <div className="text-xs text-zinc-400">{t[lang].yearsExp}</div>
                </div>
                <div className="text-center p-4 bg-zinc-800/50 rounded-lg border border-zinc-700">
                  <div className="text-2xl font-bold text-red-500">50+</div>
                  <div className="text-xs text-zinc-400">{t[lang].projectsCompleted}</div>
                </div>
                <div className="text-center p-4 bg-zinc-800/50 rounded-lg border border-zinc-700">
                  <div className="text-2xl font-bold text-red-500">100%</div>
                  <div className="text-xs text-zinc-400">{t[lang].clientSatisfaction}</div>
                </div>
              </div>

              <Link href="#contact">
                <Button className="bg-red-600 text-white px-8 py-3 hover:bg-red-700 btn-ripple hover-glow">
                  {t[lang].hireMe}
                </Button>
              </Link>
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
        <section id="services" className="mb-20 px-8 max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">{t[lang].services}</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Code size={32} />,
                title: t[lang].webDevelopment,
                description: t[lang].webDevDesc,
                price: t[lang].webDevPrice,
                features: [
                  t[lang].responsiveDesign,
                  t[lang].modernFrameworks,
                  t[lang].seoOptimized,
                  t[lang].fastLoading
                ]
              },
              {
                icon: <Smartphone size={32} />,
                title: t[lang].mobileDevelopment,
                description: t[lang].mobileDevDesc,
                price: t[lang].mobileDevPrice,
                features: [
                  t[lang].crossPlatform,
                  t[lang].nativePerformance,
                  t[lang].appStore,
                  t[lang].pushNotifications
                ]
              },
              {
                icon: <Server size={32} />,
                title: t[lang].backendDevelopment,
                description: t[lang].backendDevDesc,
                price: t[lang].backendDevPrice,
                features: [
                  t[lang].apiDevelopment,
                  t[lang].databaseDesign,
                  t[lang].cloudDeployment,
                  t[lang].security
                ]
              }
            ].map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="group"
              >
                <Card className="bg-zinc-800 border border-zinc-700 hover-glow h-full">
                  <CardContent className="p-6">
                    <div className="text-red-500 mb-4">
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-white">{service.title}</h3>
                    <p className="text-zinc-400 text-sm mb-4 leading-relaxed">
                      {service.description}
                    </p>
                    <div className="text-2xl font-bold text-red-500 mb-4">{service.price}</div>
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-zinc-300">
                          <CheckCircle size={16} className="text-green-500 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Link href="#contact">
                      <Button className="w-full bg-red-600 hover:bg-red-700 text-white">
                        {t[lang].getQuote}
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>
      </SectionReveal>

      <SectionReveal>
        <section id="skills" className="mb-20 px-8 max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">{t[lang].skills}</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <Code size={32} />,
                title: "Frontend",
                skills: "React, Next.js, Vue.js, TypeScript, Tailwind CSS",
                color: "from-blue-500/20 to-cyan-500/20",
                iconColor: "text-blue-400"
              },
              {
                icon: <Server size={32} />,
                title: "Backend",
                skills: "Node.js, Python, Express, FastAPI, REST APIs",
                color: "from-green-500/20 to-emerald-500/20",
                iconColor: "text-green-400"
              },
              {
                icon: <Database size={32} />,
                title: "Database",
                skills: "PostgreSQL, MongoDB, Redis, Prisma, Supabase",
                color: "from-purple-500/20 to-violet-500/20",
                iconColor: "text-purple-400"
              },
              {
                icon: <Smartphone size={32} />,
                title: "DevOps & Tools",
                skills: "Docker, AWS, Vercel, Git, GitHub Actions",
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
        <section id="portfolio" className="mb-20 px-8 max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">{t[lang].portfolio}</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "E-commerce Platform",
                description: t[lang].ecommerceDesc,
                tech: ["Next.js", "TypeScript", "Stripe", "Prisma"],
                image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=600",
                link: "#",
                category: t[lang].webApp
              },
              {
                title: "Task Management App",
                description: t[lang].taskAppDesc,
                tech: ["React", "Node.js", "Socket.io", "MongoDB"],
                image: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=600",
                link: "#",
                category: t[lang].webApp
              },
              {
                title: "Mobile Banking App",
                description: t[lang].bankingAppDesc,
                tech: ["React Native", "Node.js", "PostgreSQL"],
                image: "https://images.pexels.com/photos/4386431/pexels-photo-4386431.jpeg?auto=compress&cs=tinysrgb&w=600",
                link: "#",
                category: t[lang].mobileApp
              },
              {
                title: "Real Estate Platform",
                description: t[lang].realEstateDesc,
                tech: ["Vue.js", "Laravel", "MySQL"],
                image: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=600",
                link: "#",
                category: t[lang].webApp
              },
              {
                title: "Restaurant Management",
                description: t[lang].restaurantDesc,
                tech: ["React", "Express", "MongoDB"],
                image: "https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=600",
                link: "#",
                category: t[lang].webApp
              },
              {
                title: "Fitness Tracking App",
                description: t[lang].fitnessDesc,
                tech: ["Flutter", "Firebase", "Node.js"],
                image: "https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&w=600",
                link: "#",
                category: t[lang].mobileApp
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
                    <div className="absolute top-4 left-4">
                      <span className="px-2 py-1 bg-red-600/90 text-white text-xs rounded-full">
                        {project.category}
                      </span>
                    </div>
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
                      {t[lang].viewProject} <ArrowRight size={16} className="ml-1" />
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>
      </SectionReveal>

      <SectionReveal>
        <section id="testimonials" className="mb-20 px-8 max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">{t[lang].testimonials}</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                text: t[lang].testimonial1,
                name: "Sarah Johnson",
                role: "CEO, TechStart",
                image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop",
                rating: 5,
                project: "E-commerce Platform"
              },
              {
                text: t[lang].testimonial2,
                name: "Carlos Silva",
                role: "Founder, InnovaCorp",
                image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop",
                rating: 5,
                project: "Mobile App"
              },
              {
                text: t[lang].testimonial3,
                name: "Maria Santos",
                role: "CTO, DigitalFlow",
                image: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop",
                rating: 5,
                project: "Web Application"
              }
            ].map((testimonial, idx) => (
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
                    <div className="flex mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} size={16} className="text-yellow-500 fill-current" />
                      ))}
                    </div>
                    <div className="mb-6">
                      <div className="text-red-400 text-4xl mb-4">"</div>
                      <p className="text-zinc-300 text-sm leading-relaxed italic">
                        {testimonial.text}
                      </p>
                    </div>
                    <div className="flex items-center gap-4">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        width={48}
                        height={48}
                        className="rounded-full border-2 border-zinc-700"
                      />
                      <div>
                        <p className="text-sm font-bold text-white">{testimonial.name}</p>
                        <p className="text-xs text-zinc-400">{testimonial.role}</p>
                        <p className="text-xs text-red-400">{testimonial.project}</p>
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
        <section id="process" className="mb-20 px-8 max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">{t[lang].workProcess}</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: t[lang].discovery,
                description: t[lang].discoveryDesc,
                icon: <Target size={32} />
              },
              {
                step: "02",
                title: t[lang].planning,
                description: t[lang].planningDesc,
                icon: <Calendar size={32} />
              },
              {
                step: "03",
                title: t[lang].development,
                description: t[lang].developmentDesc,
                icon: <Code size={32} />
              },
              {
                step: "04",
                title: t[lang].delivery,
                description: t[lang].deliveryDesc,
                icon: <Zap size={32} />
              }
            ].map((process, index) => (
              <motion.div
                key={process.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="relative mb-6">
                  <div className="w-20 h-20 mx-auto bg-red-600 rounded-full flex items-center justify-center text-white mb-4">
                    {process.icon}
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-zinc-800 border-2 border-red-500 rounded-full flex items-center justify-center text-red-500 text-sm font-bold">
                    {process.step}
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">{process.title}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  {process.description}
                </p>
              </motion.div>
            ))}
          </div>
        </section>
      </SectionReveal>

      <SectionReveal>
        <section id="contact" className="mb-20 px-8 max-w-4xl mx-auto">
          <div className="glass rounded-2xl p-10 border border-zinc-800">
            <h2 className="text-4xl font-bold text-white mb-4 text-center">
              {t[lang].contactTitle}
            </h2>
            <p className="text-zinc-400 text-center mb-8 max-w-2xl mx-auto">
              {t[lang].contactDesc}
            </p>
            
            {/* Contact Info */}
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="text-center p-4 bg-zinc-800/50 rounded-lg">
                <Mail className="w-8 h-8 text-red-500 mx-auto mb-2" />
                <h3 className="font-semibold text-white mb-1">{t[lang].email}</h3>
                <p className="text-sm text-zinc-400">felipe.messias.fms@gmail.com</p>
              </div>
              <div className="text-center p-4 bg-zinc-800/50 rounded-lg">
                <MapPin className="w-8 h-8 text-red-500 mx-auto mb-2" />
                <h3 className="font-semibold text-white mb-1">{t[lang].location}</h3>
                <p className="text-sm text-zinc-400">São Paulo, Brasil</p>
              </div>
              <div className="text-center p-4 bg-zinc-800/50 rounded-lg">
                <Users className="w-8 h-8 text-red-500 mx-auto mb-2" />
                <h3 className="font-semibold text-white mb-1">{t[lang].availability}</h3>
                <p className="text-sm text-zinc-400">{t[lang].availableNow}</p>
              </div>
            </div>

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
              {t[lang].footerTagline}
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