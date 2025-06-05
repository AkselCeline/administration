import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export default function Footer() {
    const { t } = useTranslation();

    return (
        <footer className="bg-white border-t mt-12">
            <div className="max-w-6xl mx-auto px-4 py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-sm text-gray-700">
                {/* Colonne 1 : Logo & description */}
                <div>
                    <Link to="/" className="flex items-center gap-2 mb-3">
                        <img src="/images/logo1.svg" alt="Logo" className="h-10 w-auto" />
                        <span className="text-lg font-semibold text-gray-800">
              Administration DZ
            </span>
                    </Link>
                    <p className="text-gray-600">
                        {t("footer.description", "Votre portail officiel pour toutes vos démarches administratives en Algérie.")}
                    </p>
                </div>

                {/* Colonne 2 : Navigation */}
                <div>
                    <h4 className="font-semibold mb-3">{t("footer.navigation", "Navigation")}</h4>
                    <ul className="space-y-2">
                        <li><Link to="/actualites" className="hover:underline">{t("nav.news")}</Link></li>
                        <li><Link to="/etat-civil" className="hover:underline">{t("nav.civil_status")}</Link></li>
                        <li><Link to="/demarches" className="hover:underline">{t("nav.procedures")}</Link></li>
                        <li><Link to="/fiches-pratiques" className="hover:underline">{t("nav.guides")}</Link></li>
                    </ul>
                </div>

                {/* Colonne 3 : Légal */}
                <div>
                    <h4 className="font-semibold mb-3">{t("footer.legal", "Informations")}</h4>
                    <ul className="space-y-2">
                        <li><Link to="/mentions-legales" className="hover:underline">{t("footer.mentions", "Mentions légales")}</Link></li>
                        <li><Link to="/accessibilite" className="hover:underline">{t("footer.accessibility", "Accessibilité")}</Link></li>
                        <li><Link to="/contact" className="hover:underline">{t("footer.contact", "Contact")}</Link></li>
                    </ul>
                </div>

                {/* Colonne 4 : Copyright */}
                <div className="md:col-span-4 text-center pt-6 border-t text-gray-500 text-xs">
                    © {new Date().getFullYear()} Administration DZ. {t("footer.rights", "Tous droits réservés.")}.
                </div>
            </div>
        </footer>
    );
}
