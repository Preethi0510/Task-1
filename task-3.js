//Task-1
//Employee login eligibility
let age = Number(prompt("Enter your age:"));
let empId = confirm("Do you have an employee ID?");
let attendance = Number(prompt("Enter your attendance percentage:"));

if (age >= 18 && empId && attendance >= 75) {
    console.log("Access granted.");
} else {
    console.log("Access Denied.");
}

//Task-2
//Student Grade System
let marks = Number(prompt("Enter your marks:"));

if (marks >= 90 && marks <= 100) {
    console.log("Grade A+");
} else if (marks >= 80) {
    console.log("Grade A");
} else if (marks >= 70) {
    console.log("Grade B");
} else if (marks >= 60) {
    console.log("Grade C");
} else {
    console.log("Fail");
}

//Task-3
//ATM Withdraw
let balance = 5000;
let withdraw = 3000;

if (withdraw <= balance && withdraw % 100 === 0) {
    balance = balance - withdraw;
    console.log("Transaction Successful");
    console.log("Remaining Balance:", balance);
} else {
    console.log("Transaction Failed");
}

//Task-4
//Food Ordering app
let food = Number(prompt(
    "Menu\n1. Pizza\n2. Burger\n3. Shawarma\n4. Biryani\n5. Juice"
));

switch (food) {
    case 1:
        console.log("You Ordered Pizza");
        break;

    case 2:
        console.log("You Ordered Burger");
        break;

    case 3:
        console.log("You Ordered Shawarma");
        break;

    case 4:
        console.log("You Ordered Biryani");
        break;

    case 5:
        console.log("You Ordered Juice");
        break;

    default:
        console.log("Invalid Choice");
}

//Task-5
//E-commerce Discount
let purchase = Number(prompt("Enter Purchase Amount:"));
let premiumUser = confirm("Are you a Premium User?");

let discount = 0;

if (purchase > 5000 && premiumUser) {
    discount = purchase * 0.20;
} else {
    discount = purchase * 0.10;
}

let finalPrice = purchase - discount;

console.log("Original Price:", purchase);
console.log("Discount:", discount);
console.log("Final Price:", finalPrice);

//Task-6
//Attendance Report
for (let day = 1; day <= 30; day++) {
    console.log(`Day ${day} Present`);
}

//Task-7
//Even number generator
for(let i=2;i<=100;i++){
    if(i%2==0){
        console.log(i);
    }
}

//Task-8
//Mobile number validation
let mobno=prompt("Enter your mobile number:");
if(mobno.length==10 && (mobno.startsWith("6") || mobno.startsWith("7") || mobno.startsWith("8") || mobno.startsWith("9"))){
    console.log("Valid Mobile Number");
} else {
    console.log("Invalid Mobile Number");
}

//Task-9
//Shopping cart
let cart = [
    "Milk",
    "Bread",
    "Egg",
    "Rice",
    "Oil"
];
console.log("First Item:", cart[0]);
console.log("Last Item:", cart[cart.length - 1]);
console.log("Total Items:", cart.length);

//Task-10
//Employee database
let employee = {
    name: "Preethi",
    salary: 35000,
    department: "Java Full Stack",
    experience: "2 Years"
};
console.log("Employee Name:", employee.name);
console.log("Department:", employee.department);
console.log("Experience:", employee.experience);

//Task-11
//Company Id Generator
let empname = prompt("Enter your name:");
let id = Number(prompt("Enter your employee ID:"));
let userdepartment = prompt("Enter your department:");
console.log(`Welcome ${empname}`);
console.log(`Your Employee ID is EMP${id}`);
console.log(`Department : ${userdepartment}`);

//Task-12
//User Registration 
// Get user details
let username = prompt("Enter your name:");
let userage = Number(prompt("Enter your age:"));
let terms = confirm("Do you accept the Terms and Conditions?");
if (terms) {
    alert("Registered Successfully");
} else {
    alert("Registration Cancelled");
}

//Task-13
//Salary Increment  Calculator
let sal=35000;
let increment = 15;
let incrementAmount = (sal * increment) / 100;
let newSalary = sal + incrementAmount;
console.log("Old Salary:", sal);
console.log("Increment Amount:", incrementAmount);
console.log("New Salary:", newSalary);

