<template>
  <v-card min-width="100%" dark>
    <v-container fluid>
      <v-row>
        <v-col sm="12" md="12" lg="6" cols="12">
          <v-card elevation="0">
            <v-card-title>Species details</v-card-title>
            <v-list-item>
              <v-list-item-title>Name: {{ species.name }}</v-list-item-title>
            </v-list-item>

            <v-list-item>
              <v-list-item-content>
                <v-list-item-title
                  >Classification:
                  {{ species.classification }}</v-list-item-title
                >
              </v-list-item-content>
            </v-list-item>

            <v-list-item>
              <v-list-item-title
                >Designation: {{ species.designation }}</v-list-item-title
              >
            </v-list-item>

            <v-list-item>
              <v-list-item-title
                >Average height: {{ species.average_height }}</v-list-item-title
              >
            </v-list-item>

            <v-list-item>
              <v-list-item-title
                >Skin colors: {{ species.skin_colors }}</v-list-item-title
              >
            </v-list-item>

            <v-list-item>
              <v-list-item-title
                >Eye colors: {{ species.eye_colors }}</v-list-item-title
              >
            </v-list-item>

            <v-list-item>
              <v-list-item-title
                >Average lifespan:
                {{ species.average_lifespan }}</v-list-item-title
              >
            </v-list-item>

            <v-list-item>
              <v-list-item-title
                >Homeworld:
                <a @click="goToResouce()">{{
                  homeworld.name
                }}</a></v-list-item-title
              >
            </v-list-item>

            <v-list-item>
              <v-list-item-title
                >Language: {{ species.language }}</v-list-item-title
              >
            </v-list-item>
          </v-card>
        </v-col>
        <v-col>
          <list-card title="Films" :itemsUrls="species.films" />
          <list-card title="People" :itemsUrls="species.people" />
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>
<script>
import ListCard from "./ListCard.vue";
import { getCategoryItem } from "@/services/StarWarsService.js";
import EventBus from "@/plugins/event-bus.js";

export default {
  components: { ListCard },
  name: "SpeciesDetails",
  props: {
    species: {
      type: Object,
      required: true,
    },
  },
  watch: {
    species() {
      if (this.species.homeworld) {
        this.loadHomeworld();
      }
    },
  },
  methods: {
    goToResouce() {
      const category = this.homeworld.url
        .replace("http://swapi.dev/api/", "")
        .split("/")[0];
      EventBus.$emit("openDetails", this.homeworld, category);
    },
    loadHomeworld() {
      getCategoryItem(this.species.homeworld)
        .then((response) => {
          this.homeworld = response;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  data() {
    return {
      homeworld: {},
    };
  },
  created() {
    this.loadHomeworld();
  },
};
</script>
