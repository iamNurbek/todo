const express = require('express'),
  mongoose = require('mongoose'),
  app = express(),
  path = require('path'),
  PORT = 3000,
  router = express.Router();

// Mongo URI
const MONGO_URI =
  'mongodb+srv://iamNurbek:Jouraboev30@soloproject.cvh7u.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

mongoose.connect(MONGO_URI);

// Connecting to database
mongoose.connection.once('open', () =>
  console.log('Database has been connected')
);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/', router);

// Adding todo to the database
router.post('/', controller.createTodo, (req, res) => {
  res.status(200).json(res.locals.newTodo);
});

// Getting the todo from database
router.get('/get', controller.createTodo, (req, res) => {
  res.status(200).json(res.locals.newTodo);
});

// Updating the todo
router.patch('/update', controller.createTodo, (req, res) => {
  res.status(200).json(res.locals.newTodo);
});

// Delete the todo from the database
router.delete('/delete/:id', controller.createTodo, (req, res) => {
  res.status(200).json(res.locals.newTodo);
});

// Unknown Route Handling
app.use((req, res) => res.sendStatus(404));

// Global Error Handling
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Error caught in unknown middleware error',
    status: 400,
    message: { err: 'Encountered Error' },
  };

  const errObj = Object.assign({}, defaultErr, err);
  return res.status(errObj.status).json(errObj.message);
});

// Connecting to the PORT
app.listen(PORT, () =>
  console.log(`Connection has been made with port ${PORT}`)
);
