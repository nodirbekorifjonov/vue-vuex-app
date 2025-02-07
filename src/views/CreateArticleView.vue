<template>
  <p class="text-center display-2">Create article</p>
  <ArticleForm
    :initialValue="initialValue"
    :onSubmitHandler="createArticleHandler"
    :clickText="'Create article'"
  />
</template>

<script>
import { ArticleForm } from "@/components";
import { mapState } from "vuex";

export default {
  data() {
    return {
      title: "",
      description: "",
      body: "",
    };
  },
  components: { ArticleForm },
  methods: {
    createArticleHandler(article) {
      this.$store
        .dispatch("createArticle", article)
        .then(() => this.$store.dispatch("articles"));
      this.$router.push({ name: "home" });
    },
  },
  computed: {
    ...mapState({
      isLoading: (state) => state.control.isLoading,
    }),
    initialValue() {
      return {
        title: "",
        description: "",
        body: "",
      };
    },
  },
};
</script>

<style></style>
