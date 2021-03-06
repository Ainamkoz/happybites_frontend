import React , {useState, useContext}from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import {AuthContext} from './context/authContext';
import AppBar from '@material-ui/core/AppBar';
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import ShareInsBtn from "../userSite/shareIns";
import CardShareIns from "../userSite/cardProIns";
import TextField from "@material-ui/core/TextField";
import CompanyDetails from "../userSite/formCompanyDetails";
import CompanyProfileDetails from "../userSite/companyDetails";
import Messages from "../userSite/messages";
import ServiceForm from "../userSite/serviceForm";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}>
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
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

const CompanyInfo = () => {
  const [ideasFromCompany, setIdeasFromCompany ] = useState([])
  const [serviceFromCompany, setServiceFromCompany] = useState([])
  
  const {isAuthenticated, userProfile} = useContext(AuthContext);
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  console.log(userProfile);
  const name = userProfile.result[0];

  return !userProfile.result.length ? (
    <CompanyDetails />
  ) : (
    <>
    <div className={classes.root}>
      <AppBar position="static">
      <Typography variant="h6" align="right" className="pName">
            {" "}
            Hi <b style={{color:"#e57373"}}>{name.company_name}</b>!
          </Typography>
        <Tabs value={value} onChange={handleChange} aria-label="Profile Menu" centered>
          <Tab label="Company Details" {...a11yProps(0)} />
          <Tab label="Messages" {...a11yProps(1)} />
          <Tab label="Share Idea" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <TabPanel height="100vh" value={value} index={0}>
       <Box style={{display:'flex', marginTop:"2rem", marginBottom:"5rem"}}>
       <Grid container justify="center" xs="12" sm="3" className="profilePmenu"style={{flexDirection:"column", alignItems:"center"}}>
          <Typography>
              <CompanyProfileDetails />
            </Typography>
        </Grid>
        <Grid container justify="center" xs="12" sm="9" style={{flexDirection:"column", alignItems:"center"}}>  
          <Typography variant="body1" style={{color: "#2c2c3d", fontSize: "1.8rem", fontWeight:"500", marginBottom:"1rem"}}>Upload all your different company locations</Typography>      
          <ServiceForm setServiceFromCompany={setServiceFromCompany}/>
          </Grid>
       </Box> 
      </TabPanel>
      <TabPanel value={value} index={1}>
      <div className="profilePmenu">
            <Typography>
              <Messages />
            </Typography>
          </div>
      </TabPanel>
      <TabPanel value={value} index={2}>
      <div className="profilePmenu" style={{display:"flex", flexDirection:"column", alignItems:"center"}}>
          <Typography variant="h5" align="center">You can share some of your products, meals, photography, ... Anything that it can help the community to know more about your businness</Typography>         
          <div>
            <ShareInsBtn setIdeasFromCompany={setIdeasFromCompany}/>
          </div>
          <div>
            <Typography variant="h5" align="center">Current Ideas Posted</Typography>
            <CardShareIns ideasFromCompany={ideasFromCompany} setIdeasFromCompany={setIdeasFromCompany}/>
          </div>
          </div>
        </TabPanel>
      </div>
    </>
  );
};

export default CompanyInfo;
