import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Collapse from "@material-ui/core/Collapse";
import IconButton from "@material-ui/core/IconButton";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import { AuthContext } from "../auth/context/authContext";

const useRowStyles = makeStyles({
  root: {
    "& > *": {
      borderBottom: "unset",
    },
  },
});

function Row(props) {
  const [open, setOpen] = React.useState(false);
  const classes = useRowStyles();
  const {
    requests,
    setRequests,
    selectedRequest,
    setSelectedRequest,
    loading,
    setBasicError,
    setLoading,
  } = useContext(AuthContext);


const messages = requests.result
  console.log(messages) 

/*   const messages = requests.result.findIndex((element, index) => {
    if (element.requests = 0 ) {
      return true
    }
  })

  console.log("hello", messages) */


  return (
    <React.Fragment>
      <TableRow className={classes.root}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}>
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          Restaurant | Food service
        </TableCell>
        <TableCell align="right"> company_email</TableCell>
        <TableCell align="right"> requested date </TableCell>
        <TableCell align="right"> </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box margin={1}>
              <Typography variant="h6" gutterBottom component="div">
                History
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>Event Date</TableCell>
                    <TableCell>email</TableCell>
                    <TableCell align="right">Guest number</TableCell>
                    <TableCell align="right">Message</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                {messages.map((msg, index) => (               
                   <TableRow>
                      <TableCell component="th" scope="row">
                        {msg.event_date}
                      </TableCell>
                      <TableCell>{msg.email} </TableCell>
                      <TableCell align="right"> {msg.guest_number} </TableCell>
                      <TableCell align="right"> {msg.message}</TableCell>
                    </TableRow>
                    ))};
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

Row.propTypes = {
  row: PropTypes.shape({
    calories: PropTypes.number.isRequired,
    carbs: PropTypes.number.isRequired,
    fat: PropTypes.number.isRequired,
    history: PropTypes.arrayOf(
      PropTypes.shape({
        amount: PropTypes.number.isRequired,
        customerId: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
      })
    ).isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    protein: PropTypes.number.isRequired,
  }).isRequired,
};

export default function CollapsibleTable() {

  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>Service Type</TableCell>
            <TableCell align="right">Email</TableCell>
            <TableCell align="right">Date Event</TableCell>
            <TableCell align="right">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
            <Row/>
          
        </TableBody>
      </Table>
    </TableContainer>
  );
}
