import {Typography, Container, CardMedia,Card, CardContent, Grid} from '@material-ui/core'
import Aina from "./assets/img/Aina.svg";
import Linh from "./assets/img/Linh.svg";
import Maria from "./assets/img/Maria.svg";
import JorgeAvatar from "./assets/img/JorgeAvatar.svg";
import { makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    textIntro: {
      color:'#2c2c3d',
      fontSize: '2rem',
    },
    h5:{
        fontSize: '2rem',
    },
  }));

const About = ()=>{
    const classes = useStyles();
    return(
        <>
            <Container>
            <Typography variant="h3" align="center" style={{marginBottom:"3rem", fontWeight:"800"}}>Meet our team!</Typography>
            <Container>
            <Grid container justify="flex-end" spacing="4"> 
            <Grid item xs={12} sm={3} md={3}>
                    <Card>
                        <CardMedia image={JorgeAvatar} component="img" alt="Jorge"/>
                        <CardContent>
                            <Typography variant="h5" gutterBottom align="center"><b>Jorge</b><br/>Senior Full-Stack Developer</Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={3} md={3}>
                    <Card>
                        <CardMedia image={Aina} component="img" alt="Aina"/>
                        <CardContent>
                            <Typography center variant="h5" gutterBottom align="center"><b>Ainam</b><br/>Junior Full-Stack Developer</Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={3} md={3}>
                    <Card>
                        <CardMedia image={Linh} component="img" alt="Linh"/>
                        <CardContent>
                            <Typography variant="h5" gutterBottom align="center"><b>Linh</b><br/>Junior Full-Stack Developer</Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={3} md={3}>
                    <Card>
                        <CardMedia image={Maria} component="img" alt="Maria"/>
                        <CardContent>
                            <Typography variant="h5" gutterBottom align="center"><b>Maria</b><br/>Junior Full-Stack Developer</Typography>
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