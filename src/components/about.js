import {Typography, Container, CardMedia,Card, CardContent, Grid} from '@material-ui/core'
import Aina from "./assets/img/Aina.svg";
import Linh from "./assets/img/Linh.svg";
import Maria from "./assets/img/Maria.svg";



const About = ()=>{
    return(
        <>
            <Container>
            <Typography variant="h2" align="center" gutterBottom>We are very happy to help you in the process of planning your events.
        We know that it is very important to have certain guarantees when you are preparing an event, that's why we are here! 
        We guarantee that your event will be perfect!</Typography>
            <Typography>This is possible thanks to our creative team!</Typography>
            <Container>
            <Grid container justify="flex-end" spacing="4"> 
                <Grid item xs={12} sm={6} md={4}>
                    <Card>
                        <CardMedia image={Aina}/>
                        <CardContent>
                            <Typography center variant="h4" gutterBottom>Aina</Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <Card>
                        <CardMedia image={Linh}/>
                        <CardContent>
                            <Typography variant="h4" gutterBottom>Linh</Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <Card>
                        <CardMedia image={Maria} />
                        <CardContent>
                            <Typography variant="h4" gutterBottom>Maria</Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
            </Container>
            </Container>
        </>
    )
}

export default About;