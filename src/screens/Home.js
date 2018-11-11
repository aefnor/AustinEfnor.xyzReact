import React, { Component } from 'react';
import "../styles/Home.css"
import Button from '@material-ui/core/Button';

class Home extends Component {
    constructor(props) {
      super(props);

    }
    
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
                    <Button variant="contained" color="primary">
                        Hello World
                    </Button>
                </div>
            </div>
        )
    }
}
export default Home;