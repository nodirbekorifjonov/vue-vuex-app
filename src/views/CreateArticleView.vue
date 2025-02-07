<template>
  <p class="text-center display-2">Create article</p>
  <div class="w-50 mx-auto">
    <form @submit.prevent>
      <Input type="text" label="Title" v-model="title" />
      <Textarea type="text" label="Descriptioin" v-model="description">
      </Textarea>
      <Textarea type="text" label="Body" v-model="body"></Textarea>

      <Button type="submit" @click="createArticleHandler">
        Create article
      </Button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "",
      description: "",
      body: "",
    };
  },
  methods: {
    createArticleHandler() {
      const article = {
        title: this.title,
        description: this.description,
        body: this.body,
        tagList: [],
      };

      console.log(article);
    },
  },
};
</script>

<style></style>
