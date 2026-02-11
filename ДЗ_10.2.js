var str = "Wonderful, Happiness, Task, Joyful, Apple, Time, Григорович, Шевченко Тарас"
var re = /\b[^\s,Aa]{6,}\b/g

console.log(str.match(re));   







/*console.log("Wonderful".match(re))
console.log("Joyful".match(re))




console.log("Happiness".match(re))
console.log("Time".match(re))
console.log("Task".match(re))
console.log("Apple".match(re))
console.log("Тарас".match(re))
console.log("Шевченко".match(re))
console.log("Григорович".match(re))*/
