import React from "react";
import TabbedPage from "../../../components/TabbedPage";
const tabs = [
    {
        id: "radiation",
        label: "Radiation des registres",
        title: "Radiation des registres d’immatriculation",
        content: (
            <>
                <p>
                    Conformément aux articles 36 du décret présidentiel n° 02-405 du 26 novembre 2002 relatif à la fonction consulaire, notamment les articles 26 et 27, la radiation des registres d’immatriculation consulaire est effectuée dans les cas suivants :
                </p>
                <ul className="list-disc ml-6">
                    <li>Décès.</li>
                    <li>Retour définitif en Algérie.</li>
                    <li>Changement de circonscription consulaire.</li>
                    <li>Sur demande manuscrite sollicitant la radiation.</li>
                    <li>Absence pendant plus de 10 ans.</li>
                </ul>
                <p>
                    La radiation des registres d’immatriculation entraîne la radiation de la liste électorale lors des révisions annuelles et exceptionnelles qui permettent d’assainir le fichier électoral.
                </p>
                <p>
                    Un droit de timbre de deux (02) euros est requis pour l’établissement d’une attestation de radiation.
                </p>
            </>
        ),
    },
];

const Radiation = () => (
    <TabbedPage
        title="Radiation des registres d’immatriculation"
        printTitle="Radiation des registres d’immatriculation - Consulat d’Algérie"
        tabs={tabs}
    />
);

export default Radiation;
