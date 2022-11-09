<template>
  <div>
    <div class="">{{ task.content }}</div>
    <div>{{ user.id }}</div>
    <div>
      <button
        @click="removeTask()"
        class="bg-green-500 text-white px-10 py-3 rounded-xl"
      >
        delete
      </button>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  props: ["task"],
  computed: {
    ...mapGetters({
      user: "tasks",
    }),
  },

  methods: {
    removeTask() {
      this.$store.commit("REMOVE_TASK", this.task);
    },
  },
};
</script>

<style>
</style>