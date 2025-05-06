import React from 'react';
import { 
  Grid, 
  Typography, 
  Paper, 
  Divider,
  List,
  ListItem,
  ListItemText,
  withStyles
} from '@material-ui/core';

const styles = theme => ({
  root: {
    flexGrow: 1,
    padding: '2rem',
  },
  paper: {
    padding: '2rem',
    marginBottom: '2rem',
    borderRadius: '12px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
  },
  header: {
    marginBottom: '1.5rem',
    color: '#219efd',
    fontWeight: 600,
    textAlign: 'center',
  },
  sectionTitle: {
    marginTop: '1.5rem',
    marginBottom: '0.75rem',
    fontWeight: 600,
    color: '#219efd',
  },
  jobTitle: {
    fontWeight: 500,
    marginBottom: '0.5rem',
  },
  jobPeriod: {
    fontStyle: 'italic',
    color: '#666',
    marginBottom: '1rem',
  },
  paragraph: {
    lineHeight: 1.7,
    marginBottom: '1rem',
  },
  divider: {
    margin: '1.5rem 0',
  },
  list: {
    padding: '0.5rem 0',
  },
  listItem: {
    padding: '0.5rem 0',
  },
  bold: {
    fontWeight: 600,
  },
  educationInfo: {
    marginBottom: '0.5rem',
  }
});

