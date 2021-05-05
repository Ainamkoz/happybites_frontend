import {useState} from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import AddPhotoAlternateIcon from "@material-ui/icons/AddPhotoAlternate";
import Fab from "@material-ui/core/Fab";


const ShareInsBtn = () => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="filled" color="secondary" onClick={handleClickOpen}>
        Add Idea
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Post your products</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Fill the fields and the post will be instanly added in the inspiration section. This is a way to publicity your businness
          </DialogContentText>
          <label htmlFor="contained-button-file">
              <Fab component="span">
                <AddPhotoAlternateIcon />
              </Fab>
          </label>
          <TextField
            autoFocus
            margin="dense"
            id="titleIns"
            label="Title for Products"
            type="text"
            fullWidth
          />
          <TextField
          id="outlined-multiline-static"
          label="Description for Products"
          multiline
          rows={4}
          defaultValue="Default Value"
          variant="outlined"
          style={{width:"100%", top:"1rem"}}
        />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="secondary">
            Publish
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default ShareInsBtn;