<template>
  <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
    <Loader v-if="isLoading" class="offset-md-6" />
    <ArticleCard
      v-else
      v-for="article in data"
      :key="article.id"
      :article="article"
    />
  </div>
</template>

<script>
import ArticleCard from "@/components/article-card/ArticleCard.vue";
import Loader from "@/ui-components/Loader.vue";
import { mapState } from "vuex";

export default {
  components: { ArticleCard },
  computed: {
    ...mapState({
      data: (state) => state.articles.data,
      isLoading: (state) => state.articles.isLoading,
      error: (state) => state.articles.error,
    }),
  },
  mounted() {
    this.$store.dispatch("articles");
  },
};
</script>

<style></style>
