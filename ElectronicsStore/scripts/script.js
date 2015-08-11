/*document.onload = function() {
    alert('Hi');
}*/

(function() {
    var leftNav,
        ul,
        li,
        i,
        len;

    leftNav = document.getElementById('main_aside');
    console.log(leftNav);
    ul = document.createElement('ul');
    for (i = 0, len = 5; i < len; i++) {
        li = document.createElement('li');
        li.innerHTML = i;
        ul.appendChild(li);
    }
    leftNav.appendChild(ul);

})();
