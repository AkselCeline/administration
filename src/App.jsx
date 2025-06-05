import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ActualitesPage from "./pages/ActualitesPage";
import EtatCivilPage from "./pages/EtatCivilPage";
import DemarchesPage from "./pages/DemarchesPage";
import FichesPage from "./pages/FichesPage";
import EtrangerPage from "./pages/EtrangerPage";
import Passeport from "./pages/etranger/Passeport";
import Visa from "./pages/etranger/Visa";
import ActeNaissance from "./pages/etranger/ActeNaissance";
import CCR from "./pages/etranger/CCR";
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
                                    <Route path="/etranger/visa" element={<Visa />} />
                                    <Route path="/etranger/acte-naissance" element={<ActeNaissance />} />
                                    <Route path="/etranger/ccr" element={<CCR />} />
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
