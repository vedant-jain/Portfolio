import React, {Component} from 'react';
import './Home.css';
import { Link } from 'react-router-dom';

class Home extends Component {

    componentDidMount() {
        document.title = "Vedant Jain"
    }
    
    render() {
        return (
            <div className = "Home">
                <span id="time">11:26 PM</span>
                <h2>hi, I'm Vedant. I am a product designer, based in <span id="emoji">🇮🇳</span></h2>
                <p>I like designing super simple interfaces</p>
                <p>I care about accessibility and privacy <span id="emoji">👀</span>. I am always looking for new human centric ideas on the web.</p>
                <p id="emoji">🙌</p>
                <p>I like to explore digital interactions, iterating towards simplicity, staring at fonts, and building mechanical keyboards.</p>
                <span id="time">GO:OD AM</span>
                <p>See what I’m doing <Link style={{padding: 0}} to="/now">now</Link></p>
                <span id="time">12:08 AM</span>
                {/* <p>I also have a <Link style={{padding: 0}} to="/blog">blog</Link>, but I'm pretty new to this :P</p> */}
                <p>I also have some case studies on <a href="mailto://medium.com/@VedantJ">medium</a></p>
                <p>get in touch –  <a href="mailto://hello@vedantja.in">hello@vedantja.in</a> or <a href="https://www.twitter.com/vdntjn">twitter</a></p>
            </div>
        )
    }
}

export default Home;