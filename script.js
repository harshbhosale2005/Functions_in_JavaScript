// 1.Simple function

function m1(){

    //  functions provided by javascript.

    //alert("js function");
   // confirm("m1() function");
   // let name=prompt("Enter name :");
   // console.log("Name :"+name);
    console.log("js function");
    
    
}

m1();

//  2.Parameterized function


function m2(a){
    console.log("Value of a :"+a);
    
}
m2(100);
m2("pune")

// 3. return type function

function sqr(){

    let num=5;

    return num*num;

}
let res=sqr();
console.log("Sqr is: "+res);

// 4. return type with parameteres function

function cube(num){

    return num*num*num;
}

let res2 = cube(5);
console.log("Cube is : "+res2);


// task 1

// add function using all function

function  add1( ){
    let a=10;
    let b=20;

    let c=a+b;
    console.log("Addition of a and b is : "+c);
    
}

function add2(num,num2){

    console.log("Addition of 2 digits :"+(num+num2));
    
}

function add3(){

    let num=10;
    let num2=60;

    return num+num2;
}

function add4(num,num2){

    return num+num2;
}

add1();

add2(20,80);

let num3=add3();
console.log("Addition of 2 digits are :"+num3);

let num4=add4(50,50);
console.log("Addition of  2 Numbers  is :"+num4);


// sub() using all functions

function  sub1( ){
    let a=10;
    let b=20;

    let c=a-b;
    console.log("Subtraction of a and b is : "+c);
    
}

function sub2(num,num2){

    console.log("Subtraction of 2 digits :"+(num-num2));
    
}

function sub3(){

    let num=10;
    let num2=60;

    return num-num2;
}

function sub4(num,num2){

    return num-num2;
}

sub1();

sub2(20,80);

let num5=sub3();
console.log("Subtraction of 2 digits are :"+num5);

let num6=sub4(50,50);
console.log("Subtraction of  2 Numbers  is :"+num6);


// mul() using all types of functions

function  mul1( ){
    let a=10;
    let b=20;

    let c=a*b;
    console.log("Multiplication of a and b is : "+c);
    
}

function mul2(num,num2){

    console.log("Multiplication of 2 digits :"+(num*num2));
    
}

function mul3(){

    let num=10;
    let num2=60;

    return num*num2;
}

function mul4(num,num2){

    return num*num2;
}

mul1();

mul2(20,80);

let num7=add3();
console.log("Multiplication of 2 digits are :"+num7);

let num8=add4(50,50);
console.log("Multiplication of  2 Numbers  is :"+num8);



