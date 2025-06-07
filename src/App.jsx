import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ActualitesPage from "./pages/ActualitesPage";
import EtatCivilPage from "./pages/EtatCivilPage";
import DemarchesPage from "./pages/DemarchesPage";
import FichesPage from "./pages/FichesPage";
import EtrangerPage from "./pages/EtrangerPage";
import CarteConsulats from './pages/CarteConsulats';
import ListeConsulats from './pages/ListeConsulats';
import RechercheConsulat from './pages/RechercheConsulat';
import Passeport from "./pages/etranger/prestationConsulaires/Passeport";
import PasseportUrgence from "./pages/etranger/prestationConsulaires/PasseportUrgence";
import Immatriculation from "./pages/etranger/prestationConsulaires/Immatriculation";
import CarteNationale from "./pages/etranger/prestationConsulaires/CarteNationale";
import DeclarationPerte from "./pages/etranger/prestationConsulaires/DeclarationPerte";
import Radiation from "./pages/etranger/prestationConsulaires/Radiation";
import TransfertDossier from "./pages/etranger/prestationConsulaires/TransfertDossier";
import Visa from "./pages/etranger/Visa";
import CCR from "./pages/etranger/prestationConsulaires/CCR";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import ProtectedLayout from "./components/ProtectedLayout";


export default function App() {
    return (
        <Router>
            <Routes>
                {/* Login non protégé */}
                <Route path="/login" element={<Login />} />

                {/* Layout protégé pour tout le reste */}
                <Route
                    path="*"
                    element={
                        <ProtectedLayout>
                            <>
                                <Navbar />
                                <Routes>
                                    <Route path="/" element={<HomePage />} />
                                    <Route path="/actualites" element={<ActualitesPage />} />
                                    <Route path="/etat-civil" element={<EtatCivilPage />} />
                                    <Route path="/demarches" element={<DemarchesPage />} />
                                    <Route path="/fiches" element={<FichesPage />} />
                                    <Route path="/etranger" element={<EtrangerPage />} />
                                    <Route path="/etranger/passeport" element={<Passeport />} />
                                    <Route path="/etranger/Passeport-urgence" element={<PasseportUrgence />} />
                                    <Route path="/etranger/carte-nationale" element={<CarteNationale />} />
                                    <Route path="/etranger/immatriculation" element={<Immatriculation />} />
                                    <Route path="/etranger/declaration-perte" element={<DeclarationPerte />} />
                                    <Route path="/etranger/radiation" element={<Radiation />} />
                                    <Route path="/etranger/transfert-dossier-consulaire" element={<TransfertDossier />} />
                                    <Route path="/etranger/visa" element={<Visa />} />
                                    <Route path="/etranger/ccr" element={<CCR />} />
                                    <Route path="/etranger/annuaire-consulats" element={<CarteConsulats />} />
                                    <Route path="/etranger/liste-consulats" element={<ListeConsulats />} />
                                    <Route path="/etranger/recherche-consulat" element={<RechercheConsulat />} />
                                </Routes>
                                <Footer />
                            </>
                        </ProtectedLayout>
                    }
                />
            </Routes>
        </Router>
    );
}
