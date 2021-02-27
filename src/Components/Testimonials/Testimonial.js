import React, { Component } from 'react';
import './Testimonial.css';
import {ReactComponent as Twitter} from '../Hero/Socials/twitter.svg';
import FadeInSection from '../FadeInSection/FadeInSection';

class Testimonial extends Component {
    render() {
        return (
            <FadeInSection>
                <div className="Testimonial">
                    <p id="header">TESTIMONIAL</p>
                    <div className="TestimonialContainer">
                        <div className="TestimonialPost" id="first">
                            <p>“Vedant has an absolutely incredible eye for design (as well as nailing all the fine details), and was a massive help consulting with on designs for the iOS 14 widgets in my Apollo for Reddit app.”</p>
                            <div className="Author">
                                <h2>Christian Selig</h2>
                                <Twitter id="twitter" fill="red"/>
                            </div>
                        </div>
                        {/* <div className="TestimonialPost" id="second">
                            <p>“Vedant has an absolutely incredible eye for design (as well as nailing all the fine details), and was a massive help consulting with on designs for the iOS 14 widgets in my Apollo for Reddit app.”</p>
                            <div className="Author">
                                <h2>Christian Selig</h2>
                                <Twitter id="twitter"/>
                            </div>
                        </div> */}
                    </div>
                </div>
            </FadeInSection>
        )
    }
}

export default Testimonial;