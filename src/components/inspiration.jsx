import { Typography, Container } from "@material-ui/core";
import InsCard from './cards/inscard';


const Inspiration = () => {
    return ( 
        <Container>
      <Typography variant="h2">
        Choose what kind of food you like and let yourself be carried away by
        the ideas of our Biters
      </Typography>
      <InsCard/>   
    </Container>    
    );
  };

export default Inspiration;
