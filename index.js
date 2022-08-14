const input = document.querySelector(".holder .input-field");
counter = document.querySelector(".holder .limiter");
// maxLength = input.getAttribute("maxlength");

let cLimiter = counter.innerText;

function handlekey() {
    console.log("pressed")
    cLimiter += cLimiter - input.value.length
}