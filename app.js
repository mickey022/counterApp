
let count = 0;
const countDisplay = document.getElementById("count-el");
const savedCountDisplay = document.getElementById("saved-count-el");

document.getElementById("increment-btn").addEventListener("click", function () {
    count++;
    countDisplay.innerHTML = count;
});

document.getElementById("save-btn").addEventListener("click", function() {
   let countStr = count + "- "
    savedCountDisplay.innerHTML += countStr;
    countDisplay.textContent = 0
    count = 0
});