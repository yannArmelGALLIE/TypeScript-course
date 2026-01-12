const damage = (characterToDamage : { life:number }, amount:number): number => {
    characterToDamage.life -= amount;
    return characterToDamage.life;
}

const result:number = damage({life:100}, 12);

console.log(result);

export{};

