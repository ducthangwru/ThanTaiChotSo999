const path = require("path");
const moment = require('moment');
const express = require("express");
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');
const session = require('express-session');

const PORT = 8666;
let app = express();
let server = require('http').Server(app);

server.listen(PORT , () => {
    console.log(`App listen on ${PORT}`);
  })

app.use(bodyParser.json());       
app.use(bodyParser.urlencoded({   
    extended: true
}));
app.use(bodyParser.json({ extended : true}));
app.use(bodyParser.urlencoded({ extended : true}));



app.use(session({
    secret: '@Than!&^^Tai*&',
    resave: false,
    saveUninitialized: true,
    cookie: {expires: moment().add(1, 'days'), maxAge: 1 * 24 * 60 * 60 * 1000},
    name: "ThanTai999"
}));

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
app.use(express.static(path.join(__dirname, 'public')));


app.get('/', function (req, res, next) {
    res.render('home', {layout: false});
});

app.get('/index.html', function (req, res, next) {
    res.render('home', {layout: false});
});

app.get('/feed/index.html', function (req, res, next) {
    res.render('feed', {layout: false});
});

app.get('/giai-8-cac-dai-mien-trung/index.html', function (req, res, next) {
    res.render('giai-8-cac-dai-mien-trung', {layout: false});
});

app.get('/comments/feed/index.html', function (req, res, next) {
    res.render('comment-feed', {layout: false});
});

app.get('/bach-thu-lo-mien-bac/index.html', function (req, res, next) {
    res.render('bach-thu-lo-mien-bac', {layout: false});
});

app.get('/bao-lo-cac-dai-mien-trung/index.html', function (req, res, next) {
    res.render('bao-lo-cac-dai-mien-trung', {layout: false});
});

app.get('/song-thu-lo-cac-dai-mien-nam/index.html', function (req, res, next) {
    res.render('bao-lo-cac-dai-mien-trung', {layout: false});
});

app.get('/giai-8-cac-dai-mien-nam-vip/index.html', function (req, res, next) {
    res.render('giai-8-cac-dai-mien-nam-vip', {layout: false});
});

app.get('/cap-xiu-chu-cac-dai-mien-nam-vip/index.html', function (req, res, next) {
    res.render('cap-xiu-chu-cac-dai-mien-nam-vip', {layout: false});
});

app.get('/dan-lo-2-nhay-supper-vip/index.html', function (req, res, next) {
    res.render('dan-lo-2-nhay-supper-vip', {layout: false});
});

app.get('/song-thu-lo-mien-bac/index.html', function (req, res, next) {
    res.render('song-thu-lo-mien-bac.handlebars', {layout: false});
});

app.get('/bach-thu-de-mien-bac/index.html', function (req, res, next) {
    res.render('bach-thu-de-mien-bac', {layout: false});
});

app.get('/dan-de-2-so-mien-bac/index.html', function (req, res, next) {
    res.render('dan-de-2-so-mien-bac', {layout: false});
});

app.get('/ba-cang-mien-bac-vip/index.html', function (req, res, next) {
    res.render('ba-cang-mien-bac-vip', {layout: false});
});

app.get('/cap-ba-cang-mien-bac/index.html', function (req, res, next) {
    res.render('cap-ba-cang-mien-bac.handlebars', {layout: false});
});

app.get('/dan-lo-xien-3-mien-bac/index.html', function (req, res, next) {
    res.render('dan-lo-xien-3-mien-bac', {layout: false});
});

app.get('/dan-lo-6-so-cao-cap-mien-bac/index.html', function (req, res, next) {
    res.render('dan-lo-6-so-cao-cap-mien-bac', {layout: false});
});

app.get('/bach-thu-lo-kep-mien-bac/index.html', function (req, res, next) {
    res.render('bach-thu-lo-kep-mien-bac', {layout: false});
});

app.get('/dau-duoi-mien-bac/index.html', function (req, res, next) {
    res.render('dau-duoi-mien-bac', {layout: false});
});

app.get('/dan-de-4-so-mien-bac/index.html', function (req, res, next) {
    res.render('dan-de-4-so-mien-bac', {layout: false});
});

app.get('/dan-de-8-so-mien-bac/index.html', function (req, res, next) {
    res.render('dan-de-8-so-mien-bac', {layout: false});
});

app.get('/dan-de-12-so-mien-bac/index.html', function (req, res, next) {
    res.render('dan-de-12-so-mien-bac', {layout: false});
});

app.get('/bao-lo-cac-dai-mien-nam/index.html', function (req, res, next) {
    res.render('bao-lo-cac-dai-mien-nam', {layout: false});
});

app.get('/xiu-chu-cac-dai-mien-nam-super-vip/index.html', function (req, res, next) {
    res.render('xiu-chu-cac-dai-mien-nam-super-vip', {layout: false});
});

app.get('/xiu-chu-mien-trung/index.html', function (req, res, next) {
    res.render('xiu-chu-mien-trung', {layout: false});
});

app.get('/soi-cau/soi-cau-xsmb/index.html', function (req, res, next) {
    res.render('soi-cau-xsmb', {layout: false});
});

app.get('/soi-cau/soi-cau-xsmn/index.html', function (req, res, next) {
    res.render('soi-cau-xsmn', {layout: false});
});

app.get('/soi-cau/soi-cau-xsmt/index.html', function (req, res, next) {
    res.render('soi-cau-xsmt', {layout: false});
});

app.get('/soi-cau/soi-cau-vip/index.html', function (req, res, next) {
    res.render('soi-cau-vip', {layout: false});
});