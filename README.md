# Exercice Algorithmie

Testez ce code sur [CodePen](https://codepen.io/C-dric-Berthet/pen/jOXRGyZ?editors=1111 "CodePen")

## _Variables :_ 

### Calcul :

une somme de deux nombres choisis :

    //Somme :
        let a = 4;
        let b = 2;

        console.log(a + b); // = 6 

Une division avec deux nombres choisis : 

    //division :
        let a = 4;
        let b = 2;

        console.log(a / b); // = 2

Un modulo avec deux nombres choisis :

    //Modulo :
        let a = 4;
        let b = 2;

        console.log(a % b); // = 0

### Concaténer une phrase :

    //concatenation :
        let c = "I love ";
        let d = "Java";
        let e = "Script";

        console.log(c + d + e); = I love JavaScript

### Calcul de TVA : 

Écrivez un algorithme qui reçoit un prix sans TVA et renvoie le prix avec TVA au taux de 21% .  

//TVA :
let p = 200;
let TVA = 21;
const tvac = p + (p * TVA / 100);
console.log(tvac + "€"); // resultat 242

### Calcul l'aire d'un cercle (plus périmètre):

Écrivez un algorithme qui reçoit le rayon d'un cercle et calcule sa surface .  

    //aire d'un cercle :
        let r = 6;  //rayon

        const aire = (r**2*Math.PI);
        const peri = ((r*2)*Math.PI)

        console.log(aire.toFixed(2)) // = 113.10
        console.log(peri.toFixed(2)) // = 37.70

### convertion en seconde : 

Écrivez un algorithme qui reçoit l' heure de la journée en trois nombres différents, l'heure, les minutes et les secondes et renvoie le nombre de secondes depuis minuit.

    //convertion seconde : 
        let heure = 13;
        let minute = 15;
        let seconde = 34

        const convH = heure*3600;
        const convM = minute*60;

        console.log(convH + convM + seconde); // = 47734

## _Condition :_ 

### Tarif cinéma :

Dans un cinéma le tarif plein est de 10 €, le tarif réduit est de 8 €. Écrivez un algorithme qui, étant donné un booléen indiquant si la personne peut bénéficier d'un tarif réduit, imprime le prix à payer .

    //Tarif de cinéma :

        let age = 19;

        if (age <= 18){
         console.log("Tarif réduit");
        } else if (age >=65){
        console.log("Tarif réduit");
        }
        else {
        console.log("Tarif plein");
        }

### Maximum :
    //trouver le plus grand :

        let nb1 = 40;
        let nb2 = 8;
        let nb3 = 16;

        function maximum(nb1, nb2, nb3) {
        
            let max = nb1;

            if (nb2 > max) {
            max = nb2;
            }

            if (nb3 > max) {
            max = nb3;
            }
            return max;
            }
        const max = maximum(nb1, nb2, nb3);

        console.log("le plus grand nombre est : " + max)

### Dés identiques :

    let dé1 = Math.floor(Math.random() * 6) + 1;
    let dé2 = Math.floor(Math.random() * 6) + 1;
    let dé3 = Math.floor(Math.random() * 6) + 1;

    function identique(dé1, dé2, dé3) {
        let identique = 0;

        if (dé1 === dé2 && dé2 === dé3){
            identique = 3;
        } else if (dé1 === dé2 || dé1 === dé3 || dé2 === dé3){
        identique = 2;
        }
        return identique;
        }

        console.log("le nombre de dés identique est de " + identique(dé1, dé2, dé3));

### Numéro du jour :

    function jour(numero) {
        const jours = ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi", "Dimanche"];

        if (numero >= 1 && numero <= 7){
            return jours[numero - 1]
        } else {
            return "Invalide";
        }
    }
    let numero = 5 // = vendredi

    const nom = jour(numero);
    console.log("votre numéro correspond au : " + nom)

### Imprimerie :

    function prix(nombre){
        let total = 0;

        if (nombre <= 10){
            total = nombre * 0.12;
        }
        else if (nombre <= 30){
            total = 1.2 + ((nombre - 10)*0.11);
        }
        else {
            total = 3.4 + ((nombre -30)* 0.1);
        }
        return total;
        }

        let nombre = 31 // resultat = 3.5€
        const devis = prix(nombre);

        console.log("votre devis s'éleve à : " + devis + "euros");

## _Les boucles :_ 

### I - imprimer des chiffres 

les nombres de 1 à n

    let i = 1;
    let j = 5;

    while (i <= j){
        console.log(i);
        i++;
    }

les nombres de 1 à n par ordre décroissant

    let i = 1;
    let j = 5;

    while (j >= i){
        console.log(j);
        j--;
    }


les nombres de -n à n

    let k = 12;
    let l = -k;

    while (l <= k) {
        console.log(l);
        l++;
    }

les nombres impairs de 1 à n

    let m = 13;
    let n = 1;

    while (n <= m) {
        console.log(n);
        n += 2;
    }

II - imprimer un nombre aléatoire d'entiers
Écrivez un algorithme qui reçoit un entier aléatoire et y imprime de 0

    let o = Math.floor(Math.random() * 50) + 1;
    let q = 0;

    while (q <= o){
        console.log(q);
        q++;
    }


III - lancer les dés
Écrivez un algorithme qui lance un dé un nombre de fois donné et compte le nombre de fois qu'un certain nombre est reçu.

    let t = 8; //nombre de lancement du dé
    let s = 4; // quel resultat compter
    let nbs = 0;

    while (t >= 0){
        let u = Math.floor(Math.random() * 6) + 1;
        if (u === s){
        nbs++;    
        }
    t--;
    }
    console.log(`le nombre de ${s} sorti est de ${nbs}`);


IV - nombres pairs
Écrivez un algorithme qui imprime tous les nombres pairs de 0 à un nombre donné.

    let v = 16 //nombre donné
    let w = 0 

    while (w <= v){
    console.log(w)
    w += 2
    }

V - nombre parfait
Écrivez un algorithme qui vérifie si un entier positif donné est un nombre parfait, c'est-à-dire égal à la somme de ses diviseurs (sauf lui-même).

    let nombre = 28; //nombre à verifier

    let somme = 0;
    let diviseur = 1;

    while (diviseur < nombre) {
        somme += nombre % diviseur ===0 ? diviseur : 0;
        diviseur++;
    }

    console.log(somme === nombre ? `${nombre} est un nombre parfait.` : `${nombre} n'est pas un nombre parfait.`)

## [_Tableaux :_](https://codepen.io/C-dric-Berthet/pen/rNoEGrr "CodePen")

I imprime un tableau
Écrivez un algorithme qui imprime tout dans un tableau.

    let ingredients = ['Penne', 'Pancetta', 'Oeufs', 'Pecorino-Romano', 'Poivre-noir'];

    console.log(`Faire cuire les ${ingredients[0]}, mélangez le ${ingredients[3]}, les jaunes ${ingredients[2]} et le ${ingredients[4]}, faire cuire la ${ingredients[1]}.`);

    console.log('notre tableau contient ' + ingredients.length + ' éléments')

II - maximum
Écrivez un algorithme qui reçoit un tableau d'entiers et imprime son maximum . 

    let entiers = [4, 8, 16, 32, 64, 128, 256];

    let maximum = entiers[0]

    for(let i= 1; i< entiers.length; i++){
        if(entiers[i] > maximum){
            maximum = entiers[i];
        }
    }
    console.log(`le plus grand nombre est : ${maximum}`)


III - minimum
Écrivez un algorithme qui reçoit un tableau d'entiers et imprime son minimum .


    let entiers = [4, 8, 16, 32, 64, 128, 256];

    let minimum = entiers[0];

    for(let j= 1; j< entiers.length; j++){
        if(entiers[j] < minimum){
            minimum = entiers[j];
        }
    }
    console.log(`le plus petit nombre est : ${minimum}`)

IV - position minimale
Écrivez un algorithme qui reçoit un tableau d'entiers et imprime la position de son minimum .

    let entiers = [4, 8, 16, 32, 64, 128, 256];

    let minimum = entiers[0];
    let pmin = 0;

    for(let j= 1; j< entiers.length; j++){
        if(entiers[j] < minimum){
            minimum = entiers[j];
            pmin = j;
        }
    }
    console.log(`le plus petit nombre est : ${minimum} et se trouve à la position ${pmin} dans le tableau`);


Écrivez un algorithme qui reçoit un tableau d'entiers et vérifiez s'il est ordonné de manière ascendante. Imprime vrai si le tableau est ordonné, faux si ce n'est pas le cas.
   
     let entiers = [4, 8, 16, 32, 64, 128, 256];

    let croissant = true;
    let decroissant = true;
    

    for (let k= 0; k < entiers.length - 1; k++){
        if(entiers[k] > entiers[k + 1]){
            croissant = false;
        }
        if(entiers[k] < entiers[k + 1]) {
            decroissant = false;
        }
    }
    if (croissant){
        console.log(`Le tableau est rangé par ordre croissant.`);
    } else if (decroissant){
        console.log(`Le tableau est rangé par ordre décroissant.`);
    } else {
        console.log(`Le tableau est mélangé.`)
    }

## [_Les fonctions :_](https://codepen.io/C-dric-Berthet/pen/YzdoEjV "CodePen")

Exercices
Instructions
traduire les cinq exercices précédents en fonctions modulaires

détaillent chaque étape


    // 3 arrangements de nombre afin de faire les tests.
    let entiers = //[4, 8, 16, 32, 64, 128, 256]; croissant
                    [32, 256, 8, 64, 128, 4, 16]; décroissant
                    //[256, 128, 64, 32, 16, 8, 4]; mélangé

    //la fonction :
    function arrays (entiers){ //fonction du nom **arrays** utilisant la variable **entiers**
        let min = entiers[0]; //le plus petit nombre.
        let max = entiers[0]; //le plus grand nombre.
        let pmin = 0; //position du plus petit nombre.
        let pmax = 0; //position du plus grand nombre.
        let croissant = true; //le tableau est rangé par ordre croissant.
        let decroissant = true; //le tableau est rangé par ordre décroissant.


        // une boucle **for** qui analyse la variable entiers.
        for (let i = 0; i < entiers.length - 1; i++) { //**i** permet à la boucle de parcourir le tableau **entiers**
            if(entiers[i] < min){ //met à jour les **variables** **si** le nombre analysé est plus petit que **min**
                min = entiers[i]; //MAJ le plus petit nombre
                pmin = i; //MAJ position du plus petit nombre
            }
            if(entiers[i] > max){//met à jour les **variables** **si** le nombre analysé est plus grand que **max**
                max = entiers[i]; //MAJ le plus grand nombre
                pmax = i; //MAJ la position du plus grand nombre
            }
            
            if(entiers[i] > entiers[i + 1]){ //analyse à chaque itération si **i** est plus grand que **i +1**.
                croissant = false; // si **i +1** est plus petit, ce ne pas croissant
            }
            if(entiers[i] < entiers[i + 1]){
                decroissant = false; si **i +1** est plus petit, ce ne pas decroissant

            }              
               
        }
        if (croissant){ //**si** la variable **entiers** est rangé en ordre croissant affiche...
            console.log(`Le tableau est rangé par ordre croissant. \n Le plus petit nombre est ${min}, qui est situé à la ${pmin}. \n Le plus grand nombre est ${max} et est placer à la ${pmax}, eme place du tableau.`);
        } else if (decroissant){//**sinon si** la variable **entiers** est rangé en ordre décroissant affiche...
            console.log(`Le tableau est rangé par ordre décroissant. \n Le plus petit nombre est ${min}, qui est situé à la ${pmin}. \n Le plus grand nombre est ${max} et est placer à la ${pmax}, eme place du tableau.`);
        } else {//**sinon** la variable **entiers** est mélangé (if et else if etant fasle) affiche...
            console.log(`Le tableau est mélangé. \n Le plus petit nombre est ${min}, qui est situé à la ${pmin}. \n Le plus grand nombre est ${max} et est placer à la ${pmax}eme place du tableau.`);
        }
    }
    arrays(entiers); // appel la fonction. 
