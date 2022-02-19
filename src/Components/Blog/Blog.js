import React, {Component} from 'react';
import './Blog.css';
import { Link } from 'react-router-dom';

class Blog extends Component {

    componentDidMount() {
        document.title = "Vedant Jain"
    }
    
    render() {
        return (
            <div className = "Blog">
                <span id="time">Jan 2022</span>
                <p><Link to="/new-portfolio-post">new portfolio post</Link></p>
            </div>
        )
    }
}

export default Blog;