import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav style={{ padding: '1rem', borderBottom: '1px solid #ccc' }}>
            <Link to="/" style={{margin: '1rem'}}>Home</Link>
            <Link to="/about" style={{margin: '1rem'}}>About</Link>
            <Link to="/contact" style={{margin: '1rem'}}>Contact</Link>
            <Link to="/services" style={{margin: '1rem'}}>Services</Link>
        </nav>
    )

}
export default Navbar;