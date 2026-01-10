// Variable to track spots
// BUG 3 (Part A): Initializing as a String instead of a Number
let spotsLeft = "10"; 

// DOM Elements
const modal = document.getElementById("modal");
const mainBtn = document.getElementById("mainBtn");
const counterEl = document.getElementById("counter");
const form = document.getElementById("regForm");

// Open Modal Function
mainBtn.addEventListener("click", () => {
    modal.classList.remove("hidden");
});

// Close Modal Function
function closeModal() {
    modal.classList.add("hidden");
}

// Form Submit Handler
form.addEventListener("submit", (e) => {
    e.preventDefault();
    
    // BUG 3 (Part B): Logic error (Concatenation instead of subtraction)
    // It should be spotsLeft - 1, but we are adding, and since it's a string it becomes "101"
    spotsLeft = spotsLeft + 1; 
    
    // Update the UI
    counterEl.innerText = spotsLeft;
    
    alert("Success! You are registered.");
    closeModal();
});