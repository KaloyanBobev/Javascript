(function () {
    require.config({
        paths: {
            "jquery": "libs/jquery",
            "handlebars": "libs/handlebars",
            "controls": "controls",
        }
    });
    require(['controls', 'jquery', 'handlebars'], function (Controls,jq,Handlebars) {
        
        var people = [
        { id: 1, name: "Doncho Minkov", age: 18, avatarUrl: "images/DonchoMinkov.png" },
        { id: 2, name: "Gergi Gergiev", age: 19, avatarUrl: "images/Georgi-Georgiev-Photo.jpg" }];
        var container = $('#comboBox'),
        htmlTemplate = $('#person-template').html(),
        comboBoxTemplate = Handlebars.compile(htmlTemplate);
        var comboBox = new Controls.ComboBox({
            container: container,
            people: people,
            template: comboBoxTemplate
        });
    });
}());