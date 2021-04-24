<template>
  <v-row>
    <character-details
      v-if="selectedCategory === 'people'"
      :character="categoryItem"
    />
    <planet-details
      v-if="selectedCategory === 'planets'"
      :planet="categoryItem"
    />
    <film-details v-if="selectedCategory === 'films'" :film="categoryItem" />
    <species-details
      v-if="selectedCategory === 'species'"
      :species="categoryItem"
    />
    <vehicle-details
      v-if="selectedCategory === 'vehicles' || selectedCategory === 'starships'"
      :vehicle="categoryItem"
      :category="selectedCategory"
    />
  </v-row>
</template>

<script>
import CharacterDetails from "./CharacterDetails";
import FilmDetails from "./FilmDetails.vue";
import PlanetDetails from "./PlanetDetails";
import VehicleDetails from "./VehicleDetails.vue";
import SpeciesDetails from "./SpeciesDetails.vue";

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
};
</script>
