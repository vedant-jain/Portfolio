import React, { Component } from 'react';
import './Projects.css';
import Post from './Post/Post';
import Lumi from './Assets/lumi.png';
import AcuteArt from './Assets/acute.png';
import Widgets from './Assets/widgets.png';
import Muzli from './Assets/muzli.svg';
import Bootcamp from './Assets/bootcamp.png';
import UXC from './Assets/UXC.svg';

class Projects extends Component {
    render() {
        return (
            <div className="Projects">
                <p id="header">RECENT WORK</p>
                <a href="https://medium.muz.li/strengthen-your-landing-pages-lumi-website-redesign-ui-ux-case-study-c5e012a99f54">
                    <Post img={Lumi} publication="Muzli" logo={Muzli} title="Strengthen your Landing Pages – LUMI website redesign" description="In this case study, I explained how I redesigned a product website, LUMI, from scratch. I talked about my process, the decisions I took, my approach to this project and what I learned while working on it."/>
                </a>
                <a href="https://bootcamp.uxdesign.cc/making-art-accessible-to-everyone-via-ar-caf72dd5d78d?sk=d58b9ec9bae4e4473bd7e5cbc5e79342">
                    <Post img={AcuteArt} publication="Bootcamp" logo={Bootcamp} title="Redesigning an AR app – Acute Art" description="Acute Art aims to make work by legendary artists from around the world accessible to everyone. I redesigned the app to make it more easy to use and to add support for haptic touch, app clips and dark mode. It really helped me improve my grasp on the Human Interface Guidelines from Apple."/>
                </a>
                <a href="https://uxdesign.cc/designing-widgets-for-ios-macos-and-ipados-the-ultimate-guide-737fb284a9df?sk=c08502fc63629f197b3ceb547407f745">
                    <Post img={Widgets} logo={UXC} publication="uxc" title="Designing widgets for iOS" description="In this guide, I covered all you need to know to design widgets for iOS, macOS and iPadOS. Apple’s Human Interface Guidelines form the basis of this guide. I used Twitter and Duolingo as examples."/>
                </a>
            </div>
        )
    }
}

export default Projects;