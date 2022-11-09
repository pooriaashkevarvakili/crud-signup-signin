<template>
  <div>
    <div class="flex items-center justify-center mt-48">
      <label for="">add todo</label>
      <input
        v-model="content"
        placeholder="add"
        class="
          border
          placeholder-gray-400
          border-black
          2xl:px-10
          xl:px-10
          lg:px-5
          md:px-5
          px-5
          py-3
          rounded-xl
          ml-3
        "
        type="text"
      />
      <button
        @click="submit"
        class="
          px-10
          py-3
          bg-green-500
          text-white
          cursor-pointer
          ml-3
          rounded-xl
        "
      >
        add
      </button>
    </div>

    <div class="flex items-center justify-center">
      <span>222</span>
    </div>
    <div
      v-for="item in todos"
      :key="item.id"
      class="flex items-center justify-center gap-10 space-y-3"
    >
      <span
        :class="
          [isDone]
            ? 'line-throught text-green-600'
            : ''`w-full text-bold text-gray-200`
        "
        class="flex justify-center items-center"
      >
        {{ item }}
      </span>
      <button
        @click="done(todo, i)"
        v-if="notDone"
        class="px-10 py-3 bg-green-500 rounded-xl text-white cursor-pointer"
      >
        done
      </button>
      <button
        @click="done(todo, i)"
        v-else
        class="px-10 py-3 bg-green-500 rounded-xl text-white cursor-pointer"
      >
        notdone
      </button>
      <button
        @click="deleteTodo(todo, i)"
        class="px-10 py-3 bg-green-500 rounded-xl text-white cursor-pointer"
      >
        remove
      </button>
    </div>
    {{ content }}
  </div>
</template>
<script>
export default {
  data() {
    return {
      content: "",
      todos: [],
      isDone: "",
    };
  },

  methods: {
    submit: function () {
      this.$axios
        .post("https://fakestoreapi.com/products/", {
          content: this.content,
        })
        .then((res) => {
          this.todos.unshift(res.data);
          this.content = "";
          res.data;
        })
        .finally(() => {});
    },
    done: function (todo, i) {
      this.$nuxt.$loading.start();
      const api = "https://fakestoreapi.com/products/" + todo;
      this.todos = this.$axios
        .post({ url: api })
        .then((res) => {
          this.todos[i].isDone = res.data;
          console.log(res.data);
        })
        .catch((err) => {
          console.log(err);
        })
        .finally({});
    },
    deleteTodo: function (todo, i) {
      const api = "https://fakestoreapi.com/products/" + todo;
      this.todos = this.$axios
        .delete({ url: api })
        .then((res) => {
          this.todos[i].isDone = res.data;
          if (res.data == true) {
            this.todos.splice(i, 1);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    mounted() {
      this.todos = this.$axios
        .get("https://fakestoreapi.com/products/")
        .then((res) => {
          console.log(res.data);
          res.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style>
</style>