// src/components/CollapseSection.jsx
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function CollapseSection({ title, children }) {
    const [open, setOpen] = useState(false);

    return (
        <div className="mb-4 border rounded-lg shadow-sm bg-white/60 backdrop-blur-lg transition duration-300">
            <button
                onClick={() => setOpen(!open)}
                className="w-full px-4 py-3 text-left flex justify-between items-center text-blue-800 font-semibold transition duration-300 hover:bg-blue-50"
            >
                {title}
                <motion.span
                    animate={{ rotate: open ? 180 : 0 }}
                    className="text-xl"
                >
                    {open ? "−" : "+"}
                </motion.span>
            </button>
            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="px-4 pb-4 text-gray-700"
                    >
                        {children}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
