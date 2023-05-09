let trainer = {
    name: 'John Doe',
    age: 21,
    pokemon: ['Pikachu', 'Snorlax', 'Onyx', 'Abra','Charmander' ],
    friends: {
        BestFriends: ['Jane Deer', 'Bob Roberts', 'Alex Fort'],
        Rivals: ['Flo Barnes', 'Richard Helm']
    },
    talk: function() {
        console.log(`${this.pokemon[0]}! I choose you!`);
    }
}

trainer.talk();

function Pokemon(name,level) {
    this.name = name;
    this.level = level;
    this.health = level * 4;
    this.attack = level * 2;
    this.tackle = function(target) {
        console.log(`${this.name} tackles ${target.name}!`);
        target.health-=this.attack;
        console.log(`${target.name} lost ${this.attack} HP! ${target.name} has ${target.health} HP left.  `)
        if (target.health <= 0) {
            console.log(`${target.name} has fainted!`);
        }
    }
}

let pikachu = new Pokemon('Pikachu', 35);
let snorlax = new Pokemon('Snorlax', 20);
let onyx = new Pokemon('Onyx', 15);
let abra = new Pokemon('Abra', 25);
let charmander = new Pokemon('Charmander', 10);

pikachu.tackle(charmander);
pikachu.tackle(abra);
