window.onload = function () {
    document.getElementById('shakeDiv').addEventListener('click', function () {
        randomDivs();
        document.get.removeChild('container');
    });
}

function randomDivs() {
   
   
    function createDivs() {
        
        var list = document.getElementById('container'),
            numberOfDivs = 5;

        for (var i = 0; i < numberOfDivs; i++) {
           
            var item = document.createElement('div'),
                boldElement = document.createElement('strong');

            boldElement.innerHTML = 'div ' + (i + 1);
            item.style.height = randomNumber(20, 100) + "px";
            item.style.width = randomNumber(20, 100) + "px";
            item.style.backgroundColor = 'rgb(' + randomColor() + ',' + randomColor() + ',' + randomColor() + ')';
            item.style.color = 'rgb(' + randomColor() + ',' + randomColor() + ',' + randomColor() + ')';
            item.style.position = 'absolute';
            item.style.top = randomNumber(1, 500) + 'px';
            item.style.left = randomNumber(1, 500) + 'px';
            item.style.border = randomNumber(1, 20) + 'px solid rgb(' + randomColor() + ',' + randomColor() + ',' + randomColor() + ')';
            item.style.borderRadius = randomNumber(1, 20) + 'px';

            item.appendChild(boldElement);
            list.appendChild(item);
        }
    }
    createDivs();
   
    function randomNumber(min, max) {
        var number = parseInt((Math.random() * (max - min + 1) + min));
        return number;
    }

    function randomColor() {
        var color = parseInt((Math.random() * 2.5) * 100);
        return color;
    }
};