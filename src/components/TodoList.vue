<template>
  <div class="container">
    <div style="flex: 1;">
      <div class="todo-list">
        <!-- Loop Over All Todos -->
        <div v-for="(todo, i) in todos" :key="i" class="list" :class="{completed: todo.completed}">
          <!-- Show Label -->
          <label class="material-checkbox">
            <input type="checkbox" v-model="todo.completed">
            <span></span>
            <div class="text" :class="{completed: todo.completed}">{{ todo.text }}</div>
          </label>
          <details v-if="todo.astuce">
            <summary>Astuce</summary>
            <p>{{todo.astuce}}</p>
          </details>
      </div>
      </div>
    </div>
    <div id="wapuu0" :class="currentWapuu === 0 ? 'active' : 'idle'"><img src="../assets/wapuu0.png"></div>
    <div id="wapuu1" :class="currentWapuu === 1 ? 'active' : 'idle'"><img src="../assets/wapuu1.png"></div>
    <div id="wapuu2" :class="currentWapuu === 2 ? 'active' : 'idle'"><img src="../assets/wapuu2.png"></div>
    <div id="wapuu3" :class="currentWapuu === 3 ? 'active' : 'idle'"><img src="../assets/wapuu3.png"></div>
    <div id="wapuu4" :class="currentWapuu === 4 ? 'active' : 'idle'"><img src="../assets/wapuu4.png"></div>
    <div id="wapuu5" :class="currentWapuu === 5 ? 'active' : 'idle'"><img src="../assets/wapuu5.png"></div>
    <div id="wapuu6" :class="currentWapuu === 6 ? 'active' : 'idle'"><img src="../assets/wapuu6.png"></div>
    <div id="wapuu7" :class="currentWapuu === 7 ? 'active' : 'idle'"><img src="../assets/wapuu7.png"></div>
    <div id="wapuu8" :class="currentWapuu === 8 ? 'active' : 'idle'"><img src="../assets/wapuu8.png"></div>
    <div id="wapuu9" :class="currentWapuu === 9 ? 'active' : 'idle'"><img src="../assets/wapuu9.png"></div>
    <footer>
      <span>{{ remaining }} tâches à faire.</span>
    </footer>
  </div>
</template>

<script>
export default {
  name: "TodoList",
  mounted() {
    if (localStorage.getItem('todos')) {
      this.todos = JSON.parse(localStorage.getItem('todos'));
    }
  },
  watch: {
    remaining: {
      handler(after, before) {
        localStorage.setItem('todos', JSON.stringify(this.todos));
        if (after < before) {
          this.animate()
        }
      }
    },
  },
  data() {
    return {
      animationActive: 'idle',
      currentWapuu: -1,
      todos: [
        {
          text: "Connecte-toi à ton tableau de bord",
          astuce: "Dans ton navigateur ajoute /wp-admin/ à la fin de l'url dans la barre d'adresse"
        },
        {
          text: "Assure-toi que le site et ton tableau de bord soient en français",
          astuce: "Si ton tableau de bord est en anglais, va dans Settings > General"
        },
        {
          text: "Assure-toi que ton site ne soit pas pour l'instant indexé par Google - c'est trop tôt pour cela - il n'est pas encore abouti",
          astuce: "Rdv : Réglage - Lecture"
        },
        {
          text: "Choisi un titre et slogan pour ton site",
          astuce: "Rdv : Réglages - Général"
        },
        {
          text: "Ajoute ton prénom, nom et adresse mail en tant qu'administrateur, et surtout change ton mot de passe !",
          astuce: "Rdv : Utilisateurs > Votre profil"
        },
        {
          text: "Installe une extension Gutenberg - c'est un éditeur moderne qui deviendra très très prochainement l'éditeur de WordPress par défault",
          astuce: "Rdv : Extensions > Ajouter"
        },
        {
          text: "Assure-toi que Gutenberg est bien activé",
          astuce: "Rdv: Extensions > Extensions installées"
        },
        {
          text: "Change le thème, regarde comment cela modifie la mise en page de ton contenu",
          astuce: "Rdv: Thèmes. Tu pourras changer le thème à chaque moment !"
        },
        {
          text: "Ajoute au nouvel article. Crée un article en rapport avec le sujet de ton site.",
          astuce: "Rdv : Articles > Ajouter. Un article devrait posséder un titre, une catégorie, une image à la une, et bien évidemment son contenu principal. N'oublie pas de le publier ;)"
        },
        {
          text: "Assure-toi d'avoir créé au moins 3 articles dans 2 catégories différentes",
        },
        {
          text: "Crée une nouvelle page intitulée 'À propos' où tu te présenteras",
          astuce: "Rdv : Pages > Ajouter"
        },
        {
          text: "Ajoute une extension permettant d'avoir un formulaire de contact",
          astuce: "Rdv : Extensions > Ajouter, et tape Contact Form dans la barre de recherche"
        },
        {
          text: "Crée une nouvelle page intitulée 'Contacte-moi' et intègre le formulaire de contact",
          astuce: "copie-colle un Shortcode"
        },
        {
          text: "Assure-toi qu'en arrivant sur ton site, on peut naviguer vers les pages et articles que tu as créé",
          astuce: "Rdv : Apparence > Menu"
        },
        {
          text: "Trouve comment s'appellent les créatures qui t'accompagnent et qui traversent ton écran pendant ces tâches.",
          astuce: "Google is your friend ;)"
        }
      ]
    };
  },

  computed: {
    remaining() {
      return this.todos.filter(todo => !todo.completed).length;
    }
  },

  methods: {
    animate() {
      this.currentWapuu = Math.floor(Math.random()*15);
    }
  },

  directives: {
  }
};
</script>

