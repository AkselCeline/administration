import React from "react";
import TabbedPage from "../../../components/TabbedPage";
const tabs = [
    {
        id: "declaration",
        label: "Déclaration de perte",
        title: "Déclaration de perte",
        content: (
            <>
                <p>
                    La présence de l’intéressé est obligatoire. Il doit être muni d’une pièce d’identité justifiant de sa nationalité algérienne et de la déclaration de perte ou de vol effectuée auprès des autorités de police françaises.
                </p>
                <p>
                    Il doit également renseigner le formulaire téléchargeable sur le site dans la rubrique formulaires.
                </p>
                <p>
                    Un droit de timbre de deux (02) euros est requis pour l’établissement de ladite déclaration.
                </p>
            </>
        ),
    },
];

const DeclarationPertePage = () => (
    <TabbedPage
        title="Déclaration de perte"
        printTitle="Déclaration de perte - Consulat d’Algérie"
        tabs={tabs}
    />
);

export default DeclarationPertePage;
