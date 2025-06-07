import React from "react";
import TabbedPage from "../../../components/TabbedPage";
const tabs = [
    {
        id: "transfert",
        label: "Transfert de dossier",
        title: "Le transfert de dossier consulaire",
        content: (
            <>
                <p>
                    Tout changement de lieu de résidence, hors de la circonscription d’immatriculation consulaire doit être suivi par le transfert du dossier consulaire vers le nouveau poste consulaire.
                </p>
                <p>
                    La demande de transfert du dossier consulaire doit être formulée par le ressortissant auprès du consulat qui couvre le nouveau lieu de résidence.
                </p>
                <p>
                    La demande de transfert peut être déposée au niveau du Consulat Général ou transmise par courriel à l’adresse suivante :{" "}
                    <a href="mailto:contact@consulat-paris-algerie.fr" className="text-blue-600 underline">
                        contact@consulat-paris-algerie.fr
                    </a>
                </p>
                <p>Elle doit être accompagnée des pièces suivantes :</p>
                <ul className="list-disc ml-6">
                    <li>Copie de la carte consulaire établie par le consulat détenteur du dossier.</li>
                    <li>Copie du titre de séjour (établi par les Préfectures des départements de couverture : 18, 36, 37, 41, 45, 75, 97, 98) ou de la carte nationale d’identité française.</li>
                    <li>Un justificatif de domicile récent (moins de six mois).</li>
                </ul>
            </>
        ),
    },
    {
        id: "important",
        label: "Important",
        title: "Important",
        content: (
            <p className="font-semibold text-red-600">
                Une personne qui a élu domicile dans un département autre que celui de son immatriculation consulaire, ne peut, avant le transfert de son dossier du consulat antérieur, prétendre à la délivrance de documents d’identité et de voyage au niveau du consulat couvrant le nouveau lieu de résidence.
            </p>
        ),
    },
];

const TransfertDossier = () => (
    <TabbedPage
        title="Transfert de dossier consulaire"
        printTitle="Transfert de dossier consulaire - Consulat d’Algérie"
        tabs={tabs}
    />
);

export default TransfertDossier;