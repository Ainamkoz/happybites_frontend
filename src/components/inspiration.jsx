import { Typography, Container } from "@material-ui/core";
import InsCard from './cards/inscard';


const Inspiration = () => {
    return ( 
        <Container>
          <Typography variant="h3" align="center" style={{color:"#2c2c3d", marginBottom:"3rem", fontWeight:"800"}}>Everything you need, find some ideas</Typography>
      <Typography variant="h4" style={{color:"#2c2c3d", marginBottom:"3rem", fontWeight:"400", fontSize:'1.85rem'}}>
        Choose what kind of food you like and let yourself be carried away by
        the ideas of our Biters
      </Typography>
      <InsCard/>   
    </Container>    
    );
  };

export default Inspiration;
