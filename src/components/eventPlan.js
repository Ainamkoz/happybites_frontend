import { Container, Grid} from "@material-ui/core";
import Rescard from "./cards/rescard";
import MapComponent from "./map/mapComponent";

const Eventplan = () => {
  return (
    <Container>
      <h1>
        here is where the users try to find a good restaurant with searcher and
        cards
      </h1>
      <Grid container spacing="2">
        <Grid item xs="12" sm="3">
          <MapComponent />
        </Grid>
        <Grid item xs="12" sm="9">
          <Rescard />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Eventplan;
