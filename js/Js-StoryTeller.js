var prenom = prompt("Entrer un prénom.");
var compagnon = prompt ("Entrer deux autres prénoms séparé par un 'et'");
var classe = prompt("Entrer une classe d'héroïque fantasy.");
var monstre = prompt("Entrer le nom commun d'une créature fantastique");
var membre = prompt("Entre un membre du corps humain.");
var splCompagnon = compagnon.split("et")
console.log(splCompagnon);

document.getElementById('principal').innerHTML = prenom
document.getElementById('amis').innerHTML = compagnon
document.getElementById('creature').innerHTML = monstre
document.getElementById('metier').innerHTML = classe
document.getElementById('blessure').innerHTML = membre
