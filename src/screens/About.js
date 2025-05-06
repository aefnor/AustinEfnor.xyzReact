import React from 'react';
import '../styles/About.css';
import { 
  Grid, 
  Typography, 
  Paper, 
  List, 
  ListItem, 
  ListItemText, 
  Card,
  CardContent,
  Divider,
  withStyles
} from '@material-ui/core';
import ozzyImage from '../assets/dogs/photo_2025-05-05_22-40-47.jpg';
import midasImage from '../assets/dogs/photo_2025-05-05_22-36-29.jpg';
import ozzysWildNightImage from '../assets/dogs/photo_2025-05-05_22-36-17.jpg';
import midasHandsupImage from '../assets/dogs/photo_2025-05-05_22-36-27.jpg';
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
  },
  sectionTitle: {
    marginTop: '1.5rem',
    marginBottom: '0.75rem',
    fontWeight: 600,
  },
  paragraph: {
    lineHeight: 1.7,
    marginBottom: '1rem',
  },
  list: {
    padding: '0.5rem 0',
  },
  listItem: {
    padding: '0.5rem 0',
  },
  link: {
    color: '#219efd',
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'underline',
    },
  },
  imageGrid: {
    marginTop: '1.5rem',
    marginBottom: '1.5rem',
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    borderRadius: '8px',
    transition: 'transform 0.3s ease-in-out',
    '&:hover': {
      transform: 'scale(1.03)',
    },
  },
  cardMedia: {
    paddingTop: '75%', // 4:3 aspect ratio
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  cardContent: {
    flexGrow: 1,
    padding: '1rem',
  },
  divider: {
    margin: '2rem 0',
  },
  imageContainer: {
    height: '300px', // Increased from 200px to 300px
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    borderTopLeftRadius: '8px',
    borderTopRightRadius: '8px',
  }
});

class About extends React.Component {
  render(){
    const { classes } = this.props;
    
    // You can replace these placeholder URLs with your actual image URLs
    const dogImages = [
      { 
        url: ozzyImage, 
        title: 'Ozzy', 
        description: 'My mini Golden Doodle'
      },
      // Add more dog images here
      {
        url: midasImage,
        title: 'Midas',
        description: 'My Bernedoodle'
      },
        {
            url: ozzysWildNightImage,
            title: 'Ozzy\'s Wild Night',
            description: 'Ozzy after a long night of fun'
        },
        {
            url: midasHandsupImage,
            title: 'Midas Hands Up',
            description: 'Freeze!!'
        }

    ];
    
    const technoImages = [
      { 
        url: 'https://via.placeholder.com/400x300?text=Gun+Collection', 
        title: 'My Collection', 
        description: 'Part of my gun collection' 
      },
      // Add more gun images here
    ];

    return(
      <div className={classes.root}>
        <Grid container spacing={24}>
          <Grid item xs={12} md={10} style={{ margin: '0 auto' }}>
            <Paper className={classes.paper}>
              <Typography variant="h3" className={classes.header}>
                About Me
              </Typography>
              
              <Typography variant="h5" className={classes.sectionTitle}>
                Intro
              </Typography>
              <Typography variant="body1" className={classes.paragraph}>
                I am a Co-Founder of <a href="https://intern.supply" target="_blank" className={classes.link}>
                  Intern Supply
                </a> where we supply internships to students with ease. My primary job focus is in Full Stack Development, 
                as building new things from the ground up is always exciting. I graduated school in 2019 and plan on going back to Arizona State
                University to get my Master in Artificial Intelligence. I am available for consulting on projects of interest, those can range from 
                AI in game development, space exploration, and automation for ease! I am based of out Arizona where I plan to live for the foreseeable future.
              </Typography>
              
              <Divider className={classes.divider} />
              
              <Typography variant="h5" className={classes.sectionTitle}>
                Currently
              </Typography>
              <Typography variant="body1" className={classes.paragraph}>
                Recently started at NuclearnAI as a Full Stack Developer. Working with Amazing people to integrate AI into Nuclear Utilities.
              </Typography>
              
              {/* <Divider className={classes.divider} />
              
              <Typography variant="h5" className={classes.sectionTitle}>
                I Like
              </Typography> */}
              {/* <List className={classes.list}>
                {[
                  "Ozzy (My mini Golden Doodle)",
                  "Gaming",
                  "Hiking",
                  "Camping",
                  "Space",
                  "Programming",
                  "Artificial Intelligence",
                  "Trading Stocks"
                ].map((item, index) => (
                  <ListItem key={index} className={classes.listItem}>
                    <ListItemText primary={item} />
                  </ListItem>
                ))}
              </List> */}
              
              <Divider className={classes.divider} />
              
              <Typography variant="h5" className={classes.sectionTitle}>
                Fun Facts
              </Typography>
              <List className={classes.list}>
                {[
                  "I have been to Iceland and want to go again",
                  "Have 6 computers",
                  "I love shooting",
                  "I have over 4,000 hours of Counter Strike Global Offensive"
                ].map((item, index) => (
                  <ListItem key={index} className={classes.listItem}>
                    <ListItemText primary={item} />
                  </ListItem>
                ))}
              </List>
              
              {/* Dog Section */}
              <Divider className={classes.divider} />
              <Typography variant="h5" className={classes.sectionTitle}>
                My Dogs
              </Typography>
              <Grid container spacing={24} className={classes.imageGrid}>
                {dogImages.map((dog, index) => (
                  <Grid item xs={12} sm={6} md={4} key={index}>
                    <Card className={classes.card}>
                      <div 
                        className={classes.imageContainer} 
                        style={{ backgroundImage: `url(${dog.url})` }}
                      />
                      <CardContent className={classes.cardContent}>
                        <Typography gutterBottom variant="h6">
                          {dog.title}
                        </Typography>
                        <Typography variant="body2" color="textSecondary">
                          {dog.description}
                        </Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                ))}
              </Grid>
              
              {/* Gun Collection Section */}
              <Divider className={classes.divider} />
              <Typography variant="h5" className={classes.sectionTitle}>
                Techno
              </Typography>
              <Grid container spacing={24} className={classes.imageGrid}>
                {technoImages.map((techno, index) => (
                  <Grid item xs={12} sm={6} md={4} key={index}>
                    <Card className={classes.card}>
                      <div 
                        className={classes.imageContainer} 
                        style={{ backgroundImage: `url(${techno.url})` }}
                      />
                      <CardContent className={classes.cardContent}>
                        <Typography gutterBottom variant="h6">
                          {techno.title}
                        </Typography>
                        <Typography variant="body2" color="textSecondary">
                          {techno.description}
                        </Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(About);