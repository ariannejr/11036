let obj = [{
    name: "Luke Skywalker",
    height: "172",
    mass: "77",
    hair_color: "blond",
    skin_color: "fair",
    eye_color: "blue",
    birth_year: "19BBY",
    gender: "male"
},
{
    name: "C-3PO",
    height: "167",
    mass: "75",
    hair_color: "n/a",
    skin_color: "gold",
    eye_color: "yellow",
    birth_year: "112BBY",
    gender: "n/a"
},
{
    name: "R2-D2",
    height: "96",
    mass: "32",
    hair_color: "n/a",
    skin_color: "white, blue",
    eye_color: "red",
    birth_year: "33BBY",
    gender: "n/a"
},
{
    name: "Darth Vader",
    height: "202",
    mass: "136",
    hair_color: "none",
    skin_color: "white",
    eye_color: "yellow",
    birth_year: "41.9BBY",
    gender: "male"
},
{
    name: "Leia Organa",
    height: "150",
    mass: "49",
    hair_color: "brown",
    skin_color: "light",
    eye_color: "brown",
    birth_year: "19BBY",
    gender: "female"
}];


function function1(obj)
{ 
    var maleArray = [];
    let x = 0;
    for (let i = 0; i < obj.length; i++) {
        if (obj[i].gender == "male")
        {
            maleArray.push(obj[i].name);
        }
    }
    alert(maleArray);
}

function function2(obj)
{ 
    var femaleArray = [];
    let x = 0;
    for (let i = 0; i < obj.length; i++) {
        if (obj[i].gender == "female")
        {
            femaleArray.push(obj[i].name);
        }
    }
    alert(femaleArray);
}

function function3(obj)
{ 
    var naArray = [];
    let x = 0;
    for (let i = 0; i < obj.length; i++) {
        if (obj[i].gender == "n/a")
        {
            naArray.push(obj[i].name);
        }
    }
    alert(naArray);
}

function function4(obj)
{ 
    var heightArray = [];
    let x = 0;
    for (let i = 0; i < obj.length; i++) {
        if (parseFloat(obj[i].height) > 150)
        {
            heightArray.push(obj[i].name);
        }
    }
    alert(heightArray);
}

function run()
{
let options = "1 - Return an array of Gender : Male characters  \n2 - Return an array of Gender : Female characters \n3 - Return an array of Gender : N/A characters  \n4 - Return an array of characters whose height is greater than 150\n";


do
{
    var op = Number(prompt(options + "\n Choose a number:"));
    if (op < 1 || op > 4)
    {
        alert("Please enter a valid number.");
    }
} while (op < 1 || op > 4);

switch (op){
    case 1: function1(obj); break;
    case 2: function2(obj); break;
    case 3: function3(obj); break;
    case 4: function4(obj); break;
    default: break;
}
}

run();