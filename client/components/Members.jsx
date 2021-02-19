import React, { useState } from 'react';
import '../styles.css';
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';


const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '50ch',
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      border: "1px solid black",
      borderRadius: '5px',
      backgroundColor: "white"
    },
  },
}));



export default function Members(props) {
  // const classes = useStyles();
  const [donations, setDonations] = useState('');
  const [date, setDate] = useState('');


  useEffect(() => {
    fetch('/login/authenticate', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ donations, date })
    })
  })
  function inputSubmitted(e) {
    setUsername(e.target.value);
    setPassword(e.target.value);

    // const members = {
    //   'donations': donations,
    //   'date': date
    // }


  }
  return (
    <section>
      <Grid container className={classes.root} spacing={2}>
        <Grid item xs={12}>
          <Paper>Donation Amount</Paper>
          <Paper>{donations}</Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper>Date of Donation</Paper>
          <Paper>{date}</Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper></Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper></Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper></Paper>
        </Grid>
      </Grid>
    </section>
  )

};