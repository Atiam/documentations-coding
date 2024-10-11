// Add appropriate access modifier to:
// animalName in Animal: public, private, or protected 
// meowSound in Cat: public, private, or protected 
// Create Dog derived/extended class with a dogSound variable and a method of bark() that uses it
// Create a dog instance and Call the new dog class' sound method

export { }

class Animal {
    public animalName: string;

    constructor(name: string) {
        this.animalName = name
    }
    move() {
        console.log(`${this.animalName} Moves`);
    }

    eat() {
        console.log(`${this.animalName} eats.`);
    }
}

class Cat extends Animal {

     meowSound: string = "meeooww";

    constructor(animalName: string) {
        super(animalName);
    }
    meow() {
        console.log(`${this.animalName} says ${this.meowSound}`);
    }
}

class Dog extends Animal {
    barkSound: string = "woof";

    constructor(animalName: string) {
        super(animalName);
    }
    bark() {
        console.log(`${this.animalName} says ${this.barkSound}`);
    }
}





let mrPants = new Cat("Mr.Pants");
mrPants.eat();
mrPants.meow();


let mrPants02 = new Dog("Mr.Pants02");
mrPants02.bark();

