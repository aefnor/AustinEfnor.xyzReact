import React from 'react'
import '../styles/Projects.css'

class Projects extends React.Component {
    render(){
        return(
            <div className="Container">
                <div className="Body-side">
                    
                </div>
                <div className="Body">
                    <div className="Body-Container">
                        <header className="Header">
                            <div className="fontKarla adaptiveFontSizeSmallScreen">
                                My Projects
                            </div>
                        </header>
                        <div className="fontKarla about-me-body">
                            <h3>Intern Supply - <a href="https://intern.supply">https://intern.supply</a></h3>
                            <img src={require('../assets/InternSupply.png')} alt="boohoo" className="projects"/>
                            <p className="Intro">
                            Intern Supply is a website which sent over 400,000 applicants to 
                            internship applications in the Fall 2016 recruiting season. Our goal was to deliver the ability to easily
                            apply to many job applications anywhere with a free clicks. No searching google, all locations available.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="Body-side">
                    
                </div>
            </div>
        )
    }
}
export default Projects;