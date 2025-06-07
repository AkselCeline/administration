import React from "react";
import TabbedPage from "../../../components/TabbedPage";

const tabs = [
    {
        id: "info",
        label: "Informations générales",
        title: "Carte Nationale d’Identité Biométrique Electronique (CNIBE)",
        content: (
            <>
                <p>
                    Les ressortissants immatriculés au niveau du poste et détenteurs d’un passeport biométrique peuvent désormais solliciter l’obtention de la carte nationale d’identité biométrique. Celle-ci s’effectue uniquement en ligne, sans fournir de dossier administratif ni de frais supplémentaires.
                </p>
                <p>
                    La demande se fait via le lien du Ministère de l’Intérieur, des Collectivités Locales et de l’Aménagement du territoire :<br />
                    <a
                        href="https://passeport.interieur.gov.dz/fr/demandeCNIBEfr/Demande"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 underline"
                    >
                        https://passeport.interieur.gov.dz/fr/demandeCNIBEfr/Demande
                    </a>
                </p>
            </>
        ),
    },
    {
        id: "retrait",
        label: "Retrait CNIBE",
        title: "Retrait de la Carte Nationale d’Identité Biométrique Electronique (CNIBE)",
        content: (
            <>
                <p>
                    Le retrait de la carte CNIBE s’effectuera sur rendez-vous et la restitution de son ancienne carte.
                </p>
                <p>
                    En cas de perte ou de vol, une déclaration est faite au niveau du poste, sur présentation d’un justificatif délivré par les autorités compétentes du lieu de perte ou du vol.
                </p>
                <p>
                    Avant de se présenter, le demandeur est invité à vérifier sur le site-web du consulat général, rubrique « Votre Carte Nationale d’identité Biométrique Electronique (CNIBE) est-elle prête ? » si sa carte est disponible.
                </p>
            </>
        ),
    },
];

const CarteNationale = () => (
    <TabbedPage
        title="Carte Nationale d’Identité Biométrique Electronique (CNIBE)"
        printTitle="CNIBE - Consulat d’Algérie"
        tabs={tabs}
    />
);

export default CarteNationale;
