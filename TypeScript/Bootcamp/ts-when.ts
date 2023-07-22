// Type Safety
function double(x: number): number {
    return 2 * x;
}

// double('2'); error is thrown
console.log(double(2));

// Readability
'foo'.slice(1, 2)

// string literal
let myPet = "dog";
//myPet = "dog";

console.log(myPet);

type Species = "dog" | "cat" | "bird";

// function buyPet(pet: Species, name: string) : Pet { /*...*/}

interface Pet {
    species: Species;
    name: String;
    eat(): void;
    walk(): void;
    sleep(): void;
}

interface Cat extends Pet {
    species: "cat";
}

interface Dog extends Pet {
    species: "dog";
}

interface Bird extends Pet {
    species: "bird";
    sing(): void;
}

// function buyPet(pet: "cat", name: String): Cat;
// function buyPet(pet: "dog", name: String): Dog;
// function buyPet(pet: "bird", name: String): Bird;

function buyPet(pet: Species, name: String): Pet {
    if (pet === "cat") {
        return {
            species: "cat",
            name: name,
            eat: function() {
                console.log(`${this.name} eats.`)
            }, walk: function() {
                console.log(`${this.name} walks.`)
            }, sleep: function() {
                console.log(`${this.name} sleeps.`)
            }
        } as Cat
    } else if (pet === "dog") {
        return {
            species: "dog",
            name: name,
            eat: function() {
                console.log(`${this.name} eats.`)
            }, walk: function() {
                console.log(`${this.name} walks.`)
            }, sleep: function() {
                console.log(`${this.name} sleeps.`)
            }
        } as Dog
    } else if (pet === "bird") {
        return {
            species: "bird",
            name: name,
            eat: function() {
                console.log(`${this.name} eats.`)
            }, walk: function() {
                console.log(`${this.name} walks.`)
            }, sleep: function() {
                console.log(`${this.name} sleeps.`)
            }, sing: function() {
                console.log(`${this.name} sings.`)
            }
        } as Bird
    } else {
        throw `We do not have a $(pet). Like a dog ?`
    }
}

function petIsCat(pet: Pet): pet is Cat {
    return pet.species === "cat";
}

function petIsDog(pet: Pet): pet is Dog {
    return pet.species === "dog";
}

function petIsBird(pet: Pet): pet is Bird {
    return pet.species === "bird";
}

function playWithPet(pet: Pet) {
    console.log(`Hey $(pet.name) , lets play.`);

    if(petIsCat(pet)) {
        pet.eat();
        pet.sleep();
    } else if (petIsDog(pet)) {
        pet.eat();
        pet.walk();
        pet.sleep();
    } else if (petIsBird(pet)) {
        pet.eat();
        pet.sleep();
        pet.sing();
    } else {
        throw "Unknown Pet";
    }
}

let dog = buyPet(myPet as Species, "Rocky");
playWithPet(dog);

// Tuple : Array type with known and possibly different types
let day: [number, string];
day = [0, 'Monday'];
// day = ['zero', 'Monday']; // invalid
// day = 'Saturday'; // invalid
// day = false; // invalid

// Boolean
let isTrue: boolean = true;
let unsetBool: boolean; // defaults to undefined 
//console.log(typeof(unsetBool));

// Intersection Types
interface Knife {
    cut(): void;
}

interface BottleOpener {
    openBottle(): void;
}

interface Screwdriver {
    turnScrew(): void;
}

type SwissArmyKnife = Knife & BottleOpener & Screwdriver

function use (tool: SwissArmyKnife) {
    console.log("Can do anything");
    tool.cut;
    tool.openBottle;
    tool.turnScrew;
}