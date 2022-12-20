console.error("You made a mistake");
console.warn("This is a warn");
console.clear();

console.time("For loop");
for(let i=0; i<10000; i++){
}
console.timeEnd("For loop");

let i= 0;
console.time("While loop");
while(i<10000){
    i++
}
console.timeEnd("While loop");

console.table(["Audi", "Volvo", "Ford"]);
for(i=0; i<5; i++){
    console.count("myLable");
}

console.log("Hello World");
console.group("This time inside a group!");
console.log("Hello group");
console.groupEnd();
console.log("Hello Again")