import {
    AppBar,
    Toolbar,
    Container,
    List,
    ListItem,
    ListItemText,
    Hidden
  } from "@material-ui/core";
  import {Link} from 'react-router-dom';
  import useStyles from "../assets/styles";
  import SideDrawer from "./drawer";
  import Logo from '../assets/hb-logo-white.svg';
  
  const navLinks = [
    { title: `home`, path: `/` },
    { title: `about us`, path: `/About` },
    { title: `collaborators`, path: `/collaborator` },
    { title: `Plan your event`, path: `/plan-your-event` },
    { title: `Recipes`, path: `/recipes-inspiration` },
    { title: `contact`, path: `/contact` }
  ];
  
  const Header = () => {
    const classes = useStyles();
  
    return (
      <AppBar position="static">
        <Toolbar>
          <Container maxWidth="md" className={classes.navbarDisplayFlex}>
            <Link to='/'>
            <img src={Logo} alt="Happy Bites Logo"/>
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
            <Hidden mdUp>
              <SideDrawer navLinks={navLinks} />
            </Hidden>
          </Container>
        </Toolbar>
      </AppBar>
    );
  };
  
  export default Header;