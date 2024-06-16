# LinkedIn Clone Frontend

## Description
Ce projet est le frontend d'un clone de LinkedIn, construit avec React, Redux, TailwindCSS, et Ant Design. Il interagit avec un backend conçu en utilisant une architecture de microservices.

## Technologies Utilisées
- React
- Redux (Toolkit)
- React Router
- Axios
- TailwindCSS
- Ant Design

## Instructions d'Installation
1. Clonez le dépôt :
   ```bash
   git clone https://github.com/your-username/linkedin-clone-frontend
   cd linkedin-clone-frontend

Structure du Projet
src/components : Contient les composants React pour différentes pages.
src/features : Contient les slices Redux pour la gestion de l'état.
src/api.js : Configuration Axios pour les appels API.
src/store.js : Configuration du store Redux.
src/index.js : Point d'entrée principal pour l'application React.
src/index.css : Configuration TailwindCSS.
Fonctionnalités
Page d'Accueil : Affiche une liste de publications.
Page de Publication : Affiche les détails d'une seule publication.
Nouvelle Publication : Permet à l'utilisateur de créer une nouvelle publication.
Profil Utilisateur : Affiche les informations de l'utilisateur et permet de modifier les détails du profil.
Intégration API
Le frontend interagit avec le backend en utilisant Axios pour effectuer des requêtes HTTP.

Gestion des Erreurs
Des messages d'erreur appropriés et des validations d'entrée sont implémentés pour améliorer l'expérience utilisateur.

Déploiement
Pour déployer l'application en utilisant Docker, suivez les instructions ci-dessous :

Dockerisation
Pour déployer l'application en utilisant Docker, utilisez le Dockerfile et le fichier docker-compose.yml fournis.

Dockerfile
Assurez-vous que le Dockerfile est correctement configuré pour construire l'image Docker du frontend.

docker-compose.yml
Utilisez Docker Compose pour lancer à la fois le frontend et le backend ensemble.

Contributeurs
Yaya Ali Mohamed (Mohamed-Ali.YAYA@ecole-it.com)
Haroun Bouhafs (Haroun.bouhafs@ecole-it.com)
