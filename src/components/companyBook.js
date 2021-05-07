import { Container, Grid } from "@material-ui/core";
import { useState, useContext, useEffect } from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Rating from "@material-ui/lab/Rating";
import { AuthContext } from "./auth/context/authContext";
import { useParams } from "react-router-dom";
import SingleMap from "./map/mapSingle";

const useStyles = makeStyles(Theme => ({
  root: {
    display: "flex",
  },
  details: {
    display: "flex",
    flexDirection: "column",
  },
  content: {
    flex: "1 0 auto",
  },
  cover: {
    width: 151,
  },
}));

const CompanyBook = () => {
  const classes = useStyles();
  const theme = useTheme();
  const {
    error,
    setBasicError,
    loading,
    setLoading,
    myRestau,
    setMyRestau,
  } = useContext(AuthContext);
  const { id } = useParams();
  const [singleRest, setSingleRest] = useState("");

  useEffect(() => {
    setLoading(true);
    fetch(`http://localhost:5000/services/${id}`)
      .then(res => res.json())
      .then(data => setMyRestau(() => data))
      .catch(err => {
        console.log(`Selected restaurant: ${err}`);
        setBasicError(() => err);
      });
    console.log({ myRestau });
    setLoading(false);
  }, [id]);

  useEffect(() => {
    if (myRestau) {
      const currentRest = myRestau.find(
        singleRest => singleRest.service_id == id
      );
      setSingleRest(currentRest);
    }
  }, [myRestau, id]);

  if (loading) return <di>Loading ... </di>;

  if (error)
    return <div>There was an error when retrieving the data: {error}</div>;

  return myRestau ? (
    <>
      <Container>
        <Grid container spacing={4}>
          <Grid xs={6} sm={6} md={6}>
            <Card className={classes.root}>
              <CardMedia
                component="img"
                alt="Codo restaurant"
                className={classes.cover}
                image={singleRest && singleRest.images}
                title="Codo restaurant"
              />
              <div className={classes.details}>
                <CardContent className={classes.content}>
                  <Typography component="h5" variant="h5">
                    {singleRest && singleRest.service_name}
                  </Typography>
                  <Typography variant="subtitle1" color="textSecondary">
                    {singleRest && singleRest.description}
                  </Typography>
                </CardContent>
                <div>
                  <Rating
                    name="half-rating"
                    defaultValue={singleRest && singleRest.rating}
                    precision={0.5}
                  />
                </div>
              </div>
            </Card>
          </Grid>
        </Grid>
        <Container>
             
              </Container>
      </Container>
    </>
  ) : (
    <div> Loading ... </div>
  );
};

export default CompanyBook;
