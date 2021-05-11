import {useState, useContext} from 'react';
import { makeStyles} from "@material-ui/core/styles";
import {AuthContext} from '../auth/context/authContext';
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

const ShareInsBtn = ({setIdeasFromCompany}) => {
  const{userProfile} = useContext(AuthContext);
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [ideas, setIdeas] = useState({
    category:'',
    title:'',
    description:'',
    idea_img:'',
    products:''
});
const {category, title, description, idea_img, products} = ideas;

const onChange = e =>{
  setIdeas({...ideas, [e.target.name]: e.target.value})
 };
 const onChangeFile = e =>{
  setIdeas({...ideas, idea_img: e.target.files[0]})
 };
  const onSubmit = async e =>{
    e.preventDefault();
    for (const field in ideas){
      if (!ideas[field]) return alert(`Fill up your ${field}`);
    }
    const formData = new FormData();
        formData.append('category',category);
        formData.append('title',title);
        formData.append('description',description);
        formData.append('idea_img',idea_img);
        formData.append('products',products);
        formData.append('company_id', userProfile.result[0].company_id);
        console.log(formData)

        const resNewIdea =  await fetch(`${process.env.REACT_APP_BACKEND}/ideas/create-idea`, {method: 'POST', body: formData, headers: {token: localStorage.getItem('token')}});
        const NewIdea = await resNewIdea.json() 
        setIdeasFromCompany(prev => [NewIdea, ...prev])
        setOpen(false);
    }

  return (<div>
    <Button variant="filled" color="secondary" onClick={handleClickOpen}>
      Add Idea
    </Button>
    <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title" >
    <form onSubmit={onSubmit}>
      <DialogTitle id="form-dialog-title">Post your products</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Fill the fields and the post will be instanly added in the inspiration section. This is a way to publicity your businness
        </DialogContentText>
        <input
            accept="image/*"
            name="idea_img"
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
          name="category"
          id="titleIns"
          label="Title for Products"
          type="text"
          onChange={onChange}
          fullWidth
        />
        <TextField
          autoFocus
          margin="dense"
          name="title"
          id="titleIns"
          label="Title"
          type="text"
          onChange={onChange}
          fullWidth
        />
        <TextField
        id="outlined-multiline-static"
        label="Description for your Post"
        name="description"
        multiline
        rows={4}
        variant="outlined"
        onChange={onChange}
        style={{width:"100%", top:"1rem"}}
      />
      <TextField
        id="outlined-multiline-static"
        label="Ingredients, softwares, ..."
        name="products"
        multiline
        rows={4}
        defaultValue="Default Value"
        variant="outlined"
        onChange={onChange}
        style={{width:"100%", top:"1rem"}}
      />
      </DialogContent>
      <DialogActions>
        <Button type='submit' color="secondary">
          Publish
        </Button>
      </DialogActions>
    </form>
    </Dialog>
  </div>)
}

export default ShareInsBtn
