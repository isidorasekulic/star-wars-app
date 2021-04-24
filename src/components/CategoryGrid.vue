<template>
  <v-container>
    <v-row>
      <v-col
        sm="12"
        md="2"
        lg="2"
        v-for="item in data.results"
        :key="item.name || item.title"
        cols="6"
      >
        <v-card @click="openDetails(item)">
          <v-img
            :src="imageTemplate"
            class="white--text align-end"
            gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
            height="200px"
          >
            <v-card-title v-text="item.name || item.title"></v-card-title>
          </v-img>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col class="text-center">
        <v-btn
          elevation="10"
          rounded
          icon
          fab
          dark
          :disabled="!data.previous"
          @click="goToPreviousPage"
          ><v-icon center> mdi-arrow-left </v-icon></v-btn
        >
        <v-btn
          elevation="10"
          rounded
          icon
          fab
          dark
          :disabled="!data.next"
          @click="goToNextPage"
          ><v-icon center> mdi-arrow-right </v-icon></v-btn
        >
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "CategoryGrid",
  props: {
    data: {
      type: Object,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      person: {},
    };
  },
  computed: {
    imageTemplate() {
      switch (this.category) {
        case "people":
        case "species":
          return "https://static.tvtropes.org/pmwiki/pub/images/starwarscharacters.jpg";
        case "films": {
          return "https://cdn.pocket-lint.com/r/s/1200x/assets/images/147767-tv-feature-what-order-should-you-watch-all-the-star-wars-films-image1-1wdfjceytb.jpg";
        }
        case "vehicles":
        case "starships":
          return "https://fastly.syfy.com/sites/syfy/files/styles/1200x680/public/wire/legacy/slave1.jpg?offset-y=0";
        default:
          return "https://starwarsblog.starwars.com/wp-content/uploads/2016/09/2Coruscant.jpeg";
      }
    },
  },
  watch: {
    data: function () {},
  },
  methods: {
    openDetails(value) {
      this.$emit("openDetails", value);
    },
    goToPreviousPage() {
      this.$emit("changePage", this.data.previous);
    },
    goToNextPage() {
      this.$emit("changePage", this.data.next);
    },
  },
};
</script>

<style scoped>
.table {
  position: relative;
  align-content: center;
  width: 40%;
}

.v-data-table {
  font-size: 18px !important;
}

.row-pointer >>> tbody tr :hover {
  cursor: pointer;
}
</style>
