/* function addnumber(a: number, b: number): number {
    return a + b;
}

const num1: number = 200;
const num2: number = 10;

const sum: number = addnumber(num1, num2);
console.log(`The sum of ${num1} and ${num2} is ${sum}`); */
// Variables, Data Types, and Operators
var num1 = 10;
var num2 = 20;
var result = num1 + num2;
console.log("".concat(result));
//integer
var num = 152003;
//float
var float = 125.55;
//string
var Name = "Harsh";
//boolean
var isTrue = true;
//null
var emptyvalue = null;
//undefine
var undefine;
//object
var object = {
    name: "harsh",
    address: "kalyan",
    age: 20
};
console.log("".concat(result));
console.log("".concat(num));
console.log("".concat(float));
console.log("".concat(Name));
console.log("".concat(isTrue));
console.log("".concat(emptyvalue));
console.log("".concat(undefine));
console.log("".concat(object));
//arithmetic
var a = 200;
var b = 10;
var sum = a + b;
var difference = a - b;
var multiply = a * b;
var divide = a / b;
var remainder = a % b;
console.log("".concat(sum));
console.log("".concat(difference));
console.log("".concat(multiply));
console.log("".concat(divide));
console.log("".concat(remainder));
//comparison
var m = 300;
var n = 200;
var isEqual = m == n;
var isNotEqual = m != n;
var isGreaterThan = m > n;
var isLessThan = m < n;
console.log("".concat(isEqual));
console.log("".concat(isNotEqual));
console.log("".concat(isGreaterThan));
console.log("".concat(isLessThan));
//logical
var istrue = true;
var isFalse = false;
var andResult = isTrue && isFalse;
var orResult = isTrue || isFalse;
var notResult = !isTrue;
console.log("".concat(andResult));
console.log("".concat(orResult));
console.log("".concat(notResult));
//concatenate 
var firstname = "Harsh";
var fullname = "".concat(firstname, " Dubey");
console.log("".concat(fullname));
//Use template literals to create a dynamic message using variables. in typescript
var FirstName = "Harsh";
var LastName = "Dubey";
var age = 20;
var message = "My self ".concat(FirstName, " ").concat(LastName, "! I am ").concat(age, " years old.");
console.log(message);
//Write a function calculatePrice that takes the base price and applies a discount based on user type (regular, premium).
function calculateprice(basePrice, userType) {
    var discountpercentage;
    switch (userType) {
        case "regular":
            discountpercentage = 10;
            break;
        case "premium":
            discountpercentage = 20;
            break;
        default:
            discountpercentage = 0;
    }
    var discountAmount = (basePrice * discountpercentage) / 100;
    var discountedPrice = basePrice - discountAmount;
    return discountedPrice;
}
var basePrice = 100;
var userType = "regular";
var finalPrice = calculateprice(basePrice, userType);
console.log("Final price for a ".concat(userType, " user: $").concat(finalPrice));
//Control Structures and Functions
// if statements
var x = 20;
if (x > 25) {
    console.log("x is greater than 5");
}
else if (x === 5) {
    console.log("x is equal to 5");
}
else {
    console.log("x is less than 5");
}
//for loops
for (var i_1 = 0; i_1 < 7; i_1++) {
    console.log("".concat(i_1));
}
// while loops
var i = 0;
while (i < 7) {
    console.log("".concat(i));
    i++;
}
//do while
var j = 0;
do {
    console.log("".concat(j));
    j++;
} while (j < 7);
//Functiion Declairatins
function harsh(name) {
    return "Hello, ".concat(name);
}
console.log(harsh("Harsh"));
//Function Expressions
var dubey = function (name) {
    return "Hello, ".concat(name);
};
console.log(dubey("Dubeyji"));
// Arrow Functions
var Dubeyji = function (name) { return "Hello, ".concat(name); };
console.log(Dubeyji("harsh"));
//Function Constructors
var add = new Function('a', 'b', 'return a + b');
console.log(add(10, 55));
//Write a function printMultiples that takes a number and prints its multiples from 1 to 10.
function printMultiples(number) {
    for (var i_2 = 1; i_2 <= 10; i_2++) {
        var multiple = number * i_2;
        console.log("".concat(number, " * ").concat(i_2, " = ").concat(multiple));
    }
}
printMultiples(5);
//Implement a recursive function calculateFactorial that calculates the factorial of a number.
function calculateFactorial(n) {
    if (n === 0) {
        return 1;
    }
    else {
        return n * calculateFactorial(n - 1);
    }
}
var number = 5;
var factorial = calculateFactorial(number);
console.log("Factorial of ".concat(number, " is ").concat(factorial));
//Write a higher-order function that takes a function and a parameter, and applies the function multiple times to the parameter.
//copy from chatgpt ....
function applyFunctionMultipleTimes(func, parameter, times) {
    for (var i_3 = 0; i_3 < times; i_3++) {
        parameter = func(parameter);
    }
    return parameter;
}
// Example usage:
function double(x) {
    return x * 2;
}
var initialValue = 2;
var numberOfTimes = 3;
var solv = applyFunctionMultipleTimes(double, initialValue, numberOfTimes);
console.log("Result after applying the function ".concat(numberOfTimes, " times: ").concat(solv));
//Objects and Arrays in JavaScript
//Objects (creating, accessing properties): Learn about object creation and property access in JavaScript.
var person = {
    firstName: "HArsh",
    lastName: "Dubey",
    age: 20,
};
console.log(person.firstName);
console.log(person.lastName);
console.log(person.age);
//Arrays (creating, accessing elements, array methods): Understand arrays and their various methods for data manipulation.
var colors = ["red", "green", "blue"];
console.log(colors[0]);
console.log(colors[1]);
console.log(colors[2]);
colors.push("orange");
var removedFruit = colors.pop();
var subset = colors.slice(1, 2);
console.log(colors);
var color = ["red", "green", "blue"];
color.splice(1, 1);
color.splice(1, 0, "purple");
console.log(color);
var ages = [25, 30, 18, 15, 35];
var adults = ages.filter(function (age) { return age >= 18; });
console.log(adults);
//Create an object representing a book with properties like title , author , and pages .
var book = {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    pages: 180,
};
console.log(book.title);
console.log(book.author);
console.log(book.pages);
//implement a function that takes an array of books and returns a new array sorted by the number of pages
//copy from chatgpt
function sortByPages(books) {
    return books.slice().sort(function (a, b) { return a.pages - b.pages; });
}
var books = [
    { title: "Book A", author: "Author A", pages: 200 },
    { title: "Book B", author: "Author B", pages: 150 },
    { title: "Book C", author: "Author C", pages: 300 },
];
var sortedBooks = sortByPages(books);
console.log(sortedBooks);
//Create an array of numbers and use map and filter to transform and filter the array, respectively
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var doubledNumbers = numbers.map(function (number) { return number * 2; });
console.log("Original Array:", numbers);
console.log("Doubled Numbers:", doubledNumbers);
var evenNumbers = numbers.filter(function (number) { return number % 2 === 0; });
console.log("Even Numbers:", evenNumbers);
//Closures: Understand the concept of closures in JavaScript and their practical applications
function multFn() {
    var mult = 9;
    return function (val) {
        mult = mult * val;
        return mult;
    };
}
var mult = multFn();
console.log(mult(18));
//this Keyword: Learn about the context-binding behavior of the this keyword.
var Person = {
    name: "Harsh",
    Greet: function () {
        console.log("Hello, ".concat(this.name, "!"));
    },
};
Person.Greet();
//TypeScript Advanced Concepts (union types, intersection types, generics): Explore advanced type system features in TypeScript.
//Write a function counter that returns a function. The inner function, when invoked, should increment a counter variable in the outer function's scope.
function counter() {
    var count = 0;
    function increment() {
        count++;
        console.log(count);
    }
    return increment;
}
var myCounter = counter();
myCounter();
myCounter();
myCounter();
//Demonstrate closure behavior by creating multiple counters and invoking them independently.
function Counter() {
    var count = 0;
    return function () {
        count++;
        console.log(count);
    };
}
var counter1 = Counter();
var counter2 = Counter();
counter1();
counter1();
counter2();
counter2();
counter2();
counter1();
//Implement a generic function that takes an array of any type and returns an array containing only unique elements.
//?????
function unique(array) {
    var uniqueSet = new Set();
    for (var _i = 0, array_1 = array; _i < array_1.length; _i++) {
        var item = array_1[_i];
        uniqueSet.add(item);
    }
    return Array.from(uniqueSet);
}
var Numbers = [1, 2, 2, 3, 4, 4, 5];
var uniqueNumbers = unique(Numbers);
console.log(uniqueNumbers);
var fruits = ["apple", "banana", "apple", "orange", "banana"];
var UniqueFruits = unique(fruits);
console.log(UniqueFruits);
//Test the function with different data types (numbers, strings, objects) to ensure type safety.????
function Unique(array) {
    var uniqueSet = new Set();
    for (var _i = 0, array_2 = array; _i < array_2.length; _i++) {
        var item = array_2[_i];
        uniqueSet.add(item);
    }
    return Array.from(uniqueSet);
}
var Numbe = [1, 2, 2, 3, 4, 4, 5];
var UniqueNumbers = unique(Numbe);
console.log(UniqueNumbers);
var fruit = ["apple", "banana", "apple", "orange", "banana"];
var uniqueFruits = unique(fruit);
console.log(UniqueFruits);
var people = [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" },
    { id: 1, name: "Alice" },
];
var uniquePeople = unique(people);
console.log(uniquePeople);
var customObjects = [
    { key: "A", value: 1 },
    { key: "B", value: 2 },
    { key: "A", value: 1 },
];
var uniqueCustomObjects = unique(customObjects);
console.log(uniqueCustomObjects);
