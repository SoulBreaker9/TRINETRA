import React, { useState, useEffect } from 'react';
import { motion } from "framer-motion";

const TerminalLoader = () => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(interval);
                    return 100;
                }
                return prev + 1;
            });
        }, 50); // Complete in ~5 seconds

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="w-full max-w-md mx-auto mt-10 text-center">
            <h2 className="text-green-500 font-bold mb-4 tracking-widest animate-pulse">
                ANALYZING MEDIA...
            </h2>

            <div className="w-full h-2 bg-gray-900 border border-green-500/30 rounded-full overflow-hidden relative">
                <motion.div
                    className="h-full bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.6)]"
                    initial={{ width: "0%" }}
                    animate={{ width: `${progress}%` }}
                    transition={{ ease: "linear" }}
                />
            </div>

            <div className="flex justify-between text-xs text-green-500/60 mt-2 font-mono">
                <span>SYSTEM_CHECK</span>
                <span>{progress}%</span>
            </div>
        </div>
    );
};

export default TerminalLoader;
