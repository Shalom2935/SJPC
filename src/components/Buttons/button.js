import React, { useEffect } from 'react'
import './Button.scss';
import './buttonstyle';
import { style } from './buttonstyle';

function Button({height = 38,colors = {background:'#F6F3F3', text:'#0C121C'},text}){

    useEffect(() => {
        style();
    }, []);
    return(
        <div className="button">
            <button style={{height:height,
                            backgroundColor:colors.background,
                            color:colors.text}}>
                {text}
            </button>
        </div>
    );
}

export default Button;