import React, { Component } from 'react';
import "../styles/Home.css"
class Home extends Component {
    constructor(props) {
      super(props);
        this.setState({
            name: "",
        })
    }
    handleChange = name => event => {
        this.setState({
            [name]: event.target.value,
        });
    };
     handleClick(e) {
        e.preventDefault();
        console.log('The link was clicked.');
    }
    
    //https://blog.visme.co/website-color-schemes/
    render(){
        let homeContainerHeight = {
            flex: 1
          }
        
        return(
            <div className="homeContainer" style={homeContainerHeight}>
                <div className="homeHeaderContainer">
                    <h3 className="homeHeaderText">Austin Efnor</h3>
                    <a className="logo">
                        <img src={require('../assets/ProfilePicture.jpg')} alt="boohoo" className="size-image"/>
                    </a>
                </div>
                <div className="homeBodyContainer">
                    <p className="description">
                        I Co-Created a website which sent over 400,000 applicants to internship applications in the Fall 2016 recruiting season.
                        I have maintained an internship since my freshman year of college, totalling me to 3 years of work experience in a full production environment.
                    </p>
                </div>
            </div>
        )
    }
}
export default Home;