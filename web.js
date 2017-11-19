var express = require('express'),
    morgan = require('morgan'),

    app = express(),
    pug = require('pug'),
    sass = require('node-sass'),

    moment = require('moment');

app.use(morgan('combined'));

app.set('views', __dirname + '/views');
app.set('view engine', 'pug');

app.use(express.static(__dirname + '/public'));

app.get('/', function (req, res) {
    var metadata = require('./content/about.meta.json');
    res.render(
        'about',
        {
            title: metadata.name,
            debug: false,
            meta: metadata
        }
    );
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
    console.log("Listening on " + port);
});
