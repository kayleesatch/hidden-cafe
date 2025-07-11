export default function Footer() {
    return (
        <footer className="bg-red-900 text-yellow-50 text-sm">
            <div className="max-w-6xl mx-auto px-4 flex items-center justify-between">
                <img 
                    src="/Hidden Cafe-Logo(3).png" 
                    className="w-auto h-20" 
                    alt="Logo" 
                />

                <div className="text-center flex-1">
                    <p>Made with 🧡 by Kaylynn Satchell</p>
                    <div className="mt-1 text-xs opacity-30 hover:opacity-100 transition">
                        <a href="/login" className="underline">Staff Login</a>
                    </div>
                </div>

                <a 
                    href="https://kaylynn-portfolio.vercel.app"
                    target="_blank"
                    rel="noopener noreferrer"    
                >
                    <img 
                        src="/1.png" 
                        alt="KSLogo"
                        className="h-10 w-auto hover:opacity-80 transition" 
                    />
                </a>
            </div>
        </footer>
    );
}