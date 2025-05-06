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
  withStyles,
  IconButton
} from '@material-ui/core';
// import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import ozzyImage from '../assets/dogs/photo_2025-05-05_22-40-47.jpg';
import midasImage from '../assets/dogs/photo_2025-05-05_22-36-29.jpg';
import ozzysWildNightImage from '../assets/dogs/photo_2025-05-05_22-36-17.jpg';
import midasHandsupImage from '../assets/dogs/photo_2025-05-05_22-36-27.jpg';
import sofiTukkerImage1 from '../assets/music/sofiTukker.jpg';
import missMoniqueImage from '../assets/music/missMonique.jpg';
import walterArtistImage from '../assets/music/walterArt.jpg';
import walterMainImage from '../assets/music/walterMain.jpg';
import martinGarrixOmniaImage from '../assets/music/martInGarrixOmnia.jpg';

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
  },
  videoContainer: {
    position: 'relative',
    height: '300px',
    backgroundColor: '#000',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderTopLeftRadius: '8px',
    borderTopRightRadius: '8px',
    cursor: 'pointer',
  },
  videoOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    opacity: 0.8,
    transition: 'opacity 0.3s ease',
    '&:hover': {
      opacity: 1,
    },
  },
  playButton: {
    backgroundColor: '#219efd',
    color: 'white',
    width: '60px',
    height: '60px',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'background-color 0.3s ease, transform 0.3s ease',
    '&:hover': {
      backgroundColor: '#1a7fd6',
      transform: 'scale(1.1)',
    },
  },
  playIcon: {
    width: 0,
    height: 0,
    borderTop: '15px solid transparent',
    borderBottom: '15px solid transparent',
    borderLeft: '25px solid white',
    marginLeft: '5px', // Offset slightly to center visually
  },
  iframe: {
    width: '100%',
    height: '100%',
    border: 'none',
    borderTopLeftRadius: '8px',
    borderTopRightRadius: '8px',
  },
});

class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeVideos: {}
    };
  }
  
  playVideo = (id) => {
    this.setState(prevState => ({
      activeVideos: {
        ...prevState.activeVideos,
        [id]: true
      }
    }));
  }
  
  render(){
    const { classes } = this.props;
    const { activeVideos } = this.state;
    
    const dogImages = [
      { 
        url: ozzyImage, 
        title: 'Ozzy', 
        description: 'My mini Golden Doodle'
      },
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
        type: 'image',
        url: sofiTukkerImage1, 
        title: 'Sofi Tukker', 
        description: 'Breakway Festival 2025 - Sofi Tukker' 
      },
      {
        type: 'image',
        url: missMoniqueImage,
        title: 'Miss Monique',
        description: 'Walter Warehouse - Miss Monique 2025'
      },
      {
        type: 'image',
        url: walterArtistImage,
        title: 'Walter Artist',
        description: 'Walter Warehouse - Walter Artist 2025'
      },
      {
        type: 'image',
        url: walterMainImage,
        title: 'Walter Main',
        description: 'Walter Warehouse - Walter Main 2025'
      },
      {
        type: 'image',
        url: martinGarrixOmniaImage,
        title: 'Martin Garrix',
        description: 'Martin Garrix at Omnia 2024'
      },
      {
        type: 'video',
        videoId: 'EN4y_oRja4U',
        thumbnailUrl: 'https://img.youtube.com/vi/EN4y_oRja4U/hqdefault.jpg', // Standard format
        title: 'Hiroko Yamamura',
        description: 'Hiroko Yamamura at Walter Warehouse 2025'
      },
      {
        type: 'video',
        videoId: 'fSZKOxHTu9Y',
        thumbnailUrl: 'https://img.youtube.com/vi/fSZKOxHTu9Y/hqdefault.jpg', // Standard format
        title: 'Hiroko Yamamura In The Paint',
        description: 'Hiroko Yamamura In The Paint at Walter Warehouse 2025'
      },
      {
        type: 'video',
        videoId: 'LLFNUCwLVkg',
        thumbnailUrl: 'https://img.youtube.com/vi/LLFNUCwLVkg/hqdefault.jpg', // Standard format
        title: 'Miss Monique',
        description: 'Miss Monique at Walter Warehouse 2025'
      },
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
              
              {/* Boots 'n Cats Section */}
              <Divider className={classes.divider} />
              <Typography variant="h5" className={classes.sectionTitle}>
                Boots 'n Cats
              </Typography>
              <Grid container spacing={24} className={classes.imageGrid}>
                {technoImages.map((item, index) => (
                  <Grid item xs={12} sm={6} md={4} key={index}>
                    <Card className={classes.card}>
                      {item.type === 'image' ? (
                        <div 
                          className={classes.imageContainer} 
                          style={{ backgroundImage: `url(${item.url})` }}
                        />
                      ) : (
                        <div className={classes.videoContainer}>
                          {activeVideos[index] ? (
                            <iframe
                              className={classes.iframe}
                              src={`https://www.youtube.com/embed/${item.videoId}?autoplay=1`}
                              title={item.title}
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                              allowFullScreen
                            />
                          ) : (
                            <div>
                              <div 
                                className={classes.imageContainer} 
                                style={{ backgroundImage: `url(${item.thumbnailUrl})` }}
                              />
                              <div 
                                className={classes.videoOverlay}
                                onClick={() => this.playVideo(index)}
                              >
                                <IconButton 
                                  className={classes.playButton}
                                  aria-label="play"
                                >
                                  <div className={classes.playIcon} />
                                </IconButton>
                              </div>
                            </div>
                          )}
                        </div>
                      )}
                      <CardContent className={classes.cardContent}>
                        <Typography gutterBottom variant="h6">
                          {item.title}
                        </Typography>
                        <Typography variant="body2" color="textSecondary">
                          {item.description}
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