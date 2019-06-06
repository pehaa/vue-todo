<template>
  <div id="app">
    <header>
      <img src="./assets/logo.svg" alt="logo WordPress">
      <h1>Création d'une Extension WordPress </h1>
      <p>Step by Step</p>
    </header>
    <main>
      <div class="intro">
      <div class="container">
        <h2>La mise en situation</h2>
        <p>Le Campus est le partenaire de votre client.</p>
        <p>La direction de simplon.co souhaiterait que dans chaque nouvel article publié, on trouve la mention suivante :</p>
        <blockquote>La publication de cet article est possible grâce à notre super partenaire <a href="https://simplon.co">simplon.co</a> - une entreprise de l’économie sociale et solidaire et un réseau de « fabriques » (écoles) qui propose des formations GRATUITES pour devenir développeur web.</blockquote>
        <p>Ce texte devrait apparaître dans l’article, soit tout au début, soit vers la fin, soit quelque part au milieu. Son placement devrait varier d’un article à l’autre.</p>
        <h2>Solution</h2>
        <p>Tu as proposé au client une solution utilisant <em>un shortcode.</em> Le texte souhaité va apparaître partout où le shortcode <code>[partenariat-simplon]</code> est utilisé.</p>
        <p>Ton extension va alors <strong>définir et activer</strong> un nouveau shortcode. Nous allons appeler notre extension <code>partenariat-simplon.</code></p>
      </div>
    </div>
      <div class="container">
        <p><img src="./assets/scr-simplon.png" alt="screenshot"></p>
        <todo-list />
      </div>
    </main>
  </div>
</template>

<script>
import TodoList from "./components/TodoList.vue";

export default {
  name: "app",
  components: {
    TodoList
  }
};
</script>

<style>
* {
  box-sizing: border-box;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}
html {
  font-size: 112.5%;
}
body {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  color: #212121;
  font-family: Poppins, sans-serif;
  margin: 0;
}

::-webkit-scrollbar {
  height: 10px;
  width: 10px;
}

::-webkit-scrollbar-thumb {
  background-clip: padding-box;
  background-color: #b4c7d0;
  border: 3px solid transparent;
  border-radius: 5px;
}

::-webkit-scrollbar-track-piece {
  background: 0 0;
}

code {
  font-size: 18px;
}

header {
  padding: 6rem 1.5rem;
  background-color: #212121;

  text-align: center;
  color: white;
  position: relative;
  overflow: hidden;
  z-index: -1;
}
header:before {
  content: "";
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-image: url("assets/devs.jpg");
  background-size: cover;
  background-position: center center;
  opacity: 0.6;
  z-index: -2;
}

#app {
}

img {
  display: block;
  margin: 0 auto 15px auto;
  max-width: 100%;
}
main {
    background: white;
}
.container {
  max-width: 960px;
  margin: 0 auto;
}
.intro {
  padding: 1.5rem 0;
  background: #212121;
  color: white;
}
#fulllist {
  display: none!important;
}
a {
  color: #41b883;
}
</style>
