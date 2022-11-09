<!-- Please remove this file from your project -->
<template>
  <div class="flex flex-col justify-center items-center h-screen w-full">
    login
    <label class="mt-2 grid"
      >user
      <input
        required
        type="text"
        class="border border-black"
        v-model="username"
      />
    </label>
    <label class="mt-2 grid"
      >password
      <input
        type="password"
        required
        v-model="password"
        class="border border-black"
      />
    </label>
    <button
      @click="getUsersSignIni"
      class="mt-5 bg-green-500 border-none rounded-xl text-white mx-4 px-20 p-2"
    >
      signin
    </button>
  </div>
</template>
<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      username: "",
      password: "",
    };
  },
  mounted() {
    this.getUsersSignIn();
  },
  methods: {
    ...mapActions(["getUsersSignIn"]),
    getUsersSignIni() {
      if (this.username === "0078896290" && this.password === "123456") {
        this.$router.push("/product");
      }
    },
  },
};
</script>
