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
                        <div className="fontKarla about-me-body">
                            <h3>Youtube Clone - <a href="https://github.com/aefnor?tab=repositories">Private on https://github.com/aefnor?tab=repositories</a></h3>
                            <img src={require('../assets/youtube-clone.gif')} alt="boohoo" className="projects"/>
                            <p className="Intro">
                            A simple clone of youtube without all their fluff and styling. Done with ReactJs and the Youtube Data API.
                            </p>
                        </div>
                        <div className="fontKarla about-me-body">
                            <h3>Youtube Clone - <a href="https://github.com/aefnor/ReactRedux">Redux Repo</a></h3>
                            <img src={require('../assets/react-redux.gif')} alt="boohoo" className="projects"/>
                            <p className="Intro">
                            A dive into redux and its inner workings.
                            </p>
                        </div>
                        <div className="fontKarla about-me-body">
                            <h3>Food Ninja - <a href="https://github.com/aefnor/FoodNinja">Food Ninja</a></h3>
                            <img src={require('../assets/FoodNinja.gif')} alt="boohoo" className="projects"/>
                            <p className="Intro">
                            This is the first project I made during a hackathon in 2015. It uses HTML and JS to obtain a Fruit Ninja type of game.
                            Art was all done from scratch by an artist whose name I wish I remembered.
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