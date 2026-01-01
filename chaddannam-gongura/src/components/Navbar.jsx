import { Link } from "react-router-dom";

function Navbar() {
    return (

        <nav className="bg-green-700 p-4 text-white flex justify-between items-center">
                <div className="text-2xl font-bold">Chaddannam Gongura
            </div>
            <div className="flex gap-4">
                <Link to="/" className="hover:text-yellow-300 transition-colors  hover:underline">Home</Link>
                <Link to="/login" className="hover:text-yellow-300 transition-colors  hover:underline">Login</Link>
                <Link to="/signUp" className="hover:text-yellow-300 transition-colors  hover:underline">Sign Up</Link>
                <Link to="/chefSide" className="hover:text-yellow-300 transition-colors  hover:underline">Chef Board</Link>
                <Link  to="/customer" className="hover:text-yellow-300 transition-colors  hover:underline">Customer</Link>
                </div>
        </nav>
    )
}

    export default Navbar;