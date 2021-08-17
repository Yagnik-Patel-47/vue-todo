<template>
  <div class="flex flex-col px-2 m-4">
    <h3 class="font-medium text-xl">Tasks</h3>
    <div class="flex flex-col space-y-4 mt-3">
      <Task
        v-for="(todo, index) in todos"
        :key="index"
        :todo="todo"
        :index="index"
        @todo-delete="removeTodo(index)"
      />
    </div>
  </div>
</template>

<script>
import Task from "./Task.vue";
import store from "../store/store";

export default {
  name: "TaskBar",
  components: {
    Task,
  },
  data() {
    return {
      todos: store.state.todos,
    };
  },
  methods: {
    removeTodo(index) {
      this.todos.splice(index, 1);
      store.dispatch("setTodos", this.todos);
      localStorage.setItem("app-todos", JSON.stringify(this.todos));
    },
  },
};
</script>
