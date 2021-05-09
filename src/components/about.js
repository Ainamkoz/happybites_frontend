import {Typography, Container, CardMedia,Card, CardContent, Grid} from '@material-ui/core'
import Aina from "./assets/img/Aina.svg";
import Linh from "./assets/img/Linh.svg";
import Maria from "./assets/img/Maria.svg";
import { makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    textIntro: {
      color:'#2c2c3d',
      fontSize: '2rem',
    },
    
  }));

const About = ()=>{
    const classes = useStyles();
    return(
        <>
            <Container>
            <Typography variant="h4" align="center">Meet our team!</Typography>
            <Container>
            <Grid container justify="flex-end" spacing="4"> 
                <Grid item xs={12} sm={4} md={4}>
                    <Card>
                        <CardMedia image={Aina} component="img" alt="Aina"/>
                        <CardContent>
                            <Typography center variant="h4" gutterBottom>Aina</Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={4} md={4}>
                    <Card>
                        <CardMedia image={Linh} component="img" alt="Linh"/>
                        <CardContent>
                            <Typography variant="h4" gutterBottom>Linh</Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={4} md={4}>
                    <Card>
                        <CardMedia image={Maria} component="img" alt="Maria"/>
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