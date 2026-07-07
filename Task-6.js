//TASK-1
//EMPLOYEE BONUS(SPREAD OPERATOR)
let employee={
    name:"Preethi",
    salary:35000
};
let nwemp={
    ...employee,
    bonus:5000,
    department:"Developer"
};
console.log(nwemp);

//TASK-2
//SHOPPING CART(REST OPERATOR)
function calcbill(...price){
    let total=0;
    for(let i=0;i<price.length;i++){
        total+=price[i];
    }
    console.log("ITEMS:",price.length);
    console.log("TOTAL:",total);
}
calcbill(10,20,30,40);

//TASK-3
//STUDENTS DETAILS(OBJECT DESTRUCTURING)
let student={
    name:"rohit",
    age:22,
    course:"MERN",
    city:"chennai"
};
let {name,age,course,city}=student;
console.log(name);
console.log(age);
console.log(course);
console.log(city);

//TASK-4
//ONLINE FOOD ORDER
let food=["pizza","burger","fries"];
food.push("coke");
food.push("Ice cream");
food.splice(2,1);
console.log(food);

//TASK-5
//BANK TRANSACTION
let transaction=[1000,2000,3000,4000];
transaction.shift();
transaction.unshift(500);
console.log(transaction);

//TASK-6
//COMPANY DEPARTMENTS
let dept1=["HR","sales"];
let dept2=["Developer","Testing"];
let department=dept1.concat(dept2);
console.log(department);

//TASK-7
//PRODUCT SEARCH
let product=["laptop","mouse","keyboard","monitor"];
if(product.includes("keyboard")){
    console.log("Available");
}else{
    console.log("Not Available");
}

//TASK-8
//USER LOGIN(CALLBACK FUNCTION)
function dashboard(){
    console.log("Dashboard opened");
}
function login(fun){
    console.log("Login Successful");
    fun();
}
login(dashboard)

//TASK-9
//COUPON GENERATOR(GENERATOR FUNCTION)
function* coupon(){
    yield "WELCOME10";
    yield "SAVE20";
    yield "MEGA50";
    yield "FREE100";
}
let c=coupon();
console.log(c.next().value);
console.log(c.next().value);
console.log(c.next().value);
console.log(c.next().value);

//TASK-10
//COURSE REGISTRATION(CURRYING)
function course(coursename){
    return function(batch){
        return function(room){
            console.log("course:",coursename);
            console.log("batch:",batch);
            console.log("room:",room);
        }
    }
}
course("Javascript")("Morning")("Batch-36");

//TASK-11
//MOVIE COLLECTION(SLICE)
let movies=["Leo","goat","dragon","retro","coolie"];
let newmovies=movies.slice(2,4);
console.log(newmovies);

//TASK-12
//EMPLOYEE IDs(SPLICE)
let ids=[101,102,103,104,105];
ids.splice(2,2,501,502);
console.log(ids);

//TASK-13
//SORT PRODUCT PRICES
let price=[
5000,
250,
700,
12000,
50
];
price.sort(function(a,b){
return a-b;
});
console.log(price);

//TASK-14
//NESTED CATEGORIES(DESTRUCTURING)
let data=["electronics",["mobiles",["samsung","apple"]]];
let [category,[mobile,[brand1,brand2]]]=data;
console.log(category);
console.log(mobile);
console.log(brand1)
console.log(brand2);

//TASK-15
//COMPANY TEAM(SPREAD OPERATOR)
let developers=[
"Janu",
"Divya"
];
let designers=[
"Rithu",
"Kavya"
];
let team=[
...developers,
...designers
];
console.log(team);

//TASK-16
//RETURN FUNCTION
function calcsal(sal,bonus){
    return sal+bonus;
}
let totsal=calcsal(30000,5000);
console.log(totsal);

//TASK-17
//SCOPE CHECKING
function test(){
if(true){
var a=10;
let b=20;
const c=30;
}
console.log(a);
//console.log(b);
//console.log(c);
}
test();
console.log("var works because it has function scope.");
console.log("let and const give ReferenceError because they have block scope.");

//TASK-18
//CUSTOMER ORDERS
let orders=["pizza","burger","pizza","sandwich","pizza"];
console.log("first index:",orders.indexOf("pizza"));
console.log("last index",orders.lastIndexOf("pizza"));

//TASK-19
//FLATTEN PRODUCT CATEGORIES
let items=[1,2,[3,4,[5,6]]];
let nwitems=items.flat(2);
console.log(nwitems);

//TASK-20
//MINI SHOPPING CART CHALLENGE
let cart=["Mouse","Keyboard"];
cart.push("Monitor");
cart.unshift("Laptop");
cart.splice(2,1);
if(cart.includes("Mouse")){
console.log("Mouse Available");
}
else{
console.log("Mouse Not Available");
}
let accessories=["Webcam","Speaker"];
let finalCart=[
...cart,
...accessories
];
console.log(finalCart);






