import React from 'react';
import './Button.css';

function Button (props) {
    return (
        <div className="Button">
            <a id="highlight" href={props.link}>{props.title}</a>
        </div>
    )
}

export default Button;