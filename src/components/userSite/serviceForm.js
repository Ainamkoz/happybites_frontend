import {useState, useContext} from 'react';
import {AuthContext} from '../auth/context/authContext';
import { makeStyles} from "@material-ui/core/styles";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import AddPhotoAlternateIcon from "@material-ui/icons/AddPhotoAlternate";
import Fab from "@material-ui/core/Fab";


const useStyles = makeStyles((theme) => ({
  input: {
    display: "none"
  },
  button: {
    margin: 10
  },
}));

const ServiceForm = ({setServiceFromCompany}) => {
  const{userProfile} = useContext(AuthContext);
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  
  const [service, setService] = useState({
    service_name:'',
    description:'',
    address:'',
    prices:'',
    event_img:'',
    phone:'', 
    capacity:'',
    assortment:'' 
});
const{service_name, description, address, prices, event_img, phone, capacity, assortment} = service;

const onChange = e =>{
  setService({...service, [e.target.name]: e.target.value})
 };
 const onChangeFile = e =>{
  setService({...service, event_img: e.target.files[0]})
 };
  const onSubmit = async e =>{
    e.preventDefault();
    for (const field in service){
      if (!service[field]) return alert(`Fill up your ${field}`);
    }
    const formData = new FormData();
        formData.append('service_name',service_name);
        formData.append('description',description);
        formData.append('address',address);
        formData.append('prices',prices);
        formData.append('event_img',event_img);
        formData.append('phone',phone);
        formData.append('capacity',capacity);
        formData.append('assortment',assortment);
        formData.append('company_id', userProfile.result[0].company_id);
        console.log(formData)
    
        const resNewService =  await fetch(`${process.env.REACT_APP_BACKEND}/services/newservice`, {method: 'POST', body: formData, headers: {token: localStorage.getItem('token')}});
        const NewService = await resNewService.json()
        setServiceFromCompany(prev => [NewService, ...prev])
        setOpen(false);
  }
 

  return (
    <div>
      <Button variant="filled" color="secondary" onClick={handleClickOpen}>
        Add Service
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title" onSubmit={onSubmit}>
        <form onSubmit={onSubmit}>
        <DialogTitle id="form-dialog-title">Post your service</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Here you can add the services!
          </DialogContentText>
          <input
              accept="image/*"
              name="event_img"
              className={classes.input}
              id="contained-button-file"
              multiple={false}
              type="file"
              onChange={onChangeFile}
            />
            <label htmlFor="contained-button-file">
              <Fab component="span" className={classes.button}>
                <AddPhotoAlternateIcon />
              </Fab>
            </label>
            <TextField
            autoFocus
            margin="dense"
            name="service_name"
            id="titleIns"
            label="Service name"
            type="text"
            onChange={onChange}
            fullWidth
          />
          <TextField
          id="outlined-multiline-static"
          label="Description for the service"
          name="description"
          multiline
          rows={4}
          variant="outlined"
          onChange={onChange}
          style={{width:"100%", top:"1rem"}}
        />
          <TextField
            autoFocus
            margin="dense"
            name="address"
            id="titleIns"
            label="Address"
            type="text"
            onChange={onChange}
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            name="phone"
            id="titleIns"
            label="Phone"
            type="text"
            onChange={onChange}
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
          label="Average price"
          name="prices"
          type="text"
          onChange={onChange}
          fullWidth
        />
        <TextField
            autoFocus
            margin="dense"
            name="capacity"
            id="titleIns"
            label="Capacity"
            type="text"
            onChange={onChange}
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            name="assortment"
            id="titleIns"
            label="Assortment"
            type="text"
            onChange={onChange}
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button type='submit' color="secondary">
            Publish
          </Button>
        </DialogActions>
        </form>
      </Dialog>
    </div>
  )
}

export default ServiceForm
