import React, { useState } from 'react';
import '../styles.css';
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button'

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



export default function Donation (props) {
    // const classes = useStyles();
    const [ username, setUsername] = useState('');
    const [ password, setPassword ] = useState('');

         

    function inputSubmitted(e){
      setUsername(e.target.value);
      setPassword(e.target.value);

      const members = {
                        'username': username,
                        'password': password
      }     
      
      fetch('/login/authenticate', {
          method: 'GET',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify({donations, members})
        })
      }

      const resultArr = [];
      const formItems = ["name", "donationAmount", "creditCard", "phone", "date", "email", "username", "password"];
      const formFunc =  [setName, setDonationAmount, setCreditCard, setPhone, setDate, setEmail, setUsername, setPassword]
      // formItems.forEach(name => resultArr.push( <TextField id="outlined-basic" label={name} onChange={event => "set"+{name}(event.target.value)} variant="outlined"/>))
      for (let i = 0; i < formItems.length; i++){
        resultArr.push( <TextField id="outlined-basic" label={formItems[i]} onChange={event => formFunc[i](event.target.value)} variant="outlined"/>)
      }
        return (
          <section>
            <form className={classes.root} noValidate autoComplete="off" >
              {resultArr}
              <Button variant="contained" color="primary" disableElevation style={{backgroundColor:"blue"}} onClick={inputSubmitted} >submit</Button>
            </form>
          </section>
        )
    
};

