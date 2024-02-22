
let modelBtn = document.querySelector(".model-btn")
let modelOverlay = document.querySelector(".model-overlay")
let cancleBtn = document.querySelector(".cancle-btn")

modelBtn.addEventListener("click", function(){
    modelOverlay.classList.add("show-overlay")
    
})

cancleBtn.addEventListener("click", function(){
    modelOverlay.classList.remove("show-overlay")
})