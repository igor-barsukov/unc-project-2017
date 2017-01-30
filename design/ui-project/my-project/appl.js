/**
 * Created by Света on 30.01.2017.
 */

let express = require('express');
let exp = express();

exp.configure(function() {
    exp.engine('html', require('uinexpress').__express), // Используем функцию "template" библиотеки underscore для рендеринга
        exp.set('view engine', 'html'),
      // exp.set('views', __dirname + "src"),
        // exp.set("view options", {layout: 'layout.html'}),   // Файл layout.html по умолчанию будет оборачивать все шаблоны
        exp.use(express.static(__dirname + "src")),
    // Делаем файлы из папки public доступными на сайте
});

exp.get('/', function(req, res){          // Обрабатываем запрос корневой страницы "/"
    res.render('src/index.html')
});

let port = process.env.PORT || 3000;
exp.listen(port);                           // Запускаем сервер на 5000 порту, если не указана переменная окружения "port"
console.log("Listening at " + port);
