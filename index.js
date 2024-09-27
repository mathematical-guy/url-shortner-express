const express = require('express');
const mysql = require('mysql');
const app = express();
const router = express.Router();

const path = __dirname + '/views/';
const port = 8080;


// Writing custom middlewares
router.use(function (req, res, next) {
    console.log('/' + req.method);
    next();
    console.log('After request is processed...')
});

router.get('/', function (req, res) {
    res.json({"message": "Hello World 😂"});
    console.log(path);
});


router.get('/redirect-to-google', function (req, res) {
    res.redirect('https://google.com')
    console.log(path);
});

app.use(express.static(path));
app.use('/', router);
// app.use('json')

app.listen(port, function () {
  console.log('Example app listening on port 8080!')
})

