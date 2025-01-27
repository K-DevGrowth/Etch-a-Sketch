const container = document.querySelector("#container");
const menu = document.createElement("div");
const button = document.createElement("button");
const rainbowBtn = document.createElement("button");
const shadingBtn = document.createElement("button");

let isRainbow = false;
let isShading = false;

button.textContent = "Click to enter the number of squares";
rainbowBtn.textContent = "Rainbow Mode";
shadingBtn.textContent = "Shading Mode"

menu.appendChild(button);
menu.appendChild(rainbowBtn);
menu.appendChild(shadingBtn);
document.querySelector("body").appendChild(menu);

const addGrid = () => {
    let user = 0;
    do {
        user = prompt("Enter the number of squares: "); 
        if (user > 100) {
            alert("You must enter under 100!");
        }
    } while (user > 100);

    container.textContent = "";
    container.style.gridTemplateColumns = `repeat(${user}, 1fr)`;
    
    for (let i = 0; i < user; i++) {
        for (let j = 0; j < user; j++) {
            const squares = document.createElement("div");
            container.appendChild(squares);
            let count = 0;
            squares.addEventListener("mouseover", (e) => {
                e.target.style.backgroundColor = "black";
                if (isRainbow) {
                    const randomColor1 = Math.floor(Math.random() * 256);
                    const randomColor2 = Math.floor(Math.random() * 256);
                    const randomColor3 = Math.floor(Math.random() * 256);
                    e.target.style.backgroundColor = 
                    `rgb(${randomColor1} ${randomColor2} ${randomColor3})`;
                }
                if (isShading && count <= 1) {
                    count += 0.1;
                    e.target.style.opacity = count;
                }
            })
        }
    }
}

button.addEventListener("click", addGrid);

rainbowBtn.addEventListener("click", () => {
    isRainbow = !isRainbow;
    rainbowBtn.classList.toggle("active");
});

shadingBtn.addEventListener("click", () => {
    isShading = !isShading;
    shadingBtn.classList.toggle("active");
})