class Resume extends React.Component {
  render(){
    const { classes } = this.props;

    return(
      <div className={classes.root}>
        <Grid container spacing={24}>
          <Grid item xs={12} md={10} lg={8} style={{ margin: '0 auto' }}>
            <Paper className={classes.paper}>
              <Typography variant="h3" className={classes.header}>
                Resume
              </Typography>
              
              <Typography variant="h5" className={classes.sectionTitle}>
                Skills
              </Typography>
              <Typography variant="body1" className={classes.paragraph}>
                <span className={classes.bold}>Languages</span>: Javascript, POSTGRES, Python, PHP, VB, C#, Java, C++, C, ASP
              </Typography>
              <Typography variant="body1" className={classes.paragraph}>
                <span className={classes.bold}>Frameworks & Other</span>: FastAPI, Node, React, Pydantic, SQLAlchemy, Celery, RabbitMQ, Redis, Express
              </Typography>
              
              <Divider className={classes.divider} />
              
              <Typography variant="h5" className={classes.sectionTitle}>
                Experience
              </Typography>
              
              {/* Nuclearn */}
              <Typography variant="h6" className={classes.jobTitle}>
                Nuclearn, Phoenix, AZ — Software Engineering Team Lead
              </Typography>
              <Typography variant="body2" className={classes.jobPeriod}>
                Feb 2023 - Present
              </Typography>
              <List dense className={classes.list}>
                <ListItem className={classes.listItem}>
                  <ListItemText primary="Implemented two-pass encryption for streaming logs and other sensitive data using rsa key pair to encrypt an aes key taking the key result to encrypt sensitive data" />
                </ListItem>
                <ListItem className={classes.listItem}>
                  <ListItemText primary="Completed feature rich products under strict deadlines building out the frontend, backend, and datamodels" />
                </ListItem>
                <ListItem className={classes.listItem}>
                  <ListItemText primary="Maintained frontend and backend vulnerabilities alongside any that arose inside their respective host container images" />
                </ListItem>
                <ListItem className={classes.listItem}>
                  <ListItemText primary="Developed and deployed a MS Word Add-in created in react to serve our models inside word docs for autocomplete, q&a, and summary analysis to streamline reporting and other documents" />
                </ListItem>
                <ListItem className={classes.listItem}>
                  <ListItemText primary="Managed a team of ~4 developers, held one-on-ones, lead group outings, and kept a fun but professional atmosphere" />
                </ListItem>
              </List>
              
              {/* Offerpad */}
              <Typography variant="h6" className={classes.jobTitle}>
                Offerpad, Gilbert, AZ — Full Stack Developer
              </Typography>
              <Typography variant="body2" className={classes.jobPeriod}>
                Feb 2021 - Feb 2023
              </Typography>
              <List dense className={classes.list}>
                <ListItem className={classes.listItem}>
                  <ListItemText primary="Create the new markets which allowed us to expand and gain investors / recognition to go public" />
                </ListItem>
                <ListItem className={classes.listItem}>
                  <ListItemText primary="Worked with business requirements to enable the core operations of the Renovation, Disposition, Acquisition, and C&R Teams to streamline the sale of homes with simply designed UI's to streamline workloads. Collaborated with the Front End Web team to create a internal repository of highly reusable components for React. Co-lead in the re-architecture the administration site from Knockout JS to React" />
                </ListItem>
              </List>
              
              {/* Charles Schwab */}
              <Typography variant="h6" className={classes.jobTitle}>
                Charles Schwab, Phoenix, AZ — Contractor - Full Stack Developer
              </Typography>
              <Typography variant="body2" className={classes.jobPeriod}>
                Aug 2019 - Feb 2021
              </Typography>
              <List dense className={classes.list}>
                <ListItem className={classes.listItem}>
                  <ListItemText primary="Oversaw enterprise application development. Ran through the architecture review process, as well as planning, and implementation. Handled all diagraming, and governance meetings overseeing the product. Deployment/maintenance of the product was also a duty overseen. Communicated with the stakeholders to continually address their needs through agile dev." />
                </ListItem>
                <ListItem className={classes.listItem}>
                  <ListItemText primary="Full stack react app with c#.net api. This tool was utilized to obtain information on servers for windows patching. Batching* could be scheduled and monitored via SCCM. Automate the need to send manual emails to streamline QA after batch completion." />
                </ListItem>
                <ListItem className={classes.listItem}>
                  <ListItemText primary="Currency Team ran all patching operations in Schwab. In total we maintained over 100k servers application software, firmware, and overall security on the machines. It was my job to write tools and applications to help patchers streamline any process involved in keeping the machines up to date." />
                </ListItem>
              </List>
              
              {/* Whale Enterprises */}
              <Typography variant="h6" className={classes.jobTitle}>
                Whale Enterprises, Tempe, AZ — Software Developer
              </Typography>
              <Typography variant="body2" className={classes.jobPeriod}>
                Feb 2019 - Aug 2019
              </Typography>
              <List dense className={classes.list}>
                <ListItem className={classes.listItem}>
                  <ListItemText primary="Interacted with customers to constantly push feature driven development" />
                </ListItem>
                <ListItem className={classes.listItem}>
                  <ListItemText primary="Wrote database migrations in MySQL to incorporate or modify existing schemas" />
                </ListItem>
                <ListItem className={classes.listItem}>
                  <ListItemText primary="Built features from the ground up using php, css, js per client demand" />
                </ListItem>
                <ListItem className={classes.listItem}>
                  <ListItemText primary="Incorporated existing platforms such as stripe or zoom for a more productive user flow" />
                </ListItem>
              </List>
              
              {/* Rockford Fosgate */}
              <Typography variant="h6" className={classes.jobTitle}>
                Rockford Fosgate, Tempe, AZ — Software Developer Intern
              </Typography>
              <Typography variant="body2" className={classes.jobPeriod}>
                July 2017 – February 2019
              </Typography>
              <List dense className={classes.list}>
                <ListItem className={classes.listItem}>
                  <ListItemText primary="Creating React Native App (with redux) to serve for our new product using BLE" />
                </ListItem>
                <ListItem className={classes.listItem}>
                  <ListItemText primary="Created React application for internal view of our suppliers statistics for the day using SQL" />
                </ListItem>
                <ListItem className={classes.listItem}>
                  <ListItemText primary="Created internal tool in VB.net using Oxyplot to programatically plot thousands of data points for sound analysis across amplifiers" />
                </ListItem>
                <ListItem className={classes.listItem}>
                  <ListItemText primary="Streamlined automation of our sound processor using Iron-Python and VB.net" />
                </ListItem>
              </List>
              
              {/* Lin and Associates */}
              <Typography variant="h6" className={classes.jobTitle}>
                Lin and Associates, Scottsdale, AZ — Software Developer Intern
              </Typography>
              <Typography variant="body2" className={classes.jobPeriod}>
                July 2016 – February 2017
              </Typography>
              <List dense className={classes.list}>
                <ListItem className={classes.listItem}>
                  <ListItemText primary="Created screenshotting tool for automating picture processes for clients across Altium, Yokogowa, DeltaV. C#.net" />
                </ListItem>
                <ListItem className={classes.listItem}>
                  <ListItemText primary="Worked with Windows Native to translate older versions of our software into a more current version. VB" />
                </ListItem>
                <ListItem className={classes.listItem}>
                  <ListItemText primary="Designed 'shapes' for graphics in Visual Basic. Shapes are used to manipulate control systems and alarm refineries. Vb/VB.net" />
                </ListItem>
                <ListItem className={classes.listItem}>
                  <ListItemText primary="Created internal project management tool for managing employees' attendance in office with accordance to project dates. VBA" />
                </ListItem>
              </List>
              
              <Divider className={classes.divider} />
              
              <Typography variant="h5" className={classes.sectionTitle}>
                Education
              </Typography>
              <Typography variant="h6" className={classes.jobTitle}>
                Arizona State University, Tempe, AZ — Computer Science
              </Typography>
              <Typography variant="body1" className={classes.educationInfo}>
                August 2015 - May 2019, Tempe, AZ
              </Typography>
              <Typography variant="body1" className={classes.educationInfo}>
                <span className={classes.bold}>Concentration</span>: Software Engineering &emsp;
                <span className={classes.bold}>Cumulative</span>: 3.0 GPA
              </Typography>
              <Typography variant="body1" className={classes.paragraph}>
                <span className={classes.bold}>Capstone</span>: Jet Propulsion Labs Psyche mission - focuses on Psyche 16, an asteroid with similar properties to that of Earth's core. Winner – of the NASA Psyche Mobile app competition
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(Resume);