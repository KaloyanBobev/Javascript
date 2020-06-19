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
      $("#accordion").accordion();
      let container = $(`#container`);

  });

  $(function() {
      $("#accordion-area").accordion();
      let container = $(`#container`);
  });

  function checkResult() {
      let ckeckBtn = $(`#check-btn`);
      let array = [34.54, 26, 31.5, 25.2, 46.8];
      ckeckBtn.on(`click`, function() {
          for (let i = 0; i < 5; i += 1) {
              let element = $(`#answer-${i}`);
              if (element.val() * 1 === array[i]) {
                  element.css("border", "2px solid lightgreen");
                  element.next().text(`Correct`).css("color", "lightgreen").addClass("glyphicon glyphicon-ok");
              } else {
                  element.css("border", "2px solid red");
                  element.next().text(`incorrect - a correct answer is ${array[i]}`).css("color", "red");;
              }
          }
      })
  };
  checkResult();