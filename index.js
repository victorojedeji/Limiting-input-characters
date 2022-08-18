let input = document.querySelector("#input-field");

maxLength = input.getAttribute("maxlength");

counter = document.querySelector(".holder .limiter");


let cLimiter = counter.innerText;


function handlekey() {
    cLimiter = Number(maxLength) - input.value.length;
    counter.innerText = cLimiter;
};