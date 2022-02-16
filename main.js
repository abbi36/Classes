class Pet {
    constructor(breed, name, gender, species) {
        this.breed = breed;
        this.name = name;
        this.gender = gender;
        this.species = species; 
    }


describe() {
    console.log( `My ${this.species}s name is ${this.name} and they are a ${this.breed}. He is a good ${this.gender}.`
    );
   }
}

function main() {
    const myPet = new Pet('saint bernard', 'Otis', 'boy', 'dog');
    myPet.describe();
}

main();