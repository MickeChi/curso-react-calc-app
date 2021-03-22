import React from 'react'
import PropTypes from 'prop-types'
import Button from "./Button/Button";

const listNumbers = (onClickNumber) => {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
    return numbers.map((n, i) => <Button key={n} text={n.toString()} clickHandler={onClickNumber}/>)
};

const Numbers = ({onClickNumber}) =>{



    return (

        <section className="numbers">
            {listNumbers(onClickNumber)}
        </section>

    )
};

Numbers.propTypes = {
    onClickNumber: PropTypes.func.isRequired
};

export default Numbers;
