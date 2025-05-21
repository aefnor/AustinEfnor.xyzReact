import React from "react";
import {
  Grid,
  Typography,
  Paper,
  Divider,
  List,
  ListItem,
  ListItemText,
  withStyles,
} from "@material-ui/core";

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
  sectionTitle: {
    marginTop: "1.5rem",
    marginBottom: "0.75rem",
    fontWeight: 600,
    color: "#219efd",
  },
  jobTitle: {
    fontWeight: 500,
    marginBottom: "0.5rem",
  },
  jobPeriod: {
    fontStyle: "italic",
    color: "#666",
    marginBottom: "1rem",
  },
  listItem: {
    padding: "0.5rem 0",
  },
  bold: {
    fontWeight: 600,
  },
  link: {
    color: "#219efd",
    textDecoration: "none",
    "&:hover": {
      textDecoration: "underline",
    },
  },
});

class Resume extends React.Component {
  renderExperience(title, period, points) {
    const { classes } = this.props;
    return (
      <div>
        <Typography variant="h6" className={classes.jobTitle}>
          {title}
        </Typography>
        <Typography variant="body2" className={classes.jobPeriod}>
          {period}
        </Typography>
        <List dense>
          {points.map((text, i) => (
            <ListItem key={i} className={classes.listItem}>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </div>
    );
  }

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <Grid container spacing={24}>
          <Grid item xs={12} md={10} lg={8} style={{ margin: "0 auto" }}>
            <Paper className={classes.paper}>
              <Typography variant="h3" className={classes.header}>
                Austin Efnor
              </Typography>
              <Typography variant="body1" align="center">
                Fullstack Software Engineer - Gilbert, AZ | adefnor@gmail.com |
                (480) 528-8760
              </Typography>
              <Divider className={classes.divider} />
              <Typography variant="h5" className={classes.sectionTitle}>
                Experience
              </Typography>
              {this.renderExperience(
                "Software Engineer Team Lead at Nuclearn, Phoenix, AZ",
                "May 2023 – Present",
                [
                  "Created scalable backend systems using FastAPI, Celery, RabbitMQ, Redis, SQLAlchemy, and Pydantic, with responsive frontends using React.",
                  "Implemented OAuth 2.0, Sentry, Cypress, and Playwright for secure and fast SaaS releases.",
                  "Developed and deployed a React-based MS Word Add-in for autocomplete, summarization, and Q&A on engineering documents using in-house models.",
                  "Led a team of engineers delivering scalable, feature-rich software products with customer-centric design.",
                  "Built a MapReduce framework in Python for processing high volumes of LLM and non-LLM workloads.",
                ]
              )}
              {this.renderExperience(
                "FullStack Developer at Offerpad, Gilbert, AZ",
                "Feb 2021 – Feb 2023",
                [
                  "Created new market software enabling legal compliance and investor recognition during public offering preparations.",
                  "Designed UIs and features to support Renovation, Disposition, Acquisition, and C&R operations.",
                  "Built reusable component libraries in React and migrated legacy KnockoutJS code to React.",
                ]
              )}
              {this.renderExperience(
                "Software Developer at Charles Schwab, Phoenix, AZ",
                "Aug 2019 – Feb 2021",
                [
                  "Managed architecture reviews, planning, and implementation of enterprise software using Agile.",
                  "Created a React + C#.NET app to automate server patching and QA processes via SCCM.",
                  "Built tools to support patching and security operations across 100,000+ servers.",
                ]
              )}
              {this.renderExperience(
                "Software Developer at Whale Enterprises, Tempe, AZ",
                "Feb 2019 – Aug 2019",
                [
                  "Interacted directly with customers to deliver feature-driven development quickly.",
                  "Built custom features using PHP, CSS, and JS based on client demand.",
                  "Created MySQL migrations to support schema changes and enhancements.",
                  "Integrated third-party platforms like Stripe and Zoom to improve user workflows.",
                ]
              )}
              {this.renderExperience(
                "Software Developer Intern at Rockford Fosgate, Tempe, AZ",
                "Jul 2017 – Feb 2019",
                [
                  "Developed a React Native app with Redux for a new BLE-enabled product.",
                  "Built a React dashboard for internal supplier stats using SQL.",
                  "Created a VB.NET tool using Oxyplot for amplifier data analysis.",
                  "Automated sound processor calibration using IronPython and VB.NET.",
                ]
              )}
              {this.renderExperience(
                "Software Developer Intern at Lin and Associates, Scottsdale, AZ",
                "Jul 2016 – Feb 2017",
                [
                  "Created a screenshot automation tool in C# .NET for process control documentation.",
                  "Translated legacy Windows apps into modern versions using VB.",
                  'Designed VB graphics "shapes" to manipulate refinery control systems.',
                  "Built a VBA internal project tracker to manage employee time and attendance.",
                ]
              )}
              <Divider className={classes.divider} />
              <Typography variant="h5" className={classes.sectionTitle}>
                Education
              </Typography>
              <Typography variant="h6" className={classes.jobTitle}>
                Arizona State University, Tempe, AZ
              </Typography>
              <Typography variant="body1">
                B.S. in Computer Science, Software Engineering Emphasis (2015 –
                2019)
              </Typography>{" "}
              <Typography variant="body1" paragraph>
                <span className={classes.bold}>Capstone</span>: Jet Propulsion
                Labs Psyche mission – Winner of NASA Psyche Mobile App
                Competition
              </Typography>{" "}
              <Typography variant="body2">
                <a
                  href="https://psyche.asu.edu/get-involved/capstone-projects/capstone-projects-iron-class/psyche-experience-mobile-app-arrival/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={classes.link}
                >
                  https://psyche.asu.edu/get-involved/capstone-projects/capstone-projects-iron-class/psyche-experience-mobile-app-arrival/
                </a>
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(Resume);
