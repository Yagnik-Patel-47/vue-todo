<template>
  <div class="flex py-4 px-6 flex-col bg-gray-300 rounded-md space-y-4">
    <div class="flex justify-between items-center">
      <span class="font-medium text-gray-900 text-lg">{{ todo.title }}</span>
      <button
        class="
        py-2
        font-semibold
        uppercase
        px-4
        bg-blue-500
        hover:bg-blue-700
        rounded
        text-white
        font-roboto
        text-xs
      "
        @click="emitDelete()"
      >
        remove
      </button>
    </div>
    <div class="flex flex-col items-start space-y-4">
      <p class="leading-tight" v-if="showDescription">
        {{ todo.description }}
      </p>
      <p v-if="!todo.description">No Description.</p>
      <button
        class="
        py-2
        font-semibold
        uppercase
        px-4
        border-2 border-blue-500
        hover:border-blue-700
        rounded
        text-gray-800
        font-roboto
        text-xs
      "
        @click="toggleShowDes()"
        v-if="todo.description"
      >
        {{ btnText }}
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    todo: { title: String, description: String },
    index: Number,
  },
  data() {
    return {
      showDescription: false,
      btnText: "show description",
    };
  },
  methods: {
    toggleShowDes() {
      this.showDescription = !this.showDescription;
      if (this.showDescription === true) {
        this.btnText = "close description";
      } else {
        this.btnText = "show description";
      }
    },
    emitDelete() {
      this.$emit("todo-delete", this.index);
    },
  },
};
</script>

<style></style>
