<template>
  <v-row>
    <character-details
      v-if="selectedCategory.name === 'people'"
      :character="categoryItem"
    />
    <planet-details
      v-if="selectedCategory.name === 'planets'"
      :planet="categoryItem"
    />
    <film-details
      v-if="selectedCategory.name === 'films'"
      :film="categoryItem"
    />
    <species-details
      v-if="selectedCategory.name === 'species'"
      :species="categoryItem"
    />
    <vehicle-details
      v-if="
        selectedCategory.name === 'vehicles' ||
        selectedCategory.name === 'starships'
      "
      :vehicle="categoryItem"
      :category="selectedCategory.name"
    />
  </v-row>
</template>

<script>
import CharacterDetails from "./CharacterDetails";
import FilmDetails from "./FilmDetails.vue";
import PlanetDetails from "./PlanetDetails";
import VehicleDetails from "./VehicleDetails.vue";

export default {
  components: {
    CharacterDetails,
    PlanetDetails,
    FilmDetails,
    VehicleDetails,
  },
  name: "CategoryItemDetails",
  props: {
    categoryItem: {
      type: Object,
      required: true,
    },
    selectedCategory: {
      type: Object,
      required: true,
    },
  },
};
</script>
