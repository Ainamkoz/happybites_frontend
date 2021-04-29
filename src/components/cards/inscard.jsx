import React from 'react';
import { Typography, Button, Card, CardActions, CardContent, CardMedia, CssBaseline, Grid, Container } from '@material-ui/core';
import useStyles from './styles';

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const Inscards = () => {
    const classes = useStyles();
    return(
        <>
            <CssBaseline />
                <div className={classes.container}>
                    <Container maxWidth="sm">
                        <Typography variant="h2" align="center" color="textPrimary" gutterBottom>
                            Photo Album
                        </Typography>
                        <Typography variant="h5" align="center" color="textSecondary" paragraph>
                        Are you new to Material UI? Have you heard about it but never actually tried it out? Maybe you dived into it but it felt overwhelming? It's easy to learn if you know where to start! This video will help you to get started quickly.
                        </Typography>
                        <div className={classes.button}>
                            <Grid container spacing={2} justify="center">
                                <Grid item>
                                    <Button variant="contained" color="primary">
                                        See my photos
                                    </Button>
                                </Grid>
                                <Grid item>
                                    <Button variant="outlined" color="primary">
                                    Secondary action
                                    </Button>
                                </Grid>
                            </Grid>
                        </div>

                    </Container>
                </div>
                <Container className={classes.cardGrid} maxWidth="md">
                    <Grid container spacing={4}>
                        {cards.map((card) =>(
                            <Grid item key={card }xs={12} sm={6} md={4}>
                            <Card className={classes.card}>
                                <CardMedia className={classes.cardMedia} image="https://source.unsplash.com/random" title="Image Title"/>
                                <CardContent className={classes.cardContent}>
                                    <Typography gutterBottom variant="h5">
                                        Heading
                                    </Typography>
                                    <Typography>
                                        This is the description of the card
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button size="small" color="primary">View</Button>
                                    <Button size="small" color="primary">Edit</Button>
                                </CardActions>
                            </Card>
                        </Grid>
                        ))}
                        
                    </Grid>
                </Container>
          
        </>
    )
}

export default Inscards;