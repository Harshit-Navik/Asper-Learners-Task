
let spotsLeft = "10"; 


const modal = document.getElementById("modal");
const mainBtn = document.getElementById("mainBtn");
const counterEl = document.getElementById("counter");
const form = document.getElementById("regForm");

// selected this submit btn

const submitBtn = document.querySelector(".submit-btn");

mainBtn.addEventListener("click", () => {
    modal.classList.remove("hidden");
});


function closeModal() {
    modal.classList.add("hidden");
}


// form.addEventListener("click", (e) => {
//     // e.preventDefault();
    
  
//     spotsLeft = spotsLeft - 1; 
    
   
//     counterEl.innerText = spotsLeft;
    
//     alert("Success! You are registered.");
//     closeModal();
// });


// applied eventlistner on submit button instead of form 

submitBtn.addEventListener("click", (e) => {
    e.preventDefault();
    
  // added - sign instead of + 
  
    spotsLeft = spotsLeft - 1; 
    
   
    counterEl.innerText = spotsLeft;
    
    alert("Success! You are registered.");
    closeModal();
});