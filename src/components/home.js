
import {Link} from "react-router-dom";
import {ButtonGroup, Button, Typography, Container, Grid} from "@material-ui/core";
import Homeimg from './assets/img/Homeimg.svg';
import MapComponent from './map/mapComponent';

const Home  = ()=>{
    return(
        <>
        <div className="home">
            <Grid container display="flex" spacing="1" direction="row" justify="space-around"alignItems="center">
                <Grid item xs={12} md={6}>
                <Typography variant="h1" align="center" gutterBottom>Enjoy looking for some inspiration and planning your events!</Typography>
                <div className="home-btn">
                <Link to='/inspiration' style={{textDecoration:'none'}}><Button>Inspiration</Button></Link>
                <Link to='/plan-your-event' style={{textDecoration:'none'}}><Button>Plan your event</Button></Link>
                </div>
                </Grid>

                <Grid item xs={12} md={6}>
                    <img src={Homeimg} alt="home-img-cheers" style={{width:"48rem"}} />
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