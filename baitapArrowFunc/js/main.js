const colorList = ["pallet","viridian","pewter","cerulean","vermillion","lavender","celadon","saffron","fuschia","cinnabar"];

let colorButtonList = () =>{
    let content = "";
    colorList.map((color, index)=>{
        if (index == 0) {
            content += `
            <button class="color-button ${color} active" onclick="colorChange('${color}')"></button>
        `
        } else{
            content += `
            <button class="color-button ${color}" onclick="colorChange('${color}')"></button>
        `
        }
        
    })
    document.getElementById("colorContainer").innerHTML = content;
}
colorButtonList();

let colorChange = (click) => {
    document.getElementById("house").className = `house ${click}`; 
    let button = document.querySelectorAll("#colorContainer .color-button");
 
    for (let i = 0; i < button.length; i++) {
        button[i].classList.remove("active");
    }
    
    document.querySelector(`#colorContainer .${click}`).className = `color-button ${click} active`;
}