import React, { Component } from "react";
import "../styles/Home.css";
import {
  Grid,
  Typography,
  Paper,
  Divider,
  withStyles,
  Card,
  CardMedia,
  CardContent,
} from "@material-ui/core";
import ProfilePicture from "../assets/ProfilePicture.jpg";

const styles = (theme) => ({
  root: {
    flexGrow: 1,
    padding: "2rem",
  },
  paper: {
    padding: "2rem",
    marginBottom: "2rem",
    borderRadius: "12px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
  },
  header: {
    marginBottom: "1.5rem",
    color: "#219efd",
    fontWeight: 600,
    textAlign: "center",
  },
  subheader: {
    marginBottom: "1rem",
    fontWeight: 500,
    color: "#333",
    textAlign: "center",
  },
  paragraph: {
    lineHeight: 1.7,
    marginBottom: "1rem",
    fontSize: "1.1rem",
  },
  divider: {
    margin: "1.5rem 0",
  },
  profileContainer: {
    display: "flex",
    justifyContent: "center",
    marginBottom: "2rem",
  },
  profileCard: {
    maxWidth: 400,
    borderRadius: "12px",
    boxShadow: "0 8px 16px rgba(0,0,0,0.2)",
    transition: "transform 0.3s ease-in-out",
    "&:hover": {
      transform: "scale(1.03)",
    },
  },
  profileImage: {
    height: 200,
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  highlight: {
    color: "#219efd",
    fontWeight: 600,
  },
  cardContent: {
    textAlign: "center",
    padding: "1.5rem",
  },
});

class Home extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Grid container spacing={16}>
          <Grid
            item
            xs={12}
            md={10}
            lg={8}
            style={{ margin: "0 auto", paddingBottom: "20px" }}
          >
            <Paper className={classes.paper}>
              <Typography variant="h3" className={classes.header}>
                Austin Efnor
              </Typography>

              <Typography variant="h5" className={classes.subheader}>
                Full Stack Developer & Team Lead
              </Typography>

              <div className={classes.profileContainer}>
                <Card className={classes.profileCard}>
                  <CardMedia
                    className={classes.profileImage}
                    image={ProfilePicture}
                    title="Austin Efnor"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography variant="subtitle1">
                      Software Engineering Team Lead
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      Phoenix, Arizona
                    </Typography>
                  </CardContent>
                </Card>
              </div>

              <Typography variant="body1" className={classes.paragraph}>
                I{" "}
                <span className={classes.highlight}>Co-Created a website</span>{" "}
                which sent over
                <span className={classes.highlight}>
                  {" "}
                  400,000 applicants
                </span>{" "}
                to internship applications in the Fall 2016 recruiting season.
              </Typography>

              <Typography variant="body1" className={classes.paragraph}>
                I had maintained an internship since my freshman year of
                college, starting my first 'full time' job senior year of
                college. After college I was hired on making React apps for{" "}
                <span className={classes.highlight}>Charles Schwab</span>.
              </Typography>

              <Divider className={classes.divider} />

              <Typography variant="body1" className={classes.paragraph}>
                Then, I worked at{" "}
                <span className={classes.highlight}>Offerpad</span> as a
                Fullstack Software Engineer converting KnockoutJS to React, as
                well as other general Fullstack work.
              </Typography>

              <Typography variant="body1" className={classes.paragraph}>
                Now I work at{" "}
                <span className={classes.highlight}>Nuclearn AI</span>, a
                startup in the Phoenix area, as a{" "}
                <span className={classes.highlight}>
                  Software Engineering Team Lead
                </span>
                .
              </Typography>

              {/* Uncomment when ready to use
              <Divider className={classes.divider} />
              
              <Typography variant="body1" className={classes.paragraph}>
                Check out my company page - <a href='https://www.linkedin.com/company/leet-coffee-bois/' 
                className={classes.link}>here</a> for some side work I have done.
              </Typography>
              */}
            </Paper>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(Home);
