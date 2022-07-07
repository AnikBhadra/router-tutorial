import { NavLink } from "react-router-dom"

export const Navbar = () => {

    const navLinkStyles = ({ isActive }) => {
        return {
            fontWeight: isActive ? 'bold' : 'normal',
            textDecoration: isActive ? 'underline' : 'none'
        }

    }
    return (
        <nav>
            <NavLink style={navLinkStyles} to='/'>Home</NavLink>
            <NavLink style={navLinkStyles} to='/about'>About</NavLink>
        </nav>
    )
}
