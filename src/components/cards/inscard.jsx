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
} from "@material-ui/core";
import useStyles from "../assets/styles";
import { AuthContext } from "../auth/context/authContext";

const cards = [1];

const Inscards = () => {
  const classes = useStyles();
    const { allIdeas, selectedIdea, setSelectedIdea, loading } = useContext(
    AuthContext
  );
    console.log(selectedIdea);

  const showIdeas = selectedIdea.map(item => {
    return (
      <div className={classes.root}>
        <CssBaseline />
        <Container className={classes.cardGrid} maxWidth="md">
          <Grid container spacing={1}>
            {cards.map(card => 
              <Grid item key={card} xs={12} spacing={3} md={4}>
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
              </Grid>
            )}
          </Grid>
        </Container>
      </div>
    );
  });
  if (loading) return <div> Loading... </div>;
  return <>{showIdeas}</>;
};

export default Inscards;
