"use strict";
//1.Variables
{
    var character = 'mario';
    var age = 30;
    var IsOld = false;
    var circ = function (diameter) {
        return diameter * Math.PI;
    };
    //console.log(circ(1));
}
//2.Arrays
{
    var names = ['zokir', 'burhoniddin', 'sardor'];
    names.push('hayot');
    //mixed array
    var mixed = ['zokir', '5', 'hayot', 4, 5];
    mixed[0] = 4;
    //mixed.push(true);
}
//3.Objects
{
    var car = {
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
    var name_1;
    var age = void 0;
    var isBlocked = void 0;
    age = 23;
    //age='ad';
    name_1 = 'zokir';
    isBlocked = true;
    var uid = void 0;
    uid = 12;
    uid = "sdf";
    //Arrays
    var strings = void 0;
    strings = ['mario', 'yushi'];
    var mixed = [];
    mixed.push('hello');
    //mixed.push(true);
    mixed.push(12);
    //Objects
    var carOne = void 0;
    carOne = {
        name: "BMW",
        color: "black",
        model: "X5",
        year: 2012
    };
    var cartwo = void 0;
}
//5.Dynamic types
{
    //just change string,boolean or number to "any" keyword.That's all for dynamic type.But this reverse this feature to that of javascript
}
//6.Functions
{
    var greet = void 0;
    greet = function () {
        console.log("Hello,Zokir");
    };
    //greet();
    var add = function (a, b, c) {
        if (c === void 0) { c = 5; }
        console.log(a + b);
        return a + b;
    };
    //const a=add(10,20,30);
}
//7.Aliases
{
    var logdetails = function (uid, item) {
        console.log(item + " has a uid of " + uid);
    };
    // logdetails(12,"apple");
    var greet = function (user) {
        console.log("hello," + user.name);
    };
    var user = {
        name: "Zokir",
        uid: 12
    };
    //greet(user)
}
//8.Function Signatures
{
    //example 1
    var greet = void 0;
    greet = function (name, greeting) {
        console.log(name + " is saying " + greeting);
    };
    //example 2
    var calc = void 0;
    calc = function (numOne, numTwo, action) {
        if (action === 'add') {
            return numOne + numTwo;
        }
        else {
            return numOne - numTwo;
        }
    };
    //example 3
    var logdetails = void 0;
    logdetails = function (ninja) {
        console.log(ninja.name + " is " + ninja.age + " years old");
    };
}
