'use strict';
const jwt = require('jsonwebtoken');
const JWT_KEY = process.env.JWT_KEY || 'D3f@U!0r';

let mongoose = require('mongoose'),
  Task = mongoose.model('Tasks');

exports.authenticate_user = function(req, res) {
  if(req.params.user == 'msethi' && req.params.email == 'thecorporator@gmail.com') {
    const token = jwt.sign(
      { 
          user: req.params.user, 
          email: req.params.email 
      },
      JWT_KEY,
      {
          expiresIn: '1h'
      }
      );
      res.json({ message: 'Auth successful' , token }); 
    }
    else{
    res.status(401).send({ message : 'Auth failed' });
  }
};

exports.list_all_tasks = function(req, res) {
  Task.find({}, function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};

exports.create_a_task = function(req, res) {
    let new_task = new Task(req.body);
    new_task.save(function(err, task) {
      if (err)
        res.send(err);
      res.json(task);
    });
  };
  
  exports.read_a_task = function(req, res) {
    Task.findById(req.params.taskId, function(err, task) {
      if (err)
        res.send(err);
      res.json(task);
    });
  };
  
  exports.update_a_task = function(req, res) {
    Task.findOneAndUpdate({_id: req.params.taskId}, req.body, {new: true}, function(err, task) {
      if (err)
        res.send(err);
      res.json(task);
    });
  };
  
  exports.delete_a_task = function(req, res) {
    Task.remove({
      _id: req.params.taskId
    }, function(err, task) {
      if (err)
        res.send(err);
      res.json({ message: 'Task successfully deleted' });
    });
  };