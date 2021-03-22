import React from 'react';
import PropTypes from 'prop-types';

const Result = ({value, history}) =>(
    <div className="result">
        <span>{value}</span>
        <p>{history}</p>
    </div>
);


Result.propTypes = {
    value: PropTypes.string.isRequired
};

Result.defaultProps = {
    value: 0.00,
    history: ""
};

export default Result;
