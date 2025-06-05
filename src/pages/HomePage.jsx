import React from "react";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export default function HomePage() {
    const { t, i18n } = useTranslation();

    return (
        <div className={`min-h-screen flex flex-col bg-gray-50 text-gray-900 ${i18n.language === "ar" ? "rtl" : ""}`}>

            {/* SECTION ACCUEIL */}
            <section className="p-8 text-center">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">{t("welcomeMessage")}</h2>
                <p className="text-lg text-gray-600 mb-6">{t("welcomeDescription")}</p>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-6 justify-center">
                    <Card>
                        <CardContent className="text-center">
                            <h3 className="text-xl font-semibold">{t("actualites")}</h3>
                            <Link to="/actualites">
                                <Button className="mt-4 bg-green-600 hover:bg-green-700 text-white">
                                    {t("explorer")}
                                </Button>
                            </Link>
                        </CardContent>
                    </Card>
                    {/* Répétez les autres sections ici si besoin */}
                </div>
            </section>

            {/* FOOTER */}
            {/*<footer className="text-center text-sm text-gray-600 py-6 border-t bg-white">*/}
            {/*    <p>{t("footer")}</p>*/}
            {/*</footer>*/}
        </div>
    );
}
