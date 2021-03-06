import {
    Drawer,
    IconButton,
    List,
    ListItem,
    ListItemText
  } from "@material-ui/core";
  import { Menu } from "@material-ui/icons";
import {useState} from 'react';
  import useStyles from "../assets/styles";
  import {Link} from 'react-router-dom';


const SideDrawer = ({ navLinks }) => {
    const classes = useStyles();
    const [state, setState] = useState({ left: false });
  
    const toggleDrawer = (anchor, open) => event => {
      if (
        event.type === "keydown" &&
        (event.key === "Tab" || event.key === "Shift")
      ) {
        return;
      }
  
      setState({ [anchor]: open });
    };
  
    const sideDrawerList = anchor => (
      <div
        className={classes.list}
        role="presentation"
        onClick={toggleDrawer(anchor, false)}
        onKeyDown={toggleDrawer(anchor, false)}
      >
        <List component="nav">
          {navLinks.map(({ title, path }) => (
            <ListItem button>
             <ListItemText ><Link key={title} to={path} style={{textDecoration:'none'}}>{title}</Link></ListItemText>
           </ListItem>
            
          ))}
        </List>
      </div>
    );
  
    return (
      <>
        <IconButton
          edge="start"
          aria-label="menu"
          onClick={toggleDrawer("left", true)}
        >
          <Menu fontSize="large" style={{ color: `#2c2c3d` }} />
        </IconButton>
  
        <Drawer
          anchor="left"
          open={state.left}
          onOpen={toggleDrawer("left", true)}
          onClose={toggleDrawer("left", false)}
        >
          {sideDrawerList("left")}
        </Drawer>
      </>
    );
  };
  
  export default SideDrawer;