import React, { Component } from "react";
import "./App.css";
import Home from "./screens/Home";
import About from "./screens/About";
import Projects from "./screens/Projects";
import Resume from "./screens/Resume";
import MobileNavigation from "./components/MobileNavigationNew";
import { SocialIcon } from "react-social-icons";
import { HashRouter as Router, Route, Link, Switch } from "react-router-dom";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { width: 0, height: 0 };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener("resize", this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    this.setState({
      width: window.innerWidth,
      height: window.innerHeight - 20,
    });
  }

  render() {
    const routes = [
      {
        path: "/",
        exact: true,
        main: () => (
          <Home height={this.state.height} width={this.state.width} />
        ),
      },
      {
        path: "/portfolio",
        main: () => <Projects />,
      },
      {
        path: "/filler",
        main: () => <h2>Some Filler</h2>,
      },
      {
        path: "/resume",
        main: () => <Resume />,
      },
      {
        path: "/about",
        main: () => <About />,
      },
    ];

    let sideBarHeight = {
      minHeight: `${this.state.height}px`,
    };
    return (
      <Router>
        <div className="body">
          <link
            href="https://fonts.googleapis.com/css?family=Karla"
            rel="stylesheet"
          ></link>
          <link
            href="https://fonts.googleapis.com/icon?family=Material+Icons"
            rel="stylesheet"
          ></link>
          <div className="sidebar" style={sideBarHeight}>
            <ul className="routes center-flex">
              <li>
                <Link
                  className="removeUnderline fontKarla adaptiveFontSizeNormalScreen"
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  className="removeUnderline fontKarla adaptiveFontSizeNormalScreen"
                  to="/about"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  className="removeUnderline fontKarla adaptiveFontSizeNormalScreen"
                  to="/portfolio"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  className="removeUnderline fontKarla adaptiveFontSizeNormalScreen"
                  to="/resume"
                >
                  Resume
                </Link>
              </li>
            </ul>

            {routes.map((route, index) => (
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                component={route.sidebar}
              />
            ))}
            <div className="social">
              <SocialIcon
                className="icon"
                url="https://twitter.com/aefnoraustin"
              />
              <SocialIcon
                className="icon"
                url="https://www.instagram.com/austinefnor"
              />
              <SocialIcon className="icon" url="https://github.com/aefnor" />
            </div>
          </div>

          <div className="main">
            <Switch>
              {routes.map((route, index) => (
                <Route
                  key={index}
                  path={route.path}
                  exact={route.exact}
                  component={route.main}
                />
              ))}
              <Route component={Home} />
            </Switch>
          </div>
          <MobileNavigation />
        </div>
      </Router>
    );
  }
}

export default App;
