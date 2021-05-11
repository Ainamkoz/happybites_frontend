import {useEffect, useState, useContext} from 'react'
import { Typography } from '@material-ui/core';
import {AuthContext} from '../auth/context/authContext';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import IconButton from '@material-ui/core/IconButton';

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

  export default function ServiceSection ({serviceFromCompany, setServiceFromCompany}) {
    const classes = useStyles();
    const{userProfile} = useContext(AuthContext);
   
  
    useEffect(()=>{
      const getServices = async () => {
        const res = await fetch(`${process.env.REACT_APP_BACKEND}/services`)
        const data = await res.json()
        const serviceByCompany = data.filter(services => services.company_id === userProfile.result[0].company_id)
        setServiceFromCompany(serviceByCompany)
      }
  
      getServices()
    },[])
  
    return serviceFromCompany ? (
        <Grid>
        {
          serviceFromCompany.map(services => (

            <Grid item xs={4}>
              <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        image={`${process.env.REACT_APP_BACKEND}/uploads/${services.images}`}
        title={services.service_name}
      />
      <CardContent>
        <Typography variant="h6">{services.service_name}</Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {services.description}
        </Typography>
      </CardContent>
      <CardActions>
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
