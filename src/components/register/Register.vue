<template>
  <main class="form-signin w-25 m-auto mt-5">
    <form @submit.prevent="submitHandler">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="40"
        height="32"
        class="me-2"
        viewBox="0 0 118 94"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M24.509 0c-6.733 0-11.715 5.893-11.492 12.284.214 6.14-.064 14.092-2.066 20.577C8.943 39.365 5.547 43.485 0 44.014v5.972c5.547.529 8.943 4.649 10.951 11.153 2.002 6.485 2.28 14.437 2.066 20.577C12.794 88.106 17.776 94 24.51 94H93.5c6.733 0 11.714-5.893 11.491-12.284-.214-6.14.064-14.092 2.066-20.577 2.009-6.504 5.396-10.624 10.943-11.153v-5.972c-5.547-.529-8.934-4.649-10.943-11.153-2.002-6.484-2.28-14.437-2.066-20.577C105.214 5.894 100.233 0 93.5 0H24.508zM80 57.863C80 66.663 73.436 72 62.543 72H44a2 2 0 0 1-2-2V24a2 2 0 0 1 2-2h18.437c9.083 0 15.044 4.92 15.044 12.474 0 5.302-4.01 10.049-9.119 10.88v.277C75.317 46.394 80 51.21 80 57.863zM60.521 28.34H49.948v14.934h8.905c6.884 0 10.68-2.772 10.68-7.727 0-4.643-3.264-7.207-9.012-7.207zM49.948 49.2v16.458H60.91c7.167 0 10.964-2.876 10.964-8.281 0-5.406-3.903-8.178-11.425-8.178H49.948z"
          fill="#7811f7"
        />
      </svg>
      <h1 class="h3 mb-3 fw-normal mt-3">Register</h1>

      <ValidationError
        v-if="validationErrors"
        :validationErrors="validationErrors"
      />

      <Input :label="'Username'" :type="'text'" v-model="username" />
      <Input
        :label="'Email address'"
        :type="'email'"
        class="mt-2"
        v-model="email"
      />
      <Input
        :label="'Password'"
        :type="'password'"
        class="mt-2"
        v-model="password"
      />
      <RouterLink :to="{ name: 'login' }" class="text-start mt-2 d-block"
        >Already have an account? Login</RouterLink
      >
      <Button type="submit" :disabled="isLoading">Register</Button>
    </form>
  </main>
</template>

<script>
import { RouterLink } from "vue-router";
import ValidationError from "../validation/ValidationError.vue";
import { mapState } from "vuex";
import store from "@/store";

export default {
  components: { ValidationError },
  data() {
    return {
      username: "",
      email: "",
      password: "",
    };
  },
  computed: {
    ...mapState({
      isLoading: (state) => state.auth.isLoading,
      validationErrors: (state) => state.auth.errors,
    }),
  },
  methods: {
    submitHandler() {
      const data = {
        username: this.username,
        email: this.email,
        password: this.password,
      };
      this.$store
        .dispatch("register", data)
        .then((user) => {
          console.log(user);
          this.$router.push({ name: "home" });
        })
        .catch((err) => console.log(err));
    },
  },
};
</script>

<style></style>
