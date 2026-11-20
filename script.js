// 1.Simple function

function m1(){

    //  functions provided by javascript.

    //alert("js function");
    confirm("m1() function");
    let name=prompt("Enter name :");
    console.log("Name :"+name);
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



