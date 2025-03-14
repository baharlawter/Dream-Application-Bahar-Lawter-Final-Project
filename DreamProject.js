// Bahar's Dream App Project


//Values, Data Types, and Operations
let habit={name:"Exercise",completed:false, streak:0};//object and variables are used.
console.log(`habit:${habit.name},completed:${habit.comleted},streak:${habit.streak}`);//string is used to display the output

//Stringing Characters Together
let completeHabitMessage=`You have compleated the habit ${habit.name}`;//string is used to display the output
console.log(completeHabitMessage);

//Control Structures and Logic
if(habit.completed==true){console.log("You have completed the this habit")};//if statement is used to chech the condition and display the output


// Working with Loops
while(habit.completed==false){console.log("Please complete the habit")};//while loop and string is used to display the output




//Building and Using Arrays
let habits=["Exercise","Reding","Coding","Intermitten fasting"];//using array to list the habits
habits.push("Meditation");//using push()method to add more habits
habits.forEach(habit=>console.log(`Your habit for today is ${habit}`))//using forEach() to display the output


