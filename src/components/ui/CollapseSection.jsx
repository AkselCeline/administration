// src/components/CollapseSection.jsx
import React, { useState } from "react";

export default function CollapseSection({ title, children }) {
    const [open, setOpen] = useState(false);

    return (
        <div className="mb-4 border rounded-lg shadow-sm bg-white">
            <button
                onClick={() => setOpen(!open)}
                className="w-full px-4 py-3 text-left flex justify-between items-center text-blue-800 font-semibold"
            >
                {title}
                <span className="text-xl">{open ? "−" : "+"}</span>
            </button>
            {open && <div className="px-4 pb-4 text-gray-700">{children}</div>}
        </div>
    );
}
