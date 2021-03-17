<template>
  <div id="app">
    <main>
      <div class="intro">
      <div class="container">
        <h1>Création d'une Extension WordPress Step by Step</h1>
        <h2>Problème :</h2>
       
        <p class="problem"><img src="./assets/rates.png" alt="screenshot" width="200">Par défaut, WooCommerce affiche toutes les méthodes d'expédition qui correspondent au contenu du panier. Cela signifie que la livraison gratuite est affichée avec le tarif forfaitaire. Ceci peut prêter à confusion.</p>
        <h2>Solution :</h2>
        <p class="solution"><img src="./assets/rates.png" alt="screenshot" width="200">Ton team développe une extension WordPress qui permettera de masquer toutes les autres méthodes et d'afficher uniquement la livraison gratuite, si cette dernière s'applique au panier.</p>
      </div>
    </div>
      <div class="container">
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
:root {
  --brand: #db03b4;
  --completed: mediumblue;
}
* {
  box-sizing: border-box;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  margin-top: 0;
}
html {
  font-size: 112.5%;
}
body {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  color: #212121;
  font-family: Rubik, sans-serif;
  margin: 0;
  line-height: 1.8;
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
  padding: 6rem 1rem 1.5rem;
  background: var(--completed);
  color: white;
}
#fulllist {
  display: none!important;
}
a {
  color: var(--brand);
}
.intro p {
  overflow: hidden;
}
.problem img {
  float: right;
  margin-left: 1rem;
}
.solution img  {
  float: left;
  margin-right: 1rem;
}
</style>
