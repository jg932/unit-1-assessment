// ------------------Cached Elements-------------------
const minusButton = document.getElementById("minus")
const plusButton = document.getElementById("plus")
const userInput = document.getElementById("user-input")
const currentCount = document.getElementById("current-count");




// ----------------Event Listeners---------------
minusButton.addEventListener("click", subtract)
plusButton.addEventListener("click", add)

plusButton.addEventListener('mouseover',function(Event) {
  addHighLight(Event.target);
});
plusButton.addEventListener('mouseout',function(Event) {
  removeHighLight(Event.target);
});
minusButton.addEventListener('mouseover',function(Event) {
  addHighLight(Event.target);
});
minusButton.addEventListener('mouseout',function(Event) {
  removeHighLight(Event.target);
});

// ---------------Functions--------------
console.log(currentCount.textContent)

function subtract() {
  const result = parseInt(currentCount.textContent) - parseInt(userInput.value)
  currentCount.textContent = result
}

function add() {
  const result = parseInt(currentCount.textContent) + parseInt(userInput.value)
  currentCount.textContent = result
}

function addHighLight(target) {
  target.classList.add('highlighted');
}

function removeHighLight(target) {
  target.classList.remove('highlighted');
}
