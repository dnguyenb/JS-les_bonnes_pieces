export const ajoutListenersAvis = () => {
	const piecesElements = document.querySelectorAll('.fiches article button');

	for (let i = 0; i < piecesElements.length; i++) {
		piecesElements[i].addEventListener('click', async function (event) {
			const id = event.target.dataset.id;
			const reponse = await fetch(`http://localhost:8081/pieces/${id}/avis`); // retourne une reponse "res" sous format data.
			const avis = await reponse.json(); // convertit les data en JSON.

			const pieceElement = event.target.parentElement;

			const avisElement = document.createElement('p');
			for (let i = 0; i < avis.length; i++) {
				avisElement.innerHTML += `${avis[i].utilisateur}: ${avis[i].commentaire} <br>`;
			}
			pieceElement.appendChild(avisElement);
		});
	}
};

export const ajoutListenerEnvoyerAvis = () => {
	const formulaireAvis = document.querySelector('.formulaire-avis');
	formulaireAvis.addEventListener('submit', (event) => {
		event.preventDefault();

		const avis = {
			pieceId: parseInt(event.target.querySelector('[name=piece-id]').value),
			utilisateur: event.target.querySelector('[name=utilisateur').value,
			commentaire: event.target.querySelector('[name=commentaire]').value,
			nbEtoiles: event.target.querySelector('[name=nbEtoiles]').value
		};
		// Création de la charge utile au format JSON
		const chargeUtile = JSON.stringify(avis);

		// Appel de la fonction fetch avec toutes les informations nécessaires
		fetch('http://localhost:8081/avis', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: chargeUtile,
		});
	});
};
