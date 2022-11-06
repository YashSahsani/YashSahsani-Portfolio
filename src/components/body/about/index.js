import React from 'react';
import SocialContact from '../../common/social-contact';
import "./about.css"

function About() {
    return (
        <div className="about">
           <div className="about-top">
            <div className="about-info">
            Hello There 👋, I am <br/> <span className="info-name">Yash Sahsani</span>. 
            <br/>I am Full Stack Developer and Cybersecurity enthusiast.
            </div>
            <div className="about-photo">
              {/* image not loading because you can use create react app so it is webpack, so webpack needs some extra parameter to load the image of local, so we use .default to load the local image on localhost and browsers */}
              <img src={require('../../../assets/images/about/Programming-bro.svg').default} className="picture" />
            </div>
           </div>
           <SocialContact />
        </div>
    )
}

export default About;
