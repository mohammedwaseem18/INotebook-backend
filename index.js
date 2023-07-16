

const connectToMongo = require('./db');
const express = require('express');
var cors = require('cors')

connectToMongo();

const app = express();
const port = 5000 ||  process.env.PORT; 

app.use(cors())
app.use(express.json())




app.use(express.json())
// Availabble routes

  app.use('/api/auth',require('./routes/auth'))
   app.use('/api/notes',require('./routes/notes'))

app.listen(port, () => {
  console.log(`Inotebook backend listening at http://localhost:${port}`);
});


