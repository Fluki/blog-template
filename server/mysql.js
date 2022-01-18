//TODO: Razdvojiti u razlicite fajlove
const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2');

const app = express();
const port = process.env.PORT || 5000;

//TODO Sta ovo radi???
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  next();
});

// Parsing middleware
// Parse application/x-www-form-urlencoded
// app.use(bodyParser.urlencoded({ extended: false })); // Remove
app.use(express.urlencoded({ extended: true })); // New
// Parse application/json
// app.use(bodyParser.json()); // Remove
app.use(express.json()); // New

// var connection = mysql.createConnection({
//   host: '18.184.161.205',
//   port: 3306,
//   user: 'aco',
//   password: 'BlogTemplate1!',
//   database: 'blogtemplate',
// });


const pool = mysql.createPool({
  connectionLimit: 5,
  host: '18.184.161.205',
  port: 3306,
  user: 'controler',
  password: 'BlogTemplate1!',
  database: 'blogtemplate',
});

// Get all blogs
app.get('', (req, res) => {
  pool.getConnection((err, connection) => {
    if (err) throw err;
    console.log('connected as id ' + connection.threadId);
    connection.query('SELECT * from blogs', (err, rows) => {
      connection.release(); // return the connection to pool

      if (!err) {
        res.send(rows);
      } else {
        console.log(err);
      }

      // if(err) throw err
      // console.log('The data from blogs table are: \n', rows);
    });
  });
});

// Get specific blog
app.get(`/blogs/:id`, (req, res) => {
  const id = req.params.id;

  pool.getConnection((err, connection) => {
    if (err) throw err;
    console.log('connected as id ' + connection.threadId);
    connection.query(`SELECT * from blogs WHERE id=${id}`, (err, rows) => {
      connection.release(); // return the connection to pool

      if (!err) {
        res.send(rows);
      } else {
        console.log(err);
      }

      // if(err) throw err
      console.log('The data from blogs table are: \n', rows);
    });
  });
});

// Update
app.post(`/update/:id`, (req, res) => {
  const post = req.body;
  const updateQuery = `UPDATE blogs SET title='${post.title}',description='${post.description}',image='${post.image}' WHERE id=${post.id};`;

  console.log(updateQuery);
  pool.getConnection((err, connection) => {
    if (err) throw err;
    console.log('connected as id ' + connection.threadId);
    connection.query(updateQuery, (err, rows) => {
      connection.release(); // return the connection to pool
    });
  });
  res.status(201).send('Post recieved');
});

// Post data
app.post(`/`, (req, res) => {
  const post = req.body;
  const insertQuery = `INSERT INTO blogs (title,description,image) VALUES ('${post.title}','${post.description}','${post.image}');`;
  const id = req.params.id;

  console.log(post, id);
  pool.getConnection((err, connection) => {
    if (err) throw err;
    console.log('connected as id ' + connection.threadId);
    connection.query(insertQuery, (err, rows) => {
      connection.release(); // return the connection to pool
    });
  });
  res.status(201).send('Post recieved');
});

// Delete
app.get(`/delete/:id`, (req, res) => {
  const id = req.params.id;
  const deleteQuery = `DELETE FROM blogs WHERE id=${id}`;

  res.send('Success');

  pool.getConnection((err, connection) => {
    if (err) throw err;
    console.log('connected as id ' + connection.threadId);
    connection.query(deleteQuery, (err, rows) => {
      connection.release(); // return the connection to pool
    });
  });

  console.log(id);
});

// Listen on enviroment port or 5000
app.listen(port, () => console.log(`Listening on port ${port}`));
