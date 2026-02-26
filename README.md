# HRNet - Migration React (Projet 14)

Application interne RH développée dans le cadre du projet 14
OpenClassrooms.

Ce projet consiste en la migration d'une application legacy jQuery vers
une architecture React moderne, avec conversion d'un plugin jQuery en
composant React réutilisable.

---

## 🎯 Objectifs du projet

- Conversion complète de l'application HRNet en React
- Suppression totale de jQuery
- Création d'un composant Modal React réutilisable
- Publication de la librairie sur npm
- Mise en place d'une gestion d'état centralisée
- Implémentation d'un tableau dynamique avec :
  - Tri
  - Recherche globale
  - Pagination
- Analyse de performance via Lighthouse

---

## 🛠 Stack technique

- React 18
- Vite
- React Router
- Context API (gestion d'état)
- TanStack React Table
- React Portal
- npm (publication de package)

---

## 📦 Installation

```bash
git clone https://github.com/Kadir-works/p14-hrnet-react.git
cd p14-hrnet-react
npm install
npm run dev
```

---

## 📂 Structure du projet

src/ │ ├── components/ │ ├── EmployeeTable.jsx │ ├── pages/ │ ├──
CreateEmployee.jsx │ ├── EmployeeList.jsx │ ├── store/ │ ├──
EmployeeContext.jsx │ ├── App.jsx └── main.jsx

---

## 📌 Librairie Modal

Le plugin jQuery Modal a été converti en composant React indépendant :

npm : https://www.npmjs.com/package/react-modal-wealthhealth

Code source : https://github.com/Kadir-works/react-modal-wealthhealth

---

## 📊 Fonctionnalités principales

### Création d'employé

- Formulaire contrôlé
- Validation basique
- Affichage d'une modale de confirmation

### Liste des employés

- Tableau dynamique
- Tri par colonnes
- Recherche globale
- Pagination (10 / 25 / 50 / 100)
- Affichage du nombre total d'entrées

---

## 🚀 Performance

Audit Lighthouse réalisé avant et après migration.

Résultats : - Amélioration du temps de chargement - Réduction des
manipulations DOM - Suppression des dépendances jQuery

---

## 🧠 Paradigme de développement

- Programmation fonctionnelle
- Hooks React
- Composants modulaires
- Séparation claire des responsabilités

---

## 📄 Licence

ISC
