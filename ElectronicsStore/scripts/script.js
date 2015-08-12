/*document.onload = function() {
    alert('Hi');
}*/

(function() {
    var leftNav, ul, li,
        i, len,
        tv, tvMenu,
        photo, photoMenu,
        computer, computerMenu;

    leftNav = document.getElementById('main_aside');

    ul = document.createElement('ul');
    for (i = 0, len = 5; i < len; i++) {
        li = document.createElement('li');
        li.innerHTML = i;
        ul.appendChild(li);
    }
    leftNav.appendChild(ul);

    tv = document.getElementById('category_0');
    tv.addEventListener('mouseenter', function() {
        tvMenu = document.getElementsByClassName('tv_menu');
        for (var i = 0; i < tvMenu.length; i++) {
            tvMenu[i].style.display = 'block';
        }
    });
    tv.addEventListener('mouseleave', function() {
        tvMenu = document.getElementsByClassName('tv_menu');
        for (var i = 0; i < tvMenu.length; i++) {
            tvMenu[i].style.display = 'none';
        }
    });

    photo = document.getElementById('category_1');
    photo.addEventListener('mouseenter', function() {
        photoMenu = document.getElementsByClassName('photo_menu');
        for (var i = 0; i < photoMenu.length; i++) {
            photoMenu[i].style.display = 'block';
        }
    });
    photo.addEventListener('mouseleave', function() {
        photoMenu = document.getElementsByClassName('photo_menu');
        for (var i = 0; i < photoMenu.length; i++) {
            photoMenu[i].style.display = 'none';
        }
    });

    computer = document.getElementById('category_2');
    computer.addEventListener('mouseenter', function() {
        computerMenu = document.getElementsByClassName('computer_menu');
        for (var i = 0; i < computerMenu.length; i++) {
            computerMenu[i].style.display = 'block';
        }
    });
    computer.addEventListener('mouseleave', function() {
        computerMenu = document.getElementsByClassName('computer_menu');
        for (var i = 0; i < computerMenu.length; i++) {
            computerMenu[i].style.display = 'none';
        }
    });


})();
