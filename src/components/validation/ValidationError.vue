<template>
  <ul class="text-start list-group mb-2">
    <li
      v-for="errorMessage in errorMessages"
      key="errorMessage"
      class="list-group-item list-group-item-danger"
    >
      {{ errorMessage }}
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    validationErrors: {
      type: Object,
      required: true,
    },
  },
  computed: {
    errorMessages() {
      return Object.keys(this.validationErrors).map((name) => {
        const msg = this.validationErrors[name].join(", ");
        return `${name} ${msg}`;
      });
    },
  },
};
</script>

<style></style>
