
const express = require('express');
const app = express();
const sequelize = require('./config/db');
const userRoutes = require('./routes/userRoutes');
require('dotenv').config();

app.use(express.json());
app.use('/api', userRoutes);

app.get('/', (req,res)=>{
    res.send("Hellow Server ")
})

sequelize.sync()
  .then(() => {
    console.log('Database synced');
    app.listen(process.env.PORT, () => {
      console.log(`Server running at http://localhost:${process.env.PORT}`);
    });
  })
  .catch(err => {
    console.error('Error connecting to the database:', err);
  });
