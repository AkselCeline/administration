import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export default function Footer() {
    const { t } = useTranslation();

    return (
        <footer className="bg-white/30 backdrop-blur-lg border-t border-white shadow-md mt-12">
            <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 text-sm text-gray-800">

                {/* Logo & description */}
                <div>
                    <Link to="/" className="flex items-center gap-3 mb-4">
                        <img src="/images/logo.svg" alt="Logo" className="h-20 md:h-24 w-auto" />
                    </Link>
                    <p className="text-gray-600">
                        {t("footer.description", "Toutes les infos essentielles pour vos démarches administratives en Algérie, réunies en un seul endroit.")}
                    </p>
                </div>

                {/* Navigation */}
                <div>
                    <h4 className="font-semibold text-gray-900 mb-4">{t("footer.navigation", "Navigation")}</h4>
                    <ul className="space-y-3">
                        {["nav.news", "nav.civil_status", "nav.procedures", "nav.guides"].map((item, index) => (
                            <li key={index}>
                                <Link to={`/${item.split(".")[1]}`} className="relative group text-gray-700 hover:text-blue-500 transition">
                                    {t(item)}
                                    <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Informations légales */}
                <div>
                    <h4 className="font-semibold text-gray-900 mb-4">{t("footer.legal", "Informations")}</h4>
                    <ul className="space-y-3">
                        {["footer.mentions", "footer.accessibility", "footer.contact"].map((item, index) => (
                            <li key={index}>
                                <Link to={`/${item.split(".")[1]}`} className="relative group text-gray-700 hover:text-green-500 transition">
                                    {t(item)}
                                    <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-green-500 transition-all duration-300 group-hover:w-full"></span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Copyright */}
                <div className="md:col-span-4 text-center pt-8 border-t text-gray-500 text-xs">
                    © {new Date().getFullYear()} Administration DZ. {t("footer.rights", "Tous droits réservés.")}.
                </div>
            </div>
        </footer>
    );
}
