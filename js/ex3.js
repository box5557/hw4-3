/* Q3 */
const r = Number(prompt("Enter the circle radius:"));

// TODO: create the circle object here
let circle = {circumference : 0, area : 0};
circle.circumference = 2 * Math.PI * r
circle.area = Math.PI * (r * r)

console.log("Its circumference is " + circle.circumference.toFixed(2));
console.log("Its area is " + circle.area.toFixed(2));


