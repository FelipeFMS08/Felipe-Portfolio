"use client";
import { Metadata } from "next";
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
} from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { t } from "@/translate/language";
import Image from "next/image";
import { Switch } from "@radix-ui/react-switch";
import { Header } from "@/components/header/header";
import { Hero } from "@/components/hero/hero";

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
      <section className="min-h-screen justify-center p-8">
        <Header lang={lang} toggleLanguage={toggleLanguage} toggleTheme={toggleTheme} darkMode={darkMode} />
        <Hero lang={lang} />
      </section>

      <motion.section
        id="skills"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mb-20"
      >
        <h2 className="text-3xl font-semibold mb-6">{t[lang].skills}</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-zinc-800 border border-zinc-700">
            <CardContent className="p-4">
              <h3 className="text-lg font-bold mb-2">Frontend</h3>
              <p className="text-sm text-zinc-400">
                React, Next.js, Tailwind CSS
              </p>
            </CardContent>
          </Card>
          <Card className="bg-zinc-800 border border-zinc-700">
            <CardContent className="p-4">
              <h3 className="text-lg font-bold mb-2">Backend</h3>
              <p className="text-sm text-zinc-400">
                Node.js, TypeScript, Prisma
              </p>
            </CardContent>
          </Card>
          <Card className="bg-zinc-800 border border-zinc-700">
            <CardContent className="p-4">
              <h3 className="text-lg font-bold mb-2">Banco de Dados</h3>
              <p className="text-sm text-zinc-400">PostgreSQL, SQLite</p>
            </CardContent>
          </Card>
          <Card className="bg-zinc-800 border border-zinc-700">
            <CardContent className="p-4">
              <h3 className="text-lg font-bold mb-2">DevOps & Outros</h3>
              <p className="text-sm text-zinc-400">
                Git, GitHub, Vercel, Figma, Discord API
              </p>
            </CardContent>
          </Card>
        </div>
      </motion.section>

      <motion.section
        id="trajetoria"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mb-20"
      >
        <h2 className="text-3xl font-semibold mb-6">{t[lang].trajectory}</h2>
        <div className="space-y-12">
          <div>
            <h3 className="text-xl font-bold mb-2">{t[lang].career}</h3>
            <div className="relative pl-6 border-l border-zinc-700 pb-6">
              <div className="absolute w-3 h-3 bg-red-500 rounded-full -left-1.5 top-1.5" />
              <p className="text-sm text-zinc-400 mb-1">2022 - Atual</p>
              <p className="text-lg font-semibold text-white">
                {t[lang].devStack}
              </p>
              <p className="text-sm text-zinc-300 italic">
                CuboConnect · Efetivo
              </p>
              <p className="text-sm text-zinc-400 mt-1">
                Desenvolvimento e manutenção de softwares.
              </p>
            </div>
            <div className="relative pl-6 border-l border-zinc-700 ">
              <div className="absolute w-3 h-3 bg-red-500 rounded-full -left-1.5 top-1.5" />
              <p className="text-sm text-zinc-400 mb-1">2021 - 2022</p>
              <p className="text-lg font-semibold text-white">
                {t[lang].devMobile}
              </p>
              <p className="text-sm text-zinc-300 italic">Dskils · Estágio</p>
              <p className="text-sm text-zinc-400 mt-1">
                Desenvolvimento e manutenção de aplicativos web construídos em
                Typescript, React e Node.JS, além de tecnologias como Firebase.
              </p>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2">{t[lang].education}</h3>
            <div className="relative pl-6 border-l border-zinc-700 pb-6">
              <div className="absolute w-3 h-3 bg-red-500 rounded-full -left-1.5 top-1.5" />
              <p className="text-sm text-zinc-400 mb-1">
                fev de 2022 - dez de 2024
              </p>
              <p className="text-lg font-semibold text-white">
                Tecnólogo em Análise e Desenvolvimento de Sistemas
              </p>
              <p className="text-sm text-zinc-300 italic">
                Faculdade de Tecnologia de Santana de Parnaíba - São Paulo ·
                Concluido
              </p>
            </div>
            <div className="relative pl-6 border-l border-zinc-700">
              <div className="absolute w-3 h-3 bg-bred-500 rounded-full -left-1.5 top-1.5" />
              <p className="text-sm text-zinc-400 mb-1">
                fev de 2019 - dez de 2021
              </p>
              <p className="text-lg font-semibold text-white">
                Ensino médio integrado ao técnico de Informática para Web
              </p>
              <p className="text-sm text-zinc-300 italic">
                ETEC Bartolomeu Bueno da Silva - São Paulo · Concluido
              </p>
            </div>
          </div>
        </div>
      </motion.section>

      <motion.section
        id="feedbacks"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mb-20 max-w-6xl mx-auto"
      >
        <h2 className="text-3xl font-semibold mb-6">{t[lang].feedbacks}</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              text: "Tenho aprendido demais, eu iniciei do zero e hoje já tô fazendo JavaScript. É um novo mundo que se abriu pra mim, e nunca imaginei que eu teria capacidade de codar.",
              name: "Grace Kelly",
              role: "Aluno da Rocketseat",
              image: "/avatar1.jpg",
            },
            {
              text: "Fiz muitas conexões que me levaram a hoje me redescobrir dentro da tecnologia.",
              name: "Henrique Weiland",
              role: "Techlead/Developer",
              image: "/avatar2.jpg",
            },
            {
              text: "Me sinto feliz de ter conseguido minha primeira vaga e ter realizado meu sonho.",
              name: "Estudante",
              role: "Dev Júnior",
              image: "/avatar3.jpg",
            },
          ].map((fb, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
              className="bg-zinc-800 p-6 rounded-xl border border-zinc-700 shadow-md"
            >
              <p className="text-zinc-300 text-sm mb-4">“{fb.text}”</p>
              <div className="flex items-center gap-3">
                <Image
                  src={fb.image}
                  alt={fb.name}
                  width={32}
                  height={32}
                  className="rounded-full"
                />
                <div>
                  <p className="text-sm font-bold text-white">{fb.name}</p>
                  <p className="text-xs text-zinc-400">{fb.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <motion.section
        id="contato"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="bg-zinc-900 border border-zinc-800 rounded-2xl p-10 max-w-4xl mx-auto"
      >
        <h2 className="text-3xl font-bold text-white mb-4 text-center">
          {t[lang].contactFormTitle}
        </h2>
        <p className="text-zinc-400 text-sm mb-8 text-center">
          {t[lang].contactFormDesc}
        </p>
        <form className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <input
              type="text"
              placeholder={t[lang].name}
              className="bg-zinc-800 border border-zinc-700 rounded-lg p-4 text-sm text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-red-600"
            />
            <input
              type="email"
              placeholder={t[lang].email}
              className="bg-zinc-800 border border-zinc-700 rounded-lg p-4 text-sm text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-red-600"
            />
          </div>
          <textarea
            rows={5}
            placeholder={t[lang].message}
            className="w-full bg-zinc-800 border border-zinc-700 rounded-lg p-4 text-sm text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-red-600"
          ></textarea>
          <div className="text-center">
            <Button
              type="submit"
              className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 text-sm rounded-lg"
            >
              {t[lang].send}
            </Button>
          </div>
        </form>
      </motion.section>

      <footer className="pt-10 border-t border-zinc-800">
        <p className="text-sm text-zinc-500 mb-4">Entre em contato:</p>
        <div className="flex gap-4">
          <Link href="mailto:felipe@email.com" className="hover:text-red-400">
            <Mail size={20} />
          </Link>
          <Link
            href="https://github.com/felipemessias"
            className="hover:text-red-400"
          >
            <Github size={20} />
          </Link>
          <Link
            href="https://linkedin.com/in/felipemessias"
            className="hover:text-red-400"
          >
            <Linkedin size={20} />
          </Link>
          <Link
            href="https://twitter.com/felipemessias"
            className="hover:text-red-400"
          >
            <Twitter size={20} />
          </Link>
        </div>
        <p className="text-xs text-zinc-600 mt-4">
          © {new Date().getFullYear()} Felipe Messias. Todos os direitos
          reservados.
        </p>
      </footer>
    </main>
  );
}
