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
import InstagramIcon from "@material-ui/icons/Instagram";


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

  profileContent: {
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

const UserDetails = () => {
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
                  Username: {user.username}
                  <br></br>
                  Phone: {user.phone}
                </Typography>
              </Grid>
            ))}
          </Grid>
        </Box>
      </div>
    </div>
  );
};

export default UserDetails;
