//Task-1
//Highest salary
let employees=[
    {
    name:"Preethi",
    id:101,
    salary:30000,
    experience:2
},
{
    name:"Ananya",
    id:102,
    salary:60000,
    experience:7
},
{
    name:"Rohit",
    id:103,
    salary:40000,
    experience:5
}
]
let highestSalary=employees[0].salary;
let empName=employees[0].name;
for(let i=1;i<employees.length;i++){
    if(employees[i].salary>highestSalary){
        highestSalary=employees[i].salary;
        empName=employees[i].name;
    }
}
console.log("Employee Name:",empName);
console.log("Highest salary:",highestSalary);

//Task-2
//employee id
let searchId=103;
let found=false;
for(let i=0;i<employees.length;i++){
    if(employees[i].id==searchId){
        console.log("Employee Found");
        console.log(employees[i].name);
        console.log(employees[i].salary);
        found=true;
    }
}
if(found==false){
    console.log("Employee Not Found");
}

//Task-3
//salary bonus
let bonus=5000;
for(let i=0;i<employees.length;i++){
    console.log(employees[i].name+" : "+(employees[i].salary+bonus));
}

//Task-4
//experience check
for(let i=0;i<employees.length;i++){
    if(employees[i].experience>=5){
        console.log(employees[i].name+" - Senior Employee");
}else{
    console.log(employees[i].name+" - Junior Employee");
}
}

//Task-5
//Employee Names
for(let i=0;i<employees.length;i++){
    console.log(employees[i].name);
}

//Task-6
// employee IDs
for(let i=0;i<employees.length;i++){
    console.log(employees[i].id);
}

//Task-7
//Total salary paid by company
let totalSalary=0;
for(let i=0;i<employees.length;i++){
    totalSalary+=employees[i].salary;
}
console.log("Total salary:", totalSalary);

//Task-8
//employees earning more than 40000
for(let i=0;i<employees.length;i++){
    if(employees[i].salary>40000){
        console.log(employees[i].name);
    }
}

//Task-9
//Increase salary
for(let i=0;i<employees.length;i++){
    employees[i].salary=employees[i].salary+5000;
    console.log(employees[i].name+" : "+employees[i].salary);
}

//Task-10
//Employee Report
for(let i=0;i<employees.length;i++){
console.log(`Employee Name : ${employees[i].name}
Employee ID : ${employees[i].id}
Salary : ${employees[i].salary}`);
}

//*****CHALLENGE TASK***** 
let employee=[
    {
        name:"rekha",
        id:103,
        salary:30000
    },
    {
        name:"agalya",
        id:104,
        salary:40000
    },
    {
        name:"sudha",
        id:105,
        salary:50000
    }
]
console.log("Total employees:"+employee.length);
let highestSalary1=employee[0].salary;
let lowestSalary1=employee[0].salary;
let highestSalaryName=employee[0].name;
let lowestSalaryName=employee[0].name;
let totalSalary1=0;
for(let i=0;i<employee.length;i++){
    totalSalary1+=employee[i].salary;
    if(employee[i].salary>highestSalary1){
        highestSalary1=employee[i].salary;
        highestSalaryName=employee[i].name;
    }

    if(employee[i].salary<lowestSalary1){
        lowestSalary1=employee[i].salary;
        lowestSalaryName=employee[i].name;
    }
}
console.log("Highest salary:",highestSalary1);
console.log("Employee Name:",highestSalaryName);
console.log("Lowest salary:",lowestSalary1);
console.log("Employee Name:",lowestSalaryName);
console.log("Total salary paid by company:",totalSalary1);
console.log("Employees earning more than 40000");
for(let i=0;i<employee.length;i++){
if(employee[i].salary>40000){
console.log(employee[i].name);
}
}
let searchId1=104;
let found1=false;
for(let i=0;i<employee.length;i++){
    if(employee[i].id==searchId1){
        console.log("Employee Found");
        console.log(employee[i]);
        found1=true;

    }
}
if(found1==false){
    console.log("Employee Not Found");
}
console.log("Salary after bonus");
for(let i=0;i<employee.length;i++){
console.log(employee[i].name+" : "+(employee[i].salary+5000));
}

console.log("Employee Report");

for(let i=0;i<employee.length;i++){
console.log(`Employee Name : ${employee[i].name}
Employee ID : ${employee[i].id}
Salary : ${employee[i].salary}`);
}


//FUNCTIONS
//TASK-1
//WELCOME MESSAGE
function welcome(){
    console.log("Welcome to Stackly IT");
}
welcome();

//TASK-2
//EMPLOYEE DETAILS
function employeeDetails(name,department,salary){
    console.log("Employee Name:",name);
    console.log("Department:",department);
    console.log("Salary:",salary);
}
employeeDetails("Preethi","IT",30000);

//TASK-3
//CALCULATE BONUS
function bonus(salary,bonus){
    console.log("Total salary:",salary+bonus);
}
bonus(30000,5000);

