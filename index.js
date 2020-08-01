// This is my first js code
// ok from my understanding HTML shows shit, while JS lets you interact with the shit, basically like a blind person and a deaf person, they need eachother to work properly
/// console.log('Hello World');


// so i guess 'let' is the same as 'var'? idk i hope the tutorial isnt wrong i mean it IS from 2018 EDIT: it says in the title "[2020]" so i rEALLY hope it isnt outdated

/// let name = 'Mosh';
/// console.log(name);

// rules for naming variables:
// Cannot be a reserved keyword (ex. if, else, var (WHY IS VAR HERE WEREN'T WE SUPPOSED TO USE LET?), basically if it shows up as colored or in autotext dont use it)
// Should be meaningful (lmfao yea sure HAH)
// Cannot start with number
// Cannot contain or space or hyphen (-)
// Are case sensitieve (let firstName ≠ FirstName)

/// let firstName = 'Mosh';
/// let lastName = 'Pogchamp';


// if no need for reassing use const, if u think u wanna reassign use let
/// const interestRate = 0.3;
/// interestRate = 1
/// console.log(interestRate)

// '{}' = object literal
/// const person = {
///    name: 'Mat',
///    age: 30
/// };

// Dot Notation
/// person.name = 'John';

// Bracket Notation
/// person['name'] = 'Mary';

// i understand nothing from the brackets and the dots but i think the dot is a constant while the brackets are dynamic

/// console.log(person.name);

/// let name = 'mat'; // String Literal
/// let age = 30; // Number Literal
/// let isApproved = true; // Boolean Literal
/// let firstName = undefined; // undefined is the same as null just less popular, lmao what a loser
/// let selectedColor = null; // use null if someone doesnt choose anything then keep at null, if they do then well, change the null, lmfao 

/// let selectedColors = ['red', 'blue']; // Array Literal
/// selectedColors[2] = 1;
/// console.log(selectedColors.length);


// Performing a task
/// function greet(name, lastName) {
///    console.log('Hello ' + name + ' ' + lastName); // body of this function
/// }

/// greet('John', 'Lezbowski');

// Calculating a value
/// function square(number) {
///    return number * number
/// }


/// console.log(square(2))