// Récupération des pièces depuis le fichier JSON
const reponse = await fetch('pieces-autos.json');
const pieces = await reponse.json();

/**
 * Creation de la fiche produit
 */

// creation des balises :
const article = pieces[0]; // va chercher la piece dans le fichier JSON.

const imageElement = document.createElement('img');
imageElement.src = article.image;
const nomElement = document.createElement('h2');
nomElement.innerText = article.nom;
const prixElement = document.createElement('p');
prixElement.innerText = `Prix: ${article.prix} €`;
const categorieElement = document.createElement('p');
categorieElement.innerText = article.categorie;

// rattachement des balises :
const sectionFiche = document.querySelector('.fiches');
sectionFiche.appendChild(imageElement);
sectionFiche.appendChild(nomElement);
sectionFiche.appendChild(prixElement);
sectionFiche.appendChild(categorieElement);