//TASK-4
//STUDENT RESULT
function result(marks){
    if(marks>=35){
        console.log("pass");
    } else {
        console.log("fail");
    }
}
result(40);

//TASK-5
//RETURN EMPLOYEE NAME
function employeeName(){
    return "Preethi";
}
let name=employeeName();
console.log("Employee Name:",name);

//TASK-6
//PRODUCT PRICE
function productprice(){
    return 25000;
}
let price=productprice();
let gst=price*18/100;
console.log("Product Price:",price);
console.log("GST:",gst);
console.log("Total Price:",price+gst);

//TASK-7
//SCOPE
console.log("var a prints because it has function scope whereas let b an const c gives an error because they have block scope");

//TASK-8
//HOISTING
console.log("var a is hoisted and initialized with undefined, whereas let b remains in tdz until its declaration is reached");

//TASK-9
//NAMED FUNCTION
function greeting(){
    console.log("Good Morning");
}
greeting();

//TASK-10
//ANONYMOUS FUNCTION
let greet=function(){
    console.log("Welcome Employee");
};
greet();

//TASK-11
//ARROW FUNCTION
let training=()=>{
    console.log("Javascript Training");
}
training();

//TASK-12
//RETURNING FUNCTION
function company(){
    return "Stackly";
}
let comp=company();
console.log("Welcome ",comp);

//TASK-13
//HIGHER ORDER FUNCTION
function dashboard(){
    console.log("Dashboard Loaded");
}
function login(fun){
    console.log("Login Successful");
    fun();
}
login(dashboard);

//TASK-14
//CALLBACK FUNCTION
function delivered(){
    console.log("Delivered");
}
function preparing(fun){
    console.log("Preparing food");
    fun();
}
function order(fun){
    console.log("Order received");
    fun(delivered);
}
order(preparing);

//TASK-15
//GENERATOR FUNCTION
function* coupon(){
    yield "10% Discount";
    yield "20% Discount";
    yield "30% Discount";
    yield "better luck next time";
}
let c=coupon();
console.log(c.next().value);
console.log(c.next().value);
console.log(c.next().value);
console.log(c.next().value);

//TASK-16
//RETURN + GENERATOR
function* fruits(){
    yield "Apple";
    yield "Banana";
    yield "Orange";
}
let fruit=fruits();
console.log(fruit.next().value);
console.log(fruit.next().value);
console.log(fruit.next().value);

//TASK-17
//CURRYING
function discount(price){
    return function(discount){
        console.log("FINAL PRICE:",price - (price * discount/100));
    };
}
discount(1000)(10);

//TASK-18
//COMPANY SALARY
function salary(salary){
    return function(bonus){
        return function(allowance){
            console.log(salary+bonus+allowance);
        }
    }
}
salary(30000)(5000)(2000);

//TASK-19
//REAL-TIME LOGIN SYSTEM
function dashboard1(){
    console.log("Load Dashboard");
}
function login1(fun){
    console.log("Login Successful");
    fun();
}
function password(fun){
    console.log("Verify Password");
    login1(fun);
}
function username(){
    console.log("Enter Username");
    password(dashboard1);
}
username();

//MINI PROJECT
//*******EMPLOYEE SALARY MANAGEMENT SYSTEM********
let employee={
name:prompt("Enter Employee Name"),
id:Number(prompt("Enter Employee ID")),
department:prompt("Enter Department"),
salary:Number(prompt("Enter Salary"))
};

let welcome=()=>{
console.log("Welcome to Employee Salary Management System");
};

welcome();

let printDepartment=function(){
console.log("Department : "+employee.department);
};

printDepartment();

function calculateSalary(salary,bonus){
return salary+bonus;
}

let bonus=Number(prompt("Enter Bonus"));

let finalSalary=calculateSalary(employee.salary,bonus);

console.log("Employee Name : "+employee.name);
console.log("Employee ID : "+employee.id);
console.log("Salary : "+employee.salary);
console.log("Final Salary : "+finalSalary);

function dashboard(){
console.log("Employee Dashboard Loaded");
}

function login(fun){
console.log("Login Successful");
fun();
}

login(dashboard);

function* coupon(){
yield "5% Bonus Coupon";
yield "10% Bonus Coupon";
yield "15% Bonus Coupon";
}

let c=coupon();

console.log(c.next().value);
console.log(c.next().value);
console.log(c.next().value);

function tax(amount){
return function(percent){
return amount-(amount*percent/100);
}
}

let taxPercent=Number(prompt("Enter Tax Percentage"));

let salaryAfterTax=tax(finalSalary)(taxPercent);

console.log("Salary After Tax : "+salaryAfterTax);

console.log(`Employee Report
Employee Name : ${employee.name}
Employee ID : ${employee.id}
Department : ${employee.department}
Salary : ${employee.salary}
Bonus : ${bonus}
Final Salary : ${finalSalary}
Salary After Tax : ${salaryAfterTax}`);