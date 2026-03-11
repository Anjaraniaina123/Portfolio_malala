window.addEventListener("scroll", function(){

    let elements = document.querySelectorAll(".card");
    
    elements.forEach(function(el){
    
    let position = el.getBoundingClientRect().top;
    let screen = window.innerHeight;
    
    if(position < screen){
    
    el.style.opacity = "1";
    el.style.transform = "translateY(0px)";
    
    }
    
    });
    
    });

    const buttons = document.querySelectorAll(".filters button");
const cards = document.querySelectorAll(".project-card");

buttons.forEach(button => {

button.addEventListener("click", () => {

document.querySelector(".filters .active").classList.remove("active");
button.classList.add("active");

const filter = button.getAttribute("data-filter");

cards.forEach(card => {

if(filter === "all"){
card.classList.remove("hide");
}

else if(card.getAttribute("data-category") === filter){
card.classList.remove("hide");
}

else{
card.classList.add("hide");
}

});

});

});