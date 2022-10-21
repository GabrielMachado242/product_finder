import {React, useState } from "react";
import '../Carousel/slider.scss';
import ImgComp from "../img/Destaques/ImgComp";
import i1 from "../img/Destaques/1.png";
import i2 from "../img/Destaques/2.jpg";
import i3 from "../img/Destaques/3.png";
import i4 from "../img/Destaques/1.png";
import i5 from "../img/Destaques/1.png";
function Slider(){

    // criando um array para o componente do silider 
let sliderArr = [ 
    <ImgComp src={i1}/>,
    <ImgComp src={i2}/>,
    <ImgComp src={i3}/>,
    <ImgComp src={i1}/>,
    <ImgComp src={i1}/>
];
    const [x,setX] = useState(0);

    // configurando o limite dos botoes
    const goLeft=()=>{
        console.log(x);
        x === 0  ? setX(-100 * (sliderArr.length - 1)) : setX(x + 100);
        //setX(x + 100);

    };
    const goRight=()=>{
        console.log(x);
        x === -100 * (sliderArr.length - 1) ? setX(0) : setX(x - 100);
    };


    return(
       <div className="sliderx">
            {sliderArr.map(
                 (item,index) => {
                    return(
                        <div key={index} className="slidex" style={{transform:`translateX(${x}%)`}}>
                            {item}
                        </div>
                    )
                 }

            )}

            <button id="goLeft" onClick={goLeft}>
                <i class="fas fa-chevron-left"></i>
            </button>
            <button id="goRight" onClick={goRight}>
            <i class="fas fa-chevron-right"></i>
            </button>
       </div>

    );


}


export default Slider;