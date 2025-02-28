import brandLogo from "../image/brand_logo.png";

const Navigation = () => {
    return (
        <div>
        <nav className="container">
        <div className="logo">
            <img src={brandLogo} alt="Logo" />
        </div>
        <div>
            <ul>
                <li href="#">Menu</li>
                <li href="#">Location</li>
                <li href="#">About</li>
                <li href="#">Contact</li>
            </ul>
            
        </div>
        <button>Login</button>
        </nav>
        </div>
    )
}

export default Navigation;