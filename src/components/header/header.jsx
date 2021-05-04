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
    const {isAuthenticated, logOut} = useContext(AuthContext);
    const navLinks = [
      { title: `About`, path: `/about` },
      { title: `Collaborators`, path: `/collaborators` }, /*think about this page, maybe something like "Philosophy"? */
      { title: `Plan event`, path: `/plan-your-event` },
      { title: `Inspiration`, path: `/inspiration` }
    ];

    if(!isAuthenticated){
      navLinks.push({title: `Sign Up`, path: `/sign-up` })
      navLinks.push({title: `Sign In`, path: `/sign-in` })
    } else{
      navLinks.push({title: `Secret`, path: `/secret-info` })
      navLinks.push({title: `Log out`, path: `/logout` })
    }

    
    return (
      <AppBar position="static" >
        <Toolbar>
          <Container direction="row" maxWidth="md" justify="space-around" alignItems="flex-start" className={classes.navbarDisplayFlex}>
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
            <Link to='/secret-info'>
              <AccountCircleIcon style={{color: 'white'}} className="profile"/>
            </Link>
          </Container>
        </Toolbar>
      </AppBar>
    );
  };
  
  export default Header;