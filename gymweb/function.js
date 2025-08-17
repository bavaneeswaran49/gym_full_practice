// tables 

// let table=15;limit=10;i=1;
// do{
//         console.log(table+" X "+i+" = "+(table*i));
//         i++;
// }while(i<=limit);
// let table=15;limit=10;i=1;
// do{
//     console.log(table+"X"+i+"="+(table*i));
//     i++;
// }while(i<=limit);

// current unit

// let unit = 450;
// if ((unit >= 1) && (unit <= 100)) {
//     console.log("free");
// }
// else if ((unit > 100) && (unit < 200)) {
//     let bill = unit - 100;
//     console.log(bill * 3);

// }
// else if ((unit > 200) && (unit < 500)) {
//     let bill = unit - 100;
//     let high = 200 * 3;
//     let last = high - bill;
//     console.log(last);
// }


// function bavan(age) {
//     if (age >= 0 && age <= 2) {
//         return ("Infant");
//     } else if (age >= 3 && age <= 12) {
//         return ("Child");
//     } else if (age >= 13 && age <= 19) {
//         return "Teen";
//     } else   {
//         return "Senior citizen";
//     }
// } let age = 75;
// console.log(bavan(age));

// function bavan(id,password){
//     if(id === "admin"&& password === "1234")
//         return("Its Valid")
//     else{
//         return("Its in-valid")
//     }
// }
// let id="1234";
// let password="amdmin";
// console.log(bavan(id,password));

// function bavan(a) {
//     if (a === 0)
//         return ("Its a Null value")
//     else if (a>= 1)
//         return ("Its a positive value")
//     else if(a<=-1){
//         return ("Its a negative value")
//     }
// }
// let a = -1;
// console.log(bavan(a))

// function bavan(vowels) {
//     if (vowels === "a" || vowels === "e" || vowels === "i" || vowels === "o" || vowels === "u") {
//         return ("Its a vowels")
//     }
//     else {
//         return ("Its not a vowel")
//     }
// }
// let vowels = "o";
// console.log(bavan(vowels));
// function bavann(bavan , karupasamy , darshan) {
//     if(bavan > karupasamy && bavan > darshan){
//         return ("Bavan is greatest")
//     }
//     else if(karupasamy > bavan && karupasamy > darshan){
//         return("karupasamu is the greatest")
//     }
//     else{
//         return("darshan is the greatest")
//     }
// }
// let bavan=40;
// let karupasamy=50;
// let darshan=60;
// console.log(bavann(bavan , karupasamy , darshan));
// let a=10;
// if(a%2!=0 && a%a==a){
//     console.log("its a prime")
// }else{
//     console.log("its not a prime number")
// }

// for (let i = 1; i <= 100; i++) {
//     if ("a%2!=0 && a%a==a"){
//         console.log(i+" Its a prime number");
//     }else if("a%") {
//         console.log(i+" Its not a prime number");
//     }
// }

// let i = 10;
// i *= i;  
// if (i) {
//     console.log(i);  
// }
// let i = 6;
// let ans= 1;

// for (let j = 1; j <= i; j++) {
//     ans *= j;
// }
// console.log( +ans);

// let a = 5;        
// let b = 1;    
// let i = 1;     

// while (i <= a) {
//   b =b* i;    
//   i++;             
// }

// console.log(b);


// let x = 7;
// let y = 1
// for (let z = 1; z<= x; z++) {
//     y*=z;
// }console.log(y)

// let x = 5;
// let y = 1;
// for (z = 1; y <= x; y++); {
//     z*=y;
// }
// console.log(z)

//let a = 5;
// let b = 1;
// let c = 1;
// function bavan(b) {
//     if (c <= a, c++) {
//         b*=c;
//      }
// } console.log(bavan(b));


//simple calculator
// function calculator(a, b, operator) {
//     if (operator === "+") {
//         return a + b;
//     } else if (operator === "-") {
//         return a - b;
//     } else if (operator === "*") {
//         return a * b;
//     } else if (operator === "/") {
//         return a / b;
//     } else {
//         return "Invalid operator";
//     }
// }
// if 

// push array //push is used to add single or multiple number of elements
// let fruits=["apple","orange","pineapple"];
// console.table(fruits);
// fruits.push("graps","banana");
// console.log(fruits);


//pop its used to remove the last element in array
// let a=[1,2,3,4,5];
// console.table(a.pop());
// console.table(a);

////shift it is used to remove the element from the starting
// let a=[1,2,3,4,5]
// console.log(a);
// let element=a.shift();//the removed element will be saved in the element
// console.log(a);
// console.log(element);
// console.log(a);
// element=a.shift();//the removed element will be saved in the element
// console.log(a);
// console.log(element);
// console.log(a);
// element=a.shift();//the removed element will be saved in the element
// console.log(a);
// console.log(element);
// console.log(a);
// element=a.shift();//the removed element will be saved in the element
// console.log(a);
// console.log(element);
// console.log(a);
// element=a.shift();//the removed element will be saved in the element
// console.log(a);
// console.log(element);
// console.log(a);
// element=a.shift();//the removed element will be saved in the element
// console.log(a);
// console.log(element);

// //push
// let a=["suriya",1,"praveen",2,"bavan",3,"vikram",4];
// console.log(a);
// a.push("karapu",5);
// console.log(a);



// //pop
// let b=["bavan","balaji","bhavan","bablu"];
// console.log(b);
// b.pop();
// console.log(b);

// //shift
// let num=[1,2,3,4,5];
// num.shift();
// console.log(num);


// //unshift 
// let fruits=["apple","pineapple","banana"]
// fruits.unshift("grapls","Mango")
// console.log(fruits);

// //indexof
// let school=["vikas","Avp","Infant"]
// console.log(school.indexOf("vikas"));


// //lastIndexof
// let Name=["sathi","anu","anitha","anu"];
// i=Name.lastIndexOf("anu");
// console.log(i);


// a.pop(5);
// console.log(a);
// a.shift();a.shift();
// console.log(a);
// let b=a.unshift("darshan",1);
// console.log(a);
// console.log(b);// to check the length of the elemnet
// let z=a.indexOf(2,"bavan");
// console.log(z);



