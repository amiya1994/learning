// TYPE DECLARATIONS

var num: number = 5;

// [Strong Typing] of TS does not allow any other type to be assigned
// num = "this is string";

/* Types
  1. number
  2. string
  3. boolean
  4. Array
    i. number[]       => array of number
    ii. Array<string> => array of strings
  5. Tuples
    i. [boolean, string]
    ii. [number, number, number]
  6. {} - object
    i. {name: string, age: number} => object
    ii. {[key: string]: number}    => dictionary
  7. enum { Red = 0, Blue, Green}
  8. function
    i. (param: number) => string    # numeric param and string return type
    ii. () => number                # no params and numeric return type
  9. any => are not type checked
  10. void (null and undefined)
  11. never
  12. null

*/

// CASTING
let var2: unknown = "yes"
let var1: number = (<string> var2).length
var1 = (var2 as string).length


// CLASS
class Greater {
    greeting: string;

    constructor(message: string) {
        this.greeting = message;
    }

    greet(): string {
        return this.greeting;
    }
}

let greeter = new Greater("Hello, world!");
console.log(greeter.greet());
