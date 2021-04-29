import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import {Button} from '@material-ui/core';
import Rating from '@material-ui/lab/Rating'



const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: 151,
  }
}));

const Rescard = () =>{
  const classes = useStyles();
  const theme = useTheme();

    return (
        <div>
        <Card className={classes.root}>
        <CardMedia
            className={classes.cover}
            image="https://media-cdn.tripadvisor.com/media/photo-p/15/dc/63/6a/photo0jpg.jpg"
            title="Codo restaurant"
        />
        <div className={classes.details}>
            <CardContent className={classes.content}>
            <Typography component="h5" variant="h5">
                Live From Space
            </Typography>
            <Typography variant="subtitle1" color="textSecondary">
                Mac Miller
            </Typography>
            </CardContent>
            <div>
            <Rating name="half-rating" defaultValue={2.5} precision={0.5} /> //readOnly for default rating
            <Button>Book!</Button> 
            </div>
            
            </div>
        </Card>
    </div>
  )
  }


export default Rescard;