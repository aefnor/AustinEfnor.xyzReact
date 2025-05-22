import React from "react";
import { withStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import Icon from "@material-ui/core/Icon";
import { withRouter } from "react-router-dom";

// Define styles with more specific class names
const styles = (theme) => ({
  navigation: {
    width: "100%",
    position: "fixed",
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 1000,
    background: "#303030",
    borderTop: "1px solid #424242",
    display: "none",
    boxShadow: "0px -2px 10px rgba(0,0,0,0.2)", // Add shadow for better visibility
    "@media (max-width: 768px)": {
      display: "flex",
    },
  },
  navAction: {
    minWidth: "60px",
    maxWidth: "25%",
    padding: "6px 8px",
    color: "aliceblue",
  },
  selected: {
    color: "#FFFFFF!important",
  },
  navIcon: {
    color: "aliceblue",
  },
  navLabel: {
    color: "aliceblue!important",
    fontSize: "0.7rem!important",
    opacity: "1!important",
  },
});

class MobileNavigation extends React.Component {
  handleChange = (event, value) => {
    this.props.history.push(value);
  };

  render() {
    const { classes, location } = this.props;
    const currentPath = location.pathname;

    return (
      <BottomNavigation
        value={currentPath}
        onChange={this.handleChange}
        className={classes.navigation}
        showLabels
      >
        <BottomNavigationAction
          label="Home"
          value="/"
          icon={<Icon>home</Icon>}
          className={classes.navAction}
          classes={{
            selected: classes.selected,
            label: classes.navLabel,
          }}
        />
        <BottomNavigationAction
          label="About"
          value="/about"
          icon={<Icon>person</Icon>}
          className={classes.navAction}
          classes={{
            selected: classes.selected,
            label: classes.navLabel,
          }}
        />
        <BottomNavigationAction
          label="Projects"
          value="/portfolio"
          icon={<Icon>folder</Icon>}
          className={classes.navAction}
          classes={{
            selected: classes.selected,
            label: classes.navLabel,
          }}
        />
        <BottomNavigationAction
          label="Resume"
          value="/resume"
          icon={<Icon>description</Icon>}
          className={classes.navAction}
          classes={{
            selected: classes.selected,
            label: classes.navLabel,
          }}
        />
      </BottomNavigation>
    );
  }
}

export default withRouter(withStyles(styles)(MobileNavigation));
