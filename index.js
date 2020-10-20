let firstNum = document.getElementById("first-num");
let secondNum = document.getElementById("second-num");
let resNum = document.getElementById("res-num");
let notice = document.getElementById("notice");
let calcBtn = document.getElementById("calc-btn");

calcBtn.addEventListener("click", calcBtnClicked);

function calcBtnClicked() {

  resNum.value = "";

  if(firstNum.value.length === 0 || secondNum.value.length === 0)
  {
    notice.innerHTML = "Cả 2 ô đều phải có giá trị!";
    return;
  }

  let inp1 = parseInt(firstNum.value);
  let inp2 = parseInt(secondNum.value);

  if(isNaN(inp1))
  {
    notice.innerHTML = "Giá trị ở ô <em> Số thứ nhất </em> không phải là số!";
    return;
  }

  if(isNaN(inp2))
  {
    notice.innerHTML = "Giá trị ở ô <em> Số thứ hai </em> không phải là số!";
    return;
  }


  let res;
  let methods = document.getElementsByName('method');

  let isChecked = false;

  for(i = 0; i < methods.length; i++) { 
    if(methods[i].checked) {

      isChecked = true;

      if (methods[i].value === "plus")
        res = inp1 + inp2;
      if (methods[i].value === "minus")
        res = inp1 - inp2;
      if (methods[i].value === "multiply")
        res = inp1 * inp2;
      if (methods[i].value === "divide") {
        if (inp2 === 0) {
          notice.innerHTML = "Số bị chia không thể bằng 0!"
          return;
        }
        res = inp1 / inp2;
      }
    }
  } 

  if (!isChecked) {
    notice.innerHTML = "Chưa phép tính nào được chọn!";
    return;
  }

  notice.innerHTML = "";
  resNum.value = `${res}`;
}