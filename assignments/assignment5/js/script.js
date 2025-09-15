const sunnyTimesBtn = document.getElementById("sunny-times-btn");
const sunnyTimesOutput = document.getElementById("sunny-times-output");

const showSunnyTimes = () => {
    sunnyTimesOutput.innerHTML = "Here comes the sun<br>Sun<br>Sun<br>Sun<br>Here it comes";
};

sunnyTimesBtn.addEventListener("click", showSunnyTimes);

const colorPicker = document.getElementById("color-picker");
const colorChangeBtn = document.getElementById("color-change-btn");
const colorOutput = document.getElementById("color-output");

const changeColor = () => {
    const selectedColor = colorPicker.value;
    colorOutput.style.backgroundColor = selectedColor;
    colorOutput.textContent = selectedColor;
};

colorChangeBtn.addEventListener("click", changeColor);

const toggleImage = document.getElementById("toggle-image");

const changeImage = () => {
    if (toggleImage.src.includes("clouds")) {
        toggleImage.src = "images/sun.png";
    } else {
        toggleImage.src = "images/clouds.png";
    }
};

toggleImage.addEventListener("click", changeImage);