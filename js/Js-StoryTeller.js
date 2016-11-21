var prenom = prompt("Entrez un prénom.");
var compagnon = prompt ("Entrez deux autres prénoms séparé par un 'et'");
var classe = prompt("Entrez une classe d'héroïque fantasy.");
var monstre = prompt("Entrez le nom commun d'une créature fantastique");
var membre = prompt("Entrez un membre du corps humain.");
var splCompagnon = compagnon.split("et");
var compagnon1 = splCompagnon[0];
var compagnon2 = splCompagnon[1];

document.getElementById('principal').innerHTML = prenom;
document.getElementById('amis').innerHTML = compagnon;
document.getElementById('creature').innerHTML = monstre;
document.getElementById('metier').innerHTML = classe;
document.getElementById('blessure').innerHTML = membre;
document.getElementById('comp1').innerHTML = compagnon1;
document.getElementsByClassName('comp2')[0].innerHTML = compagnon2;
document.getElementsByClassName('comp2')[1].innerHTML = compagnon2;
document.getElementsByClassName('comp2')[2].innerHTML = compagnon2;

console.log("Prenom = " + prenom, "Compagnon = " + compagnon, "Classe = " + classe, "Monstre = " + monstre, "Membre = " + membre, "Compagnon1 = " + compagnon1, "Compagnon2 = " + compagnon2);
