import React from "react";
import { withStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import Icon from "@material-ui/core/Icon";
import { withRouter } from "react-router-dom";

// Define styles
const styles = {
  root: {
    width: "100%",
    position: "fixed",
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 1000,
    background: "#303030",
    borderTop: "1px solid #424242",
    display: "none",
    "@media (max-width: 768px)": {
      display: "flex",
    },
  },
  action: {
    color: "aliceblue",
    minWidth: 0,
    maxWidth: "25%",
    padding: "6px 12px",
  },
  selected: {
    color: "#FFFFFF !important",
  },
  icon: {
    color: "aliceblue",
  },
  label: {
    color: "aliceblue",
    fontSize: "0.75rem",
  },
};

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
        className={classes.root}
        showLabels
      >
        <BottomNavigationAction
          label="Home"
          value="/"
          icon={<Icon>home</Icon>}
          classes={{
            root: classes.action,
            selected: classes.selected,
            label: classes.label,
            icon: classes.icon,
          }}
        />{" "}
        <BottomNavigationAction
          label="About"
          value="/about"
          icon={<Icon>person</Icon>}
          classes={{
            root: classes.action,
            selected: classes.selected,
            label: classes.label,
            icon: classes.icon,
          }}
        />
        <BottomNavigationAction
          label="Projects"
          value="/portfolio"
          icon={<Icon>folder</Icon>}
          classes={{
            root: classes.action,
            selected: classes.selected,
            label: classes.label,
            icon: classes.icon,
          }}
        />
        <BottomNavigationAction
          label="Resume"
          value="/resume"
          icon={<Icon>description</Icon>}
          classes={{
            root: classes.action,
            selected: classes.selected,
            label: classes.label,
            icon: classes.icon,
          }}
        />
      </BottomNavigation>
    );
  }
}

export default withRouter(withStyles(styles)(MobileNavigation));
