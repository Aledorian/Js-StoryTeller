console.log("Début du script");

var prenom = prompt("Entrez un prénom.");
var compagnon = prompt("Entrez deux autres prénoms séparé par un 'et'");
var classe = prompt("Entrez une classe d'héroïque fantasy.");
var monstre = prompt("Entrez le nom commun d'une créature fantastique (ex: un vampire)");
var membre = prompt("Entrez un membre du corps humain. (ex : la jambe gauche)");
var splCompagnon = compagnon.split("et");
var compagnon1 = splCompagnon[0];
var compagnon2 = splCompagnon[1];
var splMonstre = monstre.split(", ");
var artMonstre = splMonstre[0];
var nomMonstre = splMonstre[1];
var splMembre = membre.split(" ");
var artMembre = splMembre[0];
var nomMembre = splMembre[1];
var coteMembre = splMembre[2];
var genre = prompt("Quel est votre sexe ? (homme/femme)");

// function definie() {
//     if (artMonstre == "un") {
//         document.getElementById('genre2').innerHTML = "le";
//     } else {
//         document.getElementById('genre2').innerHTML = "la";
//     }
// }
//
// function definie2() {
//     if (artMonstre == "un") {
//         document.getElementById('genre3').innerHTML = "le";
//     } else {
//         document.getElementById('genre3').innerHTML = "la";
//     }
// }

function bless() {
    if (artMembre == "la") {
        artMembre = "à la";
    } else {
        artMembre = "au";
    }
}

function sexe() {
    if (genre == "femme") {
        genre = "la candidate parfaite";
    } else {
        genre = "le candidat parfait";
    }
}

// definie()
//
// definie2()

bless()

sexe()

var test = ["Le ", "monde ", "d’Almeria ", "est ", "en ", "proie ", "à ", "de ", "terribles ", "ténèbres, ", "moi : "];

test.push(prenom);

test.push("ainsi", "que", "mes", "compagnons :", compagnon, "avons", "pour", "tâche", "d’éviter", "que", "cela", "se", "produise,", "grâce", "à", "mes", "compétences", "de", classe, "je");
test.push("suis", genre, "pour", "éliminer", "ce", "mal.", "Je", "viens", "du", "petit", "village", "de", "Maigrepassage,", "j’ai", "eu", "une", "enfance", "compliqué", "car", "en", "effet", "mon", "village", "s’est", "fait", "raser", "par", monstre, "et", "ses", "sbires.", "Je", "ne", "sortis", "pas", "indemne", "de", "cette", "nuit,", "en", "effet", "j’ai", "subi", "une", "grave", "blessure", artMembre, nomMembre, coteMembre, "qui", "encore", "aujourd’hui", "me", "fait", "souffrir", "et", "me", "pousse", "à", "chercher", "vengeance.");

document.getElementById('debut').innerHTML = test.join(" ");

document.getElementById('debut').style.animationPlayState = "running";
// document.getElementById('milieu').style.animationPlayState = "running"
// document.getElementById('fin').style.animationPlayState = "running"
// document.getElementById("comp1").innerHTML = compagnon1;
// document.getElementsByClassName('comp2')[0].innerHTML = compagnon2;
// document.getElementsByClassName('comp2')[1].innerHTML = compagnon2;

console.log("Prenom = ", + prenom);
console.log("Compagnon = ", + compagnon);
console.log("Classe = ", + classe);
console.log("Monstre = ", + monstre);
console.log("Membre = ", + membre);

console.log("fin du script");
