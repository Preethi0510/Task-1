//TASK-1
//EMPLOYEE SALARY DASHBOARD
let employee=[
    {
        name:"Preethi",
        salary:40000
    },
    {
        name:"Ramya",
        salary:55000
    },
    {
        name:"emanual",
        salary:120000
    },
    {
        name:"ethan",
        salary:70000
    }
];
let names=employee.map(function(emp){
    return emp.name;
});
console.log("employee names:",names);
let highsal=employee.filter(function(emp){
    return emp.salary>50000;
});
console.log(highsal);
let highemp=employee.find(function(emp){
    return emp.salary>100000;
});
console.log(highemp);
let totsal=employee.reduce(function(total,emp){
    return total+emp.salary;
},0);
console.log("Total salary:",totsal);

//TASK-2
//E-COMMERCE CART MANAGEMENT
let cart1=["laptop","mouse"];
let cart2=["keyboard","monitor"];
let cart=[
    ...cart1,...cart2
];
console.log(cart);
let newcart=[...cart,"speaker"];
console.log(newcart);
function checkout(...products){
    console.log("Total products:",products.length);
    console.log(products);
    }
    checkout("laptop","mouse","keyboard","monitor","speaker","mouse","laptop");

//TASK-3
//STUDENT REPORT CARD
let student={
    name:"rekha",
    department:"MERN",
    marks:[90,86,80,95,88]
};
let {name,department,marks}=student;
let [m1,m2,m3]=marks;
console.log(m1);
console.log(m2);
console.log(m3);
let total=marks.reduce(function(sum,mark){
    return sum+mark;
},0)
let average=total/marks.length;
console.log("student name:",name);
console.log("department:",department);
console.log("total marks:",total);
console.log("average marks",average);

//TASK-4
//PRODUCT SEARCH SYSTEM
let product="  Gaming Laptop   ";
let search=product.trim();
console.log(search);
search=search.toLowerCase();
console.log(search);
if(search.includes("laptop")){
console.log("Product Found");
}
else{
console.log("Product Not Found");
}
console.log(search.replace("laptop","**Laptop**"));

//TASK-5
//MOVIE COLLECTION MANAGER
let movies=["thalapathy","ruby","x-men","titanic"];
movies.push("devi");
console.log(movies);
movies.pop();
console.log(movies);
movies.shift();
console.log(movies);
movies.unshift("doctor");
console.log(movies);
movies.splice(1,1,"Kingdom");
console.log(movies);
let ratings=[4,2,5,3,1];
ratings.sort(function(a,b){
return b-a;
});
console.log(ratings);
console.log(movies.includes("doctor"));
