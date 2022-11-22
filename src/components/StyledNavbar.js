import { NavLink } from "react-router-dom"

export default function Navbar() {
    return (
        <nav className="navbar">
            <NavLink 
                to="/"
                style={({isActive}) => {
                    return {color: isActive ? "red" : "grey"}
                    }}
                >
                Home</NavLink>
            <NavLink 
                to="about"
                style={({isActive}) => {
                    return {color: isActive ? "red" : "grey"}
                    }}
                >
                About</NavLink>
            <NavLink 
                to="dashboard"
                style={({isActive}) => {
                    return {color: isActive ? "red" : "grey"}
                    }}
                >
                Dashboard</NavLink>
            <NavLink 
                to="login" 
                style={({isActive}) => {
                    return {color: isActive ? "red" : "grey"}
                    }}
                >
                Login</NavLink>
            <NavLink 
                to="products"
                style={({isActive}) => {
                    return {color: isActive ? "red" : "grey"}
                    }}
                >
                Products</NavLink>
        </nav>
    )
}