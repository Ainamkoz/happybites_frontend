import {
    AppBar,
    Toolbar,
    Container,
    Grid,
    List,
    ListItem,
    ListItemText,
    Hidden
  } from "@material-ui/core";
  import {useContext} from 'react';
import {AuthContext} from '../auth/context/authContext';
  import {Link} from 'react-router-dom';
  import useStyles from "../assets/styles";
  import SideDrawer from "./drawer";
  import AccountCircleIcon from '@material-ui/icons/AccountCircle';
  import Logo from '../assets/color-logo.svg';


  

  const Header = () => {
    const classes = useStyles();
    const {isAuthenticated, logOut} = useContext(AuthContext);
    const navLinks = [
      { title: `About`, path: `/about` },
      { title: `Vision`, path: `/vision` }, /*think about this page, maybe something like "Philosophy"? */
      { title: `Plan event`, path: `/plan-your-event` },
      { title: `Inspiration`, path: `/inspiration` }
    ];

    if(!isAuthenticated){
      navLinks.push({title: `Sign Up`, path: `/sign-up` })
    } 
    
    return (
      <AppBar position="static" style={{marginBottom:'3rem'}}>
        <Toolbar>
          <Container direction="row" maxWidth="md"  justifyContent="space-around" alignItems="center" className={classes.navbarDisplayFlex}>
          <Hidden mdUp>
              <SideDrawer navLinks={navLinks} />
            </Hidden>
            <Link to='/'>
            <img src={Logo} alt="Happy Bites Logo" className="imglogo"/>
            </Link>
            <Hidden smDown>
              <List
                component="nav"
                aria-labelledby="main navigation"
                className={classes.navDisplayFlex}
              >
                {navLinks.map(({ title, path }) => (
                    <ListItem button component={Link} to={path} >
                      <ListItemText>{title}</ListItemText>
                    </ListItem>
                ))}
                {isAuthenticated && (<ListItem button onClick={logOut}>
                  <ListItemText>Log out</ListItemText>
                </ListItem>)}
                
              </List>
            </Hidden>
            <ListItem button component={Link} to='/user-profile' style={{justifyContent:'flex-end'}}>
              <AccountCircleIcon style={{color: '#2c2c3d', width:'40px', height:'auto'}} className="profile"/>
            </ListItem>
          </Container>
        </Toolbar>
      </AppBar>
    );
  };
  
  export default Header;