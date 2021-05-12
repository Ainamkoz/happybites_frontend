import { Container, Grid, Typography} from "@material-ui/core";
import Rescard from "./cards/rescard";
import MapComponent from "./map/mapComponent";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  titleVision:{
   color: '#2c2c3d',
   fontSize: '3rem',
   margin: '0',
   paddingBottom:"5rem", 
   fontWeight:"800",
  } ,
}))

const Eventplan = () => {
  const classes= useStyles();
  return (
    <Container style={{padding:'0'}}>
     <Typography variant="h3" align="center" style={{marginBottom:"3rem", fontWeight:"800"}} className={classes.titleVision}>Find your perfect company & Plan your perfect event</Typography>
      <Grid container spacing="2">
        <Grid item xs="12" sm="3">
          <MapComponent />
        </Grid>
        <Grid item xs="12" sm="9" style={{paddingRight:"0", paddingLeft:"0"}}>
          <Rescard />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Eventplan;
