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
                    </div>

                    <div className="mb-8">
                        <h3 className="text-3xl font-semibold underline">Two Egg Special Omelette</h3>
                        <p className="mt-2 italic">Come in to see what's in the special omelette!<br />It changes all the time!</p>
                    </div>

                    <div className="mb-8">
                        <h3 className="text-3xl font-semibold underline">Special Waffle</h3>
                        <p className="mt-2 italic">The flavor this weekend:</p>
                        <p className="font-bold text-xl">{waffleFlavor}</p>
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
                        <li className="text-xl font-semibold">• Fish and Chips</li>
                        <li className="text-xl font-semibold">• Fish Sandwich</li>
                        <li className="text-xl font-semibold">• Homemade Clam Chowder</li>
                    </ul>
                </div>

                <div className="flex flex-col items-center gap-6 mt-10 lg:hidden">
                    <img src="/BluePlate.jpg" className="rounded shadow-md w-3/4 mx-auto mt-4 lg:hidden" alt="Blue Plate" />
                    <p className="text-red-900 font-semibold text-xl">Blue Plate</p>
                    <img src="/CinnamonRoll.jpg" className="rounded shadow-md w-3/4 mx-auto mt-4 lg:hidden" alt="Cinnamon Roll" />
                    <p className="text-red-900 font-semibold text-xl">Homemade Cinnamon Roll</p>
                    <img src="/CFSandEggs.webp" className="rounded shadow-md w-3/4 mx-auto mt-4 lg:hidden" alt="Country Fried Steak" />
                    <p className="text-red-900 font-semibold text-xl">Chicken Fried Steak and Eggs</p>
                    <img src="/ScramMix.jpg" className="rounded shadow-md w-3/4 mx-auto mt-4 lg:hidden" alt="Scram Mix" />
                    <p className="text-red-900 font-semibold text-xl">Scram Mix</p>
                    <img src="/HomemadeBiscuits.jpg" className="rounded shadow-md w-3/4 mx-auto mt-4 lg:hidden" alt="Homemade Biscuits" />
                    <p className="text-red-900 font-semibold text-xl">Homemade Buttermilk Biscuits</p>
                    <img src="/LuckyLindyDeluxe.jpg" className="rounded shadow-md w-3/4 mx-auto mt-4 lg:hidden" alt="Lucky Lindy Deluxe" />
                    <p className="text-red-900 font-semibold text-xl">Lucky Lindy Deluxe</p>
                </div>

                <div className="hidden lg:flex flex-col gap-10 w-1/5">
                    <img src="/ScramMix.jpg" className="rounded shadow-md" alt="Scram Mix" />
                    <img src="/HomemadeBiscuits.jpg" className="rounded shadow-md" alt="Homemade Biscuits" />
                    <img src="/LuckyLindyDeluxe.jpg" className="rounded shadow-md" alt="Lucky Lindy Deluxe" />
                </div>
            </div>
        </section>
    )
}