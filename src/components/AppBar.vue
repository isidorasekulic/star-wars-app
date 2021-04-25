<template>
  <v-app-bar
    app
    absolute
    dark
    shrink-on-scroll
    prominent
    src="../assets/logo.jpg"
    height="200px"
  >
    <template v-slot:extension>
      <v-tabs show-arrows centered optional>
        <v-tabs-slider></v-tabs-slider>
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
