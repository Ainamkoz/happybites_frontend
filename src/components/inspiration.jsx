import { Typography, Container, GridList,GridListTile  } from "@material-ui/core";
import InsCard from './cards/inscard';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({

}));

const Inspiration = () => {
  const classes = useStyles();
    return ( 
      <div>
        <Container>
      <Typography variant="h2">
        Choose what kind of food you like and let yourself be carried away by
        the ideas of our Biters
      </Typography>
<<<<<<< HEAD
    </Container>  
    <InsCard/>
    </div>
=======
      <InsCard/>   
    </Container>    
>>>>>>> main
    );
  };

export default Inspiration;
