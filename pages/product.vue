<template>
  <div
    class="flex flex-col justify-center text-lg w-full items-center h-screen"
  >
    شما وارد شدید
    <button
      @click="userLogin"
      class="mt-2 bg-green-500 text-white text-lg px-10 py-3 rounded-xl"
    >
      userlogin
    </button>
    <button
      @click="SignOut"
      class="mt-2 bg-green-500 text-white text-lg px-10 py-3 rounded-xl"
    >
      خروج
    </button>
    <button
      @click="todoCrud"
      class="mt-2 bg-green-500 text-white text-lg px-10 py-3 rounded-xl"
    >
      todoCrud
    </button>
    <button
      @click="todoCrudApi"
      class="mt-2 bg-green-500 text-white text-lg px-10 py-3 rounded-xl"
    >
      todoCrudnotApi
    </button>
  </div>
</template>
<script>
import { mapActions } from "vuex";
export default {
  async AsyncData() {
    getUsersSignOut();
  },
  methods: {
    ...mapActions(["getUsersSignOut"]),
    SignOut() {
      this.$router.push("/");
    },
    todoCrud() {
      this.$router.push("/todoCrud");
    },
    userLogin() {
      this.$router.push("/userLogin");
    },
    todoCrudApi() {
      this.$router.push("/todoCrudApi");
    },
  },
};
</script>

<style>
</style>