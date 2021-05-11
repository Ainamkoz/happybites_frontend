import { useState, useContext } from "react";
import {
  Typography,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  CssBaseline,
  Grid,
  Container,
  IconButton,
  ListSubheader
} from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';

import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import InfoIcon from '@material-ui/icons/Info';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import { AuthContext } from "../auth/context/authContext";

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'flex-end',
    overflow: 'hidden',
    margin: "0 auto",
  }, 
  gridList: {
    width: 500,
    height: 450,
    overflow: 'hidden',
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  }
}));

const Inscards  = () => {
  const classes = useStyles();
    const { allIdeas, selectedIdea, setSelectedIdea, loading } = useContext(
    AuthContext
  );
    console.log(selectedIdea);

  const showIdeas = selectedIdea.map(item => {
    return cards.map(card => 
            <Grid container>
 <Grid item key={card} xs={12} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={`${process.env.REACT_APP_BACKEND}/uploads/${item.images}`}
                    component="img"
                    title="Image Title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5">
                      {item.title}
                    </Typography>

                    <Typography> {item.description} </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary">
                      View
                    </Button>
                    <Button size="small" color="primary">
                      Edit
                    </Button>
                  </CardActions>
                </Card>
              </Grid>

            </Grid>
             
            )
  });
  if (loading) return <div> Loading... </div>;
  return <>{showIdeas}</>;
};

export default Inscards;
