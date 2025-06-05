import { Link } from "react-router-dom";
import CollapseSection from "../../components/ui/CollapseSection";

export default function Visa() {
    return (
        <div className="p-6 max-w-4xl mx-auto">
            <h1 className="text-2xl font-bold text-blue-800 mb-6">🛂 Demandes de visa</h1>

            <CollapseSection title="🎫 Visa pour venir en Algérie">
                <ul className="list-disc pl-6 space-y-1 text-gray-700">
                    <li>Formulaire de demande</li>
                    <li>Photos d'identité</li>
                    <li>Réservation d'hôtel</li>
                    <li>Assurance voyage</li>
                </ul>
            </CollapseSection>

            <CollapseSection title="🌍 Visa depuis l'Algérie vers l'étranger">
                <ul className="list-disc pl-6 space-y-1 text-blue-700">
                    <li className="flex items-center gap-2">
                        <img src="https://flagcdn.com/fr.svg" alt="France" className="w-5 h-5 align-middle"/>
                        <Link to="/etranger/visa/france" className="text-blue-800 hover:underline">Visa France</Link>
                    </li>

                    <li className="flex items-center gap-2">
                        <img src="https://flagcdn.com/es.svg" alt="France" className="w-5 h-5 align-middle"/>
                        <Link to="/etranger/visa/espagne" className="text-blue-800 hover:underline">Visa Espagne</Link></li>
                    <li className="flex items-center gap-2">
                        <img src="https://flagcdn.com/ca.svg" alt="France" className="w-5 h-5 align-middle"/>
                        <Link to="/etranger/visa/canada" className="text-blue-800 hover:underline">Visa Canada</Link></li>
                    <li className="flex items-center gap-2">
                        <img src="https://flagcdn.com/tr.svg" alt="France" className="w-5 h-5 align-middle"/>
                        <Link to="/etranger/visa/turquie" className="text-blue-800 hover:underline">Visa Turquie</Link></li>
                </ul>
            </CollapseSection>

        </div>
    );
}
