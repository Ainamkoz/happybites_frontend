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
      <Typography variant="body2" color="textSeconday" >
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
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(2),
    },
    footer: {
      marginTop: 'auto',
      },
    }));

const Footer = ()=>{
    const classes = useStyles();
    return(
        <div>
      <CssBaseline />
      <footer>
        <Box>
        <Grid container justify="space-around">
            <Grid item xs={12} sm={4} md={4}>
            <Link to='/'>
            <img src={Logofooter} alt="Bite Events"/>
            </Link>
            </Grid>
            <Grid item xs={12} sm={4} md={4}>
                
            </Grid>
            <Grid item xs={12} sm={4} md={4}>
                <Typography>Follow us!</Typography>
                <Link href="" target="_blank">
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