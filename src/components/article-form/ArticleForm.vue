<template>
  <div class="w-50 mx-auto">
    <form @submit.prevent>
      <Input type="text" label="Title" v-model="initialValue.title" />
      <Textarea
        type="text"
        label="Descriptioin"
        v-model="initialValue.description"
      >
      </Textarea>
      <Textarea type="text" label="Body" v-model="initialValue.body"></Textarea>
      <Button type="submit" @click="editArticle" :disabled="isLoading"
        >{{ clickText }}
      </Button>
    </form>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  props: {
    initialValue: {
      type: Object,
      required: true,
    },
    onSubmitHandler: {
      type: Function,
      required: true,
    },
    clickText: {
      type: String,
      required: true,
    },
  },

  data() {
    return {
      title: this.title,
      description: this.description,
      body: this.body,
      isEdit: false,
    };
  },
  computed: {
    ...mapState({
      isLoading: (state) => state.control.isLoading,
    }),
  },
  methods: {
    editArticle() {
      const article = {
        title: this.initialValue.title,
        body: this.initialValue.body,
        description: this.initialValue.description,
        tagList: [],
      };
      this.onSubmitHandler(article);
    },
  },
};
</script>
