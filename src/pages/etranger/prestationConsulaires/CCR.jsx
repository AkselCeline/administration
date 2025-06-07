import React from "react";
import TabbedPage from "../../../components/TabbedPage";

const tabs = [
    {
        id: "general",
        label: "Conditions générales",
        title: "Les conditions générales",
        content: (
            <>
                <p>
                    Les ressortissants algériens immatriculés au consulat général d’Algérie à Paris, depuis au moins trois (3) ans, désirant rentrer définitivement en Algérie, peuvent dans la limite du montant fixé par la loi, importer en franchise de droits et taxes douanières :
                </p>
                <ul className="list-disc ml-6 space-y-1">
                    <li>leurs effets et objets, y compris, le mobilier destiné à leur usage personnel.</li>
                    <li>Un véhicule de tourisme neuf ou un véhicule utilitaire neuf ou un véhicule à deux roues neuf soumis à une immatriculation.</li>
                </ul>
                <p>La valeur maximale admise, y compris le véhicule :</p>
                <ul className="list-disc ml-6 space-y-1">
                    <li>
                        Huit millions de dinar Algérien (8.000.000 DA), valeur calculée au taux du jour,  pour les travailleurs stagiaires et étudiants en formation à l’étranger.
                    </li>
                    <li>
                        Dix millions de dinar Algérien (10.000.000 DA), valeur calculée au taux du jour,  pour les autres nationaux.
                    </li>
                </ul>
                <p>
                    Tout dépassement du plafond autorisé sera soumis au régime général de dédouanement.
                </p>
                <p><strong>Conformément à la législation et la réglementation en vigueur :</strong></p>
                <ul className="list-disc ml-6 space-y-1">
                    <li>le véhicule doit être neuf et introduit en Algérie dans un délai d’un mois.</li>
                    <li>La présence du titulaire est exigée lors des formalités de dédouanement.</li>
                    <li>Le déménagement doit être effectué dans un délai de six (06) mois à compter de la date d’établissement du CCR.</li>
                    <li>La demande du C.C.R est traitée dans un délai de 15 jours à partir de la date de dépôt du dossier.</li>
                </ul>
            </>
        ),
    },
    {
        id: "droit_timbre",
        label: "Droit du timbre",
        title: "Droit du timbre",
        content: (
            <>
                <ul className="list-disc ml-6 space-y-1">
                    <li>Quatre milles dinars Algériens (4.000 DA) pour le certificat de changement de résidence. Ce droit est augmenté de quatre cents dinars Algériens (400 DA)  par palier de dix milles dinars Algériens (10.000 DA) de la valeur déclarée sur l’inventaire;</li>
                    <li>Deux cents dinars Algériens (200 DA) pour la légalisation de la carte d’immatriculation consulaire;</li>
                    <li>Deux cents dinars Algériens (200 DA) pour la légalisation de la carte grise;</li>
                    <li>Deux cents dinars Algériens (200 DA) pour la légalisation de l’attestation de radiation;</li>
                    <li>Deux cents dinars Algériens (200 DA) pour la légalisation de l’inventaire;</li>
                    <li>Deux cents dinars Algériens (200 DA) pour la légalisation de la déclaration sur l’honneur.</li>
                </ul>
                <p>
                    Selon les dispositions des articles 12 et 13 de la loi de finances pour 2016, qui modifient et complètent l’article 136 du Code du timbre, le taux fixe appliqué aux droits du timbre est : <strong>01 EURO = 100 DA</strong>.
                </p>
            </>
        ),
    },
    {
        id: "conditions_obtention",
        label: "Conditions d’obtention",
        title: "Les conditions d’obtention du C.C.R",
        content: (
            <>
                <ul className="list-disc ml-6 space-y-1">
                    <li>être âgé de plus de 19 ans.</li>
                    <li>être immatriculé au consulat à titre principal.</li>
                    <li>N’avoir jamais bénéficié de CCR auprès d’un poste diplomatique ou consulaire, ni en son nom, ni en celui du conjoint.</li>
                    <li>Justifier d’un séjour ininterrompu de plus de trois ans à la date du dépôt du dossier.</li>
                    <li>Pour les femmes célibataires, veuves ou divorcées, un acte de naissance portant la mention est obligatoire.</li>
                </ul>
                <p className="font-semibold text-red-600"><strong>Important :</strong> Il est recommandé de ne commander le véhicule qu’après approbation du dossier CCR par les services consulaires.</p>
            </>
        ),
    },
    {
        id: "conditions_vehicule",
        label: "Conditions véhicules",
        title: "Conditions d’admission des véhicules en franchise",
        content: (
            <>
                <ul className="list-disc ml-6 space-y-1">
                    <li>La cylindrée du véhicule de tourisme doit être inférieure ou égale à 1800 cm³ pour les véhicules « essence » et à 2000 cm³ pour les véhicules « diesel ».</li>
                    <li>Tout dépassement de cylindrée sera exclu des avantages liés au CCR et soumis au régime général de dédouanement.</li>
                    <li>Le poids total en charge du véhicule utilitaire doit être égal ou inférieur à 05 tonnes 950 kg.</li>
                    <li>Le véhicule à deux (2) roues doit être soumis à l’immatriculation.</li>
                    <li>Les bateaux de plaisance, scooters de mer, zodiacs, quads et autres embarcations sont soumis au paiement des droits et taxes.</li>
                </ul>
            </>
        ),
    },
    {
        id: "pieces_a_fournir",
        label: "Pièces à fournir",
        title: "Les pièces à fournir avant l’accord définitif",
        content: (
            <>
                <h3 className="font-semibold mt-4">1- Pour les salariés (es) :</h3>
                <ul className="list-disc ml-6 space-y-1">
                    <li>une demande manuscrite adressée au consul.</li>
                    <li>La carte d’immatriculation consulaire + deux photocopies de la carte d’immatriculation consulaire.</li>
                    <li>Un certificat de travail et les fiches de paie couvrant les trois (03) dernières années.</li>
                    <li>Deux photocopies de la première page du passeport en cours de validité.</li>
                    <li>Un titre de séjour ou la carte nationale d’identité française et une photocopie.</li>
                    <li>Une déclaration sur l’honneur attestant que l’intéressé(e) n’a jamais bénéficié d’un CCR.</li>
                </ul>

                <h3 className="font-semibold mt-4">2- Pour les non salariés (es) :</h3>
                <ul className="list-disc ml-6 space-y-1">
                    <li>une demande manuscrite adressée au consul.</li>
                    <li>La carte d’immatriculation consulaire + deux photocopies de la carte d’immatriculation consulaire.</li>
                    <li>Une attestation du Pôle emploi ou ex-Assedic pour les demandeurs d’emploi couvrant les trois dernières années.</li>
                    <li>Deux photocopies de la première page du passeport en cours de validité.</li>
                    <li>Un titre de séjour ou la carte nationale d’identité française et une photocopie.</li>
                    <li>Une déclaration sur l’honneur attestant que l’intéressé(e) n’a jamais bénéficié d’un CCR.</li>
                </ul>

                <h3 className="font-semibold mt-4">3- Pour les étudiants et stagiaires :</h3>
                <ul className="list-disc ml-6 space-y-1">
                    <li>une demande manuscrite adressée au consul.</li>
                    <li>La carte d’immatriculation consulaire + deux photocopies de la carte d’immatriculation consulaire.</li>
                    <li>Un certificat de scolarité couvrant les trois dernières années.</li>
                    <li>Une attestation de stage couvrant les trois dernières années.</li>
                    <li>Deux photocopies de la première page du passeport en cours de validité.</li>
                    <li>Un titre de séjour ou la carte nationale d’identité française et une photocopie.</li>
                    <li>Une déclaration sur l’honneur attestant que l’intéressé(e) n’a jamais bénéficié d’un CCR.</li>
                </ul>

                <h3 className="font-semibold mt-4">4- Pour les commerçants :</h3>
                <ul className="list-disc ml-6 space-y-1">
                    <li>une demande manuscrite adressée au consul.</li>
                    <li>Le registre de commerce et une photocopie.</li>
                    <li>La carte d’immatriculation consulaire + deux photocopies de la carte d’immatriculation consulaire.</li>
                    <li>La radiation d’inscription au registre de commerce et une photocopie.</li>
                    <li>Deux photocopies de la première page du passeport en cours de validité.</li>
                    <li>Le titre de séjour ou carte d’identité française et une photocopie.</li>
                    <li>Une déclaration sur l’honneur attestant que l’intéressé(e) n’a jamais bénéficié d’un CCR.</li>
                </ul>

                <h3 className="font-semibold mt-4">5- Pour les retraités et pensionnés :</h3>
                <ul className="list-disc ml-6 space-y-1">
                    <li>une demande manuscrite adressée au consul.</li>
                    <li>La carte d’immatriculation consulaire + deux photocopies de la carte d’immatriculation consulaire.</li>
                    <li>Une attestation de pension ou de retraite délivrée par l’organisme français payeur couvrant les trois dernières années.</li>
                    <li>Deux photocopies de la première page du passeport en cours de validité.</li>
                    <li>Le titre de séjour ou carte d’identité française et une photocopie.</li>
                    <li>Une déclaration sur l’honneur attestant que l’intéressé(e) n’a jamais bénéficié d’un CCR.</li>
                </ul>
            </>
        ),
    },
    {
        id: "complement_dossier",
        label: "Complément de dossier",
        title: "Le complément de dossier à fournir après l’accord",
        content: (
            <>
                <h3 className="font-semibold mt-4">1- Pour le véhicule :</h3>
                <ul className="list-disc ml-6 space-y-1">
                    <li>le certificat d’immatriculation provisoire (adresse en Algérie).</li>
                    <li>La facture d’achat du véhicule;</li>
                    <li>Le certificat de conformité.</li>
                    <li>Une attestation « date de fabrication du véhicule »</li>
                </ul>

                <h3 className="font-semibold mt-4">2- Pour le mobilier et les effets personnels :</h3>
                <p>
                    L’inventaire chiffré en deux exemplaires en y incluant le véhicule.
                </p>

                <h3 className="font-semibold mt-4">3- Changement de résidence avec transfert d’activité ou avec création d’une activité nouvelle :</h3>
                <p>
                    Dans le cadre de ses activités ou la création d’une activité autre que celle exercée à l’étranger, tout ressortissant algérien peut bénéficier du droit d’importer sans paiement, dédouaner en dispense des formalités du contrôle du commerce extérieur et en exonération des droits de taxes, les matériels et équipements destinés à l’usage de l’activité préalablement agréée, conformément à la législation en vigueur.
                </p>
                <p>
                    Lorsqu’il s’agit d’une nouvelle activité autorisée, les matériels et équipements doivent être neufs ou révisés sous garantie à la date d’importation.
                </p>
                <p>
                    Toutefois, les véhicules de transport des marchandises entrant dans le cadre d’une activité dûment agréée en Algérie doivent être importés à l’état neuf. Il s’agit de camions, semi-remorques et remorques, bétonnières, tracteurs-routiers et véhicules à usage spécial.
                </p>
                <p><strong>Pièces à fournir :</strong></p>
                <ul className="list-disc ml-6 space-y-1">
                    <li>un dossier contenant les mêmes pièces qu’un CCR ordinaire et obéissant aux mêmes conditions (inventaire des matériels et équipements).</li>
                    <li>L’inscription au registre de commerce auprès de la Chambre algérienne de commerce et d’industrie.</li>
                    <li>L’agrément délivré par les autorités algériennes concernées pour l’exercice, en Algérie, de l’activité à transférer ou à créer.</li>
                    <li>Un justificatif de l’exercice effectif d’une activité à l’étranger pendant les trois dernières années précédant la date de transfert.</li>
                    <li>Une attestation déclarant sur l’honneur que ces matériels et équipements admis en exonération ne seront ni cédés ni prêtés pendant trois (03) ans, sans avoir été au préalable acquittés des droits et taxes.</li>
                </ul>
            </>
        ),
    },
    {
        id: "levée_incessibilité",
        label: "Levée d’incessibilité",
        title: "Les conditions de levée de l’incessibilité du véhicule importé",
        content: (
            <ul className="list-disc ml-6 space-y-1">
                <li>Avant deux (02) ans : le paiement intégral des droits et taxes exigibles</li>
                <li>Entre deux (02) ans et cinq (05) ans : le paiement de la moitié des taxes exigibles.</li>
                <li>Au-delà de cinq (05) ans : la levée d’incessibilité est de droit et sans conditions.</li>
            </ul>
        ),
    },
];

const CCR = () => {
    return (
        <TabbedPage
            title="Certificat de Changement de Résidence (CCR)"
            printTitle="Certificat de Changement de Résidence (CCR) - Consulat d’Algérie"
            tabs={tabs}
        />
    );
};

export default CCR;
