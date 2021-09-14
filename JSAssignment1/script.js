
// 1. Create a function that takes an array of numbers and alert "!!!!!" if the digit 5 appears in the array. Otherwise, return "there is no 5 in the array".

// functionName([2, 55, 60, 97, 86]) ➞ "!!!!!!"
// // 55 contains the number five.

// functionName([8, 6, 33, 100]) ➞ "there is no 5 in the array"
// // None of the items contain 5 within them.

// functionName([1, 2, 3, 4, 5, 6, 7]) ➞ "!!!!!!"
// 5 contains the number five.

function fiveDetector (arr)
{
if (arr.includes("5"))
    alert("!!!!!!");
else
    alert("there is no 5 in the array");
}

let arr = [2, 55, 60, 97, 86];
fiveDetector (arr.toString());

arr = [8, 6, 33, 100];
fiveDetector (arr.toString());

arr = [1, 2, 3, 4, 5, 6, 7];
fiveDetector (arr.toString());

/////////////////////
// 2. Using the following array of objects, create a log-in system which checks if the username and password match. 
// let obj = [{username : "user1", password: "password"},

// {username : "user2", password: "password1"},

// {username : "user3", password: "password2"},

// {username : "user4", password: "thispassword"} ];

// Use Prompt() to get the username and password and use Alert() to inform if the credentials are valid or invalid.






let obj = [{username : "user1", password: "password"},

           {username : "user2", password: "password1"},

           {username : "user3", password: "password2"},

           {username : "user4", password: "thispassword"} ];



function checker(usernameEntered, passwordEntered)
{ 
    let x = 0;
    for (let i = 0; i < obj.length; i++) {
        if (obj[i].username == usernameEntered && obj[i].password == passwordEntered)
        {
            x = 1;
            return x;
        }
        else
            x = 0;
    }
    return x;
}


let valid = 0;

do {
    let usernameEntered = prompt ("Username: "); 
    let passwordEntered = prompt ("Password: "); 
    valid = checker(usernameEntered, passwordEntered);

    if (valid < 1)
      alert("Invalid Username or Password");
} while (valid < 1);

alert("Valid Username and Password");


