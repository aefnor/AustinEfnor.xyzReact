import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './screens/Home'
import Portfolio from './screens/Portfolio'
import About from './screens/About'
import Projects from './screens/Projects'
import Resume from './screens/Resume'
import { SocialIcon } from 'react-social-icons';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { width: 0, height: 0 };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }
  
  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }
  
  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }
  
  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight-20 });
  }
  render() {
    const routes = [
      {
        path: "/",
        exact: true,
        // sidebar: () => <SocialIcon url="https://twitter.com/aefnoraustin" />,
        main: () => <Home height={this.state.height} width={this.state.width}/>
      },
      {
        path: "/portfolio",
        // sidebar: () => <div>portfolio!</div>,
        main: () => <Projects />
      },
      {
        path: "/filler",
        // sidebar: () => <div>Some filler!</div>,
        main: () => <h2>Some Filler</h2>
      },
      {
        path: "/resume",
        // sidebar: () => <div>Some filler!</div>,
        main: () => <Resume />
      },
      {
        path: "/about",
        // sidebar: () => <div>What</div>,
        main: () => <About/>
      },
    ];
    console.log("State of height and width: ", this.state.height, this.state.width)
    let sideBarHeight = {
      minHeight: `${this.state.height}px`
    }
    return (
      <Router>
        <div className="body">
        <link href="https://fonts.googleapis.com/css?family=Karla" rel="stylesheet"></link>
          <div className="sidebar" style={sideBarHeight}>
            <ul className="routes center-flex" style={{height: '90%'}}>
              <li>
                <Link className="removeUnderline fontKarla adaptiveFontSizeNormalScreen" to="/">Home</Link>
              </li>
              <li>
                <Link className="removeUnderline fontKarla adaptiveFontSizeNormalScreen" to="/about">About</Link>
              </li>
              <li>
                <Link className="removeUnderline fontKarla adaptiveFontSizeNormalScreen" to="/portfolio">Projects</Link>
              </li>
              <li>
                <Link className="removeUnderline fontKarla adaptiveFontSizeNormalScreen" to="/resume" href="AustinEfnor.xyzReact\src\assets\Resume 3-24-2020-No Word.pdf">Resume</Link>
              </li>
            </ul>

            {routes.map((route, index) => (
              // You can render a <Route> in as many places
              // as you want in your app. It will render along
              // with any other <Route>s that also match the URL.
              // So, a sidebar or breadcrumbs or anything else
              // that requires you to render multiple things
              // in multiple places at the same URL is nothing
              // more than multiple <Route>s.
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                component={route.sidebar}
              />
            ))}
            <div style={{display: 'flex', justifyContent: 'space-between'}}>
                <SocialIcon url="https://twitter.com/aefnoraustin" />
                <SocialIcon url="https://www.instagram.com/austinefnor" />
                <SocialIcon url="https://github.com/aefnor" />
            </div>
          </div>

          <div className="main">
            {routes.map((route, index) => (
              // Render more <Route>s with the same paths as
              // above, but different components this time.
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                component={route.main}
              />
            ))}
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
