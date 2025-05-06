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
  IconButton,
  withStyles,
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

const styles = (theme) => ({
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
    color: '#219efd',
  },
  paragraph: {
    lineHeight: 1.7,
    marginBottom: '1rem',
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
  imageContainer: {
    height: '300px',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    borderTopLeftRadius: '8px',
    borderTopRightRadius: '8px',
  },
  videoContainer: {
    position: 'relative',
    height: '300px',
    backgroundColor: '#000',
    overflow: 'hidden',
    borderTopLeftRadius: '8px',
    borderTopRightRadius: '8px',
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
    transition: 'opacity 0.3s ease',
    opacity: 0.8,
    '&:hover': {
      opacity: 1,
    },
    cursor: 'pointer',
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
    marginLeft: '5px',
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
  state = {
    activeVideos: {},
  };

  playVideo = (id) => {
    this.setState((prev) => ({
      activeVideos: { ...prev.activeVideos, [id]: true },
    }));
  };

  render() {
    const { classes } = this.props;
    const { activeVideos } = this.state;

    const dogImages = [
      { url: ozzyImage, title: 'Ozzy', description: 'My mini Golden Doodle' },
      { url: midasImage, title: 'Midas', description: 'My Bernedoodle' },
      { url: ozzysWildNightImage, title: "Ozzy's Wild Night", description: 'Ozzy after a long night of fun' },
      { url: midasHandsupImage, title: 'Midas Hands Up', description: 'Freeze!!' },
    ];

    const technoImages = [
      { type: 'image', url: sofiTukkerImage1, title: 'Sofi Tukker', description: 'Breakway Festival 2025' },
      { type: 'image', url: missMoniqueImage, title: 'Miss Monique', description: 'Walter Warehouse 2025' },
      { type: 'image', url: walterArtistImage, title: 'Walter Artist', description: 'Walter Warehouse 2025' },
      { type: 'image', url: walterMainImage, title: 'Walter Main', description: 'Walter Warehouse 2025' },
      { type: 'image', url: martinGarrixOmniaImage, title: 'Martin Garrix', description: 'Omnia 2024' },
      {
        type: 'video',
        videoId: 'EN4y_oRja4U',
        thumbnailUrl: 'https://img.youtube.com/vi/EN4y_oRja4U/hqdefault.jpg',
        title: 'Hiroko Yamamura',
        description: 'Walter Warehouse 2025',
      },
      {
        type: 'video',
        videoId: 'fSZKOxHTu9Y',
        thumbnailUrl: 'https://img.youtube.com/vi/fSZKOxHTu9Y/hqdefault.jpg',
        title: 'Hiroko In The Paint',
        description: 'Walter Warehouse 2025',
      },
      {
        type: 'video',
        videoId: 'LLFNUCwLVkg',
        thumbnailUrl: 'https://img.youtube.com/vi/LLFNUCwLVkg/hqdefault.jpg',
        title: 'Miss Monique',
        description: 'Walter Warehouse 2025',
      },
      {
        type: 'video',
        videoId: 'm0uynKsuXAg',
        thumbnailUrl: 'https://img.youtube.com/vi/m0uynKsuXAg/hqdefault.jpg',
        title: 'Sofi Tukker',
        description: 'Breakway Festival 2025 - Throw some ass',
      }
      // https://youtube.com/shorts/_0vg9q7J7Io?feature=share
      ,{
        type: 'video',
        videoId: '_0vg9q7J7Io',
        thumbnailUrl: 'https://img.youtube.com/vi/_0vg9q7J7Io/hqdefault.jpg',
        title: 'Sofi Tukker',
        description: 'Breakway Festival 2025 - Sleepyhead',
      }
      // https://youtube.com/shorts/2216pTzE7qk?feature=share
      ,{
        type: 'video',
        videoId: '2216pTzE7qk',
        thumbnailUrl: 'https://img.youtube.com/vi/2216pTzE7qk/hqdefault.jpg',
        title: 'Gryffin',
        description: 'Breakway Festival 2025 - idk',
      }
    ];

    return (
      <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={10} style={{ margin: '0 auto' }}>
            <Paper className={classes.paper}>
              <Typography variant="h3" className={classes.header}>
                About Me
              </Typography>

              <Typography variant="h5" className={classes.sectionTitle}>Intro</Typography>
              <Typography variant="body1" className={classes.paragraph}>
                I am a Co-Founder of{' '}
                <a href="https://intern.supply" target="_blank" rel="noopener noreferrer" className={classes.link}>
                  Intern Supply
                </a>. My primary focus is Full Stack Development. I graduated in 2019 and plan to return to Arizona State University for a Master's in AI. I love building things and am open to consulting on AI, game dev, and automation projects.
              </Typography>

              <Divider style={{ margin: '2rem 0' }} />

              <Typography variant="h5" className={classes.sectionTitle}>Currently</Typography>
              <Typography variant="body1" className={classes.paragraph}>
                I recently started at NuclearnAI as a Full Stack Developer, integrating AI into Nuclear Utilities.
              </Typography>
{/* 
              <Divider style={{ margin: '2rem 0' }} />

              <Typography variant="h5" className={classes.sectionTitle}>Fun Facts</Typography>
              <List>
                {[
                  "I've been to Iceland and want to go again",
                  'Own 6 computers',
                  'Love shooting',
                  'Over 4,000 hours in CS:GO',
                ].map((fact, i) => (
                  <ListItem key={i} className={classes.listItem}>
                    <ListItemText primary={fact} />
                  </ListItem>
                ))}
              </List> */}

              <Divider style={{ margin: '2rem 0' }} />

              <Typography variant="h5" className={classes.sectionTitle}>My Dogs</Typography>
              <Grid container spacing={3} className={classes.imageGrid}>
                {dogImages.map((dog, i) => (
                  <Grid item xs={12} sm={6} md={4} key={i} style={{ padding: '12px' }}>
                    <Card className={classes.card}>
                      <div className={classes.imageContainer} style={{ backgroundImage: `url(${dog.url})` }} />
                      <CardContent>
                        <Typography gutterBottom variant="h6">{dog.title}</Typography>
                        <Typography variant="body2" color="textSecondary">{dog.description}</Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                ))}
              </Grid>

              <Divider style={{ margin: '2rem 0' }} />

              <Typography variant="h5" className={classes.sectionTitle}>Boots 'n Cats</Typography>
              <Grid container spacing={3} className={classes.imageGrid}>
                {technoImages.map((item, i) => (
                  <Grid item xs={12} sm={6} md={4} key={i} style={{ padding: '12px' }}>
                    <Card className={classes.card}>
                      {item.type === 'image' ? (
                        <div className={classes.imageContainer} style={{ backgroundImage: `url(${item.url})` }} />
                      ) : (
                        <div className={classes.videoContainer}>
                          {activeVideos[i] ? (
                            <iframe
                              className={classes.iframe}
                              src={`https://www.youtube.com/embed/${item.videoId}?autoplay=1`}
                              title={item.title}
                              allow="autoplay; encrypted-media"
                              allowFullScreen
                            />
                          ) : (
                            <div>
                              <div
                                style={{
                                  position: 'absolute',
                                  width: '100%',
                                  height: '100%',
                                  backgroundImage: `url(${item.thumbnailUrl})`,
                                  backgroundSize: 'cover',
                                  backgroundPosition: 'center',
                                  borderTopLeftRadius: '8px',
                                  borderTopRightRadius: '8px',
                                }}
                              />
                              <div
                                className={classes.videoOverlay}
                                onClick={() => this.playVideo(i)}
                              >
                                <IconButton className={classes.playButton}>
                                  <div className={classes.playIcon} />
                                </IconButton>
                              </div>
                            </div>
                          )}
                        </div>
                      )}
                      <CardContent>
                        <Typography gutterBottom variant="h6">{item.title}</Typography>
                        <Typography variant="body2" color="textSecondary">{item.description}</Typography>
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
