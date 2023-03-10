const express = require('express'),
  mongoose = require('mongoose'),
  app = express();
path = require('path');
(PORT = 3000), (router = express.Router());

const MONGO_URI =
  'mongodb+srv://iamNurbek:Jouraboev30@soloproject.cvh7u.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

mongoose.connect(MONGO_URI);

mongoose.connection.once('open', () =>
  console.log('Database has been connected')
);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/', router);

app.listen(PORT, () =>
  console.log(`Connection has been made with port ${PORT}`)
);
