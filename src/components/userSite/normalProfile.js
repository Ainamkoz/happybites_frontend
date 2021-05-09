import React , {useContext}from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import {AuthContext} from '../auth/context/authContext';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import ShareInsBtn from '../userSite/shareIns';
import CardShareIns from '../userSite/cardProIns';
import TextField from '@material-ui/core/TextField';
import NormalUserDetails from './formUserDetails';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },

}));

const NormalProfile = () => {
  
  const {isAuthenticated, userProfile} = useContext(AuthContext);
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return !userProfile.result.length ? (<NormalUserDetails/>) : (
    <>
    <div className={classes.root}>
      <AppBar position="static">
        <Typography variant="h6" align="right" className="pName">Hi Jorge!</Typography>
        <Tabs value={value} onChange={handleChange} aria-label="Profile Menu" centered>
          <Tab label="Profile" {...a11yProps(0)} />
          <Tab label="Events Requested" {...a11yProps(1)} />
          <Tab label="Favorites" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <TabPanel height="100vh" value={value} index={0}>
        <div className="profilePmenu">
          <Typography>Item One</Typography>
        </div>
      </TabPanel>
      <TabPanel value={value} index={1}>
    <div className="profilePmenu">
          <Typography>Item Two</Typography>
        </div>
      </TabPanel>
      <TabPanel value={value} index={2}>
      <div className="profilePmenu" style={{display:"flex", flexDirection:"column", alignItems:"center"}}>
          <Typography variant="h5" align="center">Your Favorite Posts</Typography>         
          
          <div>
            <Typography variant="h5" align="center">Current Ideas Posted</Typography>
            <CardShareIns/>
          </div>
        </div>
      </TabPanel>
    </div>
    </>
  );
}
export default NormalProfile;