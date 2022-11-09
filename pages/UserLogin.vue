<template>
  <div class="flex flex-col items-center justify-center w-full h-screen">
    دریافت اطلاعات کاربرلاگین شده
    <div>username: {{ user.userName }}</div>
    <div>id:{{ user.id }}</div>
    <div>firstName:{{ user.firstName }}</div>
    <div>lastName:{{ user.lastName }}</div>
    <div>fullName:{{ user.fullName }}</div>
    <div>lastActivityDate:{{ user.lastActivityDate }}</div>
    <div>lastIpAddress:{{ user.lastIpAddress }}</div>
    <div>lastLoginDate:{{ user.lastLoginDate }}</div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  data() {
    return {};
  },
  computed: {
    ...mapGetters({
      user: "userSignInProfile",
    }),
  },

  mounted() {
    this.getUserSendLogin();
  },

  methods: {
    ...mapActions(["getUserSendLogin"]),
  },
};
</script>

<style>
</style>