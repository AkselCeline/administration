import React, { useState } from 'react';
import consulats from '../../src/ressources/consulats.json';

// Extraction des régions et départements uniques
const regions = [...new Set(consulats.map(c => c.region))].sort();
const departements = [...new Set(consulats.map(c => c.departement))].sort();

export default function RechercheConsulat() {
    const [query, setQuery] = useState('');
    const [region, setRegion] = useState('');
    const [departement, setDepartement] = useState('');

    const results = consulats.filter((consulat) => {
        const matchesQuery = query === '' || (
            consulat.codePostal.startsWith(query) ||
            consulat.villesDesservies.some((ville) =>
                ville.toLowerCase().includes(query.toLowerCase())
            )
        );

        const matchesRegion = region === '' || consulat.region === region;
        const matchesDepartement = departement === '' || consulat.departement === departement;

        return matchesQuery && matchesRegion && matchesDepartement;
    });

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">🔎 Trouver mon consulat</h1>

            {/* Barre de recherche */}
            <input
                type="text"
                placeholder="Rechercher par ville ou code postal"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded mb-4 shadow-sm"
            />

            {/* Filtres supplémentaires */}
            <div className="flex flex-col md:flex-row gap-4 mb-6">
                <select
                    value={region}
                    onChange={(e) => setRegion(e.target.value)}
                    className="p-2 border border-gray-300 rounded"
                >
                    <option value="">Toutes les régions</option>
                    {regions.map((r) => (
                        <option key={r} value={r}>{r}</option>
                    ))}
                </select>

                <select
                    value={departement}
                    onChange={(e) => setDepartement(e.target.value)}
                    className="p-2 border border-gray-300 rounded"
                >
                    <option value="">Tous les départements</option>
                    {departements.map((d) => (
                        <option key={d} value={d}>{d}</option>
                    ))}
                </select>
            </div>

            {/* Résultats */}
            {query || region || departement ? (
                results.length === 0 ? (
                    <p className="text-red-600">Aucun consulat trouvé pour ces critères.</p>
                ) : (
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {results.map((consulat, index) => (
                            <div key={index} className="border rounded-xl shadow p-4 bg-white space-y-2">
                                <h2 className="text-lg font-semibold">{consulat.nom}</h2>
                                <p><strong>Adresse :</strong> {consulat.adresse}</p>
                                <p><strong>Téléphone :</strong> {consulat.telephone}</p>
                                <p><strong>Email :</strong> <a href={`mailto:${consulat.email}`} className="text-blue-600 underline">{consulat.email}</a></p>
                                <p><strong>Villes desservies :</strong> {consulat.villesDesservies.join(', ')}</p>
                            </div>
                        ))}
                    </div>
                )
            ) : (
                <p className="text-gray-600">Veuillez entrer un mot-clé ou sélectionner une région/département.</p>
            )}
        </div>
    );
}

