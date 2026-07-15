//TASK-1
//EMPLOYEE LOGIN(SCOPE)
function emplogin() {
    if(true){
        var companyName="Stackly IT";
        //let employeeId=103;
        //const password="Stackly@123";
    }
    console.log(companyName);
    console.log(employeeId);
    console.log(password);
    //throws error

}
emplogin();

//TASK-2
//ATM MACHINE(HOISTING)
console.log(accountbalance);
var accountbalance=10000;
console.log(balance);
let balance=5000;
console.log(amount);
const amount=2000;

console.log("var is hoisted and initialized with undefined");
console.log("let and const are hoisted but not initialized, so they will throw a ReferenceError if accessed before declaration");

//TASK-3
//FOOD DELIVERY APP(NAMED FUNCTION)
function orderfood(foodname){
    console.log("order placed :",foodname);
}
orderfood("Pizza");

//TASK-4
//WHATSAPP STATUS(ANONYMOUS FUNCTION)
let status=function(message){
    console.log("status updated :",message);
};
status("Busy in Meeting");

//TASK-5
//WEATHER APP(ARROW FUNCTION)
let weather=(city,temp)=>{
    console.log(city+" TEMPERATURE IS "+temp+"°C");
};
weather("Bangalore",30);

//TASK-6
//FLIPKART OFFER(IIFE)
(function() {
    console.log("Today's offer");
    console.log("Flat 60% Discount");
})();

//TASK-7
//ONLINE PAYMENT(HIGHER ORDER FUNCTION + CALLBACK)
function paymentsuccess(){
    console.log("Payment Successful");
}
function makepayment(fun){
    console.log("Payment in processing...");
    fun();
}
makepayment(paymentsuccess);

//TASK-8
//YOUTUBE PLAYLIST(GENERATOR FUNCTION)
function* playlist(){
    yield "video 1";
    yield "video 2";
    yield "video 3";
    yield "video 4";
    return "Playlist completed";

}
let play=playlist();
console.log(play.next().value);
console.log(play.next().value);
console.log(play.next().value);
console.log(play.next().value);
console.log(play.next().value);

//TASK-9
//STUDENT RESULT(RETURN)
function calculateTot(){
    return 485;
}
let totmark=calculateTot();
console.log("Total marks obtained :",totmark);

//TASK-10
//SHOPPING CART(RETURN)
function cartTot(price1,price2,price3){
    return price1+price2+price3;
}
let tot=cartTot(100,200,300);
console.log("Total amount:",tot);

//TASK-11
//SALARY CALCULATOR(UNCURRYING)
function salary(basic,hra,bonus){
    console.log("Total Salary:",basic+hra+bonus);
}
salary(50000,10000,5000);

//TASK-12
//FOOD BILL(CURRYING)
function foodbill(food){
    return function(drinks){
        return function(dessert){
            console.log(food+drinks+dessert);
        }
    }
}
foodbill(200)(100)(80)

//TASK-13
//E-COMMERCE COUPON GENERATOR
function* coupon(){
    yield "WELCOME10";
    yield "SAVE20";
    yield "SUPER30";
    yield "MEGA50";
    return "No More Coupons";
}
let c=coupon();
console.log(c.next().value);
console.log(c.next().value);
console.log(c.next().value);
console.log(c.next().value);
console.log(c.next().value);

//TASK-14
//BANK TRANSACTION(HIGHER ORDER + CALLBACK)
function transactionSuccess(){
    console.log("Transaction Successful");
}

function withdraw(fun){
    console.log("Processing...");
    fun();
}
withdraw(transactionSuccess);

//TASK-15
//EMPLOYEE PROFILE(SCOPE)
function employeeProfile(){
if(true){

    var company="Stackly";
    //let designation="MERN Developer";
    //const salary=50000;
}
    console.log(company);
    console.log(designation);
    console.log(salary);

}
employeeProfile();
console.log("company prints because var has function scope.");
console.log("designation and salary give ReferenceError because let and const have block scope.");



