import {
  Container,
  Grid,
  FormLabel,
  TextField,
  FormControlLabel,
  Radio,
  Checkbox,
  RadioGroup,
  Button,
  CssBaseline,
} from "@material-ui/core";
import { useState, useContext, useEffect } from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Link from "@material-ui/core/Link";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Rating from "@material-ui/lab/Rating";
import { AuthContext } from "./auth/context/authContext";
import { useParams } from "react-router-dom";
import SingleMap from "./map/mapSingle";

const useStyles = makeStyles(theme => ({
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
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "50%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const CompanyBook = () => {
  const classes = useStyles();
  const theme = useTheme();
  const { error, setBasicError, loading, setLoading, myRestau, setMyRestau } =
    useContext(AuthContext);
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

  if (loading) return <div>Loading ... </div>;

  if (error)
    return <div>There was an error when retrieving the data: {error}</div>;

  return myRestau ? (
    <>
      <Container>
        <form className={classes.form}>
          <Typography variant="h5" align="center">
            Send Message
          </Typography>
          <br />
          <br />
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="email"
                name="email"
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Your email"
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="phone"
                label="Phone"
                name="phone"
                autoComplete="lname"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="guest"
                label="Guest Count"
                name="guest"
                autoComplete="guest"
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="price"
                label="Price per Guest"
                type="price"
                id="price"
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="eventDate"
                label="Preffered Date"
                type="eventDate"
                id="eventDate"
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                multiline
                name="message"
                label="Message"
                type="message"
                id="message"
                rows={4}
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}>
            Send
          </Button>
        </form>

        <Grid item xs="12" sm="6">
          <Card className={classes.root}>
            <CardMedia
              component="img"
              alt="Codo restaurant"
              className={classes.cover}
              image={singleRest && singleRest.images} // {singleRest && `http://localhost:5000/uploads/${singleRest.images}`} replace later with db
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
      </Container>
    </>
  ) : (
    <div> Loading ... </div>
  );
};

export default CompanyBook;
