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
  GridListTile,
  GridList,
  Container,
} from "@material-ui/core";
import { makeStyles} from "@material-ui/core/styles";
import { AuthContext } from "../auth/context/authContext";

const useStyles = makeStyles ((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
  },
  gridList: {
    width: 500,
    height: 450,
  },
}));

const cards = [1];

const Inscards = () => {
  const classes = useStyles();
  const { allIdeas, selectedIdea, setSelectedIdea, loading } = useContext(
    AuthContext
  );
  console.log(selectedIdea);

  const showIdeas = selectedIdea.map(item => {
    return (
      <div>
        <CssBaseline />
          <div className={classes.root}>
          <GridList cellHeight={180} className={classes.gridList}>
            {cards.map(card => 
              <GridListTile key={card} >
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={item.images}
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
              </GridListTile>
            )}
          </GridList>
          </div>
      </div>
    );
  });
  if (loading) return <div> Loading... </div>;
  return <>{showIdeas}</>;
};

export default Inscards;
