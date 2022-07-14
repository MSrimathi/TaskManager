require('./db/mongoose');
const express = require('express');
const app = express();
const hbs = require("hbs");
const path = require('path');
const bodyParser = require('body-parser');

const routes = require('./routes');

const publicDirPath = path.join(__dirname, "../public");
const viewPath = path.join(__dirname, "../templates/views");
const partialPath = path.join(__dirname, "../templates/partials");

const Users = require('./models/users');
const Tasks = require('./models/tasks');

app.use(express.static(publicDirPath));
app.set("view engine", "hbs");
app.set("views", viewPath);
hbs.registerPartials(partialPath);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//crud operation for user table

// app.get('/api/users/:id', function(req,res) {
//   Users.findById(req.params.id).then(function(users) {
//     res.status(200).send(users);
//   }).catch(function(error) {
//     res.status(500).send('Internal Server Error');
//   })
// })

// app.get('/api/users', function (req, res) {
//   Users.find(req.query).then(function(users) {
//     res.status(200).send(users);
//   }).catch(function(error) {
//     res.status(500).send("internal server error");
//   })
// })

// app.post('/api/users', function (req, res) {
//   console.log(req.body);
//   var user = new Users(req.body);
//   user.save().then(function (user) {
//     res.status(201).send('Users saved successfully');
//   }).catch(function (error) {
//     res.status(500).send('Internal server error');
//   })
// })

// app.put('/api/users/:id', function (req, res) {
//   console.log("request.param", req.params.id);
//   console.log("request.body", req.body);
//   Users.findByIdAndUpdate(req.params.id, req.body).then(function(user) {
//   res.status(201).send('User updated successfully');
//   }).catch(function(error) {
//     res.status(500).send("Internal Server Error");
//   })
// })

// app.delete('/api/users/:id', function (req, res) {
//     Users.findByIdAndDelete(req.params.id).then(function(user) {
//   res.status(200).send('User Deleted successfully');
//     }).catch(function(error) {
//       res.status(500).send("internal Server Error");
//     })
// })

//crud operation for task table

// app.get('/api/tasks/:id', function(req,res) {
//   Tasks.findById(req.params.id).then(function(task) {
//     res.status(200).send(task);
//   }).catch(function(error) {
//     res.status(500).send('Internal Server Error');
//   })
// })

// app.get('/api/tasks', function (req, res) {
//   console.log("request query", req.query);
//   Tasks.find(req.query).then(function(tasks) {
//     res.status(200).send(tasks);
//   }).catch(function(error) {
//     res.status(500).send("internal server error");
//   })
// })

// app.post('/api/tasks', function (req, res) {
//   var task = new Tasks(req.body);
//   task.save().then(function (task) {
//     res.status(201).send('Tasks saved successfully');
//   }).catch(function (error) {
//     res.status(500).send('Internal server error');
//   })
// })

// app.put('/api/tasks/:id', function (req, res) {
//   console.log("request param",req.params.id);
//   console.log("request body",req.body);
//   Tasks.findByIdAndUpdate(req.params.id, req.body).then(function(task) {
//   res.status(201).send('Task updated successfully');
//   }).catch(function(error) {
//     res.status(500).send("internal Server Error");
//   })
// })

// app.delete('/api/tasks/:id', function (req, res) {
//     Tasks.findByIdAndDelete(req.params.id).then(function(task) {
//   res.status(200).send('Task Deleted successfully');
//     }).catch(function(error) {
//       res.status(500).send('internal Server Error');
//     })
// })

app.get('/users/add', function (req, res) {
  res.render('addUser');
});

app.get('/users/edit', function (req, res) {
  res.render('addUser');
});

app.get('/users', function (req, res) {
  res.render('users');
});

app.get('/tasks/add', function (req, res) {
  res.render('addTask');
});

app.get('/tasks/edit', function (req, res) {
  res.render('addTask');
});

app.get('/tasks', function (req, res) {
  res.render('tasks');
});

app.get('/reg', function (req, res) {
  res.render('reg');
});

app.get('/', function (req, res) {
  res.render('login');
});

routes.apiRoutes(app);

app.listen(3000, function () {
  console.log("Server is in the port 3000");
});