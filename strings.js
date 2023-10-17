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

let random = Math.