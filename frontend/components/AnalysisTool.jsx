"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Upload, CheckCircle, Cpu, Eye, Cloud, ShieldCheck, ChevronDown, ChevronUp, AlertTriangle } from "lucide-react";
import TerminalLoader from "./TerminalLoader";

export default function AnalysisTool() {
    const [file, setFile] = useState(null);
    const [uploading, setUploading] = useState(false);
    const [result, setResult] = useState(null);
    const [mode, setMode] = useState('cloud'); // 'cloud' or 'local'
    const [showDetails, setShowDetails] = useState(false);

    const handleFileChange = (e) => {
        if (e.target.files[0]) {
            setFile(e.target.files[0]);
            setResult(null);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!file) return;

        setUploading(true);
        setResult(null);

        const API_BASE = process.env.NEXT_PUBLIC_API_URL || 'http://127.0.0.1:5001';
        const formData = new FormData();
        formData.append("file", file);
        formData.append("mode", mode);

        try {
            // DYNAMIC ENDPOINT SELECTION
            const endpoint = mode === 'master'
                ? `${API_BASE}/analyze_ensemble`
                : `${API_BASE}/analyze`;

            const response = await fetch(endpoint, {
                method: "POST",
                headers: {
                    "ngrok-skip-browser-warning": "69420",
                },
                body: formData,
            });

            const data = await response.json();

            // CACHE BUSTING: Append timestamp to force video reload
            if (data.video_url) {
                data.video_url = `${data.video_url}?t=${new Date().getTime()}`;
            }

            setUploading(false);
            setResult(data);
        } catch (error) {
            console.error("API Connection Failed:", error);
            alert("Backend Offline! Is python main.py running?");
            setUploading(false);
        }
    };

    // --- VERDICT LOGIC ---
    const isFake = result ? parseInt(result.confidence_score) > 50 : false;

    return (
        <div className="w-full max-w-6xl mx-auto p-4 font-mono">

            {/* --- UPLOAD ZONE --- */}
            {!result && !uploading && (
                <motion.div
                    initial={{ scale: 0.95, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="z-10 w-full"
                >
                    {/* ENGINE SWITCH - RETRO TERMINAL PANELS */}
                    <div className="flex flex-col items-center gap-[30px] mb-10 w-full">
                        {/* ROW 1: 3 BUTTONS */}
                        <div className="flex justify-center gap-[59px] w-full">
                            <button
                                onClick={() => setMode('cloud')}
                                className={`relative overflow-hidden w-[150px] h-[100px] p-2 border transition-all duration-300 flex flex-col items-center justify-center gap-2 rounded-[15px] hover:scale-110 ${mode === 'cloud'
                                    ? 'bg-[#90EE90] border-green-400 shadow-[0_0_15px_rgba(34,197,94,0.6)] text-black scale-105'
                                    : 'bg-black border-green-500/30 hover:bg-green-500 hover:text-black'}`}
                            >
                                <Cloud className="w-8 h-8" />
                                <div className="font-bold tracking-widest text-[10px]">CLOUD</div>
                            </button>

                            <button
                                onClick={() => setMode('local')}
                                className={`relative overflow-hidden w-[150px] h-[100px] p-2 border transition-all duration-300 flex flex-col items-center justify-center gap-2 rounded-[15px] hover:scale-110 ${mode === 'local'
                                    ? 'bg-[#90EE90] border-green-400 shadow-[0_0_15px_rgba(34,197,94,0.6)] text-black scale-105'
                                    : 'bg-black border-green-500/30 hover:bg-green-500 hover:text-black'}`}
                            >
                                <Cpu className="w-8 h-8" />
                                <div className="font-bold tracking-widest text-[10px]">NEURAL</div>
                            </button>

                            <button
                                onClick={() => setMode('gradcam')}
                                className={`relative overflow-hidden w-[150px] h-[100px] p-2 border transition-all duration-300 flex flex-col items-center justify-center gap-2 rounded-[15px] hover:scale-110 ${mode === 'gradcam'
                                    ? 'bg-[#90EE90] border-green-400 shadow-[0_0_15px_rgba(34,197,94,0.6)] text-black scale-105'
                                    : 'bg-black border-green-500/30 hover:bg-green-500 hover:text-black'}`}
                            >
                                <Eye className="w-8 h-8" />
                                <div className="font-bold tracking-widest text-[10px]">HEATMAP</div>
                            </button>
                        </div>

                        {/* ROW 2: MASTER SCAN (FULL WIDTH of 3 buttons + gaps = 150+59+150+59+150 = 568px) */}
                        <button
                            onClick={() => setMode('master')}
                            className={`relative overflow-hidden w-[568px] h-[100px] p-2 border-2 transition-all duration-300 flex flex-col items-center justify-center gap-2 rounded-[15px] hover:scale-105 ${mode === 'master'
                                ? 'bg-[#90EE90] border-green-400 shadow-[0_0_20px_rgba(34,197,94,0.6)] text-black scale-105'
                                : 'bg-black border-green-500 hover:bg-green-500 hover:text-black'}`}
                        >
                            <ShieldCheck className="w-8 h-8" />
                            <span className="font-black tracking-widest text-[10px] text-center leading-tight">MASTER SCAN</span>
                        </button>
                    </div>

                    {/* CLEAN UPLOAD AREA */}
                    <div className="flex flex-col items-center gap-6">
                        <div className="relative group mt-[30px]">
                            <input
                                type="file"
                                onChange={handleFileChange}
                                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-50"
                                accept="video/*"
                            />
                            <button className="flex items-center gap-3 px-8 py-4 border-2 border-green-500 text-green-500 font-bold tracking-widest hover:bg-green-500 hover:text-black transition-all uppercase bg-black shadow-[0_0_15px_rgba(34,197,94,0.2)] rounded-[15px]">
                                <Upload className="w-5 h-5" />
                                {file ? "Change Media" : "Select Video Source"}
                            </button>
                        </div>

                        {file && (
                            <div className="text-green-400 font-mono text-sm tracking-wide my-8 py-2">
                                &gt;&gt; SELECTED: {file.name}
                            </div>
                        )}

                        {file && (
                            <motion.button
                                onClick={handleSubmit}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="w-[100px] h-[50px] flex items-center justify-center bg-green-500 text-black font-black text-xl tracking-widest shadow-[0_0_20px_rgba(34,197,94,0.5)] transition-all uppercase hover:bg-white rounded-[15px]"
                            >
                                START
                            </motion.button>
                        )}
                    </div>
                </motion.div>
            )}

            {/* --- LOADING --- */}
            {uploading && (
                <div className="z-10 w-full max-w-3xl mx-auto">
                    <TerminalLoader />
                </div>
            )}

            {/* --- RESULT DASHBOARD --- */}
            {result && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="z-20 w-full mt-4 pb-20 font-mono text-green-500"
                >
                    <div className="flex justify-between items-center mb-8">
                        <h2 className="text-2xl font-bold tracking-widest text-green-500 border-b border-green-500/50 pb-2">
                            ANALYSIS COMPLETE
                        </h2>
                        <button
                            onClick={() => { setResult(null); setFile(null); }}
                            className="text-xs border border-green-500 px-3 py-1 hover:bg-green-500 hover:text-black uppercase tracking-wider"
                        >
                            New Analysis
                        </button>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {/* LEFT COLUMN: VERDICT */}
                        <div className={`p-8 border-l-4 ${isFake ? 'border-red-500 bg-red-950/10' : 'border-green-500 bg-green-950/10'}`}>
                            <div className="flex flex-col gap-6">
                                <div className="flex items-center gap-4">
                                    {isFake ? <AlertTriangle className="w-16 h-16 text-red-500" /> : <CheckCircle className="w-16 h-16 text-green-500" />}
                                    <div>
                                        <div className="text-xs uppercase tracking-widest opacity-70 mb-1">Final Verdict</div>
                                        <div className={`text-4xl font-black uppercase ${isFake ? 'text-red-500' : 'text-green-500'}`}>
                                            {isFake ? "MANIPULATED" : "AUTHENTIC"}
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <div className="text-xs uppercase tracking-widest opacity-70 mb-1">Confidence Score</div>
                                    <div className={`text-6xl font-black ${isFake ? 'text-red-500' : 'text-green-500'}`}>
                                        {result.confidence_score !== undefined ? result.confidence_score : 0}%
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* RIGHT COLUMN: VIDEO */}
                        <div>
                            {result.video_url ? (
                                <div className="border border-green-500/30 bg-black p-1">
                                    <video
                                        key={result.video_url}
                                        src={result.video_url}
                                        controls
                                        autoPlay
                                        loop
                                        className="w-full h-auto max-h-[400px]"
                                        style={{ filter: 'contrast(1.1) brightness(1.1)' }}
                                    />
                                    <div className="text-[10px] text-green-500/50 mt-1 uppercase text-center tracking-widest">
                                        Processed Media Feed
                                    </div>
                                </div>
                            ) : (
                                <div className="h-full flex items-center justify-center border border-green-500/20 text-green-500/40 text-sm">
                                    [ NO VIDEO OUTPUT ]
                                </div>
                            )}
                        </div>
                    </div>

                    {/* TOGGLE FOR DETAILS */}
                    <div className="mt-12 text-center">
                        <button
                            onClick={() => setShowDetails(!showDetails)}
                            className="flex items-center gap-2 mx-auto text-green-500 border-b border-green-500/50 pb-1 hover:text-white transition-colors uppercase text-sm tracking-widest"
                        >
                            {showDetails ? "Hide Forensics" : "View Detailed Forensics"}
                            {showDetails ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                        </button>
                    </div>

                    {/* DETAILED LOGS (HIDDEN BY DEFAULT) */}
                    <AnimatePresence>
                        {showDetails && (
                            <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                className="overflow-hidden"
                            >
                                <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-green-500/20">
                                    {/* ENSEMBLE BREAKDOWN */}
                                    {result.breakdown && (
                                        <div className="col-span-1 md:col-span-2 bg-black/50 p-4 border border-green-500/30 mb-4">
                                            <h3 className="text-sm font-bold text-green-400 mb-4 uppercase">&gt; ENSEMBLE BREAKDOWN</h3>
                                            <div className="grid grid-cols-3 gap-4 text-center">
                                                <div>
                                                    <div className="text-xs text-blue-400 mb-1">CLOUD</div>
                                                    <div className="font-bold">{result.breakdown.api}%</div>
                                                </div>
                                                <div>
                                                    <div className="text-xs text-orange-400 mb-1">HEATMAP</div>
                                                    <div className="font-bold">{result.breakdown.heatmap}%</div>
                                                </div>
                                                <div>
                                                    <div className="text-xs text-purple-400 mb-1">NEURAL</div>
                                                    <div className="font-bold">{result.breakdown.neural}%</div>
                                                </div>
                                            </div>
                                        </div>
                                    )}

                                    {/* VISUAL & AUDIO LOGS */}
                                    <div className="border border-green-500/30 p-4 bg-black/50">
                                        <h3 className="text-sm font-bold text-green-400 mb-4 uppercase">&gt; VISUAL_LOGS</h3>
                                        <ul className="space-y-2 text-xs text-green-500/80 font-mono">
                                            {result.visual_evidence?.length > 0 ? result.visual_evidence.map((item, i) => (
                                                <li key={i} className="flex gap-2">
                                                    <span className="text-green-300">[{i}]</span>
                                                    <span>{item}</span>
                                                </li>
                                            )) : <li className="italic opacity-50">NO_ANOMALIES_FOUND</li>}
                                        </ul>
                                    </div>

                                    {mode === 'cloud' && (
                                        <div className="border border-green-500/30 p-4 bg-black/50">
                                            <h3 className="text-sm font-bold text-green-400 mb-4 uppercase">&gt; AUDIO_ANALYSIS</h3>
                                            <ul className="space-y-2 text-xs text-green-500/80 font-mono">
                                                {result.audio_evidence?.length > 0 ? result.audio_evidence.map((item, i) => (
                                                    <li key={i} className="flex gap-2">
                                                        <span className="text-purple-400">[{i}]</span>
                                                        <span>{item}</span>
                                                    </li>
                                                )) : <li className="italic opacity-50">NO_ANOMALIES_FOUND</li>}
                                            </ul>
                                        </div>
                                    )}

                                    {mode === 'cloud' && (
                                        <div className="col-span-1 md:col-span-2 border border-green-500/30 p-4 bg-black/50">
                                            <h3 className="text-sm font-bold text-green-400 mb-4 uppercase">&gt; GLOBAL_CONTEXT</h3>
                                            <div className="text-xs text-green-500/80 font-mono leading-relaxed">
                                                {result.fact_check_analysis || "DATABASE_RETURNED_NULL"}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.div>
            )}
        </div>
    );
}
