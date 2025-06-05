import React from "react";
import { useTranslation } from "react-i18next";

export default function FichesPage() {
    const { t } = useTranslation();

    return (
        <main className="p-8">
            <h2 className="text-2xl font-bold mb-4">{t("fiches")}</h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>{t("amanaAccount")}</li>
                <li>{t("universityRegistration")}</li>
            </ul>
        </main>
    );
}
