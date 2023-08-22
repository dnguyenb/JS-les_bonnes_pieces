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
	prixElement.innerText = `Prix: ${article.prix} € (${
		article.prix < 35 ? '€' : '€€€'
	})`;

	const categorieElement = document.createElement('p');
	categorieElement.innerText = article.categorie ?? 'Aucune catégorie'; // opérateur nullish permet de tester l'absence de categorie pour éviter null ou undefined.

	const descriptionElement = document.createElement('p');
	descriptionElement.innerText =
		article.decription ?? 'Pas de description pour le moment';

	const stockElement = document.createElement('p');
	stockElement.innerText = article.disponibilite
		? 'En stock'
		: 'En rupture de stock';

	// rattachement des balises :
	sectionFiches.appendChild(pieceElement);
	pieceElement.appendChild(imageElement);
	pieceElement.appendChild(nomElement);
	pieceElement.appendChild(prixElement);
	pieceElement.appendChild(categorieElement);
	pieceElement.appendChild(descriptionElement);
	pieceElement.appendChild(stockElement);
}

//Bouton tri croissant et decroissant :

const btnTrierPrixCroissants = document.querySelector(
	'.btn-trier__prix-croissant'
);
btnTrierPrixCroissants.addEventListener('click', () => {
	const piecesOrdonnees = Array.from(pieces); // permet de garder l'ordre d'origine malgrès la modification du tableau.
	piecesOrdonnees.sort((a, b) => {
		return a.prix - b.prix;
	});
	console.log(piecesOrdonnees);
});

const btnTrierPrixDecroissants = document.querySelector(
	'.btn-trier__prix-decroissant'
);

btnTrierPrixDecroissants.addEventListener('click', () => {
	const piecesOrdonnees = Array.from(pieces); // permet de garder l'ordre d'origine malgrès la modification du tableau.
	piecesOrdonnees.sort((a, b) => {
		return b.prix - a.prix;
	});
	console.log(piecesOrdonnees);
});

// bouton filtre des pieces au prix < ou = à 35 € :
const btnFiltrerPrixAbordables = document.querySelector(
	'.btn-filtrer__prix-abordable'
);

btnFiltrerPrixAbordables.addEventListener('click', () => {
	const piecesFiltreesPrix = pieces.filter((piece) => {
		return piece.prix <= 35;
	});
	console.log(piecesFiltreesPrix);
});

// bouton filtre des pieces ayant une description :
const btnFiltrerNoDescription = document.querySelector(
	'.btn-filtrer__nodescription'
);

btnFiltrerNoDescription.addEventListener('click', () => {
	const piecesFiltreesNoDescription = pieces.filter((piece) => {
		return piece.description;
	});
	console.log(piecesFiltreesNoDescription);
});
