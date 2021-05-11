import {
    Container,
    Grid,
    FormLabel,
    TextField,
    FormControlLabel,
    Radio,
    Checkbox,
    RadioGroup,
    Button,
    Typography,
    CssBaseline,
  } from "@material-ui/core";
  import React from 'react';
  import {AuthContext} from '../auth/context/authContext';
  import {Link } from 'react-router-dom'

  import { useState, useContext, useEffect } from "react";
  import { makeStyles, useTheme } from "@material-ui/core/styles";

  
  const useStyles = makeStyles( (theme) => ({
    root: {
      display: "flex",
    },
    details: {
      display: "flex",
      flexDirection: "column",
    },
    content: {
      flex: "1 0 auto",
    },
    cover: {
      width: 151,
    },
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
      width: '50%', // Fix IE 11 issue.
      marginTop: theme.spacing(3),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  }));
  
  export default function EventPageForm({myRestau}) {
    const{userProfile} = useContext(AuthContext);
    const classes = useStyles();
    const theme = useTheme();
    const [newEvent, setNewEvent] = useState({
      email:'',
      phone:'',
      guest_number:'',
      event_date:'',
      message:'',
      price:''
  });
  const{email,phone,guest_number,event_date,message,price} = newEvent;
  const onChange = e =>{
    setNewEvent({...newEvent, [e.target.name]: e.target.value})
   };
    const onSubmit = async e =>{
      e.preventDefault();
      for (const field in newEvent){
        if (!newEvent[field]) return alert(`Fill up your ${field}`);
      }
      const formData = new FormData();
          formData.append('email',email);
          formData.append('phone',phone);
          formData.append('guest_number',guest_number);
          formData.append('event_date',event_date);
          formData.append('message',message);
          formData.append('price',price);
          formData.append('company_id',myRestau.company_id);
          formData.append('profileUser_id', userProfile ? userProfile.result[0].profileUser_id : null );
          console.log(formData)

          const resNewEvent =  await fetch(`${process.env.REACT_APP_BACKEND}/requests/requestevent`, {method: 'POST', body: formData, headers: {token: localStorage.getItem('token')}});
          const NewEvent = await resNewEvent.json() 
          setNewEvent({
            email:'',
            phone:'',
            guest_number:'',
            event_date:'',
            message:'',
            price:''
        })
        }
      if(!userProfile.result.length) return <div>Create your user profile to send requests to providers ;)
        <Link to='/user-profile'>Go now</Link>
      </div>
    return  (
      <div>
        <Container>
        <form className={classes.form} onSubmit={onSubmit}>
        <Typography variant="h5" align="center">
            Send Message
          </Typography>
          <br />
          <br />
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="email"
                name="email"
                variant="outlined"
                fullWidth
                id="email"
                type="text"
                value={email}
                onChange={onChange}
                label="Your email"
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                fullWidth
                id="phone"
                label="Phone"
                type="text"value={phone}
                onChange={onChange}
                name="phone"
                autoComplete="lname"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                fullWidth
                type="text"
                id="guest"
                label="Guest Count"
                value={guest_number}
                onChange={onChange}
                name="guest_number"
                autoComplete="guest"
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                fullWidth
                name="price"
                label="Price per Guest"
                value={price}
                onChange={onChange}
                type="text"
                id="price"
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                variant="outlined"
                fullWidth
                name="event_date"
                label="Preffered Date"
                type="text"
                value={event_date}
                onChange={onChange}
                id="eventDate"
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                variant="outlined"
                fullWidth
                multiline
                name="message"
                label="Message"
                type="text"
                value={message}
                onChange={onChange}
                id="message"
                rows={4}
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}>
            Send Request
          </Button>
          </form>
        </Container>
      </div>
    )   
  } 
   
  
  