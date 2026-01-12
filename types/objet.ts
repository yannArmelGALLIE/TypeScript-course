// Méthode 1
// type Pet = {
//     name:String;
//     life:number;
//     attack:number;
//     defense:number;
// };

// type Hero = {
//     name:String;
//     life:number;
//     attack:number;
//     defense:number;
//     pet?:Pet;
// }

// Méthode 2
type Character = {
    name : String;
    life : number;
    attack : number;
    defense : number;
}

type Pet = Character;
type Hero = Character & {
    pet ?: Pet;
}