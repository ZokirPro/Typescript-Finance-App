import { Invoice } from './classes/Invoice.js'; // for importing modules
import { Payment } from './classes/Payment.js'; // for importing modules
import { ListTemplate } from './classes/ListTemplate.js'; // for importing modules
/****************************************               PROJECT                *********************************/
const form = document.querySelector(".new-item-form");
const ul = document.querySelector("ul");
const list = new ListTemplate(ul);
//inputs
const type = document.querySelector("#type");
const tofrom = document.querySelector("#tofrom");
const details = document.querySelector("#details");
const amount = document.querySelector("#amount");
//event listener for submit
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let doc;
    let values = [tofrom.value, details.value, amount.valueAsNumber];
    if (type.value === 'invoice') {
        doc = new Invoice(...values);
    }
    else {
        doc = new Payment(...values);
    }
    list.render(doc, type.value, 'end');
});
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
    const invOne = new Invoice("Hayot", "dinner", 12000);
    const invTwo = new Invoice("Sardor", "book", 30000);
    //console.log(invOne,invTwo);
    let invoices = [];
    invoices.push(invOne);
    invoices.push(invTwo);
    /*invoices.forEach(inv=>{
        console.log(inv.format());
    });*/
}
//Interfaces
{
    const me = {
        name: "Zokir",
        age: 21,
        speak(text) {
            console.log(text);
        },
        spend(amount) {
            console.log('I spent', amount);
            return amount;
        }
    };
    const greet = (me) => {
        console.log("hello", me.name);
    };
}
//Generics
{
    const addUid = (obj) => {
        let uid = Math.floor(Math.random() * 100);
        return Object.assign(Object.assign({}, obj), { uid });
    };
    let docOne = addUid({ name: 'zokir', age: 21 });
    const docThree = {
        uid: 1,
        resourcename: 'person',
        data: 'book'
    };
    const docFour = {
        uid: 2,
        resourcename: 'person',
        data: ['dek', 'moq']
    };
}
//Enums
{
    let ResourceType;
    (function (ResourceType) {
        ResourceType[ResourceType["BOOK"] = 0] = "BOOK";
        ResourceType[ResourceType["AUTHOR"] = 1] = "AUTHOR";
        ResourceType[ResourceType["NOTEBOOK"] = 2] = "NOTEBOOK";
        ResourceType[ResourceType["FILM"] = 3] = "FILM";
        ResourceType[ResourceType["DIRECTOR"] = 4] = "DIRECTOR";
    })(ResourceType || (ResourceType = {}));
    const docOne = {
        uid: 1,
        resourceType: ResourceType.BOOK,
        data: { title: "tail of the wind" }
    };
    const docTwo = {
        uid: 1,
        resourceType: ResourceType.AUTHOR,
        data: 'yoshi'
    };
}
//Tuples
{
    let tup;
    tup = ['zokir', 'hayot', 12];
    //tup[0]=12;
}
