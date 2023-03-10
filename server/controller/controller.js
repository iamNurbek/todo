const Task = require('../models/model.js');

module.exports = {

// Create Task Model
  createTask(req, res, next) {
    Task.create({
      todo: req.body.todo,
    })
      .then((data) => {
        res.locals.newTask = data;
        return next();
      })
      .catch((err) => {
        console.log(`Error has been countered in create controller: ${err}`);
      });
  },

// Get Task Model
  getTask(req, res, next) {
    Task.find({
      todo: req.body.todo,
    })
      .then((data) => {
        res.locals.getTask = data;
        return next();
      })
      .catch((err) => {
        console.log(`Error has been countered in get controller: ${err}`);
      });
  },

// Update Task Model
  updateTask(req, res, next) {
    Task.findOneAndUpdate({
      todo: req.body.todo,
    })
      .then((data) => {
        res.locals.updateTask = data;
        return next();
      })
      .catch((err) => {
        console.log(`Error has been countered in create controller: ${err}`);
      });
  },

// Delete Task Model
  deleteTask(req, res, next) {
    Task.findOneAndDelete({
      todo: req.body.todo,
    })
      .then((data) => {
        res.locals.deleteTask = data;
        return next();
      })
      .catch((err) => {
        console.log(`Error has been countered in create controller: ${err}`);
      });
  },
};
