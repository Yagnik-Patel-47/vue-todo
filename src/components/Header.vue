<template>
  <div class="p-4 flex justify-between items-center">
    <h1 class="text-3xl font-bold">Task Tracker</h1>
    <button
      class="bg-blue-600 uppercase font-medium py-2 px-4 rounded-md text-white hover:bg-blue-700"
      @click="emitChange()"
    >
      Toggle Add
    </button>
  </div>
</template>

<script>
export default {
  name: "Header",
  methods: {
    emitChange() {
      this.$emit("toggle-add-task");
    },
  },
};
</script>
