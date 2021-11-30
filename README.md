# Bitcoin Tracker Price

## Projet orienté sur les requêtes AJAX

Utilisation de l'API de **"blockchain.info"**, pour avoir le cours du Bitcoin en temps réel.

---

### Étape 1:

- Stockage de l' API de "Blockchain.info".

### Étape 2:

- Création de la requête
- Vérification du statut de la requête.

### Étape 3:

- Stockage dans une variale de la `response` de la requête.
- Stockage dans une variable de la valeur souhaîtée de `response` (ici, c'est en euros).

### Étape 4:

- Manipulation du DOM pour afficher le prix du BitCoin

### Étape 5:

- Ajout d'une fonction englobant la requête en entière, pour pouvoir faire un `setInterval`.

---

Le `console.log('yep')` juste avant la fin de la fonction `recupererPrix`, sert juste à vérifier que la requête est bien actualisée,
il serait, bien évidemment effacé du code s'il y avait une intégration de l'application sur le web.

---

**Ressource supplémentaire:**

- _JSON Viewer Pro_ => extension pour chrome, pour faciliter la manipulation des données JSON.
