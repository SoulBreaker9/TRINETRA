"use client";
import React from 'react';
import Navbar from '../components/Navbar';
import AnalysisTool from '../components/AnalysisTool';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { ArrowRight, Eye, Cpu, Cloud, ShieldCheck, Mail, Lock } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#202124] text-[#e8eaed] selection:bg-[#8ab4f8] selection:text-black overflow-x-hidden">
      <Navbar />

      {/* 2️⃣ HOME SECTION (Hero — FIRST SCREEN) */}
      {/* 2️⃣ HOME SECTION (Hero — FIRST SCREEN) */}
      <section id="home" className="relative flex flex-col items-center justify-center overflow-hidden pt-40 pb-0">

        <div className="container mx-auto px-6 flex flex-col items-center relative z-10 text-center">
          {/* Centered Text */}
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center"
          >
            <h1 className="text-6xl md:text-8xl font-medium tracking-tighter mb-4 text-white">
              TRINETRA
            </h1>
            <h2 className="text-2xl md:text-3xl font-normal text-[#e8eaed] mb-6 tracking-wide">
              The Third Eye for Digital Truth
            </h2>
            <p className="text-[#9aa0a6] text-lg mb-8 max-w-lg leading-relaxed">
              An AI-powered deepfake detection system that exposes synthetic media
              using multi-model ensemble intelligence.
            </p>
            <div className="flex gap-4 justify-center">
              <Link to="analyze" smooth={true} duration={800} offset={-50}>
                <button className="w-[150px] h-[40px] bg-[#8ab4f8] text-[#202124] font-medium rounded-[10px] hover:bg-[#d2e3fc] transition-all flex items-center justify-center text-sm shadow-lg">
                  Analyze Media
                </button>
              </Link>
              <Link to="technology" smooth={true} duration={800} offset={-50}>
                <button className="w-[150px] h-[40px] border border-[#5f6368] text-[#8ab4f8] font-medium rounded-[10px] hover:bg-[#303134] transition-all flex items-center justify-center text-sm">
                  Explore Tech
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 3️⃣ ABOUT SECTION */}
      <section id="about" className="pb-24 pt-[70px] bg-[#202124] relative z-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-medium mb-12 text-center tracking-wide text-white">
            Why TRINETRA Exists
          </h2>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white text-black rounded-[20px] p-10 max-w-2xl mx-auto shadow-2xl flex flex-col items-center text-center gap-6"
          >
            <p className="text-lg leading-relaxed font-medium">
              We are entering a <span className="font-bold underline">post-truth era</span>. Modern generative models can create hyper-realistic fake videos that are indistinguishable from real footage.
            </p>
            <p className="text-lg leading-relaxed">
              Traditional forensic methods have collapsed, and single-model detectors fail as generation methods evolve.
            </p>

            <div className="w-16 h-1 bg-black/10 rounded-full my-2"></div>

            <p className="text-lg leading-relaxed">
              TRINETRA was built to solve this problem at a system level — not by trusting one model, but by forcing consensus between multiple independent AI engines.
            </p>

            <div className="flex justify-center gap-6 mt-4">
              <ShieldCheck className="w-12 h-12 text-black" strokeWidth={1.5} />
              <Lock className="w-12 h-12 text-black" strokeWidth={1.5} />
            </div>
          </motion.div>
        </div>
      </section>

      {/* 4️⃣ TECHNOLOGY SECTION */}
      <section id="technology" className="py-24 bg-[#202124] relative z-10 border-t border-[#3c4043]">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-medium mb-16 text-center tracking-wide text-white">
            Core Technology
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="group bg-[#303134] rounded-lg p-8 hover:bg-[#3c4043] transition-all duration-300 relative overflow-hidden border border-[#5f6368]/30">
              <div className="absolute top-0 right-0 p-4 opacity-10"><Cloud className="w-24 h-24 text-white" /></div>
              <h3 className="text-xl font-medium text-white mb-4 flex items-center gap-2">
                <Cloud className="w-6 h-6 text-[#8ab4f8]" /> Cloud Intelligence (LMM)
              </h3>
              <p className="text-[#bdc1c6] text-sm leading-relaxed pl-[5px]">
                Large Multimodal Models analyze semantic consistency, physical logic, and audio-visual alignment across the entire video. This engine understands context, physics, and causality.
              </p>
            </div>

            {/* Card 2 */}
            <div className="group bg-[#303134] rounded-lg p-8 hover:bg-[#3c4043] transition-all duration-300 relative overflow-hidden border border-[#5f6368]/30">
              <div className="absolute top-0 right-0 p-4 opacity-10"><Eye className="w-24 h-24 text-white" /></div>
              <h3 className="text-xl font-medium text-white mb-4 flex items-center gap-2">
                <Eye className="w-6 h-6 text-[#8ab4f8]" /> Visual Cortex (Grad-CAM)
              </h3>
              <p className="text-[#bdc1c6] text-sm leading-relaxed pl-[5px]">
                A CNN-based explainability engine that highlights the exact regions responsible for a fake classification. TRINETRA provides visual proof by exposing pixel-level manipulation.
              </p>
            </div>

            {/* Card 3 */}
            <div className="group bg-[#303134] rounded-lg p-8 hover:bg-[#3c4043] transition-all duration-300 relative overflow-hidden border border-[#5f6368]/30">
              <div className="absolute top-0 right-0 p-4 opacity-10"><Cpu className="w-24 h-24 text-white" /></div>
              <h3 className="text-xl font-medium text-white mb-4 flex items-center gap-2">
                <Cpu className="w-6 h-6 text-[#8ab4f8]" /> Neural Core (ViT)
              </h3>
              <p className="text-[#bdc1c6] text-sm leading-relaxed pl-[5px]">
                Vision Transformers analyze global image consistency using self-attention. They detect subtle spatial anomalies that traditional CNNs miss by examining relationships between all image regions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5️⃣ TRUST SECTION */}
      <section id="trust" className="py-24 bg-[#202124] border-y border-[#3c4043] relative z-10">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-medium mb-8 text-white tracking-wide">
            One Verdict. Backed by Evidence.
          </h2>
          <p className="text-xl text-[#bdc1c6] max-w-2xl mx-auto mb-16">
            TRINETRA does not rely on a single opinion. Each engine contributes a weighted score to a final trust metric.
          </p>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-16">
            <div className="text-center">
              <div className="uppercase tracking-widest text-sm text-[#9aa0a6]">Cloud Intelligence</div>
            </div>
            <div className="text-center">
              <div className="uppercase tracking-widest text-sm text-[#9aa0a6]">Visual Cortex</div>
            </div>
            <div className="text-center">
              <div className="uppercase tracking-widest text-sm text-[#9aa0a6]">Neural Core</div>
            </div>
          </div>

          <p className="text-[#5f6368] font-mono text-sm uppercase tracking-[0.2em]">
            The result is a probabilistic Trust Score grounded in explainable AI.
          </p>
        </div>
      </section>

      {/* 6️⃣ ANALYSIS SECTION */}
      <section id="analyze" className="py-32 bg-[#171717] relative z-10 flex flex-col items-center border-t border-[#3c4043]">
        <h2 className="text-4xl font-medium mb-12 text-center tracking-wide text-white">
          System Initialized
        </h2>
        <AnalysisTool />
      </section>

      {/* 7️⃣ CONTACT SECTION */}
      <section id="contact" className="py-24 bg-[#202124] border-t border-[#3c4043] relative z-10">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-3xl font-medium mb-4 text-white tracking-wide">
            Contact & Collaboration
          </h2>
          <p className="text-[#9aa0a6] mb-12">
            For research collaboration, technical discussions, or system demos.
          </p>

          <form className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex flex-col gap-2">
              <label className="text-[#bdc1c6] text-sm font-medium">Name</label>
              <input type="text" className="bg-[#303134] border border-[#5f6368] p-3 text-white rounded-md focus:outline-none focus:border-[#8ab4f8]" />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-[#bdc1c6] text-sm font-medium">Email</label>
              <input type="email" className="bg-[#303134] border border-[#5f6368] p-3 text-white rounded-md focus:outline-none focus:border-[#8ab4f8]" />
            </div>
            <div className="col-span-1 md:col-span-2 flex flex-col gap-2">
              <label className="text-[#bdc1c6] text-sm font-medium">Purpose</label>
              <select className="bg-[#303134] border border-[#5f6368] p-3 text-white rounded-md focus:outline-none focus:border-[#8ab4f8]">
                <option>Research Collaboration</option>
                <option>System Demo</option>
                <option>Technical Inquiry</option>
                <option>Other</option>
              </select>
            </div>
            <div className="col-span-1 md:col-span-2 flex flex-col gap-2">
              <label className="text-[#bdc1c6] text-sm font-medium">Message</label>
              <textarea rows="4" className="bg-[#303134] border border-[#5f6368] p-3 text-white rounded-md focus:outline-none focus:border-[#8ab4f8]"></textarea>
            </div>

            <div className="col-span-1 md:col-span-2">
              <button type="submit" className="w-full py-3 bg-[#8ab4f8] text-[#202124] font-medium rounded-md hover:bg-[#d2e3fc] transition-colors">
                <span className="flex items-center justify-center gap-2">
                  <Mail className="w-4 h-4" /> Send Secure Message
                </span>
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-8 bg-[#171717] border-t border-[#3c4043] text-center text-xs text-[#9aa0a6] uppercase tracking-widest">
        Trinetra Protocol v1.0.4
      </footer>
    </div>
  );
}
