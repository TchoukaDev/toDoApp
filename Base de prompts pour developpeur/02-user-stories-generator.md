# User stories generator

## OBJECTIF PRINCIPAL

- Générer la liste des "user-stories" groupée selon la La méthode MoSCoW :
  - "**M**" pour _« Must have this »_ : _« Doit être effectué »_
  - "**S**" Pour _« Should have this if at all possible »_ : _« Devrait être accompli autant que possible »_
  - "**C**" pour _« Could have this if it does not affect anything else »_ : _« Pourrait être réalisé dès lors où cela n’a pas d’impact sur les autres tâches »_
  - "**W**" pour _« Won't have this time but would like in the future »_ : _« Ne sera pas effectué cette fois, mais sera fait ultérieurement »_

afin d'aider un développeur à réaliser une application de manière hiérachique, chronolique et optimisée.

## DESCRIPTION ET ANALYSE DU PROJET

"""
[INSEREZ L'ANALYSE DE VOTRE PROJET ICI]

"""

## INSTRUCTIONS

### Etape 1

**Générer les user stories** au **format Markdown** dans le fichier `./devbook/user-stories.md` :

1. **Pour chaque fonctionnalité identifiée** :

- Créer une user story qui décrit le besoin de l'utilisateur et les critères d'acceptation.
- **Fournir des checklists de codage** : Fournir une checklist détaillée des tâches de codage nécessaires pour implémenter la fonctionnalité en utilisant la stack technique spécifiée.

<sample_output>

## US-[numero] : [nom de l'user-story]

[description US : « **En tant [???]**, je veux [???], afin de [???].» ]

---

> _Règle métier_ :
> [description de la règle métier]
>
> ---

### **Critères d'acceptation** :

[description critères d'acceptation : « **ETANT DONNE [???]** LORSQUE _[???]_ ALORS _[???]_. »]

[ liste à puce des critères d'acceptations]

### **Checklist technique**:

- [ ] étape 1
- [ ] étape 2
      ...

### **Notes**:

[informations complémentaires]

</sample_output>

#### Exemple de User Stories

_Voici quelques exemples de user stories basées sur une description hypothétique :_

---

## US-1 : Page d'accueil

**En tant qu'utilisateur**, je veux voir une page d'accueil attrayante avec une navigation intuitive, afin de pouvoir facilement accéder aux différentes sections du site.

---

> _Règle métier_ :
> Afficher la page d'accueil avec un titre et une barre de navigation
>
> ---

### **Critères d'acceptation** :

« **ETANT DONNE la page d'accueil** LORSQUE _l'utilisateur accède au site web_ ALORS _le titre de page d'accueil s'affiche et le menu de navigation est toujours visible_. »

- Le titre de la page est clairement visible
- La barre de navigation doit toujours être visible

### **Checklist technique**:

- [ ] Créer un composant `HomePage`.
- [ ] Ajouter une barre de navigation avec des liens vers les principales sections.
- [ ] Appliquer des styles avec TailwindCSS pour une apparence attrayante.
- [ ] Tester la navigation pour s'assurer que tous les liens fonctionnent correctement.

---

## US-2 : Système d'inscription

**En tant qu'utilisateur**, je veux pouvoir m'inscrire sur le site en fournissant mon adresse e-mail et un mot de passe, afin de pouvoir accéder à des fonctionnalités réservées aux membres.

---

> _Règle métier_ :
> Inscription d'un utilisateur
>
> ---

### **Critères d'acceptation** :

« **ETANT DONNE un formulaire d'inscription** LORSQUE _l'utilisateur a remplis correctement les champs puis cliqué sur le bouton "S'inscrire"_ ALORS _l'utilisateur est inscrit en tant que membre dans la BDD_. »

- L'email doit être une email valide
- Le mot de passe doit contenir 8 caractères minimum

### **Checklist technique**:

- [ ] Créer un composant `SignUpForm`.
- [ ] Ajouter des champs pour l'adresse e-mail et le mot de passe.
- [ ] Implémenter une validation pour les entrées utilisateur avec Zod.
- [ ] Connecter le formulaire à une API d'inscription (si applicable).
- [ ] Tester le formulaire pour s'assurer que les validations fonctionnent.

### Notes:

- Amélioration future : Connection OAuth (Google, Microsoft, LinkedIn, Github...)

---

## US-3 : Système de connexion

**En tant qu'utilisateur**, je veux pouvoir me connecter à mon compte en utilisant mon adresse e-mail et mon mot de passe, afin de pouvoir accéder à mon tableau de bord personnel.

---

> _Règle métier_ :
> Connexion d'un utilisateur déja inscrit.
>
> ---

### **Critères d'acceptation** :

« **ETANT DONNE un formulaire de connexion** LORSQUE _l'utilisateur (déja membre) se connecte_ ALORS _La page de son dashboard s'affiche_. »

- Une bouton de connexion doit être visible
- L'email doit être valide
- Un lien 'mot de passe perdu ?' doit être visible
- Redirection vers le dashboard pour un utilisateur "membre"

### **Checklist technique**:

- [ ] Créer un composant `LoginForm`.
- [ ] Ajouter des champs pour l'adresse e-mail et le mot de passe.
- [ ] Implémenter l'authentification utilisateur.
- [ ] Gérer les erreurs d'authentification (ex. mot de passe incorrect).
- [ ] Redirection vers dashboard en cas de succès.
- [ ] Tester le formulaire pour s'assurer que l'authentification fonctionne.

---

## US-4 : Dashboard - Affichage liste des projets

**En tant qu'utilisateur**, je veux voir une liste de mes projets sur mon tableau de bord, afin de pouvoir les gérer facilement.

---

> _Règle métier_ :
> Visualiser le titre et la priorité de chaque projet.
>
> ---

### **Critères d'acceptation** :

« ETANT DONNE _une liste de projet_ LORSQUE _l'utilsateur est connecté_ ALORS *sa liste de projets s'affiche* »

- Les projets peuvent être filtrées par statut
- Les projets peuvent être filtrées par priorité
- Les filtres sont facilement accessibles
- Les résultats sont mis à jour en temps réel

### **Checklist technique**:

- [ ] Créer un composant `Dashboard`.
- [ ] Afficher une liste de projets.
- [ ] Utiliser des hooks React pour gérer l'état des projets (Store via Zustand).
- [ ] Ajouter des fonctionnalités de base pour ajouter/supprimer des projets.
- [ ] Tester le tableau de bord pour s'assurer que les projets sont affichés correctement.

---
