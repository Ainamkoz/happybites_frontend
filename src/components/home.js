import {MemoryRouter as Router} from 'react-router';
import {Link} from "react-router-dom";
import {ButtonGroup, Button, Typography, Container, Grid} from "@material-ui/core";
import Homeimg from './assets/img/Homeimg.svg';
import MapComponent from './map/mapComponent';

const Home  = ()=>{
    return(
        <>
        <div className="home">
            <Grid display="flex" spacing="4" direction="row" justify="space-around" alignItems="flex-end">
                <Grid item xs={12} sm={6}>
                <Typography variant="h1" align="center" gutterBottom>Enjoy looking for some inspiration and planning your events!</Typography>
            
            <Router>
            <ButtonGroup disableElevation variant="contained" color="primary" display="flex" justify="flex-end" >
                <Link to="/inspiration">
                    <Button>Inspiration</Button>
                </Link>
                <Link to="/plan-your-event">
                    <Button>Plan an event</Button>
                </Link>
            </ButtonGroup>
            </Router>       
                </Grid>
                <Grid  item xs={12} sm={6} >
                    <img src={Homeimg} alt="home-img-cheers"/>
                </Grid>
             
            </Grid>

        </div>
        <div className="banner-home">
            <Typography variant="h2" align="center" gutterBottom> Don't think twice and join our happy community! </Typography>
        </div>
        <Container>
           <Typography variant="h3" align="center" gutterBottom> You can find our Happy Biters all around the world, Take a look at the partners available for your events.</Typography>
            <div><MapComponent/></div> 
        </Container>
     </>   
    )
}

export default Home;