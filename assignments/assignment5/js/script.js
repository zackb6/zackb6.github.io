const sunnyTimesBtn = document.getElementById("sunny-times-btn");
const sunnyTimesText = document.getElementById("sunny-times-text");

const colorPicker = document.getElementById("color-picker");
const colorChangeBtn = document.getElementById("color-change-btn");
const colorBox = document.getElementById("color-box");

const imageChangeBtn = document.getElementById("image-change-btn");
const toggleImage = document.getElementById("toggle-image");


/* sunny times function */
const showSunnyTimes = () => {
    sunnyTimesText.textContent = "Sunny Times. I did this. the following words for the Board will appear in the aligned paragraphs.";
};

// when the button is clicked it shows sunny times
sunnyTimesBtn.addEventListener("click", showSunnyTimes);


/* select a color function */
const changeColor = () => {
    const selectedColor = colorPicker.value;

    colorBox.style.backgroundColor = selectedColor;
};

colorChangeBtn.addEventListener("click", changeColor);


/* =image change function */
const changeImage = () => {
    if (toggleImage.src.includes("clouds")) {
        toggleImage.src = "images/sun.png";
    } else {
        toggleImage.src = "images/clouds.png";
    }
};

imageChangeBtn.addEventListener("click", changeImage);