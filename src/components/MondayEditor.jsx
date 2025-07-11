import { useState, useEffect } from "react";
import { doc, onSnapshot, setDoc } from "firebase/firestore";
import { db, auth } from "../firebase";
import { onAuthStateChanged } from "firebase/auth";
import Logout from "./Logout";

export default function MondayEditor() {
    const [user, setUser] = useState(null);
    const [authLoading, setAuthLoading] = useState(true);
    const [editText, setEditText] = useState("")
    
    
    useEffect(() => {
        const unsubscribeAuth = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setAuthLoading(false);
        })

        const unsubDoc = onSnapshot(doc(db, "specials", "monday"), (docSnap) => {
            const currentText = docSnap.data()?.text || "";
            setEditText(currentText);
        });
        
        return () => {
            unsubscribeAuth();
            unsubDoc();
        };
    }, []);
    
    const updateSpecial = async () => {
        try {
            await setDoc(doc(db, "specials", "monday"), { text: editText });
            alert("Special updated!");
        } catch (err) {
            alert ("Error:" + err.message);
        }
    };
    
    if (authLoading) return null;
   
    const allowedEmails = ["kayleesatch@gmail.com", "numberqueeen63@gmail.com"];

    return (
        <div className="space-y-4">
            {allowedEmails.includes(user?.email) && (
                <>
                    <textarea
                        placeholder="Enter Monday Special"
                        value={editText}
                        onChange={(e) => setEditText(e.target.value)}
                        className="w-full max-w-lg p-2 border border-red-900"
                        />
                    <button onClick={updateSpecial} className="bg-green-600 text-white px-4 py-2">Save</button>

                    <Logout />
                </>
            )}
        </div>
    );
}
