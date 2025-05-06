import React from 'react';
import '../styles/Projects.css';
import { 
  Grid, 
  Typography, 
  Paper, 
  Card,
  CardContent,
  CardMedia,
  Divider,
  Link,
  withStyles
} from '@material-ui/core';
import InternSupplyImage from '../assets/InternSupply.png';
import YoutubeCloneGif from '../assets/youtube-clone.gif';
import ReactReduxGif from '../assets/react-redux.gif';
import FoodNinjaGif from '../assets/FoodNinja.gif';

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
  paragraph: {
    lineHeight: 1.7,
    marginBottom: '1rem',
  },
  divider: {
    margin: '2rem 0',
  },
  videoContainer: {
    position: 'relative',
    paddingBottom: '56.25%', /* 16:9 aspect ratio */
    height: 0,
    overflow: 'hidden',
    maxWidth: '100%',
    marginBottom: '1rem',
    borderRadius: '8px',
  },
  video: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    border: 'none',
    borderRadius: '8px',
  },
  link: {
    color: '#219efd',
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'underline',
    },
  },
  projectCard: {
    marginBottom: '2rem',
    borderRadius: '8px',
    overflow: 'hidden',
    boxShadow: '0 6px 16px rgba(0,0,0,0.15)',
    transition: 'transform 0.3s ease-in-out',
    '&:hover': {
      transform: 'translateY(-8px)',
    },
  },
  projectImage: {
    width: '100%',
    height: 'auto',
    maxHeight: '500px',
    objectFit: 'contain',
    backgroundColor: '#f5f5f5',
  }
});

class Projects extends React.Component {
  render(){
    const { classes } = this.props;
    
    const projects = [
      {
        title: 'Voxel JS Game',
        videoId: 'TiNio3h_IE8',
        description: 'Voxel JS Game is a voxel based game engine built with React and Three.js. Uses service workers to offload processing off main thread. Just trying to push JS to its limits. Made with bun and three js only. It is a work in progress and is not yet complete.',
        link: {
          text: 'https://github.com/aefnor/voxel-game-js',
          url: 'https://github.com/aefnor/voxel-game-js'
        },
        isVideo: true
      },
      {
        title: 'Fyb',
        videoId: '9lV63EqVr8M',
        description: 'FYB was designed to feed you and help you find food. It is a simple app that allows you to find food in your area with much randomness for those times when you just don\'t know what to eat.',
        link: {
            text: 'https://github.com/aefnor/FeedUrBelly',
            url: 'https://github.com/aefnor/FeedUrBelly'
        },
        isVideo: true
      },
      {
        title: 'Terminal Dating',
        videoId: 'fey2LssTv9c',
        description: 'Terminal is a dating app under development designed for a niche market of airport travel. The ability to swipe on individuals heading to a location so that when you land you can connect instantly. Useful in the cases of layover or unexpected cancellations to meet new people.',
        link: {
          text: 'Private on Github email aefnor@yahoo.com for more information.',
          url: 'https://github.com/aefnor?tab=repositories'
        },
        isVideo: true
      },
      {
        title: 'Intern Supply',
        image: InternSupplyImage,
        description: 'Intern Supply is a website which sent over 400,000 applicants to internship applications in the Fall 2016 recruiting season. Our goal was to deliver the ability to easily apply to many job applications anywhere with a free clicks. No searching google, all locations available.',
        link: {
          text: 'https://intern.supply',
          url: 'https://intern.supply'
        },
        isVideo: false
      },
      {
        title: 'Youtube Clone',
        image: YoutubeCloneGif,
        description: 'A simple clone of youtube without all their fluff and styling. Done with ReactJs and the Youtube Data API.',
        link: {
          text: 'Private on Github email aefnor@yahoo.com for more information.',
          url: 'https://github.com/aefnor?tab=repositories'
        },
        isVideo: false
      },
    //   {
    //     title: 'Redux - An Introduction',
    //     image: ReactReduxGif,
    //     description: 'A dive into redux and its inner workings.',
    //     link: {
    //       text: 'Repo',
    //       url: 'https://github.com/aefnor/ReactRedux'
    //     },
    //     isVideo: false
    //   },
      {
        title: 'Food Ninja',
        image: FoodNinjaGif,
        description: 'This is the first project I made during a hackathon in 2015. It uses HTML and JS to obtain a Fruit Ninja type of game. Art was all done from scratch by an artist whose name I wish I remembered.',
        link: {
          text: 'https://github.com/aefnor/FoodNinja',
          url: 'https://github.com/aefnor/FoodNinja'
        },
        isVideo: false
      }
    ];

    return (
      <div className={classes.root}>
        <Grid container spacing={24}>
          <Grid item xs={12} md={10} lg={8} style={{ margin: '0 auto' }}>
            <Paper className={classes.paper}>
              <Typography variant="h3" className={classes.header}>
                My Projects
              </Typography>
              
              {projects.map((project, index) => (
                <React.Fragment key={index}>
                  {index > 0 && <Divider className={classes.divider} />}
                  
                  <Card className={classes.projectCard}>
                    <CardContent>
                      <Typography variant="h5" className={classes.sectionTitle}>
                        {project.title}
                        {project.link && (
                          <div>
                            {' - '}
                            <Link 
                              href={project.link.url} 
                              target="_blank" 
                              className={classes.link}
                            >
                              {project.link.text}
                            </Link>
                          </div>
                        )}
                      </Typography>
                      
                      {project.isVideo ? (
                        <div className={classes.videoContainer}>
                          <iframe 
                            className={classes.video}
                            src={`https://www.youtube.com/embed/${project.videoId}`}
                            title="YouTube video player"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                          />
                        </div>
                      ) : (
                        <img
                          src={project.image}
                          alt={project.title}
                          className={classes.projectImage}
                        />
                      )}
                      
                      <Typography variant="body1" className={classes.paragraph}>
                        {project.description}
                      </Typography>
                    </CardContent>
                  </Card>
                </React.Fragment>
              ))}
            </Paper>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(Projects);