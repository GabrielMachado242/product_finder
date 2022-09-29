import React from "react";
import css from "./style.css";
import comidaBoa from "../img/Produtos/comidaBoa.png";

function Carousel(){

return (
    <div className = "container">
        <div className="carousel"> 
        
            <div className="image">
                <img src={comidaBoa} alt="Shoe" />
            </div>

            <div className="info">
                <span className="name">Nome do produto 1</span> 
                <span className="oldPrice">R$:25,00</span>
                <span className="Price">preço 2</span>
            </div>
        
        
        
        </div>

        <p>carousel</p>
    </div>

);

}



export default Carousel;