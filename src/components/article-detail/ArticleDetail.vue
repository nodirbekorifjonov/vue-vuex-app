<template>
  <div v-if="article">
    <div class="row">
      <div class="col-12">
        <p class="fs-2">{{ article.title }}</p>
      </div>
      <div class="col-md-12 col-lg-8 mt-3">
        <p class="opacity-75">Desctiption:</p>
        <p class="font-monospace">{{ article.description }}</p>
      </div>
      <div class="col-6 col-lg-2 mt-3">
        <p class="opacity-75">Created at:</p>
        <p class="font-monospace">
          {{ new Date(article.createdAt).toLocaleDateString("us") }}
        </p>
      </div>
      <div class="col-6 col-lg-2 mt-3">
        <p class="opacity-75">Updated at:</p>
        <p class="font-monospace">
          {{ new Date(article.updatedAt).toLocaleDateString("us") }}
        </p>
      </div>
      <div class="col-12 col-lg-4 mt-3">
        <p class="opacity-75">Author:</p>
        <div class="d-flex gap-3 align-items-center">
          <div
            class="text-bg-primary rounded-circle fs-3 text-center d-flex justify-content-center align-items-center text-uppercase"
            style="width: 50px; height: 50px"
          >
            <span>{{ article.author.username[0] }}</span>
          </div>
          <div>
            <p class="fw-bold">
              {{ article.author.username }}
            </p>
          </div>
        </div>
        <p class="font-monospace mt-2">{{ article.author.bio }}</p>
      </div>
      <div class="col-12 col-lg-8 mt-3">
        <p class="opacity-75">Body:</p>
        <p class="font-monospace">{{ article.body }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState({
      article: (state) => state.articles.articleDetail,
    }),
  },
};
</script>

<style></style>
