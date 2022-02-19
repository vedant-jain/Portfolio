import React, {Component} from 'react';
import './Post.css';
import { Link } from 'react-router-dom';

class NewPost extends Component {

    componentDidMount() {
        document.title = "blog bro"
    }
    
    render() {
        return (
            <div className = "post_container">
                <h3 id="subject">this is for you</h3>
                <p id="body">Jaguar shark! So tell me - does it really exist? Forget the fat lady! You're obsessed with the fat lady! Drive us out of here! What do they got in there? King Kong? Hey, take a look at the earthlings. Goodbye! Life finds a way. Remind me to thank John for a lovely weekend.</p>
                <p>Checkmate... This thing comes fully loaded. AM/FM radio, reclining bucket seats, and... power windows. We gotta burn the rain forest, dump toxic waste, pollute the air, and rip up the OZONE! 'Cause maybe if we screw up this planet enough, they won't want it anymore!</p>
                <p>You really think you can fly that thing? Forget the fat lady! You're obsessed with the fat lady! Drive us out of here! Forget the fat lady! You're obsessed with the fat lady! Drive us out of here! Must go faster... go, go, go, go, go! You know what? It is beets. I've crashed into a beet truck.</p>
                <p>back to the <Link to="/">homepage</Link> or the <Link to="/blog">blog list</Link></p>
            </div>
        )
    }
}

export default NewPost;