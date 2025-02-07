<template>
  <Loader v-if="isLoading" class="offset-md-6" />
  <ArticleDetail v-else />
</template>

<script>
import ArticleDetail from "@/components/article-detail/ArticleDetail.vue";
import { mapState } from "vuex";

export default {
  components: { ArticleDetail },
  mounted() {
    this.$store.dispatch("articleDetail", this.$route.params.slug);
  },
  computed: {
    ...mapState({
      isLoading: (state) => state.auth.isLoading,
    }),
  },
};
</script>

<style></style>
