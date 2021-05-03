import {
    Avatar, 
    Button, 
    CssBaseline, 
    Grid, 
    Box, 
    Typography, 
    Container, 
    FormLabel,
    TextField,
    FormControlLabel,
    Radio, 
    Checkbox,
    RadioGroup  } from '@material-ui/core';
import Link from '@material-ui/core/Link';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { makeStyles } from '@material-ui/core/styles';
import {useState, useContext} from 'react';
import {AuthContext} from './context/authContext';
import { Redirect } from 'react-router-dom';


function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://happybites-events.com/">
        Happy Bites Events
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  )
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function Signup() {
  const {isAuthenticated, setIsAuthenticated, authError, setError} = useContext(AuthContext);
  const classes = useStyles();
  const [formState, setFormState] = useState({
      firstName:'',
      lastName:'',
      email: '',
      customertype:'',
      password: ''

  });
  const {firstname, lastname, email, customertype, password } = formState;
  const onChange = e =>{
     setFormState({...formState, [e.target.name]: e.target.value})
    };
  const onSubmit = async e => {
      e.preventDefault();
      for (const field in formState){
        if (!formState[field]) return alert(`Fill up your ${field}`);
      }
      const options={
        method:'POST', //or PUT
        headers:{
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formState)
      };
      try{
      const res = await fetch(`${process.env.REACT_APP_BACKEND}/signup`, options);
      const data = await res.json();
      if(data.error) return setError (data.error); // check this part this Jorge
      localStorage.setItem('token', data.token);
      setIsAuthenticated(true);
      } catch (error) {
        console.log(error);
      }
  };
  if(isAuthenticated) return <Redirect to='/'/>
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form className={classes.form} onSubmit={onSubmit} >
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="First Name"
                onChange={onChange}
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="lname"
                onChange={onChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                onChange={onChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                helperText=""
                autoComplete="current-password"
                onChange={onChange}
              />
            </Grid>
            <Grid item xs={12}>
              <FormLabel>What kind of user would you like to be?</FormLabel>
              <RadioGroup aria-label="customertype" name="customertype" value={formState.customertype} onChange={onChange}>
                <FormControlLabel  control={<Radio />} value="company" label="I am a company and I would like to offer my services" />
                <FormControlLabel  control={<Radio />} value="user" label="I just want to book events and look for inspiration" />
            </RadioGroup>
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="I want to receive inspiration, marketing promotions and updates via email."
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
            Sign Up
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link href="#" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={5}>
        <Copyright />
        </Box>
    </Container>
  );
}