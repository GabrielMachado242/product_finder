import React, {useState, useEffect} from "react";
import './styles.css';
import Logo from "../components/logo.png";
import {FiMenu} from 'react-icons/fi';

function Header(){

    const [menuOpen, setMenuOpen] = useState('flex');

    useEffect(() => {
        window.addEventListener('resize', () => {
            if(window.innerWidth >= 764){
                setMenuOpen(true)
            }
        })
    }, []);
    return(
        <header>
            <img src={Logo} />
            <div className="header_estilo_container">
            <input classname="campo" type="text" />
            <FiMenu size={24} onClick={() =>{
                setMenuOpen(!menuOpen)
            }}/>
            </div>
            {menuOpen && (
            <nav>
                <ul>
                    <li><a href="#">Login</a></li>
                    <li><a href="#">Registre-se</a></li>
                    <li><a href="#">Sobre</a></li>
                </ul>
            </nav>
             )}
        </header>
    );
};

export default Header;