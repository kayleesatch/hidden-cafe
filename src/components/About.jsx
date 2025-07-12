export default function About({ isOpen, onClose }) {
    if (!isOpen) return null;

    return (
        <div id="about" className="fixed inset-0 bg-black flex items-center justify-center z-50">
            <div className="bg-red-900 text-yellow-50 p-8 border border-yellow-50 rounded-lg max-w-xl shadow-lg relative">
                <button
                    onClick={onClose}
                    className="absolute top-2 right-2 text-yellow-50 hover:text-white font-bold"
                >
                    ✕
                </button>
                <h2 className="text-3xl font-bold underline mb-4 text-center">Welcome To The Hidden Cafe</h2>
                <p className="text-lg leading-relaxed mb-2">
                    For many years, our family-owned Cafe has been a cozy spot where you can grab a bite to eat and feel at home.
                    We take pride in making - our country gravy, biscuits, and cinnamon rolls from scratch.  We have and award winning
                    green chili (yes, we've earned bragging right in a blind taste test!). Every Monday special and dessert, from cakes
                    and pies to danishes, are lovingly homemade. Though we are small and cozy, The Hidden Cafe is big on heart - a 
                    place where you can relax, enjoy good food, and feel like part of the family.
                </p>
            </div>
        </div>
    );
}