var express = require('express');
const { Error } = require('mongoose');
var router = express.Router();

var Todos = require("../models/TodoModel");

router.get('/inits', function(req, res) {
    var dataInits = [
        {
            text: "Tim hieu javascript",
            isDone: false
        },
        {
            text: "Tim hieu nodeJs",
            isDone: false
        },
        {
            text: "Tim hieu expressjs",
            isDone: false
        },
        {
            text: "lam demo",
            isDone: false
        }
    ];
    Todos.create(dataInits, function (err, results) {
        if (err) {
            res.status(500).json(err);
        }
    });
  });

  function getTodos (req, res) {
    Todos.find(function (err, results) {
        if (err) {
            // res.status(500).json(err);
            throw err;
        }
        else {
            console.log(results);
            res.json(results);
        }
    });
}


  router.get('/alls', getTodos);
  
  router.get('/:id', function(req, res) {
    Todos.findById({_id: req.params.id}, function (err, results) {
        if (err) {
            res.status(500).json(err);
        }
        else {
            res.json(results);
        }
    });
  });


  router.post('/', function (req, res) {
      var todo = {
          text: req.body.text,
          isDone: req.body.isDone
      }
      Todos.create(todo, function (err, result) {
        if (err) {
            res.status(500).json(err);
        } else {
            getTodos(req, res);
        }
    });
  })

  router.put('/:id', function(req, res) {
      if (!req.params.id) { res.status(500).send("ID is required!"); }
      else {
        Todos.updateOne({_id: req.params.id}, { 
            text: req.body.text,
            isDone: req.body.isDone
        }, function (err, result) {
            if (err) {
                res.status(500).json(err);
            } else {
                getTodos(req, res);
            }
        })
      }
  });

  router.delete('/:id', function (req, res){
      Todos.remove({
          _id: req.params.id
      }, function (err, result) {
        if (err) {
            throw err;
        } else {
            getTodos(req, res);
        }
    });
  });

  module.exports = router;