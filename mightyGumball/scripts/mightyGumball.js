var lastReportTime = 0;
var result = null;
window.onload = function () {
    setInterval(handleRefresh, 1000);
}

function updateSales(sales) {
    var salesDiv = document.getElementById('sales'),
        resultDiv = document.getElementById('result');
    for (var i = 0, len = sales.length; i < len; i += 1) {
        var sale = sales[i];
        var div = document.createElement('div');
        div.setAttribute('class', 'saleItem');
        div.innerHTML = sale.name + ' sold ' + sale.sales + ' gumballs';
        salesDiv.appendChild(div);
        result += sale.sales;
        resultDiv.innerHTML = 'Result: ' + result + ' gumballs';
        if (sales.length > 0) {
            lastReportTime = sales[sales.length - 1].time;
        }
    }
}

function handleRefresh() {
    var url = 'http://gumball.wickedlysmart.com' +
        '?callback=updateSales' +
    '&lastreporttime=' + lastReportTime +
    '&random=' + (new Date()).getTime();
    var newScriptElement = document.createElement('script');
    newScriptElement.src = url;
    newScriptElement.id = 'jsonp';

    var oldScriptElement = document.getElementById('jsonp'),
        head = document.getElementsByTagName('head')[0];
    if (oldScriptElement == null) {
        head.appendChild(newScriptElement);
    } else {
        head.replaceChild(newScriptElement, oldScriptElement);
    }
}