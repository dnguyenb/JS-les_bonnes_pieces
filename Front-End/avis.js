export function ajoutListenersAvis() {
	const piecesElements = document.querySelectorAll('.fiches article button');

	for (let i = 0; i < piecesElements.length; i++) {
		piecesElements[i].addEventListener('click', async function (event) {
			const id = event.target.dataset.id;
			const reponse = await fetch(`http://localhost:8081/pieces/${id}/avis`) // retourne une reponse "res" sous format data.
			const avis = await reponse.json(); // convertit les data en JSON.
			
			const pieceElement = event.target.parentElement;
			
			const avisElement = document.createElement('p');
			for (let i = 0; i < avis.length; i++) {
				avisElement.innerHTML += `${avis[i].utilisateur}: ${avis[i].commentaire} <br>`;
			}
			pieceElement.appendChild(avisElement);
		});
	}
}

