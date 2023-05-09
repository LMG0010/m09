let myObject = {
    title: "Elden Ring",
    publisher: 'FromSoftware Inc., Bandai Namco Entertainment',
    year: 2022,
    price: 2399.95,
    isAvailable: true
}

console.log(myObject);
// accessing array items: array[index]
// in objects, keys and values make up the object property. to access the object properties:
// object.property
console.log(myObject.title);

/* 
    objects are data types that allows us to store collections of key-value pairs.

    They can reperesent real-world properties such as person, care or more abstract consepts

    object literal = {}
*/

console.log(myObject.publisher);

// reassigning array items: array[index] = newvalue
// in object properties:
myObject.title = 'Armored Core VI';
console.log(myObject.title);
myObject.year = 2023;
console.log(myObject.isAvailable,myObject.publisher,myObject.title);


// onjects can not only have primitive values, they can also have arrays and objects within the object.

let course = {
    title: 'Philosophy',
    description: 'Learn Life',
    price: 5000,
    isActive: true,
    instructor: ['Mr. Johnson', 'Ms. Smith', 'Mr. Frances']
}

console.log(course);
//accessing array inside course.
console.log(course.instructor);
// accessing items of array
console.log(course.instructor[1]);
// delete array items
course.instructor.pop();
console.log(course.instructor);

// add another instructor
course.instructor.push('Mr. Freeman');
console.log(course.instructor);

let isPresent = course.instructor.includes('Mr. Johnson');
console.log(isPresent);
// if you reassign a value to a property that does not exist, you are able to add a new property to the object.

let instructor = {};
instructor.name = 'Mr. Joe'
console.log(instructor);


// Mini Activity 2
instructor.age = 56;
instructor.gender = 'Male';
instructor.department = 'Humanities';
instructor.courses = ['Philosophy 101', 'Humanities 201'];
instructor.salary = 50000;
instructor.address = {
    street: '#1 Maginhawa St.',
    city: 'Quezon City',
    country: 'PH'
}
//accessing street object property of instructor
console.log(instructor.address.street);
console.log(instructor);

// create objects using a constructor function

/* 
 In JS, a constructor function is a special type of function thst is used to create an initialized object: it usually used in conjunction with 'new' keyword to create new instance of an object on a template or blueprint.

 an instance of an object is a unique occurrence of an object that is created from a constructor function
    -when 'new' keyword
        - it create a 'new object' and initializes it with the properties and methods defined in the constructor
             - 'new object' is called instance of an object.


    create reusable function to create several objects with similar data structure or keys

    this is useful for creating multiple instance of objects

    'this' keyword when used in a constructor function will allowe us to assign a new object's properties and associating with the values received from a constructor fuction's parameter

    constructors are like blueprints to creat our object from.
*/ 

function Superhero (name, superpower, powerLevel) {
    this.name = name;
    this.superpower = superpower;
    this.powerLevel = powerLevel;
}

let superhero1 = new Superhero('Saitama', 'One Punch', 300000)
console.log(superhero1);

let superhero2 = new Superhero('Wonder Woman', 'Super Strength', 250000);
console.log(superhero2)


// Mini Activity 3

function Constructor1 (name,brand,price) {
    this.name = name;
    this.brand = brand;
    this.price = price;
}

let laptop1 = new Constructor1('ROG', 'Asus', 90000);
let laptop2 = new Constructor1('Matebook', 'Huawei', 20000);
console.log(laptop1);
console.log(laptop2);


// without new keyword, we cannot instantiate a new laptop object from our constructor, instead we can only invoke/call it.

/* 
    Object Methods

        A method is a function which is a property of an object

        in essence it is still a function, however it is now associated with an object.

        to invoke or call the function we have to access the property which contains our functions
*/

let person = {
    name: 'Shady',
    talk: function() {
        // when 'this' keyword is used by a function within an object it refers to the object where the functtion is.
        console.log(this);
        console.log(`Hi my name is, what? My name is who? ${this.name}`);
    }
}

person.talk();

let person2 = {
    name: 'Jungkook',
    age: 26,
    address: {
        city: 'Austin',
        state: 'Texas',
        country: 'USA'
    },
    friends: ['Jin', 'V', 'Jimin'],
    introduce: function() {
        console.log(`Hi my name is ${this.name}. I am ${this.age} years old. I live in ${this.address.city}, ${this.address.state} and my friends are ${this.friends}`);
    },
    addFriend: function(str) {
        //console.log(str);
        this.friends.push(str);
        console.log(`my friends are now ${this.friends}`);
    },
    greet: function(obj) {
        //console.log(obj);
        // good day <name or person>
        console.log(`Good Day, ${obj.name}!`)
    }
}

person2.introduce();
person2.addFriend('Suga');
person2.introduce();
person2.greet(person);

function Constructor2 (name,address,age) {
    this.name = name;
    this.address = address;
    this.age = age;
    this.isGreeted = false;
    this.greet = function(personToGreet) {
        console.log(`Hello I'm ${name}, nice to meet you ${personToGreet.name}!`);
        // can we reassign the value of the arguments property?
        //yes. person 4 is global and it was created with the let keyword
        personToGreet.isGreeted = true;
    }
}

let person3 = new Constructor2('John Doe', 'East Ave, QC, PH', 32);
let person4 = new Constructor2('Jane Doe', 'West Ave, AZ, USA', 29);

console.log(person3);
console.log(person4);

let person5 = new Constructor2('Jimin', 'NY', 25);
console.log(person5);
let person6 = new Constructor2('Jane', 'AZ', 45);
person5.greet(person6);
console.log(person6);


//arrays are special objects with method that allow us to manipulate them.


/* 
 [Scenario] Real world application of objects
 1. create a game that would have several pokemon interactions with each other.
 2. Every pokemon would have the same set of stats, properties, and functions.
*/

// Using object literals to create multiple kinds of pokemons would be time consuming.

let myPokemon = {
    name: 'Pikachu',
    level: 3,
    health: 100,
    attack: 50,
    tackle: function() {
        console.log(`This Pokemon tackled targetPokemon`);
        console.log(`targetPokemon's health is now reduced to _targetPokemonHealth_`);
    },
    faint: function() {
        console.log(`Pokemon fainted!`);
    }
}

console.log(myPokemon);

// create an object constructor instead to help with this process.

function Pokemon(name,level) {
    //properties
    this.name = name;
    this.level = level;
    this.health = 2 * level;
    this.attack = level;
    //methods
    this.tackle = function(target) {
        console.log(`${this.name} tackled ${target.name}`);
        console.log(`${target.name}'s health is now reduced to _targetPokemonHealth_`);
        this.faint = function() {
            console.log(`${this.name} fainted!`);
        }
    }
}

let pikachu = new Pokemon('Pikachu', 16);
let rattata = new Pokemon('Rattata', 8);

pikachu.tackle(rattata);