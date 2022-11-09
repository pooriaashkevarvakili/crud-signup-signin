<template>
  <div class="flex items-center justify-center mt-36">
    <label for="">add</label>
    <div class="ml-3">
      <input
        type="text"
        class="border px-10 py-3 rounded-xl border-black"
        placeholder="add new task"
        v-model="newTask"
        @keypress.enter="addTask"
      />
      <button
        @click="addTask"
        class="bg-green-500 rounded-xl text-white px-10 py-3"
      >
        add
      </button>
      <div>
        {{ user.title }}
        <Task v-for="(task, i) in $store.state.tasks" :key="i" :task="task" />
      </div>
    </div>
    {{ user.id }}
  </div>
</template>

<script>
import Task from "./Task.vue";
import { mapGetters, mapState } from "vuex";
export default {
  components: { Task },
  data() {
    return {
      newTask: "",
      task: [],
    };
  },
  computed: {
    ...mapGetters({
      user: "tasks",
    }),
    ...mapState({
      user: (state) => state.tasks,
    }),
  },
  mounted() {
    this.$store.dispatch("addTask");
    console.log(this.$store.dispatch("addTask"));
  },
  methods: {
    addTask() {
      if (this.newTask) {
        this.$store.dispatch("addTask", this.newTask);
        this.newTask = "";
      }
    },
  },
};
</script>

<style>
</style>