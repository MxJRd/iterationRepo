const express = require('express');
const { get } = require('http');
const path = require('path');
const PORT = 3000;
const app = express();
// const GetController = require('./controllers/GetController.js');
const { getDonations } = require('./controllers/GetController.js');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/build', express.static(path.resolve(__dirname, '../build')));

app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../index.html"));
});

app.get("/getDonations",
  getDonations,
  (req, res) => {
    res.status(200).json(res.locals.donations);
  })


app.use((req, res) => res.status(404).send('This is not the page you\'re looking for...'));

// Global error handler
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});



app.listen(PORT, () => { console.log(`Listening on port ${PORT}...`); });

module.exports = app;