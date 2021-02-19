import React, { useState } from 'react';
import '../styles.css';
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button'; const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '50ch',
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      border: "1px solid black",
      borderRadius: '5px',
      backgroundColor: "white",
    },
  }
}));
const useStyles2 = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
})); export default function Donation(props) {
  const classes = useStyles();
  const classes2 = useStyles2();
  const [name, setName] = useState('');
  const [donationAmount, setDonationAmount] = useState('');
  const [creditCard, setCreditCard] = useState('');
  const [phone, setPhone] = useState('');
  const [date, setDate] = useState(new Date('2014-08-18T21:11:54'))
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState(''); function inputSubmitted(e) {
    setName(e.target.value);
    setDonationAmount(e.target.value);
    setCreditCard(e.target.value);
    setPhone(e.target.value);
    setDate(e.target.value);
    setEmail(e.target.value);
    setUsername(e.target.value);
    setPassword(e.target.value); const donations = {
      'name': name,
      'donationAmount': donationAmount,
      'creditCard': creditCard,
      'phone': phone,
      'date': date,
      'email': email,
    }
    const members = {
      'username': username,
      'password': password
    }
    console.log('donationOBJ', donations)
    console.log('membersOBJ', members)
    fetch('/donation/makeDonation', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ donations, members })
    })
    alert('Thanks for your donation!');
    window.location.replace('http://localhost:8080/')
  } const resultArr = [];
  const formItems = ["name", "donationAmount", "creditCard", "phone", "date", "email", "username", "password"];
  const formFunc = [setName, setDonationAmount, setCreditCard, setPhone, setDate, setEmail, setUsername, setPassword]
  // formItems.forEach(name => resultArr.push( <TextField id="outlined-basic" label={name} onChange={event => "set"+{name}(event.target.value)} variant="outlined"/>))
  for (let i = 0; i < formItems.length; i++) {
    if (formItems[i] === "date") {
      resultArr.push(<form className={classes2.container} noValidate>
        <TextField
          id="date"
          label="date"
          type="date"
          defaultValue="2017-05-24"
          className={classes2.textField}
          InputLabelProps={{
            shrink: true,
          }}
        />
      </form>)
    } else {
      resultArr.push(<TextField id="outlined-basic" label={formItems[i]} onChange={event => formFunc[i](event.target.value)} variant="outlined" />)
    }
  }
  return (
    <section style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
      <h2>Donation Form</h2>
      <form className={classes.root} noValidate autoComplete="off" id="donationPage">
        {resultArr}
        <Button variant="contained" color="primary" disableElevation style={{ backgroundColor: "blue" }} onClick={inputSubmitted} >submit</Button>
      </form>
    </section>
  )
};