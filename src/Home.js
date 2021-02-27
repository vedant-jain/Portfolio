import React, {Component} from 'react';
import './Home.css';
import Hero from './Components/Hero/Hero';
import Projects from './Components/Projects/Projects';
import Testimonial from './Components/Testimonials/Testimonial';
import Contact from './Components/Contact/Contact';

class Home extends Component {

    componentDidMount() {
        document.title = "Vedant Jain"
    }
    
    render() {
        return (
            <div className = "Home">
                <Hero/>
                <Projects/>
                <Testimonial/>
                <Contact/>
            </div>
        )
    }
}

export default Home;