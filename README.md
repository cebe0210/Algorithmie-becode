# Exercice Algorithmie

Teestez ce code sur [CodePen](https://codepen.io/C-dric-Berthet/pen/jOXRGyZ?editors=1111 "CodePen")

## Calcul :

une somme de deux nombres choisis :

    //Somme :
        let a = 4;
        let b = 2;

        console.log(a + b);  

Une division avec deux nombres choisis : 

    //division :
        let a = 4;
        let b = 2;

        console.log(a / b);

Un modulo avec deux nombres choisis :

    //Modulo :
        let a = 4;
        let b = 2;

        console.log(a % b);

## Concaténer une phrase :

    //concatenation :
        let c = "I love ";
        let d = "Java";
        let e = "Script";

        console.log(c + d + e);

## Calcul de TVA : 

Écrivez un algorithme qui reçoit un prix sans TVA et renvoie le prix avec TVA au taux de 21% .  

    //TVA :
        let p = 100;

        console.log(p * 1.21);

## Calcul l'aire d'un cercle (plus périmètre):

Écrivez un algorithme qui reçoit le rayon d'un cercle et calcule sa surface .  

    //aire d'un cercle :
        let r = 6;  //rayon

        const aire = (r**2*Math.PI);
        const peri = ((r*2)*Math.PI)

        console.log(aire)
        console.log(peri)

## convertion en seconde : 

Écrivez un algorithme qui reçoit l' heure de la journée en trois nombres différents, l'heure, les minutes et les secondes et renvoie le nombre de secondes depuis minuit.

    //convertion seconde : 
        let heure = 13;
        let minute = 15;
        let seconde = 34

        const convH = heure*3600;
        const convM = minute*60;

        console.log(convH + convM + seconde);



