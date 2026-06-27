//Level-1
//Task-1
let name=prompt("Enter your name");
let age=prompt("Enter your age");
console.log("My name is"+name+"I am"+age+"years old");

//Task-2
let degree=confirm("Do you have a degree?");
if(degree){
    console.log("Degree completed");
}else{
    console.log("Degree not completed");
}

//Task-3
let mobprice = 15000;
let discount = 2000;
let finalprice = mobprice - discount;
console.log("Final price: "+finalprice);

//Level-2
//Task-4
let userage=prompt("Enter your age");
if(userage>=18){
    console.log("Eligible to vote");
}else{
    console.log("Not eligible to vote");
}

//Task-5
let cart=["Rice","Milk","Sugar","Tea Powder"];
console.log("First Product:",cart[0]);
console.log("Last Product:",cart[cart.length-1]);
console.log("Total Products:",cart.length);

//Task-6
let student={
    name:"Preethi",
    age:23,
    course:"Fullstack java"
};
console.log("Student Name:",student.name);
console.log("Student Course:",student.course);

//Level-3
//Task-7
let salary = 25000;
let bonus = 5000;
let totalsal=salary + bonus;
console.log("Total Salary: "+totalsal);

//Task-8
let username = "admin";
let password = "1234";

let inputUsername = prompt("Enter username");
let inputPassword = prompt("Enter password");
if(inputUsername === username && inputPassword === password){
    console.log("Login successful");
}else{
    console.log("Invalid credentials");
}

//task-9
let foodPrice = 350;
let deliveryCharge = 50;
let totalBill = foodPrice + deliveryCharge;
console.log("Total Bill: "+totalBill);
let gst = totalBill * 0.05;
let GrandTotal = totalBill + gst;
console.log("Grand Total: "+GrandTotal);

//Level-4
//Task-10
let product = {
    name: "Laptop",
    price: 50000,
    brand: "Asus",
    stock: true
};
console.log("Product Name: "+product.name);
console.log("Product Price: "+product.price);
console.log("Product Brand: "+product.brand);
console.log("Stock Available "+product.stock);

//Task-11
let attendance = confirm("present?")
if(attendance){
    console.log("Attendance marked");
}else{
    console.log("Absent");
}

//Task-12
let balance = Number(prompt("Enter account balance"));
let withdraw=Number(prompt("Enter amount to withdraw"));
if(withdraw<=balance){
    console.log("Withdrawal successful. Remaining balance: "+(balance-withdraw));
}else{
    console.log("Insufficient balance");
}

//****CHALLENGE TASK*****
//MINI EMPLOYEE MANAGEMENT SYSTEM
let empDetails={
    name:prompt("Enter employee name"),
    age:prompt("Enter employee age"),
    department:prompt("Enter employee department"),
    salary:prompt("Enter employee salary")
};
console.log("Employee Name: "+empDetails.name);
console.log("Employee Age: "+empDetails.age);
console.log("Employee Department: "+empDetails.department);
console.log("Annual Salary: "+12*empDetails.salary);

if(Number(empDetails.salary) > 30000){
    console.log("senior employee");
}else{
    console.log("junior employee");
}