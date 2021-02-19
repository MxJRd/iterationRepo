import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField'; const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));
const useStyles2 = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));
export default function ButtonAppBar() {
  const classes = useStyles();
  const classes2 = useStyles2(); const [username, setUsername] = useState('');
  const [password, setPassword] = useState(''); function loginFunc(e) {
    setUsername(e.target.value)
    setPassword(e.target.value)
    const loginInfo = {
      'username': username,
      'password': password
    }
    fetch('/login/authenticate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(loginInfo)
    })
  }
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <a href="https://codesmith.io/" style={{ color: "white" }}>About</a>
          <Typography variant="h6" className={classes.title}>
            Show your mercy
          </Typography>
          <form className={classes.root} noValidate autoComplete="off">
            <TextField id="standard-basic" label="Login" style={{ color: "white" }} />
            <TextField id="standard-basic" label="Password" style={{ color: "white" }} />
          </form>
          <Button color="inherit" onClick={loginFunc}>Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}