"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var damage = function (characterToDamage, amount) {
    characterToDamage.life -= amount;
    return characterToDamage.life;
};
var result = damage({ life: 100 }, 12);
console.log(result);
