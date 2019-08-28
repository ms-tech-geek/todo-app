'use strict';
module.exports = function(app) {
  const todoList = require('../controllers/todoListController');
  const auth = require('../middleware/checkAuth');

  // security Routes
  app.route('/auth/:user/:email')
    .get(todoList.authenticate_user) // generate security token

  // todoList Routes
  app.route('/tasks')
    .get(auth,todoList.list_all_tasks) // fetch all tasks
    .post(auth,todoList.create_a_task); // create a new task


  app.route('/tasks/:taskId')
    .get(auth,todoList.read_a_task) // fetch task by taskId
    .put(auth,todoList.update_a_task) // updated task by taskId
    .delete(auth,todoList.delete_a_task); // delete task by taskId
};