import React, { Component } from 'react';
import "../styles/Home.css"
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';

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
    
    //https://blog.visme.co/website-color-schemes/
    render(){
        let homeContainerHeight = {
            height: `${this.props.height}px`
          }
        console.log("Props: ", this.props)
        
        return(
            <div className="homeContainer" style={homeContainerHeight}>
                <div className="homeHeaderContainer">
                    <h3 className="homeHeaderText">Austin Efnor</h3>
                </div>
                <div className="homeBodyContainer">
                    <p className="description">
                        I Co-Created Intern Supply, a website which sent over 400,000 applicants to internship applications in the Fall 2016 recruiting season.
                        I have maintained an internship since my freshman year of college, totalling me to 3 years of work experience in a full production environment.
                    </p>
                    <div className="emailContainer">
                        <TextField
                            id="outlined-name"
                            label="Name"
                            className="test"
                            // value={this.state.name}
                            onChange={this.handleChange('name')}
                            margin="normal"
                            variant="outlined"
                        />
                        <TextField
                            id="outlined-email-input"
                            label="Email"
                            className="test"
                            type="email"
                            name="email"
                            autoComplete="email"
                            margin="normal"
                            variant="outlined"
                        />
                    </div>
                </div>
            </div>
        )
    }
}
export default Home;