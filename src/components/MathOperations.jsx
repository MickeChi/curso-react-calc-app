import React from 'react'
import PropType from 'prop-types'
import Button from "./Button/Button";

const MathOperations = ({onClickOperation, onClickEquals}) =>{
    /*const sum = ()=>{
        console.log("Operación Suma!");
    };

    const substraction = ()=>{
        console.log("Operación Resta!");
    };

    const multiplication = ()=>{
        console.log("Operación Multiplicación!");
    };

    const division = ()=>{
        console.log("Operación División!");
    };

    const executeOperation = ()=>{
        console.log("Operación División!");
    };*/


    return (
        <div className="math-operations">
            <Button clickHandler={onClickOperation} text={"+"}/>
            <Button clickHandler={onClickOperation} text={"-"}/>
            <Button clickHandler={onClickOperation} text={"*"}/>
            <Button clickHandler={onClickOperation} text={"/"}/>
            <Button clickHandler={onClickEquals} text={"="}/>
        </div>
    );
};

MathOperations.propTypes = {
    onClickOperation: PropType.func.isRequired,
    onClickEquals: PropType.func.isRequired
};

export default MathOperations;
