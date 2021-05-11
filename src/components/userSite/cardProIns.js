import {useEffect, useState, useContext} from 'react'
import {AuthContext} from '../auth/context/authContext';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';

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

export default function CardShareIns({ideasFromCompany, setIdeasFromCompany}) {
  const classes = useStyles();
  const{userProfile} = useContext(AuthContext);
 

  useEffect(()=>{
    const getIdeas = async () => {
      const res = await fetch(`${process.env.REACT_APP_BACKEND}/ideas`)
      const data = await res.json()
      const ideasByCompany = data.filter(idea => idea.company_id === userProfile.result[0].company_id)
      setIdeasFromCompany(ideasByCompany)
    }

    getIdeas()
  },[])
  

  return ideasFromCompany ? (
    <Grid container>
        {
          ideasFromCompany.map(idea => (

            <Grid item xs={4}>
              <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        image={`${process.env.REACT_APP_BACKEND}/uploads/${idea.images}`}
        title={idea.title}
      />
      <CardContent>
        <Typography variant="h6">{idea.title}</Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {idea.description}
        </Typography>
      </CardContent>
      <CardActions>
        <IconButton aria-label="favorites">
          <FavoriteIcon /> {/* THIS SHOULD COUNT THE FAV CLICKS */ }
        </IconButton>
        <IconButton aria-label="delete">
          <DeleteIcon /> 
        </IconButton>
        <IconButton aria-label="edit">
          <EditIcon /> 
        </IconButton>
      </CardActions>
    </Card>
            </Grid>
          ))
        }
      </Grid>


  ): '...loading'
}