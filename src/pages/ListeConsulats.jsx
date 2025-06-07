import consulats from '../../src/ressources/consulats.json';
import React from 'react';

export default function ListeConsulats() {
    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">📄 Liste complète des consulats algériens en France</h1>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {consulats.map((consulat, index) => (
                    <div key={index} className="border rounded-xl shadow p-4 space-y-2 bg-white">
                        <h2 className="text-lg font-semibold">{consulat.nom}</h2>
                        {/*<p><strong>Responsable :</strong> {consulat.responsable}</p>*/}
                        <p><strong>Adresse :</strong> {consulat.adresse}</p>
                        <p><strong>Téléphone :</strong> {consulat.telephone}</p>
                        <p><strong>Email :</strong> <a href={`mailto:${consulat.email}`} className="text-blue-600 underline">{consulat.email}</a></p>
                        <p><strong>Département :</strong> {consulat.departement}</p>
                        <p><strong>Région :</strong> {consulat.region}</p>
                        <p><strong>Villes desservies :</strong> {consulat.villesDesservies.join(', ')}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
