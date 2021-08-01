import React from 'react'
import '../styles/About.css'

class About extends React.Component {
    render(){
        return(
            <div className="Container">
                <div className="Body-side">
                    
                </div>
                <div className="Body">
                    <div className="Body-Container">
                        <header className="Header">
                            <div className="fontKarla adaptiveFontSizeSmallScreen">
                                About Me
                            </div>
                        </header>
                        <div className="fontKarla about-me-body">
                            <h3>Intro</h3>
                            <p className="Intro">
                                &emsp; I am a Co-Founder of <a href="https://intern.supply" target="_blank" className="removeUnderline" style={{color: '#219efd'}}>Intern Supply</a> where we supply internships
                                to students with ease. My primary job focus is in Full Stack Development, as building new things from the ground up is always exciting. I graduated school in 2019 and plan on going back to Arizona State
                                University to get my Master in Artificial Intelligence. I am available for consulting on projects of interest, those can range from AI in game development, space exploration, and automation for ease! I am 
                                based of out Arizona where I plan to live for the forseeable future.
                            </p>
                            <h3>Currently</h3>
                            <p className="Intro">
                                Recently started at Offerpad as a Full Stack Developer. I am elated at the opportunity to innovate the Real Estate market alongside a group of truly amazing people.
                            </p>
                            <h3>I like</h3>
                            <ul>
                                <li>
                                    Ozzy (My mini Golden Doodle)
                                </li>
                                <li>
                                    Gaming
                                </li>
                                <li>
                                    Hiking
                                </li>
                                <li>
                                    Camping
                                </li>
                                <li>
                                    Space
                                </li>
                                <li>
                                    Programming
                                </li>
                                <li>
                                    Artificial Intelligence
                                </li>
                                <li>
                                    Trading Stocks
                                </li>
                            </ul>
                            <h3>Fun Facts</h3>
                            <ul>
                                <li>
                                    I have been to Iceland and want to go again
                                </li>
                                <li>
                                    Have 6 computers
                                </li>
                                <li>
                                    I love shooting
                                </li>
                                <li>
                                    I have over 4,000 hours of Counter Strike Global Offensive
                                </li>
                            </ul>
                            {/* <h3>Goals</h3>
                            <ul>
                                <li>
                                    Own a McLaren P1
                                </li>
                                <li>
                                    Work for myself by the age of 26
                                </li>
                                <li>
                                    Own a House by 25
                                </li>
                                <li>
                                    Trade Stocks into retirement
                                </li>
                            </ul> */}
                        </div>
                    </div>
                </div>
                <div className="Body-side">
                    
                </div>
            </div>
        )
    }
}
export default About;