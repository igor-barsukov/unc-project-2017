/**
 * Created by Света on 30.01.2017.
 */

let express = require('express');
let exp = express();

let port = process.env.PORT || 3000;
exp.use(express.static(__dirname));

exp.get('/', function(req, res){          // Обрабатываем запрос корневой страницы "/"
    res.render("./src/index.html");
});

exp.listen(port, function () {
    console.log("app running")

});
