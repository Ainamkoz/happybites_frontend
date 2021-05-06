import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';


const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
}));

export default function CardFav() {
  const classes = useStyles();

  

  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        image="https://i.ytimg.com/vi/ClFLXkGhuI8/maxresdefault.jpg"
        title="Fish dish"
      />
      <CardContent>
        <Typography variant="h6">Best Fish in Berlin</Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          This impressive fish is a perfect party dish and a fun meal to eat together with your
          guests. Add 1 cup of white wine, if you like.
        </Typography>
      </CardContent>
    </Card>
  );
}