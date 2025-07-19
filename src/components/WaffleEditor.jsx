import { useState, useEffect } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { db } from "../firebase";
import { doc, setDoc, onSnapshot } from "firebase/firestore";
import Logout from "./Logout";

const allowedEmails = ["kayleesatch@gmail.com", "numberqueeen63@gmail.com"];

export default function WaffleEditor() {
    const [user, setUser] = useState(null);
    const [flavor, setFlavor] = useState("");

    useEffect(() => {
        const auth = getAuth();
        const unsub = onAuthStateChanged(auth, (currUser) => {
            setUser(currUser);
        });
        return () => unsub();
    }, []);

    useEffect(() => {
        const unsub = onSnapshot(doc(db, "specials", "waffle"), (docSnap) => {
            const currentFlavor = docSnap.data()?.flavor || "";
            setFlavor(currentFlavor);
        });
        return () => unsub();
    }, []);

    const updateFlavor = async () => {
        if (!flavor.trim()) {
            alert("Please choose a waffle flavor.");
            return;
        }
        try {
            await setDoc(doc(db, "specials", "waffle"), { flavor });
            alert("Waffle flavor updated!");
        } catch (err) {
            alert("Error updating flavor: " + err.message);
            console.error(err)
        }
    };


    
    return (
        user && allowedEmails.includes(user.email) && (
            <div className="mt-4 space-x-2">
                <select
                    value={flavor}
                    onChange={(e) => setFlavor(e.target.value)}
                    className="px-2 py-1"
                    >
                    <option value="">--Choose Flavor--</option>
                    <option value="Apple Cinnamon">Apple Cinnamon</option>
                    <option value="Banana Bread">Banana Bread</option>
                    <option value="Birthday Cake">Birthday Cake</option>
                    <option value="Blueberry">Blueberry</option>
                    <option value="Chocolate">Chocolate</option>
                    <option value="Cinnamon Roll">Cinnamon Roll</option>
                    <option value="Maple Cinnamon">Maple Cinnamon</option>
                    <option value="Strawberry">Strawberry</option>
                    <option value="OTHER">OTHER</option>
                </select>
                <button onClick={updateFlavor} className="bg-green-600 text-white px-3 py-1">
                    Save
                </button>
                <Logout />
                {flavor === "Banana Bread" && (
                    <img 
                        src="/BananaBreadWaffle.jpg"
                        alt="Banana Bread Waffle"
                        className="mt-4 w-48 h-auto rounded shadow-lg"    
                    />
                )}
            </div>
        )
    )
}
