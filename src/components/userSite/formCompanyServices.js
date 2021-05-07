import {useState, useContext} from 'react';
import {AuthContext} from '../auth/context/authContext';
import { Redirect } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles} from "@material-ui/core/styles";

const CompanyServices = () => {
    const {service_name, description, address, prices, capacity, assortment, images} = useContext(AuthContext);
    const classes = useStyles();
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
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(formState)
        };
        signUp(options)
    };
    if(isAuthenticated) return <Redirect to='/'/>
    return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <form className={classes.form} onSubmit={onSubmit} >
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="company_name"
                  label="Company's Name"
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
                  label="Fiscal Address"
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

  export default CompanyServices;