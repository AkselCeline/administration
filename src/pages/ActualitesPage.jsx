import React from "react";
import { useTranslation } from "react-i18next";

export default function ActualitesPage() {
    const { t } = useTranslation();

    return (
        <main className="p-8">
            <h2 className="text-2xl font-bold mb-4">{t("actualites")}</h2>
            <ul className="list-disc pl-6 space-y-2">
                <li>{t("news1")}</li>
                <li>{t("news2")}</li>
                <li>{t("news3")}</li>
            </ul>
        </main>
    );
}
