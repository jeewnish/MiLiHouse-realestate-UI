import "./navbar.scss"

function Navbar() {
    return(
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="left">
            <a href="/">
                <img src="/logo.png" alt="logo" className="img-fluid" style={{height: "80px", width: "150px"}} />
            </a>
            <a href="/">Home</a>
            <a href="">About</a>
            <a href="">Contact</a>
            <a href="">Agents</a>
        </div>
        <div className="right">
            <a href="">SignIn</a>
            <a href="">SignUp</a>
        </div>
    </nav>
    )
}

export default Navbar;