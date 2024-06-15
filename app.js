


function calculateSum(){
  var num1 = parseInt(document.getElementById('con1').value) || 0;
  var num2 = parseInt(document.getElementById('con2').value) || 0;
  var num3 = parseInt(document.getElementById('con3').value) || 0;
  var num4 = parseInt(document.getElementById('con4').value) || 0;
  var num5 = parseInt(document.getElementById('con5').value) || 0;
  var num6 = parseInt(document.getElementById('con6').value) || 0;
  var num7 = parseInt(document.getElementById('con7').value) || 0;
  var num8 = parseInt(document.getElementById('con8').value) || 0;
  var num9 = parseInt(document.getElementById('con9').value) || 0;
  
  var rowTotal1 = num1 + num2 + num3;
  document.getElementById("rowTot1").innerHTML = rowTotal1;

  var rowTotal2 = num4 + num5 + num6;
  document.getElementById("rowTot2").innerHTML = rowTotal2;

  var rowTotal3 = num7 + num8 + num9;
  document.getElementById("rowTot3").innerHTML = rowTotal3;

  var rowTotal4 = num1 + num4 + num7;
  document.getElementById("colTot1").innerHTML = rowTotal4;

  var rowTotal5 = num2 + num5 + num8;
  document.getElementById("colTot2").innerHTML = rowTotal5;

  var rowTotal6 = num3 + num6 + num9;
  document.getElementById("colTot3").innerHTML = rowTotal6;
}

for (var i = 1; i <= 9; i++) {
  var inputElement = document.getElementById('con' + i);
  if (inputElement) {
    inputElement.onkeyup = calculateSum; 
  }
}


// function to allow only number key press
// function onlyNum(event){
//   var charCode = (event.which) ? event.which : event.keyCode
//   if (charCode > 31 && (charCode < 48 || charCode > 57))
//   return false;
// return true;
// }

// Same as above code

// function to allow only number key press
function onlyNum(event) {
  var keyCode = event.keyCode;

if((keyCode < 49 || keyCode > 57) && 
    keyCode != 8 &&
    keyCode != 9 &&
    keyCode != 37 &&
    keyCode != 39 &&
    keyCode != 40) {
      event.preventDefault();
    }
}

// Loop to select multiple IDs
for (var i = 1; i <= 9; i++) {
      var inputElement = document.getElementById('con' + i);
      if (inputElement) {
        inputElement.onkeydown = onlyNum; 
      }
    }

    // Same as above loop code

// con1.onkeypress=onlyNum;
// con2.onkeypress=onlyNum;
// con3.onkeypress=onlyNum;
// con4.onkeypress=onlyNum;
// con5.onkeypress=onlyNum;
// con6.onkeypress=onlyNum;
// con7.onkeypress=onlyNum;
// con8.onkeypress=onlyNum;
// con9.onkeypress=onlyNum;
  
// Dark mode code
  btn.onclick = function(){
  document.body.classList.toggle('dark-theme');
  if(document.body.classList.contains('dark-theme')){
    icon.src = "sun.png "
    msg.innerHTML= 'Light'
    btn.style.backgroundColor= "black"
    btn.style.color= "white"
  }else{
    icon.src = "moon.png"
    btn.style.backgroundColor= 'rgb(239, 231, 223)'
    btn.style.color= "black"
    msg.innerHTML = 'Dark'
  }
}
















