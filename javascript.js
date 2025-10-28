let buttonSize = document.createElement("button");
buttonSize.textContent = "Size";
buttonSize.classList.add('buttonSize');
document.body.appendChild(buttonSize);

const container = document.querySelector("div");
container.style.border = "5px solid black";
document.body.appendChild(container); // ensures container is at bottom as it was created before button in html
container.style.backgroundColor = "black"; // determines what color it fades into

function randomColor() {
    let r = Math.floor(Math.random() * 256) + 1;
    let g = Math.floor(Math.random() * 256) + 1;
    let b = Math.floor(Math.random() * 256) + 1;

    return `rgb(${r}, ${g}, ${b})`;
}

function tileCreation(int) {
    let intSquared = int*int;
    let styleWidth = (int/intSquared) * 100;

    for (let i = 0; i < intSquared; i++) {
        let div = document.createElement("div");
        div.classList.add('div');
        container.appendChild(div);
        
        div.style.backgroundColor = "black";
        div.style.opacity = "1";
        div.style.width = `${styleWidth}%`;
        div.style.boxSizing = "border-box";
        div.style.border = "1px solid black";

        div.addEventListener("mouseover", (event) => {
            if (!div.dataset.colored) {
                div.style.backgroundColor = randomColor();
                div.dataset.colored = "true";
            }

            let opacity = parseFloat(div.style.opacity);
            if (opacity > 0.0) {
                div.style.opacity = (opacity - 0.1).toFixed(1);
            }
        }) 
    }
}

tileCreation(16);

buttonSize.addEventListener("click", (event) => {
    let userInput = prompt("Enter desired grid size (integers only): ", "");
    
    if (userInput === null || userInput == '' || userInput != parseInt(userInput)) return;

    let userInt = parseInt(userInput);
    if (userInt > 100) userInt = 100;
    if (userInt <= 0) {
        userInt = 1;
    }
    
    container.textContent = "";
    tileCreation(userInt);
})