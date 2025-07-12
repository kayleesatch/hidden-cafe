import { useState } from "react";
import About from "./About";

export default function Nav() {
    const [showAbout, setShowAbout] = useState(false);


    return (
        <>
            <nav className="fixed top-0 left-0 w-full bg-red-900 text-yellow-50 shadow-md z-50">
                <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
                    <a href="#" className="text-xl flex items-center font-bold tracking-wide">
                        <span><img 
                            src="/Hidden Cafe-Logo(3).png" 
                            className="h-14 w-auto" 
                            alt="Logo" 
                        /></span>
                        <span>Hidden Café</span>
                    </a>
                    <ul className="flex space-x-6 text-sm font-medium">
                        <li><a 
                href="https://hidden-cafe.hrpos.heartland.us/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-yellow-50 font-semibold py-3 rounded hover:underline transition">Menu</a></li>
                        <li><a href="#about" className="hover:underline" onClick={() => setShowAbout(true)}>About</a></li>
                    </ul>
                </div>
            </nav>

            <About isOpen={showAbout} onClose={() => setShowAbout(false)} />
        </>
    )
}