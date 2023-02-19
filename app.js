//Common function...


function getInputFieldValueById(inputId) {
  const inputField = document.getElementById(inputId);
  const inputFieldValueString = inputField.value;
  
  //  if input is blank
  if (inputFieldValueString === '') {
    alert('You cannot leave it blank');
    return null;
  }
  
  const inputFieldValue = parseFloat(inputFieldValueString);
  
  // if input is not a number
  if (isNaN(inputFieldValue)) {
    alert('The value for must be a number.');
    return null;
  }
  
  inputField.value = '';
  return inputFieldValue;
}

function setTextElementValueById(elementId,Value) {
  const textElement = document.getElementById(elementId);
  textElement.innerText = Value;
}

//
function getTextElementValueById(elementId) {
  const element = document.getElementById(elementId);
  const elementValueString = element.innerText;
  const value = parseFloat(elementValueString);
  return value;
  
}



// for triangle

document.getElementById('triangle-area').addEventListener('click', function () {
  const bLength = getInputFieldValueById('b-length');
  setTextElementValueById('b-place', bLength);

  const hLength = getInputFieldValueById('h-length');
  setTextElementValueById('h-place', hLength);
  const triangleArea = (0.5 * bLength * hLength).toFixed(2);
  document.getElementById('triangle-area-field').innerText += triangleArea;

})

// for rectangle

document.getElementById('rectangle-area').addEventListener('click', function () {
  const wLength = getInputFieldValueById('w-length');
  setTextElementValueById('w-place', wLength);

  const lLength = getInputFieldValueById('l-length');
  setTextElementValueById('l-place', lLength);
  const rectangleArea = (wLength * lLength);
  document.getElementById('rectangle-area-field').innerText += rectangleArea;

 
});



// parallelogram

document.getElementById('parallelogram-area').addEventListener('click', function () {
  const bLength = getTextElementValueById('b-width');
  const hLength = getTextElementValueById('h-height');

  const parallelogramArea = (bLength * hLength);
  document.getElementById('parallelogram-area-field').innerText = ''; // clear the field
  document.getElementById('parallelogram-area-field').innerText += parallelogramArea;
})


//rhombus
document.getElementById('rhombus-area').addEventListener('click', function () {
  const d1 = getTextElementValueById('d1-length');
  const d2 = getTextElementValueById('d2-length');

  const rhombusArea = (0.5 * d1 * d2).toFixed(2);
  document.getElementById('rhombus-area-field').innerText = ''; // clear the field
  document.getElementById('rhombus-area-field').innerText += rhombusArea;
})


//pentagon
document.getElementById('pentagon-area').addEventListener('click', function () {
  const p = getTextElementValueById('p-length');
  const b = getTextElementValueById('pb-length');

  const pentagonArea = (0.5 * p * b).toFixed(2);
  document.getElementById('pentagon-area-field').innerText = ''; 
  document.getElementById('pentagon-area-field').innerText += pentagonArea;
})

//ellipse
document.getElementById('ellipse-area').addEventListener('click', function () {
  const pie = 3.14;
  const a = getTextElementValueById('a');
  const b = getTextElementValueById('b');

  const ellipseArea = (pie * a * b).toFixed(2);
  document.getElementById('ellipse-area-field').innerText = ''; 
  document.getElementById('ellipse-area-field').innerText += ellipseArea;
})



// random bg color

let cards = document.querySelectorAll('.card');
for (let i = 0; i < cards.length; i++) {
  cards[i].addEventListener('mouseover', function() {
    let randomColor = Math.floor(Math.random()*16777215).toString(16);
    this.style.backgroundColor = "#" + randomColor;
  });
  
  cards[i].addEventListener('mouseout', function() {
    this.style.backgroundColor = '';
  });
}


// blog page

document.getElementById('goto-blog-page').addEventListener('click', function () {
  window.location.href = 'https://eclectic-syrniki-3ffc03.netlify.app';
  })