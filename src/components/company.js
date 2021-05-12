import { CssBaseline, Typography } from "@material-ui/core";
import Image from './assets/img/back-vision.svg';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';


const useStyles = makeStyles((theme) => ({
  paperContainer: {
    backgroundImage: `url(${Image})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPositionX: 'center',
    width: '30rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '30rem',
    flexDirection: 'column',
  },
  textIntro: {
    color:'#2c2c3d',
    fontSize: '2rem',
    marginBottom:'5rem',
    fontWeight: '400',
  },
  titleVision: {
    color: 'white',
    fontSize: '1.50rem',
    marginTop:'2rem',
  },
  textVision:{
    fontWeight: '300',
    color:'white',
    textAlign: 'center',
    paddingLeft: '3rem',
    paddingTop: '2rem',
    paddingRight: '2.5rem',
  }
  }));

const Company = ({ value }) => {
  const classes= useStyles();
  return (
    <>
      <CssBaseline />
      <Container>
      <Typography variant="h3" align="center" style={{marginBottom:"3rem", fontWeight:"800"}}>Everything you need, all in one place</Typography>
      <Typography variant="h2" align="center" className={classes.textIntro} gutterBottom>We are very happy to help you in the process of planning your events.
        We know that it is very important to have certain guarantees when you are preparing an event, that's why we are here! 
        We guarantee that your event will be perfect!</Typography>
      
      </Container>
    <Grid container >
      <Box className={classes.paperContainer}>
      <Typography variant="h4" className={classes.titleVision}>Get Inspiration From <br/> our Collection of Photos </Typography>
      <Typography variant="h6" className={classes.textVision}>Explore daily uploads of professional photos. Find a photo you love, then click to see the full event album and event professionals who created the details.</Typography>
      </Box>
      <Box className={classes.paperContainer}>
      <Typography variant="h4" className={classes.titleVision}>Browse Real Events <br/> in Unique Venue spaces</Typography>
      <Typography variant="h6" className={classes.textVision}>Imagine your next event at a venue you love. Filter by capacity and amenities, then browse galleries of real events hosted at each venue.</Typography>
      </Box>
      <Box className={classes.paperContainer}>
      <Typography variant="h4" className={classes.titleVision}>Discover New Ieas &<br/> Save What You Love </Typography>
      <Typography variant="h6" className={classes.textVision}>Use our top lists and expert guides to narrow down your favorite photos, venues, and event professionals, then save them to a curated Idea Slate.</Typography>
      </Box>

    </Grid>
    
      </>
  );
};

export default Company;
