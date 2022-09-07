import React, {useState, useEffect} from "react";
import Logo from "../../img/logo.png";
import {FiMenu} from 'react-icons/fi';
import './style.css';

function Header2(){

    const [menuOpen, setMenuOpen] = useState('flex');

    useEffect(() => {
        window.addEventListener('resize', () => {
            if(window.innerWidth >= 764){
                setMenuOpen(true)
            }
        })
    }, []);
    return(
        <header className="cabecalho2">
            <img src={Logo} alt="Logo da Empresa" />
            
            {menuOpen && (
            <nav>
                <ul>
                    <li><a href="http://localhost:3000">Home</a></li>
                    <li><a href="http://localhost:3000/produtos">Ver meus Produtos</a></li>
                    
                   
                </ul>
            </nav>
             )}
        </header>
    );
};

export default Header2;