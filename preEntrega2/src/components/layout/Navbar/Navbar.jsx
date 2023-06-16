import React from "react";
import CartWidget from "../../common/CartWidget/CartWidget";
import "./navbar.css"
import { Link } from "react-router-dom";


const Navbar = () => {
    return (
        <div className="contenedor">


            <Link to="/"><p className="brand">MANDALAI</p></Link>

            <Link to="/"><button>Home</button></Link>

            <Link to="about"><button>About</button></Link>

            <Link to="contact"><button>Contact</button></Link>

            <Link to="cart"><CartWidget /></Link>

        </div>
    );
};

export default Navbar;
