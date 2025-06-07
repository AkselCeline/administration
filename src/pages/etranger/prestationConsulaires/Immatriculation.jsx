import React from "react";
import TabbedPage from "../../../components/TabbedPage";

const tabs = [
    {
        id: "info",
        label: "Informations générales",
        title: "Informations Générales",
        content: (
            <>
                <p>
                    L’immatriculation consulaire est nécessaire pour bénéficier des prestations du Consulat Général d’Algérie à Paris.
                    Elle concerne les ressortissants algériens de plus de 19 ans résidant dans les départements : 18, 36, 37, 41, 45, 75, 97, 98.
                </p>
                <p>
                    La présence de l’intéressé est obligatoire. Tout changement de situation ou déménagement doit être signalé.
                </p>
            </>
        ),
    },
    {
        id: "premiere",
        label: "1ʳᵉ immatriculation",
        title: "Première Immatriculation",
        content: (
            <ul className="list-disc ml-6 space-y-1">
                <li>Formulaire rempli et signé</li>
                <li>Passeport algérien (si existant) + visa</li>
                <li>Certificat de nationalité ou actes de naissance du demandeur, parent et grand-parent</li>
                <li>Décret de naturalisation (si concerné)</li>
                <li>Titre de séjour ou carte d’identité française valide</li>
                <li>Justificatif de domicile récent (&lt;6 mois)</li>
                <li>Justificatif d’emploi ou de scolarité</li>
                <li>2 photos (3,5 x 4,5 cm)</li>
                <li>Acte de mariage / jugement de divorce</li>
                <li>Conjoint et enfants mineurs : mêmes pièces</li>
            </ul>
        ),
    },
    {
        id: "renouvellement",
        label: "Renouvellement",
        title: "Renouvellement de la Carte",
        content: (
            <ul className="list-disc ml-6 space-y-1">
                <li>Titre de séjour ou carte d’identité française valide</li>
                <li>Justificatif de domicile récent</li>
                <li>Justificatif d’emploi ou de scolarité</li>
                <li>2 photos récentes (3,5 x 4,5 cm)</li>
                <li>Acte de mariage ou jugement de divorce</li>
            </ul>
        ),
    },
    {
        id: "reimmatriculation",
        label: "Ré-immatriculation",
        title: "Ré-immatriculation",
        content: (
            <p>
                Obligatoire après CCR, radiation ou 10 ans sans renouvellement. Les mêmes pièces que pour une première immatriculation sont exigées.
            </p>
        ),
    },
    {
        id: "radiation",
        label: "Radiation",
        title: "Radiation du Fichier",
        content: (
            <p>
                Automatique après 10 ans sans renouvellement ou sur demande. Elle entraîne la radiation de la liste électorale.
                Effective lors de la révision annuelle ou exceptionnelle.
            </p>
        ),
    },
    {
        id: "textes",
        label: "Textes de référence",
        title: "Textes de Référence",
        content: (
            <ul className="list-disc ml-6">
                <li>
                    Décret présidentiel n°02-405 du 21 Ramadhan 1423 (26 novembre 2002) relatif à la fonction consulaire
                </li>
                <li>
                    Article 16 de la Loi n°14-03 du 24 février 2014 relative aux titres et documents de voyage
                </li>
            </ul>
        ),
    },
];

const Immatriculation = () => {
    return (
        <TabbedPage
            title="Immatriculation Consulaire"
            printTitle="Immatriculation consulaire - Consulat d’Algérie"
            tabs={tabs}
        />
    );
};

export default Immatriculation;