<style scoped>
.container {
  min-height: 300px;
  display: flex;
  flex-direction: column;
}

footer {
  position: fixed;
  text-align: center;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 1rem;
  font-size: 2rem;
  background: #00739c;
  color: #fff;
}

.todo-list {
  padding: 8px 0 64px;
  transition: 0.4s;
}

.todo-list .list:hover {
  border-bottom: 1px solid;
}

.todo-list .list {
  align-items: center;
  padding: 1rem;
  border-bottom: 1px dashed;
}
.todo-list .list {
  visibility: hidden;
  opacity: 0;
}
.todo-list .list:first-child,
.todo-list .completed,
.todo-list .completed + .list{
  visibility: visible;
  opacity: 1;
}
.todo-list .list .text {
  margin: 6px 0;
  cursor: default;
  flex: 1;
}

.todo-list .list .text.completed {
  text-decoration: line-through;
}

.input__div {
  margin: 6px 0;
  position: relative;
  border: 1px solid #e4f5ef;
  flex: 1;
}

.input__div:focus-within .input__wrapper {
  background: #fff;
}

.input__div .input__wrapper {
  background: #f7fcfa;
  padding: 0 15px;
  transition: background 0.3s;
}

.input__div .input__wrapper input {
  height: 35px;
  background: 0 0;
  border: none;
  color: #2c3e50;
  display: block;
  font-family: inherit;
  font-size: 16px;
  line-height: 16px;
  outline: 0;
  padding: 0;
  position: relative;
  width: 100%;
  z-index: 1;
}

.input__div .border {
  background: #42b983;
  transition: all 0.18s;
  bottom: -1px;
  height: 2px;
  left: 30%;
  opacity: 0;
  pointer-events: none;
  position: absolute;
  right: 30%;
}

.input__div:focus-within .border {
  left: 0;
  right: 0;
  opacity: 1;
}

label {
  position: relative;
  display: inline-block;
  color: rgba(0, 0, 0, 0.87);
  cursor: pointer;
  display: flex;
  align-items: center;
}

.material-checkbox > input {
  appearance: none;
  -moz-appearance: none;
  -webkit-appearance: none;
  position: absolute;
  z-index: -1;
  display: block;
  margin: 0;
  border-radius: 50%;
  width: 18px;
  height: 18px;
  background-color: rgba(0, 0, 0, 0.42);
  outline: none;
  opacity: 0;
  transform: scale(1);
  -ms-transform: scale(0); /* Graceful degradation for IE */
  transition: opacity 0.5s, transform 0.5s;
}

.material-checkbox > input:checked {
  background-color: #2196f3;
}

.material-checkbox > input:disabled {
  opacity: 0;
}

.material-checkbox > input:disabled + span {
  cursor: initial;
}

.material-checkbox > span::before {
  content: "";
  display: inline-block;
  margin-right: 15px;
  border: solid 2px rgba(0, 0, 0, 0.42);
  border-radius: 2px;
  width: 14px;
  height: 14px;
  transition: border-color 0.5s, background-color 0.5s;
}
.material-checkbox > input + span {
  line-height: 1;
}
.material-checkbox > input:checked + span::before {
  border-color: #41b883;
  background-color: #41b883;
}

.material-checkbox > input:active + span::before {
  border-color: #41b883;
}

.material-checkbox > input:checked:active + span::before {
  border-color: transparent;
  background-color: rgba(0, 0, 0, 0.42);
}

.material-checkbox > span::after {
  content: "";
  display: inline-block;
  position: absolute;
  left: 0;
  width: 5px;
  height: 10px;
  border: solid 2px transparent;
  border-left: none;
  border-top: none;
  transform: translate(5.5px, 1px) rotate(45deg);
  -ms-transform: translate(5.5px, 2px) rotate(45deg);
}

.material-checkbox > input:checked + span::after {
  border-color: #fff;
}
.idle {
  opacity: 0;
}
.active, .idle {
  width: 3rem;
  height: 3rem;
  position: fixed;
  bottom: -10vh;
  left: -10vw;
  z-index: -1;
}
.active {
  animation: fun 4s forwards;
}

.active img, .idle img {
  width: 288px;
}
@keyframes fun {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
    transform: translate3d(110vw, -110vh, 0)
  }
}
*:focus {
  outline: none;
}
</style>
