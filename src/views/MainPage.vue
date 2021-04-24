<template>
  <v-main app class="main">
    <v-container v-if="selectedCategory.name">
      <v-row>
        <v-col sm="6" md="6" lg="4" cols="6">
          <v-text-field
            label="Search"
            v-model="searchTerm"
            append-icon="mdi-file-find"
            clearable
            dark
            v-on:keyup.enter="search()"
            @click:append="search()"
            @click:clear="clear()"
            ><v-icon>fas fa-search</v-icon></v-text-field
          >
        </v-col>
      </v-row>
      <v-row>
        <category-grid
          :data="categoryData"
          :category="selectedCategory.name"
          @openDetails="openDetails"
          @changePage="loadData"
        />
      </v-row>
      <category-item-details
        v-if="categoryItem"
        :categoryItem="categoryItem"
        :selectedCategory="category"
      />
    </v-container>
  </v-main>
</template>

<script>
import CategoryGrid from "../components/CategoryGrid";
import {
  getDataByCategory,
  getCategoryItem,
} from "../services/StarWarsService";
import CategoryItemDetails from "../components/details/CategoryItemDetails.vue";
import EventBus from "@/plugins/event-bus.js";

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
    CategoryItemDetails,
  },
  data() {
    return {
      categoryData: {},
      categoryItem: null,
      searchTerm: null,
      category: null,
    };
  },
  watch: {
    selectedCategory(newValue) {
      this.loadData(newValue.endpoint);
      this.categoryItem = null;
      this.category = newValue.name;
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
          this.category = this.selectedCategory.name;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  created() {
    EventBus.$on("openDetails", (item, category) => {
      this.categoryItem = item;
      this.category = category;
    });
  },
  destroyed() {
    EventBus.$off("openDetails");
  },
};
</script>

<style scoped>
.main {
  background-color: rgb(95, 95, 95);
}
</style>
