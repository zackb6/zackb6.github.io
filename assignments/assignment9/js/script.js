const drawBtn = document.getElementById("draw-btn");
const scene = document.getElementById("scene");
const sky = document.getElementById("sky");
const ground = document.getElementById("ground");

const drawScene = () => {
    sky.innerHTML = '';
    ground.innerHTML = '';
    const hour = new Date().getHours();
    if (hour >= 18 || hour < 6) {
        scene.className = 'night';
    } else {
        scene.className = 'day';
    }

    /* for loop to make the clouds */
    for (let i = 0; i < 6; i++) {
        const cloud = document.createElement("div");
        cloud.classList.add("cloud");
        cloud.style.top = `${Math.random() * 100}px`;
        cloud.style.left = `${Math.random() * 700}px`;
        sky.appendChild(cloud);
    }

    /* for loop to make the trees */
    for (let i = 0; i < 6; i++) {
        const tree = document.createElement("div");
        tree.classList.add("tree");
        ground.appendChild(tree);
    }
};

drawBtn.addEventListener("click", drawScene);