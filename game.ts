#! /usr/bin/env node
import inquirer from "inquirer"
class player{
    name:string;
    fuel:number = 200;
    constructor(name:string){
        this.name = name;
    }
    fuelDecrease(){

        let fuel =this.fuel -30 
        this.fuel = fuel
    }
fuelIncrease(){
    this.fuel = 200
}

}

class opponent{
    name:string;
    fuel:number = 200;
    constructor(name:string){
        this.name = name;
    }
    fuelDecrease(){

        let fuel =this.fuel -30 
        this.fuel =fuel
    }

}

let player0 = await inquirer.prompt([{
name: "name",
type: "input",
message: "Enter your name:"
}

])
let opponent0 = await inquirer.prompt([
    {
        name: "select",
        type: "list",
        message: "select your opponent",
        choices: ["tiger","fox","lion"]


}])
let p1 = new player(player0.name)
let o1 = new opponent(opponent0.select)

do{if (opponent0.select == "tiger") {
    let ask = await inquirer.prompt([{
name: "opt",
type: "list",
message: "What would you like to do",
choices:["attack","rest","run for life"]

    }]);
    if(ask.opt == "attack"){
        let num = Math.floor(Math.random ()* 2)
        if(num > 0){
p1.fuelDecrease()
console.log(`${p1.name} fuel is ${p1.fuel}`)
console.log(`${o1.name} fuel is ${o1.fuel}`)

if(p1.fuel <= 0){
    console.log("you  loose, better luck next time");
    process.exit()
}
        

        }
        if(num <= 0){
            o1.fuelDecrease()
console.log(`${p1.name} fuel is ${p1.fuel}`)
console.log(`${o1.name} fuel is ${o1.fuel}`)
if(o1.fuel <= 0){
    console.log("you win");
    process.exit()


        }
    }
if(ask.opt =="rest"){
p1.fuelIncrease()
console.log(`your fuel is now ${p1.fuel}`);

}
if(ask.opt == "run for life"){
    console.log("you  loose, better luck next time");
    process.exit()


}
}
}

if (opponent0.select == "fox") {
    let ask = await inquirer.prompt([{
name: "opt",
type: "list",
message: "What would you like to do",
choices:["attack","rest","run for life"]

    }]);
    if(ask.opt == "attack"){
        let num = Math.floor(Math.random ()* 2)
        if(num > 0){
p1.fuelDecrease()
console.log(`${p1.name} fuel is ${p1.fuel}`)
console.log(`${o1.name} fuel is ${o1.fuel}`)

if(p1.fuel <= 0){
    console.log("you  loose, better luck next time");
    process.exit()
}
        

        }
        if(num <= 0){
            o1.fuelDecrease()
console.log(`${p1.name} fuel is ${p1.fuel}`)
console.log(`${o1.name} fuel is ${o1.fuel}`)
if(o1.fuel <= 0){
    console.log("you win");
    process.exit()


        }
    }
if(ask.opt =="rest"){
p1.fuelIncrease()
console.log(`your fuel is now ${p1.fuel}`);

}
{if (opponent0.select == "tiger") {
    let ask = await inquirer.prompt([{
name: "opt",
type: "list",
message: "What would you like to do",
choices:["attack","rest","run for life"]

    }]);
    if(ask.opt == "lion"){
        let num = Math.floor(Math.random ()* 2)
        if(num > 0){
p1.fuelDecrease()
console.log(`${p1.name} fuel is ${p1.fuel}`)
console.log(`${o1.name} fuel is ${o1.fuel}`)

if(p1.fuel <= 0){
    console.log("you  loose, better luck next time");
    process.exit()
}
        

        }
        if(num <= 0){
            o1.fuelDecrease()
console.log(`${p1.name} fuel is ${p1.fuel}`)
console.log(`${o1.name} fuel is ${o1.fuel}`)
if(o1.fuel <= 0){
    console.log("you win");
    process.exit()


        }
    }
if(ask.opt =="rest"){
p1.fuelIncrease()
console.log(`your fuel is now ${p1.fuel}`);

}
if(ask.opt == "run for life"){
    console.log("you  loose, better luck next time");
    process.exit()

}
    }
}
}


if(ask.opt == "run for life"){
    console.log("you  loose, better luck next time");
    process.exit()

}
    }
}
}
while(true)
