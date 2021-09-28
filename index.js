// new section - switch statements

let role;

switch (role) {
    case 'guest':
        console.log('Guest user');
        break;
    case 'Moderator':
        console.log('Moderator User');
        break;
    case 'Super':
        console.log('Super User')
        break;
    default:
        console.log('Unknown User')
}

console.log('new section');

// new section - loop

for (let i = 0; i < 20; i++) {
    if (i % 2 == 0) console.log(i);
}

console.log('new section');

// new section - while loop

// let i = 0;

// while (i <= 10) {
// if (i % 2 == 0) console.log(i, "is even");
// i++;
// }

console.log('new section');

// new section - do while

// let i = 0;

// do {
//     if (i % 2 == 0) console.log(i, "is even");
//     i++;
// } while (i <= 10);

console.log('new section');

//  for-in

const person = {
    name: 'Josh',
    age: 32
};

for (let x in person) {
    console.log(x, person[x]);
}

let colours = ['Red', 'Blue', 'Yellow', 'Green']

for (let i in colours) {
    console.log(i, colours[i])
}

console.log('new section');

// for-of 

for (let x of colours) {
    console.log(x)
}

console.log('new section');

// break and continue

let i = 0;

while (i <= 10) {
    if (i % 2 == 0) console.log(i);
    i++;
    continue;
}

console.log('new section');

// exercise

function maxOfTwo(one, two) {
    return (one > two) ? one : two;
}

console.log(maxOfTwo(15, 15))

console.log('new section');

function isLandscape(width, height) {
    return (width > height);
}

console.log(isLandscape(600, 800))

console.log('new section');

const output = fizzBuzz(14);
console.log(output);

function fizzBuzz(input) {
    if (typeof input !== 'number')
        return NaN;

    if ((input % 3 === 0) && (input % 5 === 0))
        return 'FizzBuzz';

    if (input % 3 === 0)
        return 'Fizz';

    if (input % 5 === 0)
        return 'Buzz';

    return input;
}

console.log('new section');

function checkSpeed(speed) {

    const speedLimit = 70;
    const kmPerPoint = 5;

    if (speed <= speedLimit) {
        console.log("Ok")
    } else {
        let points = Math.floor((speed - speedLimit) / kmPerPoint);
        console.log(points);
        if (points >= 12) {
            console.log('Banned')
        } else console.log("points: ", points)
    }
}

checkSpeed(83)

console.log('new section');

// new section

showNumbers(10)

function showNumbers(limit) {
    for (let i = 0; i <= limit; i++) {
        if (i % 2 === 0) {
            console.log(i + " Even")
        } else console.log(i + " Odd")
    }
}

console.log('new section');

// new section

function countTruthy(array) {
    let count = 0;
    for (let value of array)
        if (value)
            count++;
    return count;
}

let array = ["yes", "no", 1, 2, '', false, true, "Josh"]

countTruthy(array)

console.log('new section prop');

// new section

const movie = {
    title: "Yesman",
    releaseYear: 2021,
    rating: 8.5,
    director: "Josh",
    genre: "comedy"
}

function showProperties(movie) {
    for (let x in movie) {
        if (typeof movie[x] === 'string') console.log(movie[x])
    }
}

showProperties(movie)

console.log('new sectiona');

// new section - factory function
// function within an object doesnt need function keep word 

function createCircle(radius) {
    return {
        radius,
        draw() {
            console.log('Draw')
        }
    };
}

circle1 = createCircle(1)
console.log(circle1)

console.log('new section');

// new section - constructor function

function Circle(radius) {
    this.radius = radius;
    this.draw = function () {
        console.log('draw');
    }
}

const circle = new Circle(1);

console.log('new section');

// primatives (str, nu, bool etc) vs objects (functions, obj, arrays)

// primatives are copied by there value
// this means that when you print the value, it stays the same

let value = 10

function changeValue(value) {
    value++;
}

changeValue(value)
console.log(value)

// the value stays as 10 even though its incremented by 1 in the function
// if i change value to an object, it would change as the address is whats
// refered to on the variable

let value1 = {
    num: 10
}

function changeValue(value1) {
    value1.num++;
}

changeValue(value1)
console.log(value1)

console.log('new section');

// new sections - closing objects/values

// spread operator ...*obj*

const another = {
    ...circle
}
console.log(another)

// this takes the values in the circle obj and adds to this new 'another' obj

const anotherOne = {};
for (let key in circle) {
    anotherOne[key] = circle[key]
}
console.log(anotherOne)

// another way of doing it

const anotherTwo = Object.assign({}, circle)

// ^^^^ this also is another way of cloning values in obj ^^^^

console.log('new section');

// built in objects

// math, 

const cealing = Math.ceil(2.5)
const random = Math.random()
const minimum = Math.min()

// there are others that are pre built and useful when working with numbers

console.log(cealing)
console.log(random)

function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}

const summ = getRandomArbitrary(2, 5)
const summm = Math.ceil(summ)
console.log(summm)

console.log('new section');

// new sections - strings

const message = 'Hi' // string primative

const stringObj = new String('Hi') // string obj

// message.length() // this will turn primative string into obj

console.log('new section');

// template literals

const myName = 'Josh'

const newMessage =
    `Hi ${myName},

Thanks for subscribing

Best, Josh`

console.log(newMessage)

console.log('new section');

// date

const now = new Date()

console.log(now)

const newNow = now.toISOString() // this is typically used within applications
// talking to back ends

console.log(newNow)

console.log('new section');

// exercise

const address = {
    street: 'Tangier Road',
    city: 'Portsmouth',
    zip: 'PO1 1SD'
}

function showAddress(address) {
    for (let key in address) {
        console.log(key, address[key])
    }
}

showAddress(address)

// exercise 2 

// factory func

