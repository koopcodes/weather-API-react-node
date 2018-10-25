require('dotenv').config();
const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 5000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Import Routes directory
require('./routes')(app);

// app.get('/', (req, res) => {
//   res.send('Server is up and running on Port 5000');
// });

app.listen(port, (err) => {
  if (err) { console.log(err); };
  console.log('Backend listening on port ' + port);
});
