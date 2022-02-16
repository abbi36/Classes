class Pet {
    constructor(breed, name, gender, species) {
        this.breed = breed;
        this.name = name;
        this.gender = gender;
        this.species = species; 
    }


describe() {
    if (this.gender == 'male') {
    console.log( `My ${this.species}s name is ${this.name} and he is a ${this.gender} ${this.breed}.`
    )} else {
        console.log (`My ${this.species} is named ${this.name} and is a ${this.breed}`)
    }
   }
}

function main() {
    const myPet = new Pet('saint bernard', 'Otis', 'male', 'dog');
    myPet.describe();
}

main();