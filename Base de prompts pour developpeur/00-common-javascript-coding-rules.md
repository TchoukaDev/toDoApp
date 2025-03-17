### Coding rules

#### Style et structure

- **Éviter les classes** : Préférer l'itération et la modularisation à la duplication de code.
  - **Exemple** : Utiliser `map` pour générer des éléments de liste.
- **Noms de variables descriptifs** : Utiliser des verbes auxiliaires (par exemple, `isLoading`, `hasError`).
- **Structure des fichiers** :
  - Composant exporté, sous-composants, helpers, contenu statique.
  - Utiliser des minuscules avec des tirets pour les répertoires et les fichiers (par exemple, `components/auth-wizard`, `auth-wizard.js`).
  - Utiliser le camelCase pour les classes exportés (par exemple, `AuthWizard.js`).
- **Exports nommés** : Privilégier les exports nommés.
- **Syntaxe concise** : Éviter les accolades inutiles dans les conditions.
- **Tabulation** : Utiliser 2 espaces comme tabulation.

#### Utilisation de Javascript

- Utiliser le javascipt pour tout le code.
- Respecter pleinement les règles ESLint.
- Maintenir la cohérence du code.
- Utiliser des composants fonctionnels.

#### UI et style

- Implémenter un design responsive en adoptant une approche mobile-first.
- S'Assurer que le design est responsive et conforme aux normes d'accessibilité.
- Utiliser ARIA (Accessible Rich Internet Applications) pour une meilleure accessibilité.
- Maintenir un système de design cohérent.

#### Performance et optimisation

- S'assurers que la récupération des données est efficace.

#### Sécurité

- Valider strictement les valeurs d'entrée.
- Implémenter une gestion appropriée des erreurs.
- Gérer de manière sécurisée les informations sensibles.
- Protéger contre les attaques XSS, CSRF et les injections SQL.

#### Documentation

- Documenter le code avec des commentaires utiles expliquant la logique complexe.
- Maintenenir la documentation du projet pour la configuration, l'utilisation et le déploiement.
- Utiliser JSDoc pour la documentation des fonctions et des méthodes.
