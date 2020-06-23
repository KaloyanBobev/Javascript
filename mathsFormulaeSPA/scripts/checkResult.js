  (function checkResult() {
      let ckeckBtn = $(`#check-btn`);
      let array = [34.54, 26, 31.5, 25.2, 46.8];
      ckeckBtn.on(`click`, function() {
          for (let i = 0; i < array.length; i += 1) {
              let element = $(`#answer-${i}`);
              if (+element.val() === array[i]) {
                  element.css("border", "3px solid green");
                  element.next().text(`Correct`).css("color", "green");
              } else {
                  element.css("border", "3px solid red");
                  element.next().text(`incorrect - a correct answer is ${array[i]}`).css("color", "red");
              }
          }
      })
  })();