<template>
  <v-card min-width="100%" dark>
    <v-container fluid>
      <v-row>
        <v-col sm="12" md="12" lg="6" cols="12">
          <v-card elevation="0">
            <v-card-title>Character details</v-card-title>
            <v-list-item>
              <v-list-item-title>Name: {{ character.name }}</v-list-item-title>
            </v-list-item>

            <v-list-item>
              <v-list-item-content>
                <v-list-item-title
                  >Height: {{ character.height }}</v-list-item-title
                >
              </v-list-item-content>
            </v-list-item>

            <v-list-item>
              <v-list-item-title>Mass: {{ character.mass }}</v-list-item-title>
            </v-list-item>

            <v-list-item>
              <v-list-item-title
                >Hair color: {{ character.hair_color }}</v-list-item-title
              >
            </v-list-item>

            <v-list-item>
              <v-list-item-title
                >Skin color: {{ character.skin_color }}</v-list-item-title
              >
            </v-list-item>

            <v-list-item>
              <v-list-item-title
                >Eye color: {{ character.eye_color }}</v-list-item-title
              >
            </v-list-item>

            <v-list-item>
              <v-list-item-title
                >Birth year: {{ character.birth_year }}</v-list-item-title
              >
            </v-list-item>

            <v-list-item>
              <v-list-item-title
                >Gender: {{ character.gender }}</v-list-item-title
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
          </v-card>
        </v-col>
        <v-col>
          <list-card title="Films" :itemsUrls="character.films" />
          <list-card title="Species" :itemsUrls="character.species" />
          <list-card title="Starships" :itemsUrls="character.starships" />
          <list-card title="Vehicles" :itemsUrls="character.vehicles" />
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
  name: "CharacterDetails",
  props: {
    character: {
      type: Object,
      required: true,
    },
  },
  watch: {
    character() {
      this.loadHomeworld();
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
      getCategoryItem(this.character.homeworld)
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
