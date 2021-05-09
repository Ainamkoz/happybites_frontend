import {makeStyles} from '@material-ui/core/styles';
import {Link} from "react-router-dom";
import {Box, Button, Typography, Container, Grid} from "@material-ui/core";
import Homeimg from './assets/img/Homeimg.svg';
import MapComponent from './map/mapComponent';

const useStyles = makeStyles((theme) => ({
    titleHome:{
        fontWeight: 'bold',
        fontSize: '3.5rem',
    },
    mapHome:{
        fontWeight: 'bold',
        color: '#2c2c3d',
        paddingBottom:'2.5rem',
    }
}));

const Home  = ()=>{
    const classes = useStyles();
    return(
        <>
        <div className="home">
            <Grid container display="flex" spacing="1" direction="row" justify="space-around"alignItems="center">
                <Grid item xs={12} md={6}>
                <Typography variant="h1" align="center" className={classes.titleHome} gutterBottom>Enjoy looking for some inspiration and planning your events!</Typography>
                <div className="home-btn">
                <Link to='/inspiration' style={{textDecoration:'none', marginRight:'1rem'}}><Button variant="outlined" style={{color:'#2c2c3d', fontSize:'1.2rem'}}>Inspiration</Button></Link>
                <Link to='/plan-your-event' style={{textDecoration:'none'}}><Button variant="outlined" style={{color:'#2c2c3d', fontSize:'1.2rem'}}>Plan your event</Button></Link>
                </div>
                </Grid>

                <Grid item xs={12} md={6}>
                    <img src={Homeimg} alt="home-img-cheers" style={{width:"48rem"}} />
                </Grid>
             
            </Grid>

        </div>
        <div className="banner-home">
            <Typography variant="h2" align="center" style={{color:'#2c2c3d', fontWeight:'500'}} gutterBottom> Don't think twice and be a <i style={{color:'white'}}>Biter!</i> </Typography>
            <Link to='/sign-up' style={{textDecoration:'none'}}><Button variant="outlined" style={{color:'#2c2c3d', fontSize:'1.5rem'}}>Join us</Button></Link>
        </div>
        <Container>
           <Typography variant="h3" align="center" className={classes.mapHome} gutterBottom> You can find our Happy Biters all around the world <br/>Take a look at the partners available for your events.</Typography>
           <div><MapComponent/></div>
            <Box display="flex" justifyContent="center" style={{marginTop:'2rem'}}>           
                <Link to='/plan-your-event' style={{textDecoration:'none'}}><Button variant="outlined" style={{color:'#2c2c3d', fontSize:'1rem', alignItems:'center'}}>I want to plan an event</Button></Link>
            </Box>
             
        </Container>
     </>   
    )
};

export default Home;