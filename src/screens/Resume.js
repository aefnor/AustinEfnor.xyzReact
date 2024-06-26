import React from 'react'
import '../styles/About.css'

class Resume extends React.Component {
    render(){
        return(
            <div className="Container">
                <div className="Body-side">
                    
                </div>
                <div className="Body">
                    <div className="Body-Container">
                        <header className="Header">
                            <div className="fontKarla adaptiveFontSizeSmallScreen">
                                Resume
                            </div>
                        </header>
                        <div className="fontKarla about-me-body">
                            <h1>Skills</h1>
                            <p className="Intro">
                            <b>Languages</b>: Javascript, POSTGRES, Python, PHP, VB, C#, Java, C++, C, ASP
                            <br/>
                            <b>Frameworks & Other</b>: FastAPI, Node, React, Pydantic, SQLAlchemy, Celery, RabbitMQ, Redis, Express

                            </p>
                            <h1>Experience</h1>
                            <h3>Nuclearn, Phoenix, AZ — Software Engineering Team Lead</h3>
                            <p className="Intro">
                            Feb 2023 - Present
                            </p>
                            <ul className="Intro">
                                <li>Implemented two-pass encryption for streaming logs and other sensitive data using rsa key pair to encrypt an aes key taking the key result to encrypt sensitive data</li>
                                <li>Completed feature rich products under strict deadlines building out the frontend, backend, and datamodels</li>
                                <li>Maintained frontend and backend vulnerabilities alongside any that arose inside their respective host container images</li>
                                <li>Developed and deployed a MS Word Add-in created in react to serve our models inside word docs for autocomplete, q&a, and summary analysis to streamline reporting and other documents</li>
                                <li>Managed a team of ~4 developers, held one-on-ones, lead group outings, and kept a fun but professional atmosphere</li>
                            </ul>

                            <h3>Offerpad, Gilbert, AZ — Full Stack Developer</h3>
                            <p className="Intro">
                            Feb 2021 - Feb 2023
                            </p>
                            <ul className="Intro">
                                <li>Create the new markets which allowed us to expand and gain investors / recognition to go public</li>
                                <li>Worked with business requirements to enable the core operations of the Renovation, Disposition, Acquisition, and C&R Teams to streamline the sale of homes with simply designed UI's to streamline workloads. Collaborated with the Front End Web team to create a internal repository of highly reusable components for React. Co-lead in the re-architecture the administration site from Knockout JS to React</li>
                            </ul>

                            <h3>Charles Schwab, Phoenix, AZ — Contractor - Full Stack Developer</h3>
                            <p className="Intro">
                            Aug 2019 - Feb 2021
                            </p>
                            <ul className="Intro">
                                <li>Oversaw enterprise application development. Ran through the architecture review process, as well as planning, and implementation. Handled all diagraming, and governance meetings overseeing the product. Deployment/maintenance of the product was also a duty overseen. Communicated with the stakeholders to continually address their needs through agile dev.</li>
                                <li>Full stack react app with c#.net api. This tool was utilized to obtain information on servers for windows patching. Batching* could be scheduled and monitored via SCCM. Automate the need to send manual emails to streamline QA after batch completion.</li>
                                <li>Currency Team ran all patching operations in Schwab. In total we maintained over 100k servers application software, firmware, and overall security on the machines. It was my job to write tools and applications to help patchers streamline any process involved in keeping the machines up to date.</li>
                            </ul>

                            <h3>Whale Enterprises, Tempe, AZ — Software Developer</h3>
                            <p className="Intro">
                            Feb 2019 - Aug 2019
                            </p>
                            <ul className="Intro">
                                <li>Interacted with customers to constantly push feature driven development</li>
                                <li>Wrote database migrations in MySQL to incorporate or modify existing schemas</li>
                                <li>Built features from the ground up using php, css, js per client demand</li>
                                <li>Incorporated existing platforms such as stripe or zoom for a more productive user flow</li>
                            </ul>

                            <h3>Rockford Fosgate, Tempe, AZ — Software Developer Intern</h3>
                            <p className="Intro">
                            July 2017 – February 2019
                            </p>
                            <ul className="Intro">
                                <li>Creating React Native App (with redux) to serve for our new product using BLE</li>
                                <li>Created React application for internal view of our suppliers statistics for the day using SQL</li>
                                <li>Created internal tool in VB.net using Oxyplot to programatically plot thousands of data points for sound analysis across amplifiers </li>
                                <li>Streamlined automation of our sound processor using Iron-Python and VB.net</li>
                            </ul>

                            <h3>Lin and Associates, Scottsdale, AZ — Software Developer Intern</h3>
                            <p className="Intro">
                            July 2016 – February 2017
                            </p>
                            <ul className="Intro">
                                <li>Created screenshotting tool for automating picture processes for clients across Altium, Yokogowa, DeltaV. C#.net</li>
                                <li>Worked with Windows Native to translate older versions of our software into a more current version. VB</li>
                                <li>Designed “shapes” for graphics in Visual Basic. Shapes are used to manipulate control systems and alarm refineries. Vb/VB.net </li>
                                <li>Created internal project management tool for managing employees’ attendance in office with accordance to project dates. VBA</li>
                            </ul>

                            <h1>Education</h1>
                            <h3>Arizona State University, Tempe, AZ — Computer Science</h3>
                            <p>August 2015 - May 2019, Tempe, AZ</p>
                            <p><b>Concentration</b>: Software Engineering &emsp;	<b>Cumulative</b>: 3.0 GPA</p>
                            <p className="Intro"><b>Capstone</b>: Jet Propulsion Labs Psyche mission - focuses on Psyche 16, an asteroid with similar properties to that of Earth’s core. Winner – of the NASA Psyche Mobile app competition</p>
                        </div>
                    </div>
                </div>
                <div className="Body-side">
                    
                </div>
            </div>
        )
    }
}
export default Resume;