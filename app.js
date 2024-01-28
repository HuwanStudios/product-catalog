//Prerequisite 
//  This catalog allows a user to add
//  - a product's name
//  - a model
//  - a cost
//  - a quantity


// Approach 1 -
// Create an array to hold the inventory - think`let`)
// PART 1
let inventory = [];
console.log(inventory);
// console.log(inventory[0]);


const productsName = prompt("Enter  ");
const model = prompt("Enter  ");
const cost = prompt("Enter  ");
const qty = prompt("Enter  ");

inventory.push(productsName);
inventory.push(model);
inventory.push(cost);
inventory.push(qty);
console.log(productsName);
console.log(model);
console.log(cost);
console.log(qty);



const productsName2 = prompt("Enter  ");
const model2 = prompt("Enter  ");
const cost2 = prompt("Enter  ");
const qty2 = prompt("Enter  ");

inventory.push(productsName2);
inventory.push(model2);
inventory.push(cost2);
inventory.push(qty2);
console.log(productsName2);
console.log(model2);
console.log(cost2);
console.log(qty2);


const productsName3 = prompt("Enter  ");
const model3 = prompt("Enter  ");
const cost3 = prompt("Enter  ");
const qty3 = prompt("Enter  ");

inventory.push(productsName3);
inventory.push(model3);
inventory.push(cost3);
inventory.push(qty3);
console.log(productsName3);
console.log(model3);
console.log(cost3);
console.log(qty3);


const productsName4 = prompt("Enter  ");
const model4 = prompt("Enter  ");
const cost4 = prompt("Enter  ");
const qty4 = prompt("Enter  ");

inventory.push(productsName4);
inventory.push(model4);
inventory.push(cost4);
inventory.push(qty4);
console.log(productsName4);
console.log(model4);
console.log(cost4);
console.log(qty4);


const productsName5 = prompt("Enter  ");
const model5 = prompt("Enter  ");
const cost5 = prompt("Enter  ");
const qty5 = prompt("Enter  ");

inventory.push(productsName5);
inventory.push(model5);
inventory.push(cost5);
inventory.push(qty5);
console.log(productsName5);
console.log(model5);
console.log(cost5);
console.log(qty5);


let productCatalog = [
  [productsName, model, cost, qty],
  [productsName2, model2, cost2, qty2],
  [productsName3, model3, cost3, qty3],
  [productsName4, model4, cost4, qty4],
  [productsName5, model5, cost5, qty5],

];
console.log(productCatalog);

// // With a loop, check for the size of your array
for (
  myChecker = 0;
  myChecker < 5;
  myChecker = myChecker + 1
) {

  console.log(myChecker);
  console.log(productCatalog[myChecker]);
};


// for (let inventory){}
//alert
// alert(productCatalog[myChecker])