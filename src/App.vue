<template>
  <v-app>
    <app-bar @changeCategory="selectedCategory = $event" />
    <main-page :selectedCategory="selectedCategory"></main-page>
  </v-app>
</template>

<script>
import MainPage from "./views/MainPage.vue";
import AppBar from "./components/AppBar.vue";

export default {
  name: "App",
  components: {
    AppBar,
    MainPage,
  },
  data() {
    return {
      selectedCategory: {},
    };
  },
};
</script>
