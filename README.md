# Exercice Algorithmie

Testez ce code sur [CodePen](https://codepen.io/C-dric-Berthet/pen/jOXRGyZ?editors=1111 "CodePen")

# _Variables :_ 

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
        let p = 100;

        console.log(p * 1.21); // = 121

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
        
    }





