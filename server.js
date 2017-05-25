var express = require('express');

var app = express();
const PORT = process.env.port || 3000;

app.use(function (req, res, next) {
    if (req.headers['x-forwarded-proto'] === 'https') {
        res.redirect('hrrp://' + req.hostname + req.url);
    } else {
        next();
    }
});

app.use(express.static('public'));

app.listen(PORT, function () {
    console.log('Running on ' + PORT);
});
