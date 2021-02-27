import React from 'react';
import './Post.css';
// import Medium from '../Assets/medium.svg';
import FadeInSection from '../../FadeInSection/FadeInSection';

function Post(props) {
    return (
        <FadeInSection>
            <div className="Post">
                <img src={props.img} alt={props.title}></img>
                <div className="ContentContainer">
                    <div className="LeftPane">
                        <h1>{props.title}</h1>
                        <div className="Logos">
                            {/* <img id="publication" src={Medium} alt="medium"/> */}
                            <img class="publication" id={props.publication} src={props.logo} alt="publication logo"/>
                        </div>
                    </div>
                    <div className="RightPane">
                        <p id="secondary">{props.description}</p>
                    </div>
                </div>
            </div>
        </FadeInSection>
    )
}

export default Post;