"use strict";
//1.Variables
{
    let character = 'mario';
    let age = 30;
    let IsOld = false;
    const circ = (diameter) => {
        return diameter * Math.PI;
    };
    //console.log(circ(1));
}
//2.Arrays
{
    let names = ['zokir', 'burhoniddin', 'sardor'];
    names.push('hayot');
    //mixed array
    let mixed = ['zokir', '5', 'hayot', 4, 5];
    mixed[0] = 4;
    //mixed.push(true);
}
//3.Objects
{
    let car = {
        name: "BMW",
        color: "black",
        model: "X5",
        year: 2012
    };
    car.name = "Wolkswagen";
    car.year = 2015;
    //car.year='23';
    car = {
        name: "Chevrolet",
        color: 'blue',
        model: 'malibu',
        year: 2020
    };
}
//4.Explicit types
{
    //Variables
    let name;
    let age;
    let isBlocked;
    age = 23;
    //age='ad';
    name = 'zokir';
    isBlocked = true;
    let uid;
    uid = 12;
    uid = "sdf";
    //Arrays
    let strings;
    strings = ['mario', 'yushi'];
    let mixed = [];
    mixed.push('hello');
    //mixed.push(true);
    mixed.push(12);
    //Objects
    let carOne;
    carOne = {
        name: "BMW",
        color: "black",
        model: "X5",
        year: 2012
    };
    let cartwo;
}
//5.Dynamic types
{
    //just change string,boolean or number to "any" keyword.That's all for dynamic type.But this reverse this feature to that of javascript
}
//6.Functions
{
    let greet;
    greet = () => {
        console.log("Hello,Zokir");
    };
    //greet();
    const add = (a, b, c = 5) => {
        console.log(a + b);
        return a + b;
    };
    //const a=add(10,20,30);
}
//7.Aliases
{
    let logdetails = (uid, item) => {
        console.log(`${item} has a uid of ${uid}`);
    };
    // logdetails(12,"apple");
    let greet = (user) => {
        console.log(`hello,${user.name}`);
    };
    let user = {
        name: "Zokir",
        uid: 12
    };
    //greet(user)
}
//8.Function Signatures
{
    //example 1
    let greet;
    greet = (name, greeting) => {
        console.log(`${name} is saying ${greeting}`);
    };
    //example 2
    let calc;
    calc = (numOne, numTwo, action) => {
        if (action === 'add') {
            return numOne + numTwo;
        }
        else {
            return numOne - numTwo;
        }
    };
    //example 3
    let logdetails;
    logdetails = (ninja) => {
        console.log(`${ninja.name} is ${ninja.age} years old`);
    };
}
