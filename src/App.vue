<template>
  <Header @toggle-add-task="toogleAddTask()" />
  <AddTask v-if="showAddTask" />
  <TaskBar />
</template>

<script>
import Header from "./components/Header.vue";
import AddTask from "./components/AddTask.vue";
import TaskBar from "./components/TaskBar.vue";

import store from "./store/store";

export default {
  name: "App",
  components: {
    Header,
    AddTask,
    TaskBar,
  },
  created() {
    let todos = JSON.parse(localStorage.getItem("app-todos"));
    if (todos === null) {
      todos = [];
    }
    store.dispatch("setTodos", todos);
  },
  data() {
    return {
      showAddTask: true,
    };
  },
  methods: {
    toogleAddTask() {
      this.showAddTask = !this.showAddTask;
    },
  },
};
</script>
