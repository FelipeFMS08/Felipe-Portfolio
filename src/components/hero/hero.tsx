import { t } from "@/translate/language";
import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "../ui/button";


export function Hero( { lang }: { lang: "pt" | "en" }) {

    return (
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mt-40"
        >
          <span className="inline-block px-4 py-1 text-xs rounded-full bg-zinc-800 text-zinc-300">
            Felipe Messias | Full-stack Developer
          </span>
          <h2 className="text-5xl font-extrabold leading-tight mb-6">
            {t[lang].developer}
            <span className="text-red-500"> Full-stack</span>
          </h2>
          <p className="text-zinc-400 text-lg mb-8">{t[lang].hero}</p>
          <div className="flex gap-4">
            <Link href="mailto:felipe@email.com">
              <Button className="bg-red-600 text-white px-6 py-3 hover:bg-red-700">
                {t[lang].contact}
              </Button>
            </Link>
            <Link href="#projetos">
              <Button
                variant="outline"
                className="border-zinc-600 text-white px-6 py-3 hover:border-red-500 hover:text-red-400"
              >
                {t[lang].viewProjects}
              </Button>
            </Link>
          </div>
        </motion.section>
    )
}