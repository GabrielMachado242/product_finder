import React from "react";
import { alignPropType } from "react-bootstrap/esm/types";
function ImgComp( {src} ){
    //posição das imagens de destaque
    let imgStyles={
        width:100+"%",
        height:40+"vh",
        

        
    }
    return <img src={src} alt="slide-img" style={imgStyles}></img>

}


export default ImgComp;