<template>
  <div>
    <h2>Step by Step</h2>
      <div class="todo-list">
        <!-- Loop Over All Todos -->
        
        <div v-for="(td, j) in todos" :key="'td-'+j" class="list" :class="{completed: td.completed, inter: j>6, advanced: j>10}">
          
          <!-- Show Label -->
          <span class="step">Step {{j}}</span>
          <label class="material-checkbox">
            <input type="checkbox" v-model="td.completed">
            <span></span>
            <div class="text" :class="{completed: td.completed}" v-html="td.text"></div>
          </label>          
          <template v-for="child in td.children">
             <details v-if="child.astuce">
                <summary>Astuce</summary>
                <div v-html="child.content"></div>
              </details>
              <div v-else v-html="child.content"></div>
          </template>
          
      
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
      <span>{{ remaining }} steps to go.</span>
    </footer>
  </div>
</template>

<script>
export default {
  name: "TodoList",
  mounted() {
    if (localStorage.getItem('pluginsteps')) {
      this.todos = JSON.parse(localStorage.getItem('pluginsteps'));
    }
  },
  watch: {
    remaining: {
      handler(after, before) {
        localStorage.setItem('pluginsteps', JSON.stringify(this.todos));
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
      todos: this.getTodos(),
    }
  },

  computed: {
    remaining() {
      return this.todos.filter(todo => !todo.completed).length;
    }
  },

  methods: {
    animate() {
      this.currentWapuu = Math.floor(Math.random()*15);
    },
    getTodos() {
      const Items = document.getElementById("fulllist").children
      const ItemsArray = Array.prototype.slice.call(Items)
      let todos = new Array()
      ItemsArray.forEach( (el, index) => {
        todos.push(Array.prototype.slice.call(el.children).reduce( (acc, cur, i, array) => {
          if (i===0) {
            acc.text = cur.innerHTML
          } else {
            acc.children.push({
              content: cur.innerHTML,
              astuce: cur.classList.contains("astuce")
            })
          }
          return acc;
        }, {children: new Array(), completed: false}))
      })
      return todos
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
  top: 0;
  left: 0;
  right: 0;
  padding: .5rem;
  background: #41b883;
  color: #fff;
}

.todo-list {
  padding: 8px 0 64px;
  transition: 0.4s;
}

.todo-list .list:hover {
  box-shadow: inset 0 0 0 2px #41b883, 0 5px 15px rgba(0,0,0,.15);
}

.todo-list .list {
  position: relative;
  align-items: center;
  padding: 1rem;
  box-shadow: inset 0 0 0 2px transparent, 0 5px 15px rgba(0,0,0,.15);
  margin-bottom: 1rem;
  transition: 0.4s;
}
.todo-list .list {
  display: none;
}
.todo-list .list:first-child,
.todo-list .completed,
.todo-list .completed + .list{
  display: block;
}
.todo-list .list .text {
  margin: 6px 0;
  cursor: default;
  flex: 1;
  transition: 0.4s;
}

.todo-list .list .text.completed {
  color: #41b883;
}

.todo-list .list.inter .text.completed {
  color: mediumblue;
}
.todo-list .list.inter:hover {
  box-shadow: inset 0 0 0 2px mediumblue, 0 5px 15px rgba(0,0,0,.15);
}
.todo-list .list.advanced .text.completed {
  color: tomato;
}
.todo-list .list.advanced:hover {
  box-shadow: inset 0 0 0 2px tomato, 0 5px 15px rgba(0,0,0,.15);
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

.inter .material-checkbox > input:checked + span::before {
  border-color: mediumblue;
  background-color: mediumblue;
}

.inter .material-checkbox > input:active + span::before {
  border-color: mediumblue;
}

.advanced .material-checkbox > input:checked + span::before {
  border-color: tomato;
  background-color: tomato;
}

.advanced .material-checkbox > input:active + span::before {
  border-color: tomato;
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
  width: 6rem;
  height: 6rem;
  position: fixed;
  bottom: -10vh;
  left: -10vw;
}
.active {
  animation: fun 4s forwards;
}

.active img, .idle img {
  width: 100%;
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
.step {
  position: absolute;
  top: 0;
  right: 0;
  background: #41b883;
  padding: 4px;
  color: white;
  font-size: 60%;
}
.inter .step {
  background: mediumblue;
}
.advanced .step {
  background:tomato;
}
</style>
