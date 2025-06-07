// components/TabbedPage.jsx
import React, { useState } from "react";

const TabbedPage = ({ title, tabs, showPrint = true }) => {
    const [activeTab, setActiveTab] = useState(tabs[0]?.id || "");

    const handlePrint = () => {
        const originalTitle = document.title;
        document.title = title;
        window.print();
        document.title = originalTitle;
    };

    return (
        <div className="p-4 sm:p-6 max-w-5xl mx-auto text-gray-800 font-sans">
            <div className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-4">
                <h1 className="text-2xl sm:text-3xl font-bold text-center sm:text-left">
                    {title}
                </h1>
                {showPrint && (
                    <button
                        onClick={handlePrint}
                        className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded shadow-md print:hidden"
                    >
                        🖨️ Imprimer / PDF
                    </button>
                )}
            </div>

            <div className="flex flex-wrap border-b mb-4 print:hidden overflow-auto">
                {tabs.map((tab) => (
                    <button
                        key={tab.id}
                        className={`px-3 py-2 text-sm font-medium border-b-2 whitespace-nowrap ${
                            activeTab === tab.id
                                ? "border-blue-600 text-blue-600"
                                : "border-transparent hover:text-blue-600"
                        }`}
                        onClick={() => setActiveTab(tab.id)}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>

            <div className="space-y-4 text-sm sm:text-base">
                {tabs.map(
                    (tab) =>
                        tab.id === activeTab && (
                            <section key={tab.id} className="break-inside-avoid">
                                <h2 className="text-lg sm:text-xl font-semibold mb-2">{tab.label}</h2>
                                {typeof tab.content === "string" ? <p>{tab.content}</p> : tab.content}
                            </section>
                        )
                )}
            </div>
        </div>
    );
};

export default TabbedPage;
