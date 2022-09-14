let hoverMe = () => {
    let Char = document.querySelector(".heading").innerHTML;
    let charList = [...Char];
    let content = "";
    for (const char of charList) {
        content += `
            <span>${char}</span>
        `;
    }
    document.querySelector(".heading").innerHTML = content;
};
hoverMe();