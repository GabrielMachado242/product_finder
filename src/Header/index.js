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
            <img src={Logo} alt="Logo da Empresa" />
            <div className="header_estilo_container">
            <div className="Container">
                <form>
                    <label htmlFor="search">Digite aqui</label>
                <input name="search" id="search"/>
                </form>
            </div>
            <FiMenu size={24} onClick={() =>{
                setMenuOpen(!menuOpen)
            }}/>
            </div>
            {menuOpen && (
            <nav>
                <ul>
                    <li><a href="http://localhost:3000/login">Login</a></li>
                    <li><a href="http://localhost:3000/cadastrar">Registre-se</a></li>
                    <li><a href="#">Sobre</a></li>
                </ul>
            </nav>
             )}
        </header>
    );
};

export default Header;