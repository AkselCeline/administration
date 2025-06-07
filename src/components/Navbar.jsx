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
        <header className="sticky top-0 z-50 backdrop-blur-lg bg-white/30 border-b border-white shadow-md">
            <HeaderTop/>
            <div className="px-6 py-4 flex items-center justify-between">
                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-6">
                    {navLinks.map((link) => (
                        <Link
                            key={link.to}
                            to={link.to}
                            className={`px-5 py-2 rounded-full font-semibold text-sm transition duration-300 ${
                                isActive(link.to)
                                    ? "bg-gradient-to-r from-green-500 to-blue-500 text-white shadow-lg scale-105"
                                    : "text-gray-800 hover:bg-gray-200"
                            }`}
                        >
                            {t(link.labelKey)}
                        </Link>
                    ))}
                </nav>

                {/* Mobile Menu Toggle */}
                <button className="md:hidden p-2 rounded-full bg-white/50 shadow-md backdrop-blur-sm"
                        onClick={() => setMenuOpen(!menuOpen)}>
                    {menuOpen ? <X className="w-7 h-7 text-gray-800"/> : <Menu className="w-7 h-7 text-gray-800"/>}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        className="md:hidden px-6 pb-6 flex flex-col gap-4"
                        initial={{opacity: 0, y: -10}}
                        animate={{opacity: 1, y: 0}}
                        exit={{opacity: 0, y: -10}}
                        transition={{duration: 0.3}}
                    >
                        {navLinks.map((link) => (
                            <Link
                                key={link.to}
                                to={link.to}
                                onClick={() => setMenuOpen(false)}
                                className={`px-4 py-2 rounded-full font-medium transition duration-300 ${
                                    isActive(link.to)
                                        ? "bg-gradient-to-r from-green-500 to-blue-500 text-white shadow-md scale-105"
                                        : "hover:bg-gray-200 text-gray-700"
                                }`}
                            >
                                {t(link.labelKey)}
                            </Link>
                        ))}
                        <Input placeholder={t("searchPlaceholder")} className="bg-white/60 backdrop-blur-sm rounded-lg"/>
                        <div className="flex gap-3 justify-center">
                            <Button variant="ghost" onClick={() => i18n.changeLanguage("fr")}>🇫🇷 Fr</Button>
                            <Button variant="ghost" onClick={() => i18n.changeLanguage("ar")}>🇸🇦 ع</Button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
