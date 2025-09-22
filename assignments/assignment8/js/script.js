const showEx1Btn = document.getElementById("show-ex1");
const showEx2Btn = document.getElementById("show-ex2");
const plantingSection = document.getElementById("planting-section");
const clockSection = document.getElementById("clock-section");

showEx1Btn.addEventListener("click", () => {
    plantingSection.classList.remove("hidden");
    clockSection.classList.add("hidden");
});

showEx2Btn.addEventListener("click", () => {
    plantingSection.classList.add("hidden");
    clockSection.classList.remove("hidden");
});


/* actuial planting part */
const daysSlider = document.getElementById("days-slider");
const daysSinceWatering = document.getElementById("days-since-watering");
const plantStatus = document.getElementById("plant-status");
const plantImage = document.getElementById("plant-image");

const updatePlant = () => {
    const days = parseInt(daysSlider.value);
    daysSinceWatering.textContent = `It's been ${days} day(s) since watering your plant`;

    if (days <= 2) {
        plantStatus.textContent = "Your plant is healthy and happy";
        plantImage.src = "images/plant-happy.png";
    } else if (days <= 5) {
        plantStatus.textContent = "Your plant needs watering";
        plantImage.src = "images/plant-needs-water.png";
    } else if (days <= 9) {
        plantStatus.textContent = "Leaves are dropping, changing color, water soon";
        plantImage.src = "images/plant-sad.png";
    } else {
        plantStatus.textContent = "Sorry, your plant is no longer with us";
        plantImage.src = "images/plant-dead.png";
    }
};

daysSlider.addEventListener("input", updatePlant);


/* clock logic */
const clockDiv = document.getElementById("clock");

const updateClock = () => {
    const now = new Date();
    const timeString = now.toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' });
    clockDiv.textContent = timeString;
};

updateClock();
setInterval(updateClock, 60000);