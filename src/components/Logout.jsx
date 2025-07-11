import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";

export default function Logout() {
    const navigate = useNavigate();

    const handleLogout = () => {
        signOut(auth)
        .then(() => {
            alert("Loggout out!");
            navigate("/")
        })
        .catch((err) => alert("Error: " + err.message));
    };

    return (
        <button
            onClick={handleLogout}
            className="text-sm text-red-900 underline hover:text-black mt-4"
        >
            Log Out
        </button>
    );
}