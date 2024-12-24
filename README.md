# App - EcoRide

ECF Développeur Web et Web Mobile --> Application web de covoiturage

## Installation

### Clonez le dépôt

```bash
git clone https://github.com/RVidal34/app-ecoride.git
```

### Installer les dépendances

1. **Frontend :**

- Aller à la racine du dossier **frontend** :

```bash
cd frontend
```

- Installer `node_modules` :

```bash
npm install
```

- Tester l'installation :

```bash
npm run dev
```

## Fonctionnalité

- Recherche de trajets
- Création de compte
- Possibilité de trajets **écologique**

## Stack technique

- Frontend : React + Vite
- Backend : Express.js
- Bases de données : MariaDB (SQL), MongoDB (NoSQL)

## Branches

- `main` : version stable
- `develop` : développement en cours
- `init/*` : branche dédiée à l'initialisation du projet
- `feature/*` : branche dédiée à une fonctionnalité
- `bugFix/*` : branche dédiée à la résolution d'un bug

## Bugs et Fix

- Problème rencontrer lors de la configuration de **Bootstrap** :
  \
  `@import` est déprécié au profit de `@use`
  \
  Ne sachant pas comment résoudre le problème après plusieurs essais, et après plusieurs recherches sur différents sites et forums.
  J'ai décidé de laisser le problème en l'état vu qu'il ne crée pas de bug majeur et n'empêche pas le bon fonctionnement de l'application.
