import React from "react";
import './styles.css';

function Campo(props){
    return(
        <div className="Container">
        <div className="Container-login">
            <div className="Wrap-login">
                {props.children}
            </div>
        </div>
    </div>
    );
};

export default Campo;