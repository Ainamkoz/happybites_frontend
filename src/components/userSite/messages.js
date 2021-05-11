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
  const [messages, setMessages] = useState()
  const classes = useRowStyles();
  const {
    requests,
    setRequests,
    selectedRequest,
    setSelectedRequest,
    loading,
    setBasicError,
    setLoading,
    userProfile
  } = useContext(AuthContext);


useEffect(()=>{
  const getMessages = async ()=>{

    if(userProfile.company){
      const res = await fetch(`${process.env.REACT_APP_BACKEND}/requests`)
      const data = await res.json()
      const messagesForCompany = data.filter(msg => msg.company_id === userProfile.result[0].company_id)
      console.log(data)
      setMessages(messagesForCompany)
    } else{
      const res = await fetch(`${process.env.REACT_APP_BACKEND}/requests/${userProfile.result[0].profileUser_id}`)
    const data = await res.json()
    setMessages(data)
    }
    
  }
  getMessages()
},[])

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
                {messages && messages.map((msg, index) => (               
                   <TableRow>
                      <TableCell component="th" scope="row">
                        {msg.event_date}
                      </TableCell>
                      <TableCell>{msg.email} </TableCell>
                      <TableCell align="right"> {msg.guest_number} </TableCell>
                      <TableCell align="right"> {msg.message}</TableCell>
                    </TableRow>
                    ))}
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
                    <TableCell>Event Date</TableCell>
                    <TableCell>email</TableCell>
                    <TableCell align="right">Guest number</TableCell>
                    <TableCell align="right">Message</TableCell>
                  </TableRow>
        </TableHead>
        <TableBody>
            <Row/>
          
        </TableBody>
      </Table>
    </TableContainer>
  );
}
