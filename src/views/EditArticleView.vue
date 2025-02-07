<template>
  <p class="text-center display-2">Edit article</p>
  <Loader v-if="isLoading" class="offset-md-6" />
  <ArticleForm
    v-else-if="!isLoading && article"
    :initialValue="initialValue"
    :onSubmitHandler="editArticleHandler"
    :clickText="'Edit article'"
  />
</template>

<script>
import { ArticleForm } from "@/components";
import { mapState } from "vuex";
export default {
  components: { ArticleForm },
  methods: {
    editArticleHandler(article) {
      this.$store
        .dispatch("editArticle", {
          article,
          slug: this.$route.params.slug,
        })
        .then(() => this.$router.push({ name: "home" }));
      console.log(article);
    },
  },
  computed: {
    ...mapState({
      article: (state) => state.articles.articleDetail,
      isLoading: (state) => state.articles.isLoading,
    }),
    initialValue() {
      return {
        title: this.article.title,
        description: this.article.description,
        body: this.article.body,
      };
    },
  },
  mounted() {
    this.$store.dispatch("articleDetail", this.$route.params.slug);
  },
};
</script>
