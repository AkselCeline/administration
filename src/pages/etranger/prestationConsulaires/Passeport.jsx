// pages/PasseportBiometrique.jsx
import TabbedPage from "../../../components/TabbedPage";
import Section from "../../../components/ui/Section";
// import Section from "@/components/Section";

const Passeport = () => {
    const tabs = [
        {
            id: "validite",
            label: "Validité & Renouvellement",
            content: (
                <Section>
                    <p>
                        Passeport valide 10 ans (majeurs), 5 ans (mineurs &lt; 19 ans).
                        Renouvellement possible 6 mois avant expiration ou en cas de pages saturées.
                    </p>
                </Section>
            ),
        },
        {
            id: "enfants",
            label: "Présence des enfants",
            content: (
                <Section>
                    <p>
                        Moins de 12 ans : présence non obligatoire si photos conformes. &gt;12 ans :
                        présence obligatoire avec le père ou représentant légal.
                    </p>
                    <p>Demande par la mère possible si :</p>
                    <ul className="list-disc ml-6">
                        <li>Le père est décédé</li>
                        <li>Le père n’est pas algérien</li>
                        <li>Elle a la garde légale après divorce</li>
                        <li>Le père est absent (autorisation légalisée)</li>
                    </ul>
                </Section>
            ),
        },
        {
            id: "documents",
            label: "Documents à fournir",
            content: (
                <Section>
                    <ul className="list-disc ml-6">
                        <li>Carte consulaire valide (&lt; 5 ans)</li>
                        <li>Formulaire rempli (+ annexe pour kafala)</li>
                        <li>Acte de naissance 12s (via consulat ou internet)</li>
                        <li>Titre de séjour ou carte d’identité</li>
                        <li>Attestation de travail</li>
                        <li>Justificatif de domicile (&lt; 6 mois)</li>
                        <li>2 photos aux normes ICAO</li>
                        <li>Ancien passeport ou déclaration de perte</li>
                        <li>Justificatif de scolarité (mineurs)</li>
                    </ul>
                </Section>
            ),
        },
        {
            id: "tarifs",
            label: "Tarifs",
            content: (
                <Section>
                    <h3 className="font-medium">Passeport 28 pages</h3>
                    <ul className="list-disc ml-6">
                        <li>60 € : adulte (≥ 19 ans)</li>
                        <li>30 € : mineur / étudiant</li>
                    </ul>
                    <h3 className="font-medium mt-2">Passeport 48 pages</h3>
                    <ul className="list-disc ml-6">
                        <li>90 € : adulte (≥ 19 ans)</li>
                        <li>45 € : mineur / étudiant</li>
                    </ul>
                </Section>
            ),
        },
        {
            id: "remarques",
            label: "Remarques",
            content: (
                <Section>
                    <ul className="list-disc ml-6">
                        <li>Femmes mariées/divorcées : fournir acte de mariage ou divorce</li>
                        <li>Groupe sanguin : à renseigner sur le formulaire</li>
                    </ul>
                </Section>
            ),
        },
        {
            id: "retrait",
            label: "Retrait",
            content: (
                <Section>
                    <p>
                        Vérifier la disponibilité sur le site du consulat (« Mon passeport est-il prêt ? »).
                        Présence obligatoire (&gt;12 ans) pour empreintes.
                    </p>
                    <p>Documents :</p>
                    <ul className="list-disc ml-6">
                        <li>Récépissé de dépôt</li>
                        <li>Ancien passeport ou déclaration de perte</li>
                    </ul>
                </Section>
            ),
        },
        {
            id: "important",
            label: "Important",
            content: (
                <Section>
                    <p  className="font-semibold text-red-600">
                        Le passeport doit être retiré dès notification. Il est détruit après 6 mois
                        si non retiré. Le renouvellement coûtera le double sauf cas de force majeure.
                    </p>
                </Section>
            ),
        },
    ];

    return (
        <TabbedPage
            title="Passeport Biométrique Algérien"
            tabs={tabs}
        />
    );
};

export default Passeport;
