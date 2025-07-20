"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { 
  Target,
  Calendar,
  Code,
  Zap,
  Mail,
  Github,
  Linkedin,
  Twitter,
  MapPin,
  Users,
  Star
} from "lucide-react";
import Link from "next/link";

import { Header } from "@/components/header/header";
import { HeroSection } from "@/components/sections/hero-section";
import { AboutSection } from "@/components/sections/about-section";
import { SkillsSection } from "@/components/sections/skills-section";
import { PortfolioSection } from "@/components/sections/portfolio-section";
import { ModernCard, ModernCardContent, ModernCardHeader } from "@/components/ui/modern-card";
import { ModernButton } from "@/components/ui/modern-button";
import { IconShowcase } from "@/components/ui/icon-showcase";
import { ContactForm } from "@/components/ui/contact-form";
import { t } from "@/translate/language";

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

  // Services data
  const services = [
    {
      icon: <Code size={32} />,
      title: t[lang].webDevelopment,
      description: t[lang].webDevDesc,
      price: lang === 'pt' ? 'A partir de R$ 2.500' : 'Starting at $500',
      features: [
        t[lang].responsiveDesign,
        t[lang].modernFrameworks,
        t[lang].seoOptimized,
        t[lang].fastLoading
      ]
    },
    {
      icon: <Target size={32} />,
      title: t[lang].mobileDevelopment,
      description: t[lang].mobileDevDesc,
      price: lang === 'pt' ? 'A partir de R$ 4.000' : 'Starting at $800',
      features: [
        t[lang].crossPlatform,
        t[lang].nativePerformance,
        t[lang].appStore,
        t[lang].pushNotifications
      ]
    },
    {
      icon: <Zap size={32} />,
      title: t[lang].backendDevelopment,
      description: t[lang].backendDevDesc,
      price: lang === 'pt' ? 'A partir de R$ 3.000' : 'Starting at $600',
      features: [
        t[lang].apiDevelopment,
        t[lang].databaseDesign,
        t[lang].cloudDeployment,
        t[lang].security
      ]
    }
  ];

  // Work process data
  const workProcess = [
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
  ];

  // Testimonials data
  const testimonials = [
    {
      name: "Maria Silva",
      role: lang === 'pt' ? 'CEO, TechStart' : 'CEO, TechStart',
      content: t[lang].testimonial1,
      rating: 5,
      project: lang === 'pt' ? 'Plataforma E-commerce' : 'E-commerce Platform'
    },
    {
      name: "João Santos",
      role: lang === 'pt' ? 'Fundador, InovaApp' : 'Founder, InovaApp',
      content: t[lang].testimonial2,
      rating: 5,
      project: lang === 'pt' ? 'App Mobile' : 'Mobile App'
    },
    {
      name: "Ana Costa",
      role: lang === 'pt' ? 'CTO, DataFlow' : 'CTO, DataFlow',
      content: t[lang].testimonial3,
      rating: 5,
      project: lang === 'pt' ? 'Sistema Web' : 'Web System'
    }
  ];

  return (
    <main className="min-h-screen bg-black text-white font-sans scroll-smooth">
      {/* Header */}
      <Header 
        lang={lang} 
        toggleLanguage={toggleLanguage} 
        toggleTheme={toggleTheme} 
        darkMode={darkMode} 
      />

      {/* Hero Section */}
      <HeroSection lang={lang} />

      {/* About Section */}
      <AboutSection lang={lang} />

      {/* Services Section */}
      <section id="services" className="section-padding bg-black">
        <div className="max-w-6xl mx-auto px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              {t[lang].services}
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              {lang === 'pt' 
                ? 'Soluções completas para transformar suas ideias em realidade digital'
                : 'Complete solutions to transform your ideas into digital reality'
              }
            </p>
            <div className="w-20 h-1 bg-red-500 mx-auto rounded-full mt-6" />
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <ModernCard className="h-full" glow>
                  <ModernCardHeader>
                    <div className="text-red-500 mb-4">
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                    <div className="text-2xl font-bold text-red-500 mb-4">{service.price}</div>
                  </ModernCardHeader>
                  
                  <ModernCardContent>
                    <p className="text-gray-300 text-sm leading-relaxed mb-6">
                      {service.description}
                    </p>
                    <ul className="space-y-3">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-300">
                          <div className="w-2 h-2 bg-red-500 rounded-full mr-3 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </ModernCardContent>

                  <div className="mt-6">
                    <ModernButton 
                      className="w-full"
                      onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                    >
                      {t[lang].getQuote}
                    </ModernButton>
                  </div>
                </ModernCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <SkillsSection lang={lang} />

      {/* Portfolio Section */}
      <PortfolioSection lang={lang} />

      {/* Work Process Section */}
      <section id="process" className="section-padding bg-black">
        <div className="max-w-6xl mx-auto px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              {t[lang].workProcess}
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              {lang === 'pt' 
                ? 'Metodologia comprovada para entregar resultados excepcionais'
                : 'Proven methodology to deliver exceptional results'
              }
            </p>
            <div className="w-20 h-1 bg-red-500 mx-auto rounded-full mt-6" />
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {workProcess.map((process, index) => (
              <IconShowcase
                key={process.step}
                icon={() => (
                  <div className="relative">
                    <div className="text-red-500">{process.icon}</div>
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                      {process.step}
                    </div>
                  </div>
                )}
                title={process.title}
                description={process.description}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="section-padding bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-6xl mx-auto px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              {t[lang].testimonials}
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              {lang === 'pt' 
                ? 'O que meus clientes dizem sobre meu trabalho'
                : 'What my clients say about my work'
              }
            </p>
            <div className="w-20 h-1 bg-red-500 mx-auto rounded-full mt-6" />
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <ModernCard className="h-full" glow>
                  <ModernCardHeader>
                    <div className="flex items-center gap-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} size={16} className="text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <p className="text-gray-300 text-sm leading-relaxed mb-4 italic">
                      "{testimonial.content}"
                    </p>
                  </ModernCardHeader>
                  
                  <ModernCardContent>
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center text-white font-bold">
                        {testimonial.name.charAt(0)}
                      </div>
                      <div>
                        <h4 className="text-white font-semibold">{testimonial.name}</h4>
                        <p className="text-gray-400 text-sm">{testimonial.role}</p>
                        <p className="text-red-400 text-xs">{testimonial.project}</p>
                      </div>
                    </div>
                  </ModernCardContent>
                </ModernCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-padding bg-black">
        <div className="max-w-4xl mx-auto px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              {t[lang].contactTitle}
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              {t[lang].contactDesc}
            </p>
            <div className="w-20 h-1 bg-red-500 mx-auto rounded-full mt-6" />
          </motion.div>

          <div className="glass rounded-2xl p-8 md:p-12">
            {/* Contact Info */}
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-red-500/10 border border-red-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-8 h-8 text-red-500" />
                </div>
                <h3 className="font-semibold text-white mb-2">{t[lang].email}</h3>
                <p className="text-sm text-gray-400">felipe.messias.fms@gmail.com</p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-red-500/10 border border-red-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-8 h-8 text-red-500" />
                </div>
                <h3 className="font-semibold text-white mb-2">{t[lang].location}</h3>
                <p className="text-sm text-gray-400">São Paulo, Brasil</p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-red-500/10 border border-red-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-red-500" />
                </div>
                <h3 className="font-semibold text-white mb-2">{t[lang].availability}</h3>
                <p className="text-sm text-gray-400">{t[lang].availableNow}</p>
              </motion.div>
            </div>

            {/* Contact Form */}
            <ContactForm lang={lang} />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-8 py-12 border-t border-gray-800">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold text-white mb-2">
                Felipe Messias<span className="text-red-500">.</span>
              </h3>
              <p className="text-gray-400">
                {t[lang].footerTagline}
              </p>
            </div>
            
            <div className="flex gap-4">
              <Link 
                href="mailto:felipe.messias.fms@gmail.com" 
                className="w-12 h-12 bg-gray-800 hover:bg-red-500 rounded-xl flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300 hover:scale-110"
                aria-label="Email"
              >
                <Mail size={20} />
              </Link>
              <Link
                href="https://github.com/FelipeFMS08"
                target="_blank"
                className="w-12 h-12 bg-gray-800 hover:bg-red-500 rounded-xl flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300 hover:scale-110"
                aria-label="GitHub"
              >
                <Github size={20} />
              </Link>
              <Link
                href="https://linkedin.com/in/felipemessias"
                target="_blank"
                className="w-12 h-12 bg-gray-800 hover:bg-red-500 rounded-xl flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300 hover:scale-110"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </Link>
              <Link
                href="https://twitter.com/felipemessias"
                target="_blank"
                className="w-12 h-12 bg-gray-800 hover:bg-red-500 rounded-xl flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300 hover:scale-110"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </Link>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-gray-800 text-center">
            <p className="text-sm text-gray-500">
              © {new Date().getFullYear()} Felipe Messias. 
              {lang === 'pt' ? ' Todos os direitos reservados.' : ' All rights reserved.'}
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}