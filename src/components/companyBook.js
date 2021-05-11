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
import React from 'react';
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
import EventPageForm from './formspage/eventPageForm';

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

export default function CompanyBook() {
  const classes = useStyles();
  const {
    error,
    setBasicError,
    loading,
    setLoading,
    myRestau,
    setMyRestau,
  } = useContext(AuthContext);
  const [singleRest, setSingleRest] = useState("");
  const { id } = useParams();

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

  return  myRestau ?  (
    <>
      <Container>
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
          <EventPageForm myRestau={myRestau} />
      </Container>
    </>
  )   : (
    <div> Loading ... </div>
  )
} 
 
