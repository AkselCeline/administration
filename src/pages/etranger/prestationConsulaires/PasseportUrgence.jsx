// pages/PasseportUrgence.jsx
import TabbedPage from "../../../components/TabbedPage";

const PasseportUrgence = () => {
    const tabs = [
        {
            id: "generalites",
            label: "Généralités",
            content: (
                <>
                    <p>Le passeport d’urgence est un document de voyage institué par le décret exécutif n°16-58 du 3 février 2016.</p>
                    <p>Il est valable 1 an, non renouvelable, et délivré de manière exceptionnelle pour raisons urgentes.</p>
                </>
            ),
        },
        {
            id: "conditions",
            label: "Conditions",
            content: (
                <ul className="list-disc ml-6 space-y-1">
                    <li>Ne pas avoir de passeport biométrique valide.</li>
                    <li>Justifier d'une urgence (familiale, judiciaire, etc.).</li>
                </ul>
            ),
        },
        {
            id: "documents",
            label: "Documents",
            content: (
                <ul className="list-disc ml-6 space-y-1">
                    <li>Fiche de renseignement</li>
                    <li>Actes de naissance (demandeur et père)</li>
                    <li>Justificatif de domicile (&lt; 3 mois)</li>
                    <li>Photos, pièce d’identité, justificatif d’urgence</li>
                </ul>
            ),
        },
        {
            id: "modalites",
            label: "Modalités",
            content: (
                <ul className="list-disc ml-6 space-y-1">
                    <li>Sur RDV les mercredis et jeudis (en présentiel)</li>
                    <li>Ou par courrier : dossier complet uniquement</li>
                </ul>
            ),
        },
        {
            id: "tarifs",
            label: "Frais & Taxes",
            content: (
                <ul className="list-disc ml-6 space-y-1">
                    <li>60€ (plein tarif), 30€ (étudiants/mineurs)</li>
                    <li>+100€ en cas de perte (50€ étudiant/mineur)</li>
                </ul>
            ),
        },
    ];

    return <TabbedPage title="Passeport d’Urgence" tabs={tabs} />;
};

export default PasseportUrgence;
