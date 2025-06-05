// components/HeaderTop.jsx

import { Link } from "react-router-dom";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { useTranslation } from "react-i18next";

export default function HeaderTop() {
    const { t, i18n } = useTranslation();

    return (
        <div className="flex items-center justify-between w-full px-4 py-4 gap-6">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2">
                <img
                    src="/images/logo1.svg"
                    alt="Logo"
                    className="h-40 w-auto"
                    loading="lazy"
                />
            </Link>
            {/* Search + Langues */}
            <div className="hidden md:flex items-center gap-4">
                <div className="w-64">
                    <Input placeholder={t("searchPlaceholder")} />
                </div>
                <div className="flex gap-2">
                    <Button variant="secondary" onClick={() => i18n.changeLanguage("fr")}>
                        Fr
                    </Button>
                    <Button variant="secondary" onClick={() => i18n.changeLanguage("ar")}>
                        عر
                    </Button>
                </div>
            </div>
        </div>
    );
}
