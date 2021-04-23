//scss
import './Button.scss';

//route
import React from 'react';

//Button structure
const Button = ({
    text
}) => {
    return (
        <button className="Button">{ text }</button>
    );
}

export default Button;