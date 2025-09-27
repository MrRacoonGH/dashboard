const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;
const DATA_PATH = path.join(__dirname, 'data', 'user.json');

// 🔐 Charger les utilisateurs
function loadUsers() {
  if (fs.existsSync(DATA_PATH)) {
    return JSON.parse(fs.readFileSync(DATA_PATH));
  }
  return [];
}

// 💾 Enregistrer un nouvel utilisateur
function saveUser(username, password) {
  const users = loadUsers();
  users.push({ username, password });
  fs.writeFileSync(DATA_PATH, JSON.stringify(users, null, 2));
}

// 📥 Route GET pour créer un compte
app.get('/creer-compte', (req, res) => {
  const { username, password } = req.query;
  if (!username || !password) {
    return res.send('Paramètres manquants.');
  }
  saveUser(username, password);
  res.send('Compte créé avec succès !');
});

// 🔓 Route GET pour se connecter
app.get('/traitement-connexion', (req, res) => {
  const { username, password } = req.query;
  const users = loadUsers();
  const match = users.find(user => user.username === username && user.password === password);
  if (match) {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
  } else {
    res.send('Nom d’utilisateur ou mot de passe incorrect.');
  }
});

// 🏠 Route par défaut
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'login.html'));
});

app.listen(PORT, () => {
  console.log(`Serveur lancé sur http://localhost:${PORT}`);
});