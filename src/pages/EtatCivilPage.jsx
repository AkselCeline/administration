// import React from "react";
// import { useTranslation } from "react-i18next";
// const express = require("express");
// const axios = require("axios");
// const cheerio = require("cheerio");
// const cors = require("cors");
// export default function EtatCivilPage() {
//     const { t } = useTranslation();
//
//     return (
//         <main className="p-8">
//             <h2 className="text-2xl font-bold mb-4">{t("etatCivil")}</h2>
//             <ul className="list-disc pl-6 space-y-2 text-gray-700">
//                 <li>{t("birthCertificate")}</li>
//                 <li>{t("marriageCertificate")}</li>
//                 <li>{t("deathCertificate")}</li>
//             </ul>
//         </main>
//     );
// }




import React, { useState, useEffect } from "react";
import axios from "axios";

export default function EtatCivilPage() {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:5000/scrape")
            .then(response => {
                console.log(response.data.info); // Vérifie si les données arrivent bien
                setData(response.data.info);
            })
            .catch(error => console.error("Erreur :", error));
    }, []);
    return (
        <div className="p-6">
            <h2 className="text-2xl font-bold">Informations sur l'acte de naissance</h2>
            <ul className="mt-4 list-disc pl-6">
                {data.map((item, index) => (
                    <li key={index} className="text-gray-800">{item}</li>
                ))}
            </ul>
        </div>
    );
}