function createAddress(street, city, zip) {
    return {
        street: street,
        city: city,
        zip: zip
    }
}

let myAddress = createAddress('a', 'b', 'c')

console.log(myAddress)

// constructor func

function AddAddress(street, city, zip) {
    this.street = street;
    this.city = city;
    this.zip = zip
}

let myAddress2 = new AddAddress('d', 'e', 'f')
console.log(myAddress2)

// execise

let priceRange = [{
        label: '£',
        tooltip: 'Inexpensive',
        minPerPerson: 0,
        maxPerPerson: 10
    },
    {
        label: '££',
        tooltip: 'Moderate',
        minPerPerson: 11,
        maxPerPerson: 20
    },
    {
        label: '£££',
        tooltip: 'Expensive',
        minPerPerson: 21,
        maxPerPerson: 1000
    }
]

let restaurant = [{
    averagePerPerson: 5
}]

console.log('new section - arrays');

// arrays

const numbers = [1, 2, 3, 4];

numbers[4] = 5;

numbers.push(6) // adds element to end
numbers.unshift(0) // adds elemnt to beginning

console.log(numbers)

numbers.splice(2, 3) // cuts the array

console.log(numbers)

// call back function (predicate function)

const courses = [{
        id: 1,
        name: 'a'
    },
    {
        id: 2,
        name: 'b'
    }
];

const course = courses.find(function (course) {
    return course.name === 'a';
})

console.log(course);

// arrow function - same as above but better

const course1 = courses.find(course => course.name === 'a');

console.log(course1)

// combining arrays

const first = [1, 2, 3];
const second = [4, 5, 6];

const combined = first.concat(second)

console.log(combined)

// doing the same with spread operator

const combined1 = [...first, ...second]

console.log(combined1)

// iterating arrays

for (let num of first) {
    console.log(num)
}

// another way to do this is with forEach
// this uses a predicate (call back function)

first.forEach(function (num) {
    console.log(num)
})

// using arrow func
first.forEach(i => console.log(i)); // you can also add the index with the below syntax

first.forEach((i, index) => console.log(index, i));

// joining arrays + splitting string into array items

const joined = first.join(',')
console.log(joined)

const messag = "this is my first message";
const brokenUp = messag.split(' ')
console.log(brokenUp)

console.log(brokenUp[0])

// sorting arrays

let numz = [3, 6, 7, 1, 4]

numz.sort();
console.log(numz)

numz.reverse();
console.log(numz)

// sorting objects (moved to upper case to overlook ascii table values A,a,B,b etc)

const courzes = [{
        id: '1',
        name: 'Python'
    },
    {
        id: '2',
        name: 'JavaScript'
    }
];
courzes.sort(function (a, b) {
    const nameA = a.name.toLowerCase;
    const nameB = b.name.toLowerCase;

    if (nameA < nameB) return -1;
    if (nameA > nameB) return 1;
    return 0
});

console.log(courzes)

// checking elements in array with call back function

let numzz = [3, 6, 7, 1, 4]; // this is now fals due to the -2 being in it

const allPositive = numzz.every(function (value) {
    return value >= 0;
});

console.log(allPositive)

// filtering array

const filters = numzz.filter(function (value) {
    return value >= 0;
}); // you could also use an arrow func =>

console.log(filters)

// mapping an array - mapps array elements to something else, like strings (html elements)

const itemz = filters.map(n => '<li>' + n + '</li>')

const html = itemz.join(' ')

console.log(html)

// you can use map and filter in a chain

const itemz1 = [1, -2, 6, 3, 8, 4];

const chaining = itemz1
    .filter(n => n >= 0) // filters only positive numbers
    .map(n => ({
        value: n
    })); // maps numbers to value key in object - both using arrow func

console.log(chaining)

// reducing an array + adding its values

let sum = 0;
for (let i of itemz1)
    sum += i;

console.log(sum)

const summmm = itemz1.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
}, 0);

// how this works
// a = 0, c = 1 => a = 1
// a = 1, c = -2 => a = -1
// a = -1, c = 6 => a = 4 and so on 

console.log(summmm)

console.log('new section - functions');

// functions

// function decleration

function walk() {
    console.log('walk');
}

// function expression

let run = function () {
    console.log('run')
};

// you call call the function or set it as another variable
run();
let move = run;

// hoisting

// its the process of function declerations moving to the top of the code when rendered.

// arguments - if you want to pass more than 2 parameters into a function

function mySum() {
    let total = 0;
    for (let value of arguments)
        total += value;
    return total;
}

console.log(mySum(1, 2, 3, 4, 5, 6, 14))

// cleaner way to imprlement the above with the REST (...) operator.
// it is same syntax as spread operator (used on arrays) but when passed as a func parameter its REST operator

function mySumm(...args) {
    return args.reduce((i, x) => i + x);
}

console.log(mySumm(1, 3, 5, 6, 14))

// default parameters

function interestRate(deposit, rate, years) {
    rate = rate || 3.5;
    years = years || 5;
    const sum = deposit * rate / 100 * years; // or i could use return keyword without console.log
    console.log(sum)
}

interestRate(10000, 3, 10)

// getters and setters (get + set)

const pperson = {
    firstName: 'Josh',
    lastName: 'Callaway',
    get fullName() {
        return `${pperson.firstName} ${pperson.lastName}`
    },
    set fullName(value) {
        if (typeof value !== 'string') {
            throw new Error('Not a string');
        }
        const parts = value.split(' ');
        if (parts.length !== 2) {
            throw new Error('First and Last name needed')
        }
        this.firstName = parts[0];
        this.lastName = parts[1];
    }
};

console.log(pperson)

try {
    pperson.fullName = 'Joshua Callaway'
} catch (e) {
    console.log(e)
    alert(e)
}

console.log(pperson)