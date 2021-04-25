<template>
  <v-container>
    <v-row>
      <v-col v-for="item in data.results" :key="item.url" sm="6" md="4" lg="2">
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
      return require("@/assets/" + this.category + ".jpg");
    },
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
.row-pointer >>> tbody tr :hover {
  cursor: pointer;
}
</style>
