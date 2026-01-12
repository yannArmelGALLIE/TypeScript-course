type Age = number;
type Nom = String;
type Prenom = Nom;

const mon_nom:Nom = "GALLIE";
const mon_prenom:Prenom = "Koffi Yann-Armel";
const mon_age:Age = 19;

type CodeSecret = String | number;

const mot_de_passe1:CodeSecret = "motDePasse";
const mot_de_passe2:CodeSecret = 123456;

type Dix = 10;
const cinq:Dix = 5; //Erreur
const dix:Dix = 10; //OK

