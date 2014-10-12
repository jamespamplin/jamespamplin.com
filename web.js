var express = require('express'),
    morgan = require('morgan'),
    stylus = require('stylus'),
    nib = require('nib'),

    app = express();

app.use(morgan('combined'));

function compile(str, path) {
    return stylus(str)
        .set('filename', path)
        .use(nib());
}

app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(stylus.middleware(
    {
        src: __dirname + '/public',
        compile: compile
    }
));
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
