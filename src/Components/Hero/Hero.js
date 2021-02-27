import React, { Component } from 'react';
import './Hero.css';
import Twitter from './Socials/twitter.svg';
import Dribbble from './Socials/dribbble.svg';
import Email from './Socials/email.svg';
import LinkedIn from './Socials/linkedin.svg';
import Button from '../Button/Button';
import HoverSpan from './HoverAnimate/HoverSpan';
import FadeInSection from '../FadeInSection/FadeInSection';
import HeroPng from './hero.png';

class Hero extends Component {

    render() {
        return (
            <FadeInSection>
                <div className="Hero">
                    <div className="Title">
                        <HoverSpan title="Vedant Jain" link={HeroPng}/>
                        <h3>Product Designer</h3>
                    </div>
                    <div className="Socials">
                        <a href="mailto:hello@vedantja.in"><img alt="email icon" src={Email}/></a>
                        <a href="https://dribbble.com/vedantjain"><img alt = "dribbble logo" src={Dribbble}/></a>
                        <a href="https://twitter.com/notnotvedant"><img alt = "twitter logo"  src={Twitter}/></a>
                        <a href="https://www.linkedin.com/in/vedant-jain-802554bb/"><img alt = "linkedinlogo" src={LinkedIn}/></a>
                    </div>
                    <div className="Bio">
                        <h3>I am a product designer based in Jaipur, India. I am currently interning at <span id="highlight"><a href="https://mountain.studio">Mountain Studio</a></span>. <br/><br/>My interest lies in breaking down problems and designing simple <span id="strikethrough">user</span> human experiences. <br/><br/> When I’m not designing, you can find me brewing some <HoverSpan title="coffee" link="https://media.giphy.com/media/ceeFbVxiZzMBi/giphy.gif"/>, listening to <HoverSpan title ="music" link="https://media.giphy.com/media/3oEduR8JONr03Z8TuM/giphy.gif"/> or grinding for that <HoverSpan title="wpm" link="https://media.giphy.com/media/ule4vhcY1xEKQ/giphy.gif"/>. I <HoverSpan title="code" link="https://media.giphy.com/media/hrRJ41JB2zlgZiYcCw/giphy.gif"/> sometimes, too.</h3>
                    </div>
                    <Button title="Get in touch" link="mailto:hello@vedantja.in"/>
                </div>
            </FadeInSection>
        )
    }
}

export default Hero;