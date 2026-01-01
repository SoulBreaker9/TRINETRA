"use client";
import { Link } from "react-scroll";
import { useState, useEffect } from "react";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 transition-all duration-300 font-sans ${scrolled ? "bg-[#202124]/90 border-b border-[#3c4043] backdrop-blur-md" : "bg-transparent"
                }`}
        >
            <div className="flex items-center gap-2">
                <span className="text-xl font-medium tracking-tight text-white">
                    TRINETRA
                </span>
            </div>

            <div className="hidden md:flex gap-8 text-sm font-medium text-[#9aa0a6]">
                {["home", "about", "technology", "trust", "contact"].map((item) => (
                    <Link
                        key={item}
                        to={item}
                        smooth={true}
                        duration={800}
                        spy={true}
                        activeClass="text-[#8ab4f8] border-b-2 border-[#8ab4f8]"
                        className="cursor-pointer hover:text-[#e8eaed] transition-colors uppercase tracking-wide"
                    >
                        {item}
                    </Link>
                ))}
            </div>
        </nav>
    );
}
