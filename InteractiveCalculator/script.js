function addition (a, b) 
{
    var x = 0;
    x = parseFloat(a) + parseFloat(b);
    let ans = document.getElementById("answer");
    ans.innerText = x.toString();
};
function subtraction (a, b) {
    var x = 0;
    x = parseFloat(a) - parseFloat(b);
    let ans = document.getElementById("answer");
    ans.innerText = x.toString();
};
function multiplication (a, b) {
    var x = 0;
    x = parseFloat(a) * parseFloat(b);
    let ans = document.getElementById("answer");
    ans.innerText = x.toString();
};
function division (a, b) {
    var x = 0;
    x = parseFloat(a) / parseFloat(b);
    let ans = document.getElementById("answer");
    ans.innerText = x.toString();
};
function changeMode()
{
    divContainer = document.getElementById("container");
    divContainer.classList.toggle("darkMode");

    addButton = document.getElementById("add");
    addButton.classList.toggle("buttons");
    subButton = document.getElementById("sub");
    subButton.classList.toggle("buttons");
    multiButton = document.getElementById("multi");
    multiButton.classList.toggle("buttons");
    divButton = document.getElementById("div");
    divButton.classList.toggle("buttons");
   

    let changeText = document.getElementById("change");
    changeText.classList.toggle("buttons");
    if (changeText.innerText === "Dark Mode") {
        changeText.innerText = "Light Mode";
        } else {
            changeText.innerText = "Dark Mode";
        }
}
