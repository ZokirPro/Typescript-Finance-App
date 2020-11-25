import { Invoice } from './classes/Invoice.js' // for importing modules
import { Payment } from './classes/Payment.js' // for importing modules
import {HasFormatter} from './interfaces/HasFormatter.js';
import { ListTemplate } from './classes/ListTemplate.js' // for importing modules

/****************************************               PROJECT                *********************************/
const form=document.querySelector(".new-item-form") as HTMLFormElement;

const ul=document.querySelector("ul")!;
const list=new ListTemplate(ul);
//inputs
const type=document.querySelector("#type") as HTMLSelectElement;
const tofrom=document.querySelector("#tofrom") as HTMLInputElement ;
const details=document.querySelector("#details") as HTMLInputElement ;
const amount=document.querySelector("#amount") as HTMLInputElement ;
//event listener for submit
form.addEventListener('submit',(e:Event)=>{
    e.preventDefault();
    let doc:HasFormatter;
    let values:[string,string,number]=[tofrom.value,details.value,amount.valueAsNumber];
    if(type.value==='invoice')
    {
        doc=new Invoice(...values);
    }
    else
    {
        doc=new Payment(...values);
    }
    list.render(doc,type.value,'end');
})

//DOM&Type Casting
{
    /* const anchor=document.querySelector("a")!;
    /* if(anchor)
    {
        console.log(anchor.href);
    } 
    console.log(anchor.href); */
}
//Classess
{
    
    
    const invOne=new Invoice("Hayot","dinner",12000);
    const invTwo=new Invoice("Sardor","book",30000);
    
    //console.log(invOne,invTwo);
    
    let invoices:Invoice[]=[];
    
    invoices.push(invOne);
    invoices.push(invTwo);

    /*invoices.forEach(inv=>{
        console.log(inv.format());
    });*/
    
}
//Interfaces
{
    interface IsPerson{
        name:string;
        age:number;
        speak(text:string):void;
        spend(a:number):number
    }

    const me:IsPerson={
        name:"Zokir",
        age:21,
        speak(text:string)
        {
            console.log(text);
        },
        spend(amount:number):number
        {
            console.log ('I spent',amount);
            return amount;
        }
    }

    const greet=(me:IsPerson)=>{
        console.log("hello",me.name);
    }
}
//Generics
{
    const addUid=<T extends {name:string}>(obj:T)=>{
        let uid=Math.floor(Math.random()*100);
        return {...obj,uid};
    }

    let docOne=addUid({name:'zokir',age:21});

    interface Resource <T>{
        uid:number,
        resourcename:string,
        data:T
    }

    const docThree:Resource<string>={
        uid:1,
        resourcename:'person',
        data:'book'
    }
    const docFour:Resource<string[]>={
        uid:2,
        resourcename:'person',
        data:['dek','moq']  
    }
}
//Enums
{
    enum ResourceType{BOOK,AUTHOR,NOTEBOOK,FILM,DIRECTOR}

    interface Resource <T>
    {
        uid:number;
        resourceType:ResourceType
        data:T;
    }

    const docOne:Resource<object>=
    {
        uid:1,
        resourceType:ResourceType.BOOK,
        data:{title:"tail of the wind"}
    }
    const docTwo:Resource<string>=
    {
        uid:1,
        resourceType:ResourceType.AUTHOR,
        data:'yoshi'
    }
}
//Tuples
{
    let tup:[string,string,number];
    tup=['zokir','hayot',12];
    //tup[0]=12;
}

