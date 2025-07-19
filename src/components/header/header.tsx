import { t } from "@/translate/language";
import { Switch } from "@radix-ui/react-switch";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";
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

interface HeaderProps {
  lang: "pt" | "en";
  toggleLanguage: () => void;
  darkMode: boolean;
  toggleTheme: () => void;
}

export function Header({ lang, toggleLanguage, darkMode, toggleTheme }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const LanguageToggle = () => (
    <Switch
      onCheckedChange={toggleLanguage}
      checked={lang === "en"}
      className="w-20 h-10 bg-zinc-900 border border-zinc-600 rounded-full p-1 flex items-center relative cursor-pointer"
    >
      <motion.div
        layout
        transition={{ type: "spring", stiffness: 300, damping: 25 }}
        className="absolute w-8 h-8 bg-white rounded-full shadow-md flex items-center justify-center z-10"
        style={{
          left: lang === "pt" ? "4px" : "calc(100% - 36px)",
        }}
      >
        <Image
          src={lang === "pt" ? "/br-flag.svg" : "/us-flag.svg"}
          alt={lang === "pt" ? "Português" : "English"}
          width={20}
          height={20}
          className="rounded-full"
        />
      </motion.div>

      <div className="w-full flex justify-between items-center px-2 text-white/50 text-xs font-bold">
        <span
          className={
            lang === "pt"
              ? "opacity-0"
              : "opacity-100 transition-opacity duration-300"
          }
        >
          PT
        </span>
        <span
          className={
            lang === "en"
              ? "opacity-0"
              : "opacity-100 transition-opacity duration-300"
          }
        >
          EN
        </span>
      </div>
    </Switch>
  );

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed w-full top-0 left-0 right-0 z-50 transition-all duration-100 ${
        isScrolled
          ? "p-3 px-6 bg-dark-900/90 backdrop-blur-md border-b border-zinc-800"
          : "p-6 bg-transparent"
      }`}
    >
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-bold text-white">
            Felipe Messias<span className="text-red-500">.</span>
          </h1>
          <p className="text-sm text-zinc-400">{t[lang].devStack}</p>
        </div>
        <div className="flex items-center gap-4">
          <LanguageToggle />
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full border border-zinc-600"
          >
            {darkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <Link
            href="mailto:felipe.messias.fms@gmail.com"
            className="hover:text-red-400"
          >
            <Mail size={18} />
          </Link>
          <Link
            href="https://github.com/FelipeFMS08"
            target="_blank"
            className="hover:text-red-400"
          >
            <Globe size={18} />
          </Link>
        </div>
      </div>
    </header>
  );
}