//Task-14
//Restaurant Bill Generator
let burger = 150;
let pizza = 300;
let juice = 80;
let subtotal = burger + pizza + juice;
let gst = subtotal * 0.18;
let grandTotal = subtotal + gst;
console.log("Subtotal:", subtotal);
console.log("GST :", gst);
console.log("Grand Total:", grandTotal);

//Task-15
//Company Attendance Dashboard
let employees=[
{name:"Rahul",status:"Present"},
{name:"Arun",status:"Absent"},
{name:"Kamal",status:"Present"},
{name:"Priya",status:"Present"},
{name:"Divya",status:"Absent"}
];

let present=0;
let absent=0;

for(let i=0;i<employees.length;i++){
    if(employees[i].status=="Present"){
        console.log(employees[i].name+" - Present");
        present++;
    }
    else{
        console.log(employees[i].name+" - Absent");
        absent++;
    }
}

console.log("Total Present: "+present);
console.log("Total Absent: "+absent);

//*****MINI PROJECT*****
//EMPLOYEE MANAGEMENT SYSTEM
let employees = [];   
let count = 0;         
employees[0] = {
    id: 101,
    name: "Rahul",
    salary: 30000,
    department: "Development",
    experience: 2
};
count++;

employees[1] = {
    id: 102,
    name: "Priya",
    salary: 45000,
    department: "Testing",
    experience: 6
};
count++;

let running = true;

while (running) {

    let choice = Number(prompt(
        "1.Add Employee\n2.View Employees\n3.Search Employee\n4.Calculate Salary With Bonus\n5.Check Experience\n6.Delete Employee\n7.Exit"
    ));

    switch (choice) {

        case 1:

            let newEmployee = {
                id: Number(prompt("Enter Employee ID")),
                name: prompt("Enter Employee Name"),
                salary: Number(prompt("Enter Salary")),
                department: prompt("Enter Department"),
                experience: Number(prompt("Enter Experience"))
            };

            employees[count] = newEmployee;  
            count++;

            console.log("Employee Added Successfully");
            console.log(newEmployee);

            break;

        case 2:

            console.log("---- All Employees ----");
            for (let i = 0; i < count; i++) {
                console.log(employees[i]);
            }

            break;

        case 3:

            let searchId = Number(prompt("Enter Employee ID"));
            let found = false;

            for (let i = 0; i < count; i++) {
                if (employees[i].id == searchId) {
                    console.log(employees[i]);
                    found = true;
                }
            }

            if (!found) {
                console.log("Employee Not Found");
            }

            break;

        case 4:

            let salaryId = Number(prompt("Enter Employee ID"));
            let salaryFound = false;

            for (let i = 0; i < count; i++) {
                if (employees[i].id == salaryId) {
                    let bonus = employees[i].salary * 10 / 100;
                    console.log("Salary : " + employees[i].salary);
                    console.log("Bonus : " + bonus);
                    console.log("Total Salary : " + (employees[i].salary + bonus));
                    salaryFound = true;
                }
            }

            if (!salaryFound) {
                console.log("Employee Not Found");
            }

            break;

        case 5:

            let expId = Number(prompt("Enter Employee ID"));
            let expFound = false;

            for (let i = 0; i < count; i++) {
                if (employees[i].id == expId) {
                    if (employees[i].experience >= 5) {
                        console.log("Senior Employee");
                    } else {
                        console.log("Junior Employee");
                    }
                    expFound = true;
                }
            }

            if (!expFound) {
                console.log("Employee Not Found");
            }

            break;

        case 6:

            let deleteId = Number(prompt("Enter Employee ID"));
            let deleteIndex = -1;
            for (let i = 0; i < count; i++) {
                if (employees[i].id == deleteId) {
                    deleteIndex = i;
                }
            }

            if (deleteIndex == -1) {
                console.log("Employee Not Found");
            } else {
                for (let i = deleteIndex; i < count - 1; i++) {
                    employees[i] = employees[i + 1];
                }
                count--;
                console.log("Employee Deleted Successfully");
            }

            break;

        case 7:

            console.log("Thank You");
            running = false; 

            break;

        default:
            console.log("Invalid Choice");
    }
}