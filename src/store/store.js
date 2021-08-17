import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      todos: [],
    };
  },
  mutations: {
    setTodos(state, todos) {
      state.todos = todos;
    },
  },
  actions: {
    setTodos({ commit }, todos) {
      commit("setTodos", todos);
    },
  },
});

export default store;
