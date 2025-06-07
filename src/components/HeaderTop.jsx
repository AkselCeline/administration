import { Link } from "react-router-dom";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { useTranslation } from "react-i18next";
import { Search } from "lucide-react";
import { motion } from "framer-motion";

export default function HeaderTop() {
    const { t, i18n } = useTranslation();

    return (
        <motion.div
            className="flex items-center justify-between w-full px-4 py-3 backdrop-blur-lg bg-white/80 shadow-md border-b transition-all"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
        >
            {/* Logo réduit mais toujours visible */}
            <Link to="/" className="flex items-center gap-3">
                <img
                    src="/images/logo.svg"
                    alt="Administration DZ"
                    className="h-20 md:h-24 w-auto"
                    loading="lazy"
                />
            </Link>
            {/* Barre de recherche compacte */}
            <div className="hidden md:flex items-center gap-2 border rounded-lg overflow-hidden shadow-sm px-3 py-2 bg-gray-100">
                <Input placeholder={t("Rechercher...")} className="w-36 md:w-56 border-none bg-transparent focus:outline-none" />
                <Button className="bg-blue-600 text-white px-3">
                    <Search className="w-5 h-5"/>
                </Button>
            </div>

            {/* Sélecteur de langue réduit */}
            <div className="flex gap-2">
                <Button variant="secondary" onClick={() => i18n.changeLanguage("fr")}>Fr</Button>
                <Button variant="secondary" onClick={() => i18n.changeLanguage("ar")}>ع</Button>
            </div>
        </motion.div>
    );
}
