import React from 'react';
import './input.css'

const Input = (props) => {
    return (
        <input type={props.type} className={"form-control mt-2 reg-input " +props.cl}  name={props.name}/>
    );
}

export default Input;
