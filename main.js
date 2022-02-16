class Pet {
    constructor(species, name) {
        this.species = species;
        this.name = name;
    }
}

function main() {
    const myPet = new Pet('dog', 'Otis');
    console.log(myPet);
}

main();