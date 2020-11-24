//1.Variables
{
    let character='mario';
    let age=30;
    let IsOld=false;


    const circ=(diameter:number)=>{
        return diameter*Math.PI;
    }

    //console.log(circ(1));
}
//2.Arrays
{
    let names=['zokir','burhoniddin','sardor'];

    names.push('hayot');
    //mixed array
    let mixed=['zokir','5','hayot',4,5];
    mixed[0]=4;
    //mixed.push(true);
}
//3.Objects
{
     let car={
        name:"BMW",
        color:"black",
        model:"X5",
        year:2012
     };
     car.name="Wolkswagen";
     car.year=2015;
     //car.year='23';

     car={
         name:"Chevrolet",
         color:'blue',
         model:'malibu',
         year:2020
     };
}
//4.Explicit types
{
    //Variables
    let name:string;
    let age:number;
    let isBlocked:boolean;

    age=23;
    //age='ad';
    name='zokir';
    isBlocked=true;
    
    let uid:string|number;
    uid=12;
    uid="sdf";

    //Arrays
    let strings:string[]
    strings=['mario','yushi'];

    let mixed:(string|number)[]=[];
    mixed.push('hello');
    //mixed.push(true);
    mixed.push(12);


    //Objects
    let carOne:object;
    carOne={
        name:"BMW",
        color:"black",
        model:"X5",
        year:2012
    };

    let cartwo:{
        name:string,
        color:string,
        model:string,
        year:number
    };

}
//5.Dynamic types
{
    //just change string,boolean or number to "any" keyword.That's all for dynamic type.But this reverse this feature to that of javascript
}
//6.Functions
{
    let greet:Function;

    greet=():void=>{
        console.log("Hello,Zokir");
    }

    //greet();

    const add=(a:number,b:number,c:number|string=5):number=>{
        console.log(a+b);

        return a+b;
    }

    //const a=add(10,20,30);
   


}
//7.Aliases
{
    type StringOrNum=string|number;
    type objWithName={name:string,uid:StringOrNum}

    let logdetails=(uid:StringOrNum,item:string)=>{
        console.log(`${item} has a uid of ${uid}`); 
    }
   // logdetails(12,"apple");

    let greet=(user:objWithName)=>{
        console.log(`hello,${user.name}`);
    }
    let user={
        name:"Zokir",
        uid:12
    }
    //greet(user)
}
//8.Function Signatures
{
    //example 1
    let greet:(a:string,b:string)=>void;

    greet=(name:string,greeting:string)=>{
        console.log(`${name} is saying ${greeting}`);
        
    }
    //example 2
    let calc:(a:number,b:number,c:string)=>number;

    calc=(numOne:number,numTwo:number,action:string)=>{
        if(action === 'add')
        {
            return numOne+numTwo;
        }
        else
        {
            return numOne-numTwo;
        }
    }

    //example 3
    let logdetails:(obj:{name:string,age:number})=>void;

    logdetails=(ninja:{name:string,age:number})=>{
        console.log(`${ninja.name} is ${ninja.age} years old`)
    }
}