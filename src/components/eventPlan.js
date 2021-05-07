import { Container, Grid, Box } from "@material-ui/core";
import Rescard from "./cards/rescard";
import MapComponent from "./map/mapComponent";

const Eventplan = () => {
  return (
    <Container>
      <h1>
        here is where the users try to find a good restaurant with searcher and
        cards
      </h1>

      <Grid xs="12" xl="6" sm="6"
      direction="column"
      justify="space-evenly"
      alignItems="baseline">
          <MapComponent/>
          
          <Rescard />

      </Grid>
    </Container>
  );
};

export default Eventplan;
