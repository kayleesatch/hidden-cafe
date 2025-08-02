import { useEffect, useState } from "react";
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "../firebase";
import MondayEditor from "./MondayEditor";
import WaffleEditor from "./WaffleEditor";
import { getAuth, onAuthStateChanged } from "firebase/auth";


export default function Specials() {
    const [mondaySpecial, setMondaySpecial] = useState("Loading...");
    const [waffleFlavor, setWaffleFlavor] = useState("Loading...");
    const [user, setUser] = useState(null);

    useEffect(() => {
        const auth = getAuth();
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });
        
        const unsubMonday = onSnapshot(doc(db, "specials", "monday"), (doc) => {
            setMondaySpecial(doc.data()?.text || "No Special Today.");
        });
        
        const unsubWaffle = onSnapshot(doc(db, "specials", "waffle"), (doc) => {
            setWaffleFlavor(doc.data()?.flavor || "No Flavored Waffle Today.")
        })
        
        return () => {
            unsubscribe();
            unsubMonday();
            unsubWaffle();
        };
    }, []);

    return (
        <section className="bg-yellow-50 text-red-900 py-20 px-4">
            <div className="flex flex-col lg:flex-row justify-center items-start max-w-7xl mx-auto gap-4">

                <div className="hidden lg:flex flex-col gap-10 w-1/5">
                    <img src="/BluePlate.jpg" className="rounded shadow-md" alt="Blue Plate" />
                    <img src="/CinnamonRoll.jpg" className="rounded shadow-md" alt="Cinnamon Roll" />
                    <img src="/CFSandEggs.webp" className="rounded shadow-md" alt="Country Fried Steak" />
                </div>

                <div className="flex-1 text-center px-8">
                    <h2 className="text-6xl font-bold mb-6 underline shiny-text">Checkout Our Specials</h2>

                    <div className="mb-8">
                        <h3 className="text-3xl font-semibold underline">Blue Plate Special</h3>
                        <p className="mt-2 italic">Your favorite comfort dish for a low price every day!</p>
                        <img src="/BluePlate.jpg" className="rounded shadow-md w-3/4 mx-auto mt-4 lg:hidden" alt="Blue Plate" />
                    </div>

                    <div className="mb-8">
                        <h3 className="text-3xl font-semibold underline">Two Egg Special Omelette</h3>
                        <p className="mt-2 italic">Come in to see what's in the special omelette!<br />It changes all the time!</p>
                        <img src="/SpecialOmelette.jpg" className="rounded shadow-md w-3/4 mx-auto mt-4 lg:hidden" alt="Special Omelette" />
                    </div>

                    <div className="mb-8">
                        <h3 className="text-3xl font-semibold underline">Special Waffle</h3>
                        <p className="mt-2 italic">The flavor this weekend:</p>
                        <p className="font-bold text-xl">{waffleFlavor}</p>

                        {waffleFlavor && (
                            <img 
                                src={
                                    {
                                        "Banana Bread": "/BananaBreadWaffle.jpg",
                                        "Cinnamon Roll": "/CinnRollWaffle.jpg",
                                        "Apple Cinnamon": "/AppleCinnWaffle.jpg"
                                    }[waffleFlavor] || "Image coming soon!"
                                } 
                                alt={`${waffleFlavor}`} 
                                className="rounded shadow-md w-3/4 mx-auto mt-4"    
                            />
                        )}
                        {user && <WaffleEditor />}
                    </div>

                    <div className="mb-8">
                        <h3 className="text-3xl font-semibold underline">Monday Special</h3>
                        <p className="mt-2 italic">Come and get it before its Gone!</p>
                        <p className="mt-2 font-bold text-xl">{mondaySpecial}</p>
                        {user && <MondayEditor />}
                    </div>

                    <div className="text-3xl font-semibold underline">Friday Favorites</div>
                    <ul className="mt-2 space-y-1">
                        <li className="text-xl font-semibold">• Fish and Chips with Coleslaw</li>
                        <li className="text-xl font-semibold">• Fish Sandwich</li>
                        <li className="text-xl font-semibold">• Homemade Clam Chowder</li>
                        <img src="/FishNChips.jpg" className="rounded shadow-md w-3/4 mx-auto mt-4 lg:hidden" alt="Fish and Chips" />
                    </ul>
                </div>

                <div className="hidden lg:flex flex-col gap-10 w-1/5">
                    <img src="/ScramMix.jpg" className="rounded shadow-md" alt="Scram Mix" />
                    <img src="/HomemadeButtermilkBiscuits.jpg" className="rounded shadow-md" alt="Homemade Biscuits" />
                    <img src="/LuckyLindyDeluxe.jpg" className="rounded shadow-md" alt="Lucky Lindy Deluxe" />
                </div>
            </div>
                
            <div className="mt-10 max-w-7xl mx-auto px-4">
                <h2 className="text-5xl font-semibold underline text-red-900 text-center mb-10">Gallery</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                    {[
                        {src: "/BluePlate.jpg", alt: "Blue Plate", label: "Blue Plate Special"},
                        {src: "/SpecialOmelette.jpg", alt: "Special Omelette", label: "Special Omelette"},
                        {src: "/CinnamonRoll.jpg",  alt: "Cinnamon Roll", label: "Homemade Cinnamon Roll"},
                        {src: "/BananaBreadWaffle.jpg", alt: "Banana Bread Waffle", label: "Banana Bread Waffle"},
                        {src: "/CFSandEggs.webp", alt: "Country Fried Steak", label: "Country Fried Steak and Eggs"},
                        {src: "/ScramMix.jpg", alt: "Scram Mix", label: "Scram Mix"},
                        {src: "/HomemadeButtermilkBiscuits.jpg",  alt: "Homemade Biscuits", label: "Homemade Buttermilk Biscuits"},
                        {src: "/LuckyLindyDeluxe.jpg",  alt: "Lucky Lindy Deluxe", label: "Lucky Lindy Deluxe"},
                        {src: "/BaconEggs.jpg", alt: "Bacon and Eggs", label: "Bacon and Eggs"},
                        {src: "/HashEggs.jpg", alt: "Hash and Eggs", label: "Corned Beef Hash and Eggs"},
                        {src: "FishNChips.jpg", alt: "Fish and Chips", label: "Fish and Chips with Slaw"},
                        {src: "/ChzBurgAndCupGreen.jpg", alt: "Cheeseburger", label: "Cheeseburger with a cup of Green Chili"},
                        {src: "/FullStackTop.jpg", alt: "Full Stack", label: "Full Stack Pancakes"},
                        {src: "/FullStackSide.jpg", alt: "Full Stack", label: "Full Stack Pancakes"},
                        {src: "/GreenChiliChzBurg.jpg", alt: "Green Chili Cheeseburger", label: "Green Chili Cheeseburger"},
                        {src: "/HalfPoundHamEggs.jpg", alt: "1/2lb Ham and Eggs", label: "1/2 lb Ham and Eggs"},
                        {src: "/CountryBreakfast.jpg", alt: "Country Breakfast", label: "Country Breakfast"},
                        {src: "/ClubSandwich.jpg", alt: "Club Sandwich", label: "Club Sandwich with Fresh Fruit"},
                    ].map((item, index) => (
                        <div
                            key={index}
                            className="group relative overflow-hidden rounded shadow-md transform transition duration-300 hover:scale-105"
                        >
                            <img 
                                src={item.src} 
                                alt={item.alt}
                                className="w-full h-auto object-cover object-center"    
                            />
                            <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <p className="text-white font-semibold-text-xl text-center px-2">{item.label}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}