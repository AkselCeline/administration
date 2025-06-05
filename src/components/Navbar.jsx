import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { useTranslation } from "react-i18next";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import HeaderTop from "./HeaderTop";


export default function Navbar() {
    const { t, i18n } = useTranslation();
    const [menuOpen, setMenuOpen] = useState(false);
    const location = useLocation();

    const navLinks = [
        { to: "/", labelKey: "nav.home" },
        { to: "/actualites", labelKey: "nav.news" },
        { to: "/etat-civil", labelKey: "nav.civil_status" },
        { to: "/demarches", labelKey: "nav.procedures" },
        { to: "/fiches-pratiques", labelKey: "nav.guides" },
        { to: "/etranger", labelKey: "nav.foreign" },
    ];

    const isActive = (path) => location.pathname === path;

    return (
        <header className="sticky top-0 z-50 backdrop-blur-md bg-white/70 border-b shadow-sm">
          <HeaderTop/>
            <div className="px-4 py-3 flex items-center justify-between">
                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-4">
                    {navLinks.map((link) => (
                        <Link
                            key={link.to}
                            to={link.to}
                            className={`px-4 py-2 rounded-md font-medium transition ${
                                isActive(link.to)
                                    ? "bg-green-600 text-white shadow"
                                    : "text-gray-700 hover:bg-gray-100"
                            }`}
                        >
                            {t(link.labelKey)}
                        </Link>
                    ))}
                </nav>


                {/* Mobile Menu Toggle */}
                <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
                    {menuOpen ? <X className="w-6 h-6"/> : <Menu className="w-6 h-6"/>}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        className="md:hidden px-4 pb-4 flex flex-col gap-3"
                        initial={{opacity: 0, y: -10}}
                        animate={{opacity: 1, y: 0}}
                        exit={{opacity: 0, y: -10}}
                        transition={{duration: 0.2}}
                    >
                        {navLinks.map((link) => (
                            <Link
                                key={link.to}
                                to={link.to}
                                onClick={() => setMenuOpen(false)}
                                className={`px-4 py-2 rounded-md font-medium transition ${
                                    isActive(link.to)
                                        ? "bg-green-600 text-white shadow"
                                        : "hover:bg-gray-100 text-gray-700"
                                }`}
                            >
                                {t(link.labelKey)}
                            </Link>
                        ))}
                        <Input placeholder={t("searchPlaceholder")}/>
                        <div className="flex gap-2">
                            <Button variant="secondary" onClick={() => i18n.changeLanguage("fr")}>Fr</Button>
                            <Button variant="secondary" onClick={() => i18n.changeLanguage("ar")}>ع</Button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
