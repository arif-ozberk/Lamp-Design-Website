
let lightButton = document.querySelector(".lightButton");
let buttonSwitch = document.querySelector(".buttonSwitch")
let light = document.querySelector(".light");

lightButton.addEventListener("click", lightSwitch);


function lightSwitch() {
    if(light.style.opacity = light.style.opacity == 1 ? 0 : 1);
    buttonSwitch.classList.toggle("buttonOn");
    lightButton.classList.toggle("buttonBackground");
}