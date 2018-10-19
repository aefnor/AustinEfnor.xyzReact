import React, { Component } from 'react';
import "../styles/Home.css"

class Home extends Component {
    constructor(props) {
      super(props);

    }

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
                    
                </div>
            </div>
        )
    }
}
export default Home;