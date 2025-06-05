export default function Passeport() {
  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h2 className="text-xl font-bold text-blue-800 mb-4">📘 Renouvellement de passeport</h2>
      <p className="mb-2">Voici les documents requis :</p>
      <ul className="list-disc pl-5 space-y-1 text-gray-700">
        <li>Ancien passeport</li>
        <li>Copie de la carte consulaire</li>
        <li>Photo d'identité</li>
        <li>Formulaire rempli</li>
        <li>Justificatif de résidence</li>
      </ul>
    </div>
  );
}