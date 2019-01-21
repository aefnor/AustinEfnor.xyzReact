import React, { Component } from 'react';
import Link from 'react-router-dom/Link'
import "../styles/Home.css"
import Background from "../assets/Background.png"
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Linkify from 'react-linkify'

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
            height: `${this.props.height}px`
          }
        let url = "www.intern.supply/"
        console.log("Props: ", this.props)
        
        return(
            <div className="homeContainer" style={homeContainerHeight}>
                <div className="homeHeaderContainer">
                    <h3 className="homeHeaderText">Austin Efnor</h3>
                </div>
                <div className="homeBodyContainer">
                    <p className="description">
                        I Co-Created , a website which sent over 400,000 applicants to internship applications in the Fall 2016 recruiting season.
                        I have maintained an internship since my freshman year of college, totalling me to 3 years of work experience in a full production environment.
                    </p>
                    <a href="https://www.google.com/">open</a>
                </div>
            </div>
        )
    }
}
export default Home;