console.log("Début du script");

var prenom = prompt("Entrez un prénom.");
var compagnon = prompt ("Entrez deux autres prénoms séparé par un 'et'");
var classe = prompt("Entrez une classe d'héroïque fantasy.");
var monstre = prompt("Entrez le nom commun d'une créature fantastique (ex: un vampire)");
var membre = prompt("Entrez un membre du corps humain. (ex : la jambe gauche)");
var splCompagnon = compagnon.split("et");
var compagnon1 = splCompagnon[0];
var compagnon2 = splCompagnon[1];
var splMonstre = monstre.split(" ");
var artMonstre = splMonstre[0];
var nomMonstre = splMonstre[1];
var splMembre = membre.split(" ");
var artMembre = splMembre[0];
var nomMembre = splMembre[1];
var coteMembre = splMembre[2];
var genre = prompt("Quel est votre sexe ? (homme/femme)");

function definie() {
  if (artMonstre == "un") {
    document.getElementById('genre2').innerHTML = "le";
  }
  else {
    document.getElementById('genre2').innerHTML = "la";
  }
}

function definie2() {
  if (artMonstre == "un") {
    document.getElementById('genre3').innerHTML = "le";
  }
  else {
    document.getElementById('genre3').innerHTML = "la";
  }
}

function bless() {
  if (artMembre == "la") {
    document.getElementById('genBless').innerHTML = "à la";
  }
  else {
    document.getElementById('genBless').innerHTML = "au";
  }
}

function sexe() {
  if (genre == "femme"){
  document.getElementById('sex').innerHTML = "la candidate parfaite";
  }
  else {
  document.getElementById('sex').innerHTML = "le candidat parfait";
  }
}

definie()

definie2()

bless()

sexe()

document.getElementById('debut').style.animationPlayState="running"
document.getElementById('milieu').style.animationPlayState="running"
document.getElementById('fin').style.animationPlayState="running"
document.getElementById('principal').innerHTML = prenom;
document.getElementById('amis').innerHTML = compagnon;
document.getElementsByClassName('creature')[0].innerHTML = nomMonstre;
document.getElementsByClassName('creature')[1].innerHTML = nomMonstre;
document.getElementById('genre').innerHTML = artMonstre;
document.getElementById('metier').innerHTML = classe;
document.getElementById('blessure').innerHTML = nomMembre + " " + coteMembre;
document.getElementById("comp1").innerHTML = compagnon1;
document.getElementsByClassName('comp2')[0].innerHTML = compagnon2;
document.getElementsByClassName('comp2')[1].innerHTML = compagnon2;

console.log("Prenom = " + prenom);
console.log("Compagnon = " + compagnon);
console.log("Classe = " + classe);
console.log("Monstre = " + monstre);
console.log("Membre = " + membre);

console.log("fin du script");
