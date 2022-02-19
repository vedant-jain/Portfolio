import React, {Component} from 'react';
import './Now.css';
import { Link } from 'react-router-dom';

class Now extends Component {

    componentDidMount() {
        document.title = "Vedant Jain"
    }
    
    render() {
        return (
            <div className = "Now">
                <span id="time">N:OW AM</span>
                <h3>This is a <a href="https://nownownow.com/about">now</a> page. It’s what I’m doing at this point in my life.</h3>
                <p>i'm trying to read 50 books this year <span id="emoji">🥵</span></p>
                <p>you can find me on <a href="https://literal.club/vedant">literal</a> or <a href="https://www.goodreads.com/vedantjain">goodreads</a></p>
                <p>i'm trying to get into de-fi...but I'm pretty wary of it lol</p>
                <span id="time">1:07 PM</span>
                <p>this year, I've abandoned all popular socials (ig, twt, reddit). i'm on the lookout for alt community platforms</p>
                <p>or just a digital lifestyle which doesn't hurt my brain every week</p>
                <p>i recently discovered <a href="https://urbitex.io">urbit</a>, it's pretty cool if you're into this sort of a thing</p>
                <span id="time">1:13 PM</span>
                <p>taking care of my plants :D</p>
                <span id="time">1:15 PM</span>
                <p>btw this is from January 11 lol</p>
                <span id="time">3:26 PM</span>
                <p>in case you want to go <Link to="/">back</Link></p>
            </div>
        )
    }
}

export default Now;