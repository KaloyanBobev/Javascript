$('#container-nav li').hover(
    function() {
        $('ul', this).stop().slideDown(200);
    },
    function() {
        $('ul', this).stop().slideUp(200);
    }
);

$(function() {
    $("#accordion").accordion();
    let container = $(`#container`);

});