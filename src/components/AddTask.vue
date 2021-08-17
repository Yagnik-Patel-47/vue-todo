<template>
  <form @submit.prevent="handleSubmit()">
    <div class="flex flex-col p-4 border-2 border-blue-900 m-4 rounded-md">
      <h1 class="text-xl font-medium">Add Your Task</h1>
      <div class="flex flex-col space-y-2 mt-4">
        <div class="mb-4">
          <label
            class="block text-gray-700 text-sm font-bold mb-2"
            for="username"
          >
            Task Title
          </label>
          <input
            class="
          shadow
          appearance-none
          border border-gray-400
          rounded
          w-full
          py-2
          px-3
          text-gray-800
          leading-tight
          focus:outline-none focus:shadow-outline
        "
            id="username"
            type="text"
            placeholder="Ex: cycling"
            v-model="taskTitle"
            name="title"
          />
        </div>
        <div class="mb-6">
          <label
            class="block text-gray-700 text-sm font-bold mb-2"
            for="password"
          >
            Description
          </label>
          <textarea
            class="
          shadow
          appearance-none
          border border-gray-400
          rounded
          w-full
          py-2
          px-3
          text-gray-800
          mb-3
          leading-tight
          focus:outline-none focus:shadow-outline
        "
            id="password"
            placeholder="******************"
            v-model="taskDescription"
            name="description"
          ></textarea>
        </div>
        <div class="flex items-center justify-between">
          <button
            class="
          bg-blue-500
          hover:bg-blue-700
          text-white
          font-bold
          py-2
          px-4
          rounded
          focus:outline-none focus:shadow-outline
          uppercase
          font-roboto
        "
            type="submit"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  </form>
</template>

<script>
import store from "../store/store";

export default {
  name: "AddTask",
  data() {
    return {
      taskTitle: "",
      taskDescription: "",
    };
  },
  methods: {
    handleSubmit() {
      if (!this.taskTitle) {
        alert("please write title.");
        return;
      }

      const newTask = {
        title: this.taskTitle,
        description: this.taskDescription,
      };

      let tasks = store.state.todos;

      tasks.unshift(newTask);
      store.dispatch("setTodos", tasks);
      localStorage.setItem("app-todos", JSON.stringify(tasks));

      this.taskTitle = "";
      this.taskDescription = "";
    },
  },
};
</script>
