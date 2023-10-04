// const person = {
//     firstName: 'harsh',
//     lastName: 'Doe',
//     age: 30,
// };
// console.log(person)
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// function Person(firstName, lastName, age) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.age = age;
// }
// const person = new Person('John', 'Doe', 30);
// console.log(person)
// const personPrototype = {
//     greet: function () {
//         console.log(`Hello, my name is ${this.firstName} ${this.lastName}.`);
//     },
// };
//Object Creation: Literal notation, constructor functions, classes, and Object.create().
//Literal Notation:
var person1 = {
    firstName: "harsh",
    lastName: "dubey",
    age: 20,
};
console.log(person1);
//Constructor Functions
function Person2(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
}
var person2 = new Person2("harsh", "Dubey", 20);
console.log(person2);
// classes  ???
//Object.create
var personPrototype = {
    greet: function () {
        console.log("Hello, my name is ".concat(this.firstName, " ").concat(this.lastName, "."));
    },
};
var person4 = Object.create(personPrototype);
person4.firstName = "harsh";
person4.lastName = "dubey";
person4.greet();
//Array Creation and Manipulation: Push, pop, shift, unshift, map, filter, reduce methods, and Array.from().
//push
var numbers1 = [1, 2, 3];
numbers1.push(4, 5);
console.log(numbers1);
//pop
var fruits1 = ['apple', 'banana', 'cherry'];
var removedFruit1 = fruits1.pop();
console.log(removedFruit1);
//shift
var fruits = ['apple', 'banana', 'cherry'];
var removedFruit = fruits.shift();
console.log(removedFruit1);
//unshift
var numbers = [3, 4, 5];
numbers.unshift(1, 2);
console.log(numbers);
//map
var numbers5 = [1, 2, 3];
var squaredNumbers = numbers5.map(function (num) { return num * num; });
console.log(squaredNumbers);
//filter
var numbers6 = [1, 2, 3, 4, 5];
var evenNumbers = numbers6.filter(function (num) { return num % 2 === 0; });
console.log(evenNumbers);
//reduce
var numbers7 = [1, 2, 3, 4, 5];
var sum = numbers7.reduce(function (accumulator, currentValue) { return accumulator + currentValue; }, 0);
console.log(sum);
//arrey.form
var iterable = 'hello';
var charArray = Array.from(iterable);
console.log(charArray);
//Object Creation: Create an object representing a book with properties title, author, pages and a method read() that logs a message
var book = {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    pages: 180,
    read: function () {
        console.log("I have read ".concat(this.title, " by ").concat(this.author, ". It has ").concat(this.pages, " pages."));
    },
};
book.read();
console.log(book);
//Array Creation and Manipulation: Create an array of strings and use filter to get strings of length greater than 5, then use reduce to concatenate these strings.
var strings = [
    "apple",
    "banana",
    "cherry",
    "date",
    "elderberry",
    "fig",
    "grape",
    "honeydew",
];
var filteredStrings = strings.filter(function (str) { return str.length > 5; });
var concatenatedString = filteredStrings.reduce(function (accumulator, currentValue) {
    if (accumulator === "") {
        return currentValue;
    }
    else {
        return accumulator + ", " + currentValue;
    }
}, "");
console.log(concatenatedString);
//Object Methods: Create an object representing a student with properties name and grades. Add a method calculateAverage() that returns the average grade.
var student = {
    name: "my",
    grades: [85, 90, 78, 92, 88],
    calculateAverage: function () {
        if (this.grades.length === 0) {
            return 0;
        }
        var total = this.grades.reduce(function (accumulator, currentGrade) { return accumulator + currentGrade; });
        var average = total / this.grades.length;
        return average;
    },
};
var averageGrade = student.calculateAverage();
console.log("".concat(student.name, "'s average grade is ").concat(averageGrade));
//Arrow Functions: Shorter syntax, lexical this, and immediate return.
var add = function (a, b) {
    return a + b;
};
var addArrow = function (a, b) { return a + b; };
//lexical this
function Person(name) {
    var _this = this;
    this.name = name;
    this.sayHello = function () {
        console.log("Hello, my name is ".concat(_this.name));
    };
}
var person = new Person("Harsh");
person.sayHello();
//immediate return
var double = function (x) {
    return x * 2;
};
var doubleArrow = function (x) { return x * 2; };
console.log(doubleArrow);
//Destructuring: Object and array destructuring, and nested destructuring.
//Object Destructuring
var person8 = {
    firstName: "Harsh",
    lastName: "Dubey",
};
var firstName = person8.firstName, lastName = person8.lastName;
console.log(firstName);
console.log(lastName);
//array destructuring
var colors = ["red", "green", "blue"];
var firstColor = colors[0], secondColor = colors[1], thirdColor = colors[2];
console.log(firstColor);
console.log(secondColor);
console.log(thirdColor);
//nested destructuring
var person9 = {
    Name: "Harsh",
    address: {
        city: "Kalyan",
        country: "Bharat",
    },
};
var Name = person9.Name, _a = person9.address, city = _a.city, country = _a.country;
console.log(Name);
console.log(city);
console.log(country);
//Spread/Rest Operators: Spreading elements, gathering them, and cloning objects/arrays.
//Spread
var arr1 = [1, 2, 3];
var arr2 = __spreadArray(__spreadArray([], arr1, true), [4, 5], false);
console.log(arr2);
//Rest Operator
var _b = [1, 2, 3, 4, 5], first = _b[0], second = _b[1], rest = _b.slice(2);
console.log(first);
console.log(second);
console.log(rest);
//Template Literals: String interpolation, multiline strings, and tagged templates.
//String interpolation
var name1 = "Dubeyji";
var greeting = "Hello, ".concat(name1, "!");
console.log(greeting);
//multiline strings
var multiLineString = "\n  This is a multiline string.\n  It can span multiple lines\n  without the need for line breaks or \\n.\n";
console.log(multiLineString);
//tagged templates
function customTag(strings) {
    var values = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        values[_i - 1] = arguments[_i];
    }
    var result = "";
    for (var i = 0; i < strings.length; i++) {
        result += strings[i];
        if (i < values.length) {
            result += values[i];
        }
    }
    return result.toUpperCase();
}
var name3 = "harsh";
var age = 20;
var taggedResult = customTag(__makeTemplateObject(["Hello, my name is ", " and I am ", " years old."], ["Hello, my name is ", " and I am ", " years old."]), name3, age);
console.log(taggedResult);
//Arrow Functions: Rewrite a function that calculates the volume of a sphere using arrow functions.
var calculateSphereVolume = function (radius) { return (4 / 3) * Math.PI * Math.pow(radius, 3); };
var radius = 5;
var volume = calculateSphereVolume(radius);
console.log("The volume of a sphere with radius ".concat(radius, " is ").concat(volume.toFixed(2)));
//Destructuring: Destructure an object containing movie details and log them separately (title, director, year).
var movie = {
    title: "BhagvatGita",
    director: "Krishna",
    year: 10000,
};
var title = movie.title, director = movie.director, year = movie.year;
console.log("Title: ".concat(title));
console.log("Director: ".concat(director));
console.log("Year: ".concat(year));
//Spread/Rest Operators: Use the spread operator to merge two objects and then use Object.keys() on the merged object to get the keys.
var object1 = { a: 1, b: 2 };
var object2 = { b: 3, c: 4 };
var mergedObject = __assign(__assign({}, object1), object2);
var keys = Object.keys(mergedObject);
console.log(keys);
//Template Literals: Create a template literal for a blog post, including variables for author name, post title, and content.
var authorName = "TulsiDas";
var postTitle = "Ramcharitra Manas";
var postContent = "\nMangal bhavan amangal hari,dravahu sudashrath ajir vihari.\nMangal murati maruti nandan , sakal amngal mul nikandan.\nRam Ram kahi Ram kahi , Ram Ram kahi Ram,\nTanu pari har Raghuvar virah , Rau gye surdham.\nJehi vidhi nath hohi hith mora karhu so begi dash main tora.\n\n  - ".concat(authorName, "\n");
console.log(postContent);
//Advanced Array Methods and Promises
//Promise Creation
//Advanced Array Methods: Create an array of objects representing students. Use find to get the first student with a grade above 90.
var students = [
    { name: 'Harsh', grade: 85 },
    { name: 'Shivam', grade: 92 },
    { name: 'Kiran', grade: 88 },
    { name: 'Prashant', grade: 95 },
];
var studentWithHighGrade = students.find(function (student) { return student.grade > 90; });
if (studentWithHighGrade) {
    console.log("The first student with a grade above 90 is ".concat(studentWithHighGrade.name, "."));
}
else {
    console.log('No student found with a grade above 90.');
}
function delayPromise(milliseconds) {
    return new Promise(function (resolve, reject) {
        if (milliseconds < 0) {
            reject(new Error('Invalid delay time'));
        }
        else {
            setTimeout(function () {
                resolve("Promise resolved after ".concat(milliseconds, "ms"));
            }, milliseconds);
        }
    });
}
//  Promises: Write a function that returns a promise, resolving after a specific time. Use then, catch, and finally to handle the promise.
delayPromise(2000)
    .then(function (result) {
    console.log(result);
})
    .catch(function (error) {
    console.error('Error:', error.message);
})
    .finally(function () {
    console.log('Promise operation complete.');
});
delayPromise(-100)
    .then(function (result) {
    console.log(result);
})
    .catch(function (error) {
    console.error('Error:', error.message);
})
    .finally(function () {
    console.log('Promise operation complete.');
});
