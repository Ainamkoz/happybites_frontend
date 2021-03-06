import {useState, useContext} from 'react';
import {AuthContext} from '../auth/context/authContext';
import CssBaseline from '@material-ui/core/CssBaseline';
import {Container, Typography, Grid, TextField, Button} from '@material-ui/core';
import { makeStyles} from "@material-ui/core/styles";


const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const CompanyServices = () => {
    const classes = useStyles();
    const {userProfile, setUserProfile} = useContext(AuthContext);
    const [formState, setFormState] = useState({
        service_name:'',
        description:'',
        address:'',
        prices:'',
        capacity:'',
        assortment:'',
        images:''
    });
    const {service_name, description, address, prices, capacity, assortment, images} = formState;
    const onChange = e =>{
       setFormState({...formState, [e.target.name]: e.target.value})
      };
    const onSubmit = async e => {
        e.preventDefault();
        for (const field in formState){
          if (!formState[field]) return alert(`Fill up your ${field}`);
        }
        const options={
          method:'POST',
          headers:{
            'token': localStorage.getItem('token'),
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(formState)
        };
        
        const res = await fetch(`${process.env.REACT_APP_BACKEND}/services/newservice`, options)
        const {newUserProfile} = await res.json()
        setUserProfile(prev => ({...prev, result: newUserProfile}))
    };
    return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <form className={classes.form} onSubmit={onSubmit} >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  name="restaurant_name"
                  label="Restaurant Name"
                  type="Standard"
                  id="standard-basic"
                  onChange={onChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  name="address"
                  label="Restaurant Address"
                  type="Standard"
                  id="standard-basic"
                  onChange={onChange}
                />
              </Grid>


              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  name="price"
                  label="Price range per Guest"
                  type="Standard"
                  id="standard-basic"
                  onChange={onChange}
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  name="capacity"
                  label="Restaurant Capacity"
                  type="Standard"
                  id="standard-basic"
                  onChange={onChange}
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="Cuisine"
                  label="Cuisine Type"
                  type="Standard"
                  id="standard-basic"
                  onChange={onChange}
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  multiline
                  rows={5}
                  name="description"
                  label="Small Description"
                  type="Standard"
                  id="standard-basic"
                  onChange={onChange}
                />
              </Grid>

              <Grid item xs={12}>
              <input 
              type="file" 
              name="event_img" 
              accept="image/*" 
              multiple={false} 
              onChange={onChange} 
              />
              </Grid> 

            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Save details
            </Button>
          </form>
        </div>
      </Container>
    );
  }

  export default CompanyServices;