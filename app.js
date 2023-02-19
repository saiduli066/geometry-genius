//Common function...
function getInputFieldValueById(inputId) {
  const inputField = document.getElementById(inputId);
  const inputFieldValueString = inputField.value;
  const inputFieldValue = parseFloat(inputFieldValueString);
  inputField.value = '';
  return inputFieldValue;
}

function setTextElementValueById(elementId,Value) {
  const textElement = document.getElementById(elementId);
  textElement.innerText = Value;
}

//


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
  const triangleArea = (0.5 * wLength * lLength).toFixed(2);
  document.getElementById('rectangle-area-field').innerText += triangleArea;
})