# FizzBuzz Frontend - Angular

Application frontend Angular permettant de consommer l'API FizzBuzz Backend.

---

# Prérequis

Avant de lancer l'application, il faut avoir installé :

* Node.js
* npm
* Docker
* Docker Compose

---

# Utilisation du projet

## 1. Télécharger le projet

Cloner le repository Git :

```bash
git clone <repository-url>
```

Accéder au dossier du projet :

```bash
cd <nom-du-projet>
```

---

## 2. Configuration de l'application

Avant de lancer l'application, mettre à jour les fichiers de configuration Angular :

```text
src/environments/

├── environment.development.ts
└── environment.ts
```

Modifier la variable :

```typescript
apiUrl
```

avec l'adresse correspondante de l'API Backend.

Exemple :

```typescript
export const environment = {

  production: false,

  apiUrl: "https://localhost:7245/api"

};
```

---

## 3. Lancer l'application en local

Installer les dépendances :

```bash
npm install
```

Démarrer l'application :

```bash
npm start
```

L'application sera accessible via :

```text
http://localhost:4200
```

---

# Déploiement avec Docker

Depuis le dossier du projet :

```bash
docker compose up
```

Docker va construire et démarrer l'application.

L'application sera accessible via l'URL configurée dans le fichier `compose.yml`.

Au cas ou la page de nginx s'affiche il faut juste Ctr + Maj + R cela va vider le cache forcé et ca va tourner
