let express = require("express");
let app = express();

app.set('view engine', 'html');
app.use(express.static(__dirname + '/public'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }))

var port = process.env.port || 3000;


app.get('/', function(req, res) {
    res.render('index');
});

app.listen(port, () => {
    console.log("App listening to: " + port)
})

