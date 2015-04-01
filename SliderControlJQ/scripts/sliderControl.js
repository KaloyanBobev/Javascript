/*Create a slider control using jQuery
The slider can have many slides
Only one slide is visible at a time
Each slide contains HTML code
i.e. it can contain images, forms, divs, headers, links, etc…
Implement functionality for changing the visible slide after 5 seconds
Create buttons for next and previous slide
*/

var index = 0;

var sliders = $(".slider");

function next() {
    index++;
    if (index >= sliders.length) {
        index = 0;
    }
    sliders.hide();
    var nextItem = $(sliders[index]);
    nextItem.show();
}

function prev() {
    index--;
    if (index <= 0) {
        index = sliders.length - 1;
    }
    sliders.hide();
    var nextItem = $(sliders[index]);
    nextItem.show();
}

$("#next").click(function () {
    next();
})

$("#prev").click(function () {
    prev();
})

next();
setInterval(function () {
    next();
}, 5000);


