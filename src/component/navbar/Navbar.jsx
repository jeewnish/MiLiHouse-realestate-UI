import { useState } from "react";
import "./navbar.scss"

function Navbar() {
    const [open,setOpen] = useState(false)
    return(
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="left">

            <a href="/">
                <img src="/logo.png" alt="logo" className="logo"/>
            </a>

            <a href="/">Home</a>
            <a href="">About</a>
            <a href="">Contact</a>
            <a href="">Agents</a>
        </div>
        <div className="right">

            <a href="" className="signin">SignIn</a>
            <a href="" className="signup">SignUp</a>

            <div className="menuIcon">
                <img 
                src="/menu.png" 
                alt="" 
                onClick={()=>setOpen((prev) => !prev)}/>
            </div>

            <div className={open ? "menu active" : "menu"}>
                <a href="/">Home</a>
                <a href="">About</a>
                <a href="">Contact</a>
                <a href="">Agents</a>
                <a href="" className="signin">SignIn</a>
            </div>
        </div>
    </nav>
    )
}

export default Navbar;