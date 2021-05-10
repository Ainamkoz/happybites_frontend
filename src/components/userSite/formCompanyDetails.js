import {useState, useContext} from 'react';
import {AuthContext} from '../auth/context/authContext'
import { makeStyles} from "@material-ui/core/styles";
import {Container, Typography, Grid, TextField, Button} from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';


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

const CompanyDetails = () => {
    const classes = useStyles();
    const {userProfile, setUserProfile} = useContext(AuthContext);
    const [formState, setFormState] = useState({
        company_name:'',
        address:'',
        profile_img:'',
        category:'',
        phone:''
  
    });
    const {company_name, address, profile_img, category, phone} = formState;
    const onChange = e =>{
       setFormState({...formState, [e.target.name]: e.target.value})
      };
    const onChangeFile = e =>{
        setFormState({...formState, profile_img: e.target.files[0]})
       };
    const onSubmit = async e => {
        e.preventDefault();
        for (const field in formState){
          if (!formState[field]) return alert(`Fill up your ${field}`);
        }
        const formData = new FormData();
        formData.append('profile_img',profile_img);
        formData.append('company_name',company_name);
        formData.append('address',address);
        formData.append('category',category);
        formData.append('phone',phone);

        const options={
          method:'POST',
          headers:{
            'token': localStorage.getItem('token')
          },
          body: formData
        };
        
        const res = await fetch(`${process.env.REACT_APP_BACKEND}/userprofile/newuserprofile`, options)
        const {newCompany} = await res.json()
        setUserProfile(prev => ({...prev, result: newCompany}))
    };
    return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Typography component="h1" variant="h5">
            Fill out your Company details
          </Typography>
          <form className={classes.form} onSubmit={onSubmit} >
            <Grid container spacing={2}>
              <Grid item xs={12}>
              <input 
              type="file" 
              name="profile_img" 
              accept="image/*" 
              multiple={false} 
              onChange={onChangeFile} 
              />

                <TextField
                  required
                  fullWidth
                  name="company_name"
                  label="company name"
                  type="Standard"
                  id="standard-basic"
                  onChange={onChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="address"
                  label="address"
                  type="Standard"
                  id="standard-basic"
                  onChange={onChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="phone"
                  label="phone"
                  type="Standard"
                  id="standard-basic"
                  onChange={onChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="category"
                  label="category"
                  type="Standard"
                  id="standard-basic"
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

  export default CompanyDetails;