  window.addEventListener("load", function() {
      window.wpcc.init({
          "border": "thin",
          "corners": "small",
          "colors": {
              "popup": {
                  "background": "#f6f6f6",
                  "text": "#000000",
                  "border": "#555555"
              },
              "button": {
                  "background": "#555555",
                  "text": "#ffffff"
              }
          },
          "position": "top-left",
          "content": {
              "href": "http://maths-formulas.kaloyanbobev.com/template/cookie-policy.html"
          }
      })
  });

  $('#container-nav li').hover(
      function() {
          $('ul', this).stop().slideDown(200);
      },
      function() {
          $('ul', this).stop().slideUp(200);
      }
  );

  $(function() {
      $("#accordion").accordion({
          collapsible: true,
          active: false,
          heightStyle: "content",
          navigation: true,
          active: 0
      });
      let container = $(`#container`);

  });

  $(function() {
      $("#accordion-area").accordion();
      let container = $(`#container`);
  });

  var hash = window.location.hash;
  var anchor = $('a[href$="' + hash + '"]');
  if (anchor.length > 0) {
      anchor.click();
  }