import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import {Link} from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Logofooter from './assets/bites-footer-logo.svg';
import InstagramIcon from '@material-ui/icons/Instagram';


function Copyright() {
    return (
      <Typography variant="body2" style={{color:'white'}}>
        {'Copyright © '}
        <Link to="/" style={{color:'white', textDecoration:'none'}}>
          Bite Events!
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh',
    },
    main: {
      margin:'0',
      padding: '0',
    },
    footer: {
      marginTop: 'auto',
      },
    footerContent:{
      placeItems: 'center',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    },
    }));

const Footer = ()=>{
    const classes = useStyles();
    return(
        <div>
      <CssBaseline />
      <footer className={classes.main}>
        <Box>
        <Grid container justify="space-around">
            <Grid item xs={12} sm={4} md={4} justify="center" className={classes.footerContent}>
            
            <Typography align="left" style={{color:'white'}}>
             <b>Bite your event!</b><br/>
              Munsterdam Str. 102<br/>
              Berlin, Germany
            </Typography>
            </Grid>
            <Grid item xs={12} sm={4} md={4} className={classes.footerContent}>
                <Link to='/about' style={{textDecoration:'none', color: 'white'}}>
                    <Typography>About</Typography>
                </Link>
                <Link to='/vision' style={{textDecoration:'none', color: 'white'}}>
                    <Typography>Vision</Typography>
                </Link>
                <Link to='/plan-your-event' style={{textDecoration:'none', color: 'white'}}>
                    <Typography>Plan your event</Typography>
                </Link>
                <Link to='/inspiration' style={{textDecoration:'none', color: 'white'}}>
                    <Typography>Some inspiration</Typography>
                </Link>
            </Grid>
            <Grid item xs={12} sm={4} md={4} className={classes.footerContent}>
            <Link to='/'>
            <img src={Logofooter} alt="Bite Events" width="60px" marginTop="1rem"/>
            </Link>
                <Typography style={{color:'white', fontWeight:'200', marginBottom:'0.5rem'}}>Follow us!</Typography>
                <Link href="https://www.instagram.com/bite.your.events/" target="_blank" style={{color:'white'}}>
                    <InstagramIcon/>               
                </Link>

            </Grid> 
          <Copyright />
        </Grid>
        </Box>
      </footer>
    </div>
    )
}
export default Footer;