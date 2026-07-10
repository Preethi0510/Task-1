//TASK-1
//EMPLOYEE AGE CALCULATORlet dob=new Date("2002-10-05");
let currentDate=new Date();
let age=currentDate.getFullYear()-dob.getFullYear();
console.log("Employee Age :",age+" Years");

//TASK-2
//ONLINE APPOINTMENT SCHEDULER
let appointment=new Date();
appointment.setFullYear(2027);
appointment.setMonth(11);
appointment.setDate(15);
appointment.setHours(10);
appointment.setMinutes(30);
console.log(appointment);

//TASK-3
//MULTI-COMPANY MEETING TIME
let date=new Date();
console.log("INDIA");
console.log(date.toLocaleString("en-IN",{timezone:"asia/kolkata"}));
console.log("New York");
console.log(date.toLocaleString("en-US",{timeZone:"america/new_york"}));
console.log("Tokyo");
console.log(date.toLocaleString("ja-JP",{timezone:"asia/japan"}));

//TASK-4
//PRODUCT WARRANTY EXPIRY
let purchasedate=new Date();
let warranty=new Date();
warranty.setFullYear(warranty.getFullYear()+2);
console.log("purchase date:",purchasedate);
console.log("warranty expiry:",warranty);

//TASK-5
//DIGITAL CLOCK
setInterval(()=>{
let time=new Date();
console.log(time.toLocaleTimeString());
},1000);
