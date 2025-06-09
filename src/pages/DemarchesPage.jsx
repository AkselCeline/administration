import React from "react";
import { useTranslation } from "react-i18next";
import {
    FaFingerprint,
    FaCar,
    FaChild,
    FaIdCard,
    FaFileAlt,
    FaHome,
    FaPlane,
    FaCheckCircle,
    FaSyncAlt,
    FaHourglassHalf,
    FaFileSignature,
} from "react-icons/fa";
import CollapseSection from "../components/ui/CollapseSection";

export default function DemarchesPage() {
    const { t } = useTranslation();
    const minorCases = t("minorTravelCases", { returnObjects: true });
    const cases = t("vehicleRegistrationCases", { returnObjects: true });
    const nationalIDInfo = t("nationalIDCardInfo", { returnObjects: true });

    return (
        <main className="p-8">
            <h2 className="text-2xl font-bold mb-4">{t("demarches")}</h2>

            {/* Suivi biométrique */}
            <CollapseSection
                defaultOpen
                title={t("biometricTracking")}
                icon={<FaFingerprint className="text-blue-600 text-2xl mr-2" />}
            >
                <ul className="list-disc pl-6 space-y-2 text-blue-700">
                    <li>
                        <a
                            href="https://passeport.interieur.gov.dz/fr/suivi_fr/suivi_demande"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="underline hover:text-blue-900"
                        >
                            {t("trackAlgerianPassport")}
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://passeport.interieur.gov.dz/Fr/SuiviCNIBE_Fr/Suivi%20la%20demande%20de%20la%20carte%20national%20d'identit%C3%A9%20biom%C3%A9trique%20%C3%A9lectronique"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="underline hover:text-blue-900"
                        >
                            {t("trackAlgerianIDCard")}
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://passeport.interieur.gov.dz/Fr/SuiviPCBEP_Fr/Suivi%20la%20demande%20du%20permis%20de%20conduire"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="underline hover:text-blue-900"
                        >
                            {t("trackDrivingLicense")}
                        </a>
                    </li>
                </ul>
            </CollapseSection>

            {/* Carte d'immatriculation des véhicules */}
            <CollapseSection
                defaultOpen
                title={t("vehicleRegistrationCard")}
                icon={<FaCar className="text-green-600 text-2xl mr-2" />}
            >
                {Object.entries(cases).map(([key, caseInfo]) => (
                    <CollapseSection key={key} title={caseInfo.title} icon={<FaFileAlt className="text-gray-600 text-xl mr-2" />}>
                        <ul className="list-disc pl-6 space-y-2">
                            {caseInfo.requirements.map((req, index) => (
                                <li key={index}>{req}</li>
                            ))}
                        </ul>
                    </CollapseSection>
                ))}
            </CollapseSection>

            {/* Sortie des mineurs à l'étranger */}
            <CollapseSection
                defaultOpen={false}
                title={t("minorTravelAbroad")}
                icon={<FaChild className="text-blue-600 text-2xl mr-2" />}
            >
                {Object.entries(minorCases).map(([key, caseInfo]) => (
                    <CollapseSection key={key} title={caseInfo.title} icon={<FaPlane className="text-indigo-600 text-xl mr-2" />}>
                        <ul className="list-disc pl-6 space-y-2">
                            {caseInfo.requirements.map((req, index) => (
                                <li key={index}>{req}</li>
                            ))}
                        </ul>
                    </CollapseSection>
                ))}
            </CollapseSection>

            {/* Carte nationale d’identité */}
            <CollapseSection
                defaultOpen
                title={t("nationalIDCard")}
                icon={<FaIdCard className="text-purple-600 text-2xl mr-2" />}
            >
                <section className="mb-4">
                    <p className="text-gray-700 mb-2">{nationalIDInfo.introduction}</p>

                    {/* Composition du dossier de demande */}
                    <CollapseSection title={nationalIDInfo.requestFile.title} icon={<FaFileSignature className="text-indigo-600 text-lg mr-2" />}>
                        <CollapseSection title={nationalIDInfo.requestFile.residingInAlgeria.title} icon={<FaHome className="text-green-600 text-lg mr-2" />}>
                            <ul className="list-disc pl-6 space-y-1">
                                {nationalIDInfo.requestFile.residingInAlgeria.requirements.map((req, i) => (
                                    <li key={i}>{req}</li>
                                ))}
                            </ul>
                        </CollapseSection>
                        <CollapseSection title={nationalIDInfo.requestFile.residingAbroad.title} icon={<FaPlane className="text-indigo-600 text-lg mr-2" />}>
                            <ul className="list-disc pl-6 space-y-1">
                                {nationalIDInfo.requestFile.residingAbroad.requirements.map((req, i) => (
                                    <li key={i}>{req}</li>
                                ))}
                            </ul>
                        </CollapseSection>
                    </CollapseSection>

                    {/* Retrait */}
                    <CollapseSection title={nationalIDInfo.withdrawal.title} icon={<FaCheckCircle className="text-green-700 text-lg mr-2" />}>
                        <ul className="list-disc pl-6 space-y-1">
                            {nationalIDInfo.withdrawal.steps.map((step, i) => (
                                <li key={i}>{step}</li>
                            ))}
                        </ul>
                    </CollapseSection>

                    {/* Renouvellement */}
                    <CollapseSection title={nationalIDInfo.renewal.title} icon={<FaSyncAlt className="text-yellow-600 text-lg mr-2" />}>
                        <p className="font-semibold mb-1">{t("nationalIDCardInfo.renewal.title")}</p>
                        <ul className="list-disc pl-6 space-y-1 mb-2">
                            {nationalIDInfo.renewal.reasons.map((reason, i) => (
                                <li key={i}>{reason}</li>
                            ))}
                        </ul>
                        {nationalIDInfo.renewal.notes.map((note, i) => (
                            <p key={i} className="text-sm text-gray-600 mb-1">{note}</p>
                        ))}

                        <CollapseSection title={nationalIDInfo.renewal.renewalFile.title} icon={<FaFileAlt className="text-gray-600 text-xl mr-2" />}>
                            <ul className="list-disc pl-6 space-y-1">
                                {nationalIDInfo.renewal.renewalFile.requirements.map((item, i) => (
                                    <li key={i}>{item}</li>
                                ))}
                            </ul>
                        </CollapseSection>
                    </CollapseSection>

                    {/* Validité */}
                    <CollapseSection title={nationalIDInfo.validity.title} icon={<FaHourglassHalf className="text-orange-600 text-lg mr-2" />}>
                        <p>{nationalIDInfo.validity.details}</p>
                    </CollapseSection>

                    {/* Formulaires */}
                    <CollapseSection title={nationalIDInfo.forms.title} icon={<FaFileSignature className="text-indigo-600 text-lg mr-2" />}>
                        <ul className="list-disc pl-6 space-y-1">
                            <li>
                                <a
                                    href="https://www.interieur.gov.dz/images/pdf/formulaire_Demande_CNIBE_30-08-2016.pdf"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="underline text-blue-700 hover:text-blue-900"
                                >
                                    {nationalIDInfo.forms.withPassport}
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://www.interieur.gov.dz/images/pdf/formulaire_Bio1.pdf"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="underline text-blue-700 hover:text-blue-900"
                                >
                                    {nationalIDInfo.forms.withoutPassport}
                                </a>
                            </li>
                        </ul>
                    </CollapseSection>
                </section>
            </CollapseSection>
        </main>
    );
}
