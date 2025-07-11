import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

export default function AdminLogin() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            await signInWithEmailAndPassword(auth, email, password);
            alert("Login successful!");
            window.location.href = "/";
        } catch (err) {
            alert("Login failed:" + err.message);
        }
    };

    return (
        <form onSubmit={handleLogin} className="space-y-4 text-center">
            <input type="email" placeholder="Email" className="border border-red-900 p-2 w-full" onChange={(e) => setEmail(e.target.value)} />
            <input type="password" placeholder="Password" className="border border-red-900 p-2 w-full" onChange={(e) => setPassword(e.target.value)} />
            <button type="submit" className="bg-yellow-50 text-red-900 text-lg px-8 py-3 font-bold border border-red-900">Login</button>
        </form>
    )
}