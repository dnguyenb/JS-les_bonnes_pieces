// Récupération des pièces depuis le fichier JSON
const reponse = await fetch('pieces-autos.json');
const pieces = await reponse.json();

/**
 * Creation des fiches produit
 */


for (let i = 0; i < pieces.length; i++) {

	const article = pieces[i]; // va chercher la piece dans le fichier JSON.
	const sectionFiches = document.querySelector('.fiches');
	const pieceElement = document.createElement('article');

	// creation des balises :
	const imageElement = document.createElement('img');
	imageElement.src = article.image;

	const nomElement = document.createElement('h2');
	nomElement.innerText = article.nom;

	const prixElement = document.createElement('p');
	prixElement.innerText = `Prix: ${article.prix} € (${article.prix < 35 ? '€' : '€€€'
		})`;
	
	const categorieElement = document.createElement('p');
	categorieElement.innerText = article.categorie ?? 'Aucune catégorie'; // opérateur nullish permet de tester l'absence de categorie pour éviter null ou undefined.

	const descriptionElement = document.createElement('p');
	descriptionElement.innerText =
		article.decription ?? 'Pas de description pour le moment';
	
	const stockElement = document.createElement('p');
	stockElement.innerText = article.disponibilite ? 'En stock' : 'En rupture de stock';

	// rattachement des balises :
	sectionFiches.appendChild(pieceElement);
	pieceElement.appendChild(imageElement);
	pieceElement.appendChild(nomElement);
	pieceElement.appendChild(prixElement);
	pieceElement.appendChild(categorieElement);
	pieceElement.appendChild(descriptionElement);
	pieceElement.appendChild(stockElement);
}
