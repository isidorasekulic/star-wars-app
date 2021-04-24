<template>
  <v-app-bar
    app
    absolute
    dark
    shrink-on-scroll
    prominent
    src="../assets/logo.jpg"
  >
    <v-spacer></v-spacer>

    <template v-slot:extension>
      <v-tabs centered optional>
        <v-tabs-slider color="teal lighten-3"></v-tabs-slider>
        <v-tab
          v-for="(endpoint, category) in categories"
          :key="category"
          @click="changeCategory(endpoint, category)"
          >{{ category }}</v-tab
        >
      </v-tabs>
    </template>
  </v-app-bar>
</template>
<script>
import { getCategories } from "../services/StarWarsService";

export default {
  name: "AppBar",
  data() {
    return {
      categories: [],
    };
  },
  created() {
    getCategories()
      .then((response) => {
        this.categories = response;
      })
      .catch((error) => {
        console.log(error);
      });
  },
  methods: {
    changeCategory(endpoint, category) {
      this.$emit("changeCategory", { endpoint: endpoint, name: category });
    },
  },
};
</script>
<style scoped>
.v-tab {
  font-size: 24px;
}
</style>
