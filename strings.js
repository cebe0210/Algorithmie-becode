//I - Concaténation
let stng1 = "concaté"; // string 1
let stng2 = "nation"; //string 2

function concat (){ //fonction nommée concat
    let stng3 = stng1 + stng2; // variable qui assemble les deux strings
    console.log(stng3) //affichage de la variable stng3
}
concat(); // appel de la fonction

//II - minuscule

let txtmaj = "blue-origin"; // variable avec le texte en majuscule.

function maj(){
    let minuscule = txtmaj.toLowerCase();//toLowerCase converti le text majuscule en muniscule.
    console.log(minuscule);
}
maj();

let txtmin = "blue-origin"; // variable avec le texte en minuscule.

   function minus(){
        let majuscule = txtmin.toUpperCase();//toUpperCase converti le text muniscule en majuscule .
        console.log(majuscule);
    }
    minus();


let nom = ["Doe", "John"]; //nom à inverser

function switchname(nom){ //fonction nommée switchname liée au tableau nom

    let swt = ""; //variable dans laquelle les noms sont inversés
    for (let i = nom.length -1; i >= 0; i--){ //boucle qui commence par dernier elements du tableau et revient vers le premier.
        swt += nom[i] + " "; //commande qui MAJ la variable swt
        
    }
    console.log(swt); //commande d'affichage
}
switchname(nom); //appel de la fonction

let espace = "ceci est une chaine avec des espaces";

function delspc(espace){
    let sansespace = espace.replace(/\s/g, '');//permet de supprimer les espaces...
    console.log(sansespace);
}
delspc(espace);




let n = 8 //nombre de nombre aléatoire

function nrandom(n){
    let nbrrandom = [];

    for (let i = 0; i < n; i++){
        let random = Math.floor(Math.random() *100);
        nbrrandom.push(random);
    }
    console.log(nbrrandom);
    return nbrrandom;
}
nrandom(n);


let n = 8; //nombre de nombre aléatoire
let nbrrandom = []; //variable stockera les nombres generes
let searchnbr = 42; //le nombre à rechercher
function nrandom(n){
    
    for (let i = 0; i < n; i++){ //boucle tant que **i** est plus petit que **n** la boucle continue.
        let random = Math.floor(Math.random() *100); // Math.floor permet d'arrondir et ainsi n'avoir que des entiers. Math.random genere des nombres aléatoire entre 0 et 100(*100)
        nbrrandom.push(random); // push ajoute le nombre genere par random dans nbrrandom
    }
    console.log(nbrrandom); //affiche nbrrandom   
}
nrandom(n); //appel la fonction

let croissant = [...nbrrandom].sort((a, b) => a - b); //permet de trier le tableau nbrrandom. les ... permet de copier le tableau nbrrandom.
console.log(croissant); // affiche les nombres par ordre croissant


function inarray(searchnbr, nbrrandom) { //cette fonction cherche l'element **searchnbr** dans le tableau nbrrandom.
    let exist = false; 
    for (let i = 0; i < nbrrandom.length; i++){ //tant que la variable i est inferieur au nombre d'elements du tableau, la boucle continue
        if (searchnbr === nbrrandom[i]){ //si le nombre recherché est dans le tableau, la variable **exist** devient true
            exist = true;
        }
    }
    console.log(exist); //affiche le resultat
}
inarray(searchnbr, nbrrandom); //appel de la fonction