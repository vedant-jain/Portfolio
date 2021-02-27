import React from 'react';
import './HoverSpan.css';

function HoverSpan(props) {
    return (
        <span class="hover_img"><button>{props.title}<span><img src={props.link} alt={props.title} height="100" /></span></button></span>
    )
}

export default HoverSpan;