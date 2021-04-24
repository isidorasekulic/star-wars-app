<template>
  <v-main app class="main">
    <v-container v-if="selectedCategory.name">
      <v-row>
        <v-text-field
          label="Search"
          v-model="searchTerm"
          append-icon="mdi-file-find"
          clearable
          @click:append="search($event)"
          @click:clear="clear()"
          ><v-icon>fas fa-search</v-icon></v-text-field
        >
      </v-row>
      <v-row>
        <category-grid
          :data="categoryData"
          :category="selectedCategory.name"
          @openDetails="openDetails"
          @changePage="loadData"
        />
      </v-row>
    </v-container>
  </v-main>
</template>

<script>
import CategoryGrid from "../components/CategoryGrid";
import {
  getDataByCategory,
  getCategoryItem,
} from "../services/StarWarsService";

export default {
  name: "MainPage",
  props: {
    selectedCategory: {
      type: Object,
      required: true,
    },
  },
  components: {
    CategoryGrid,
  },
  data() {
    return {
      categoryData: {},
      categoryItem: null,
      searchTerm: null,
    };
  },
  watch: {
    selectedCategory(newValue) {
      this.loadData(newValue.endpoint);
      this.categoryItem = null;
    },
  },
  methods: {
    clear() {
      this.loadData(this.selectedCategory.endpoint);
    },
    search() {
      this.loadData(
        this.selectedCategory.endpoint + "?search=" + this.searchTerm
      );
    },
    loadData(endpoint) {
      getDataByCategory(endpoint)
        .then((response) => {
          this.categoryData = response;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    openDetails(item) {
      getCategoryItem(item.url)
        .then((response) => {
          this.categoryItem = response;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    async created() {
      this.$root.$on("openDetails", this.openDialog);
    },
    destroyed() {
      this.$root.$off("openDetails", () => this.openTaDetails());
    },
  },
};
</script>

<style scoped>
.main {
  background-color: black;
}
</style>
