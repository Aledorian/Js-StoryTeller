console.log("Début du script");
var prenom = prompt("Entrez un prénom.");
var compagnon = prompt ("Entrez deux autres prénoms séparé par un 'et'");
var classe = prompt("Entrez une classe d'héroïque fantasy.");
var monstre = prompt("Entrez le nom commun d'une créature fantastique");
var membre = prompt("Entrez un membre du corps humain.");
var splCompagnon = compagnon.split("et");
var compagnon1 = splCompagnon[0];
var compagnon2 = splCompagnon[1];

document.getElementById('debut').style.animationPlayState="running"
document.getElementById('milieu').style.animationPlayState="running"
document.getElementById('fin').style.animationPlayState="running"
document.getElementById('principal').innerHTML = prenom;
document.getElementById('amis').innerHTML = compagnon;
document.getElementsByClassName('creature')[0].innerHTML = monstre;
document.getElementsByClassName('creature')[1].innerHTML = monstre;
document.getElementById('metier').innerHTML = classe;
document.getElementById('blessure').innerHTML = membre;
document.getElementById('comp1').innerHTML = compagnon1;
document.getElementsByClassName('comp2')[0].innerHTML = compagnon2;
document.getElementsByClassName('comp2')[1].innerHTML = compagnon2;
document.getElementsByClassName('comp2')[2].innerHTML = compagnon2;


console.log("Prenom = " + prenom);
console.log("Compagnon = " + compagnon);
console.log("Classe = " + classe);
console.log("Monstre = " + monstre);
console.log("Membre = " + membre);
console.log("fin du script");
