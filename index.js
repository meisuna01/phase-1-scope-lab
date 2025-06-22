// Write your solution in this file!
// Declare a global customerName
var customerName = 'bob';

// 1. Make customerName upper-case
function upperCaseCustomerName() {
  customerName = customerName.toUpperCase();
}

// 2. Create / update bestCustomer in global scope
function setBestCustomer() {
  bestCustomer = 'not bob';   // becomes global because it’s undeclared here
}

// 3. Overwrite bestCustomer with a new value
function overwriteBestCustomer(newFavorite) {
  bestCustomer = newFavorite;
}

// 4. A constant we’re **not** allowed to change
const leastFavoriteCustomer = 'someone';

// 5. Intentionally throws when you try to reassign the constant
function changeLeastFavoriteCustomer() {
  // This reassignment triggers: “Assignment to constant variable.”
  leastFavoriteCustomer = 'someone else';
}
