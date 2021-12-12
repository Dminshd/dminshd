import * as path from 'path';
import express from 'express';
import { engine } from 'express-handlebars';

const app = express();
const port = 3000;

const __dirname = path.resolve();

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

app.use(express.static(path.join(__dirname, '/public')));
app.use(express.text( { defaultCharset: "utf-8" }, { type: 'text/plain' }));

//Renders Landing Page
app.get('/', (req, res) => {
    res.render('home');
});

app.get('/aboutsite', (req, res) => {
    res.render('aboutsite');
});

app.get('/aboutme', (req, res) => {
    res.render('aboutme');
});

app.listen(port);

