import React, { Component } from 'react';
import './Contact.css';
import Button from '../Button/Button';
import FadeInSection from '../FadeInSection/FadeInSection';

class Contact extends Component {
    render() {
        return (
            <FadeInSection>
                <div className="Contact">
                    <p id="header">CONTACT</p>
                    <p id="text">I am available for full time roles starting July. I also enjoy collaborating on fun projects, feel free to get in touch.</p>
                    <div className="ButtonContainer">
                        <Button title="Resumé" link="https://drive.google.com/file/d/19KYpErPrJRiZmEAmxRhzS6oAEOtM1Fqo/view?usp=sharing"/>
                        <Button title="Get in touch" link="mailto:hello@vedantja.in"/>
                    </div>
                    <p id="secondary">This is a no cookie zone 🍪<br/>Designed in Figma. Coded in React.js by yours truly.<br/>Made with love in India.</p>
                </div>
            </FadeInSection>
        )
    }
}

export default Contact;