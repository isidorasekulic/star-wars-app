<template>
  <v-row>
    <v-card min-width="100%" dark>
      <v-container fluid>
        <character-details
          v-if="selectedCategory === Category.PEOPLE"
          :character="categoryItem"
        />
        <planet-details
          v-if="selectedCategory === Category.PLANETS"
          :planet="categoryItem"
        />
        <film-details
          v-if="selectedCategory === Category.FILMS"
          :film="categoryItem"
        />
        <species-details
          v-if="selectedCategory === Category.SPECIES"
          :species="categoryItem"
        />
        <vehicle-details
          v-if="
            selectedCategory === Category.VEHICLES ||
            selectedCategory === Category.STARSHIPS
          "
          :vehicle="categoryItem"
          :category="selectedCategory"
        />
      </v-container>
    </v-card>
  </v-row>
</template>

<script>
import CharacterDetails from "./CharacterDetails";
import FilmDetails from "./FilmDetails.vue";
import PlanetDetails from "./PlanetDetails";
import VehicleDetails from "./VehicleDetails.vue";
import SpeciesDetails from "./SpeciesDetails.vue";
import { Category } from "@/constants/Category";

export default {
  components: {
    CharacterDetails,
    PlanetDetails,
    FilmDetails,
    VehicleDetails,
    SpeciesDetails,
  },
  name: "CategoryItemDetails",
  props: {
    categoryItem: {
      type: Object,
      required: true,
    },
    selectedCategory: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      Category: Category,
    };
  },
};
</script>
