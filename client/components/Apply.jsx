import React, { useState } from 'react';
import '../styles.css';
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

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
const useStyles2 = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));
export default function Apply(props) {
  const classes = useStyles();
  const classes2 = useStyles2(); const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [essay, setEssay] = useState('')
  function inputSubmitted(e) {
    setName(e.target.value);
    setPhone(e.target.value);
    setEmail(e.target.value);
    setEssay(e.target.value); const application = {
      'name': name,
      'phone': phone,
      'email': email,
      'essay': essay
    }
    console.log('applicationOBJ', applicationOBJ)
    fetch('/application/createApplicationRequest', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(application)
    })
    alert("Thank you for your application!");
    window.location.replace("http://localhost:8080/")
  } const resultArr = [];
  const formItems = ["name", "phone", "email", "essay"];
  const formFunc = [setName, setPhone, setEmail, setEssay]
  // formItems.forEach(name => resultArr.push( <TextField id="outlined-basic" label={name} onChange={event => "set"+{name}(event.target.value)} variant="outlined"/>))
  for (let i = 0; i < formItems.length; i++) {
    if (formItems[i] === "essay") {
      resultArr.push(<TextField
        id="outlined-multiline-static"
        label="essay"
        multiline
        rows={4}
        defaultValue="The reason why I think I deserve the scholarship is because...  "
        variant="outlined"
      />)
    } else {
      resultArr.push(<TextField id="outlined-basic" label={formItems[i]} onChange={event => formFunc[i](event.target.value)} variant="outlined" />)
    }
  }
  return (
    <section style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
      <h2>Application Form</h2>
      <form className={classes.root} noValidate autoComplete="off" >
        {resultArr}
        <Button variant="contained" color="primary" disableElevation style={{ backgroundColor: "blue" }} onClick={inputSubmitted} >submit</Button>
      </form>
    </section>
  )
};