//Ressource: "JSON Viewer Pro" => extension pour chrome, pour faciliter la manipulation des données JSON.
// url de l'API Blockchain.info
const url = 'https://blockchain.info/ticker';

// Fonction pour actualiser la requête avec setInterval
function recupererPrix () { 
  // Création de la requête
  let requete = new XMLHttpRequest();
  requete.open('GET', url);
  requete.responseType = 'json';
  requete.send();

  requete.onload = function() {
    if (requete.readyState === XMLHttpRequest.DONE) {
      if (requete.status === 200) {
        let reponse = requete.response; // Stockage de la réponse
        let prixEnEuros = reponse.EUR.last; // Récupère la valeur de 'last' de EUR du JSON
        document.querySelector('#price_label').textContent = prixEnEuros;
      }
      else {
        alert('Un problème est survenu, veuillez revenir plus tard, merci !');
      }
    }
  }
  console.log('yep') // Permet juste de vérifier si la fonction 'recupererPrix' s'actualise bien
}

// Mise en place de setInterval
setInterval(recupererPrix, 1000);