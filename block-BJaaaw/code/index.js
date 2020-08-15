// if..else

/*
1. Write a program that asks the user for a number and check the following conditions:

  - `if` the number is even print the message " number is even"
  - `if` the number is odd print the message "number is odd"
*/
let UserInput = prompt('Enter A Number');
if (UserInput % 2 == 0) {
  console.log('number is even')
} else {
  console.log('number is odd')
}

// 2. Write a program to accept two numbers from user using`prompt` and alert the max value.
let UserInput1 = prompt('Enter First Number');
let UserInput2 = prompt('Enter Second Number');
if (UserInput1 > UserInput2) {
  alert(UserInput1);
} else {
  alert(UserInput2);
}
// 3. Convert the above code using`?` terniary operator
UserInput1 > UserInput2 ? alert(UserInput1) : alert(UserInput2);
/*
4. Write a program that asks the user for the house name and check the following conditions:

  - `if` house name is "stark" then print the message " Winter is coming"
  - `if` house name is "lannister" then print the message " A lannister always pays his debt"
  - `else` print the message " All men must die"
*/
let HouseName = prompt('Enter House Name');
if (ho == "stark") {
  console.log("Winter is coming");
} else if (HouseName == lannister) {
  console.log('A lannister always pays his debt');
} else {
  console.log("All men must die");
}

// 5. Convert the above code using`?` terniary operator

// Switch
switch (HouseName) {
  case 'stark':
    console.log("Winter is coming");
  case 'lannister' ? console.log('A lannister always pays his debt'):
    console.log("All men must die");

}

// 6. Write a program that takes the number of the month(1 - 12) and alert number of days in the month.
let num = 2;
switch (num) {
  case 1:
    alert('31 Days');
    break;
  case 2:
    alert('28 Days');
    break;
  case 3:
    alert('31 Days');
    break;
  case 4:
    alert('30 Days');
    break;
  case 5:
    alert('31 Days');
    break;
  case 6:
    alert('30 Days');
    break;
  case 7:
    alert('31 Days');
    break;
  case 8:
    alert('31 Days');
    break;
  case 9:
    alert('30 Days');
    break;
  case 10:
    alert('31 Days');
    break;
  case 11:
    alert('30 Days');
    break;
  case 12:
    alert('31 days');
    break;
}

/* 7.
- Write a program that take the salery of the user using prompt and alert the in -hand amount.You will find out the in -hand amount by deducting the tax amoun from salery.Conditions are given below.
  - `Salary <= 20000` tax is 10 %
  - `Salary <= 40000` tax is 20 %
  - `Salary > 50000` tax is 30 %

*/


//  if..else vs switch


let salary = prompt('Enter your Salary');

if (salary <= 20000) {
  let Tax = salary * 10 / 100;
  alert(salary - Tax)
} else if (salary <= 40000) {
  let Tax = salary * 20 / 100;
  alert(salary - Tax)
} else if (salary <= 50000) {
  let Tax = salary * 30 / 100;
  alert(salary - Tax)
}
/* 8.
Implement the condition give below using`if..else` and`switch` statement.

  - `marks > 100` alert`"Marks can't be greater than 100"`
  - `marks > 80 && marks < 100` alert`"Grade A"`
  - `marks > 50 && marks < 80` alert`"Grade B"`
  - `marks > 30 && marks < 50` alert`"Grade C"`
  - `marks > 0` alert`"Grade D"`

*/
let marks = 55;
if (marks > 100) {
  alert("Mark can't be greater than 100");
} else if (marks > 80 && marks < 100) {
  alert("Grade A")
} else if (marks > 50 && marks < 80) {
  alert("Grade B");
} else if (marks > 30 && marks < 50) {
  alert("Grade C")
} else if (marks > 0) {
  alert("Grade D")
}
switch (marks) {
  case marks > 100:
    alert("Mark can't be greater than 100");
    break;
  case marks > 80 && marks < 100:
    alert("Grade A")
    break;
  case marks > 50 && marks < 80:
    alert("Grade B")
    break;
  case marks > 30 && marks < 50:
    alert("Grade C")
    break;
  case marks > 0:
    alert("Grade D")
    break;

}

/* 9. Weather app

  - Ask user to provide the condition of the weather outside by asking `What is the weather like outside?`
  - If user says`sunny` alert`Wear a T-shirt`
  - If`rainy` alert`Don't forget to take your raincoat`
  - If`hot` alert`Get a hanky`
  - If`freezing` alert`Get your sweeter on`
  - Anything else should alert`Not a valid input`
*/

let Weather =prompt('Enter Weather');
if(Weather == 'sunny'){
  alert(`Wear a T-shirt`);
} else if(weather = 'rainy'){
  alert(`Don't forget to take your raincoat`);
} else if(weather == 'hot'){
   alert(`Get a hanky`);
} else if(weather == 'freezing'){
  alert(`Get Your sweeter on`)
}else{
  alert(`Not a valid Input`)
}