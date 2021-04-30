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
  import Logo from '../assets/hb-logo-white.svg';


  

  const Header = () => {
    const classes = useStyles();
    const {isAuthenticated, setIsAuthenticated} = useContext(AuthContext);
    const navLinks = [
      { title: `About`, path: `/about` },
      { title: `Collaborators`, path: `/collaborators` },
      { title: `Plan event`, path: `/plan-your-event` },
      { title: `Inspiration`, path: `/inspiration` },
      !isAuthenticated ? {title: `Sign Up`, path: `/sign-up` } : {title:`Sign In`, to:`/sign-in`}, //ask for this tomorrow
      { title: `Sign In`, path: `/sign-in` }
    ];
    
    return (
      <AppBar position="fixed" >
        <Toolbar>
          <Container direction="row" justify="space-around" alignItems="flex-start" className={classes.navbarDisplayFlex}>
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
                  <ListItem button>
                  <ListItemText><Link key={title} to={path} style={{textDecoration:'none'}}>{title}</Link></ListItemText>
                </ListItem>
                ))}
              </List>
            </Hidden>
                  <AccountCircleIcon style={{color: 'white'}} className="profile"/>
          </Container>
        </Toolbar>
      </AppBar>
    );
  };
  
  export default Header;