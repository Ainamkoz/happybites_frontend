import React from "react";
import { useContext } from "react";
import { AuthContext } from "../auth/context/authContext";
import Avatar from "@material-ui/core/Avatar";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import ServiceForm from '../userSite/serviceForm';

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
  },
  main: {
    margin: "0",
    padding: "0",
    marginTop: "auto",
  },

  companyProfileContent: {
    placeItems: "center",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  large: {
    width: theme.spacing(15),
    height: theme.spacing(15),
  },
}));

const CompanyDetails = () => {
  const classes = useStyles();

  const {
    userProfile,
    setUserProfile,
    loading,
    setBasicError,
    setLoading,
  } = useContext(AuthContext);

  const users = userProfile.result;

  console.log("userppp", users);

  return (
    <div>
      <CssBaseline />
      <div className={classes.main}>
        <Box>
          <Grid container justify="center">
            {users.map((user, index) => (
              <Grid
                item
                justify="center"
                className={classes.footerContent}>
                <Typography align="left" style={{ color: "black" }}>
                  <Avatar
                    alt="Profile Pic"
                    src={`http://localhost:5000/uploads/${user.profile_pic}`}
                    className={classes.large}
                  />
                  <br></br>
                  <b>Company name:</b> {user.company_name}
                  <br></br>
                  <b>Address:</b> {user.address}
                </Typography>
              </Grid>
            ))}
         {/*    <Grid item xs={12} sm={4} md={4} className={classes.companyProfileContent}>
            <Typography variant="h5" align="center"> Share your services </Typography>
            <CompanyServicesForm/>
            </Grid> */}
          </Grid>
        </Box>
      </div>
    </div>
  );
};

export default CompanyDetails;
