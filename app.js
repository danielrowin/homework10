const express = require('express');
const bodyParser = require('body-parser');
const movieRoutes = require('./routes/movieRoutes');
const userRoutes = require('./routes/userRoutes');
const sequelize = require('./config/database');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use('/movies', movieRoutes);
app.use('/users', userRoutes);

sequelize.sync()
  .then(() => {
    console.log('Database connected and models synchronized');
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch(error => {
    console.error('Unable to connect to the database:', error);
  });
