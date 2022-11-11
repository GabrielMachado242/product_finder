import React, {useState, useEffect} from "react";
import Logo from "../../img/logo.png";
import user from "../../img/user.png";
import {FiMenu} from 'react-icons/fi';
import { Button } from "react-bootstrap";
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
            <a  href = "http://localhost:3000">
                <img  className="logo" src={Logo} alt="Logo da Empresa" />
                
            </a>
            
            
            {menuOpen && (
            <nav>
                <ul>
                    <li><Button variant="dark" href="http://localhost:3000">Home</Button></li>
                    <li><Button variant="dark" href="http://localhost:3000/produtos">Ver meus Produtos</Button></li>
                    <a  href = "http://localhost:3000">
                        <img  className="user" src={user} alt="Logo do Usuario" />
                    </a>
                </ul>
            </nav>
             )}

       
        </header>
    );
};

export default Header2;