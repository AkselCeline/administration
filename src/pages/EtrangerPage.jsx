import { Link } from "react-router-dom";
import CollapseSection from '../components/ui/CollapseSection';

export default function EtrangerPage() {

    return (
        <div className="p-6 max-w-4xl mx-auto">
            <h1 className="text-2xl font-bold text-blue-800 mb-6">🌍 Services aux citoyens à l’étranger</h1>

            <CollapseSection title="🛃 Services consulaires">
                <ul className="list-disc pl-5 space-y-1 text-blue-700">
                    <li><Link to="/etranger/passeport">Passeport</Link></li>
                    <li><Link to="/etranger/passeport-urgence">Passeport d’Urgence</Link></li>
                    <li><Link to="/etranger/immatriculation">Immatriculation consulaire</Link></li>
                    <li><Link to="/etranger/carte-nationale">La carte nationale d’identité</Link></li>
                    <li><Link to="/etranger/transfert-dossier-consulaire">Transfert de dossier consulaire</Link></li>
                    <li><Link to="/etranger/declaration-perte">Déclaration de perte</Link></li>
                    <li><Link to="/etranger/radiation">Radiation des registres d’immatriculation</Link></li>
                    <li><Link to="/etranger/ccr">Certificat de changement de résidence (CCR)</Link></li>
                </ul>
            </CollapseSection>

            <CollapseSection title="🛂 Demande de visa">
                <ul className="list-disc pl-5 space-y-1 text-blue-700">
                    <li><Link to="/etranger/visa">Demande de visa pour l'Algérie</Link></li>
                </ul>
            </CollapseSection>
        </div>
    );



}
