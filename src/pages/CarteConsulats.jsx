import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import consulats from '../../src/ressources/consulats.json';

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
    iconRetinaUrl:
        'https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon-2x.png',
    iconUrl: 'https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon.png',
    shadowUrl: 'https://unpkg.com/leaflet@1.9.3/dist/images/marker-shadow.png',
});

export default function CarteConsulats() {
    const positionFrance = [46.603354, 1.888334];

    return (
        <div className="h-screen w-full p-4">
            <h1 className="text-xl font-bold mb-4">🗺️ Carte des consulats algériens en France</h1>
            <MapContainer center={positionFrance} zoom={6} scrollWheelZoom className="h-full w-full rounded-lg shadow">
                <TileLayer
                    url="https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png"
                    attribution='© OpenStreetMap'
                />
                {consulats.map((consulat, index) => (
                    <Marker key={index} position={[consulat.lat, consulat.lng]}>
                        <Popup>
                            <strong>{consulat.nom}</strong><br />
                            📍 {consulat.adresse}<br />
                            ☎️ {consulat.telephone}<br />
                            📧 <a href={`mailto:${consulat.email}`}>{consulat.email}</a>
                        </Popup>
                    </Marker>
                ))}
            </MapContainer>
        </div>
    );
}
