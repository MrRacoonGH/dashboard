import React from 'react';
import '../css/normalize.css';
import '../css/reset.css';

const Login = () => {
  return (
    <main>
      <section>
        <h1>CentralBoard Connect</h1>

        <form>
          <label htmlFor="username">Nom d'utilisateur :</label><br />
          <input type="text" id="username" name="username" required /><br /><br />

          <label htmlFor="password">Mot de passe :</label><br />
          <input type="password" id="password" name="password" required /><br /><br />

          <div>
            <button type="submit">Se connecter</button>
            <button type="button" onClick={() => alert('Redirection vers création de compte')}>
              Créer un compte
            </button>
          </div>
        </form>
      </section>
    </main>
  );
};

export default Login;