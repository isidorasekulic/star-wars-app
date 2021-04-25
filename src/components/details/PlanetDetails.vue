<template>
  <v-row>
    <v-col sm="12" md="6" lg="6" cols="12">
      <v-card elevation="0">
        <v-card-title>Planet details</v-card-title>
        <v-list-item>
          <v-list-item-title> Name: {{ planet.name }} </v-list-item-title>
        </v-list-item>

        <v-list-item>
          <v-list-item-content>
            <v-list-item-title
              >Rotation period: {{ planet.rotation_period }}</v-list-item-title
            >
          </v-list-item-content>
        </v-list-item>

        <v-list-item>
          <v-list-item-title
            >Orbital period: {{ planet.orbital_period }}</v-list-item-title
          >
        </v-list-item>

        <v-list-item>
          <v-list-item-title>Diameter: {{ planet.diameter }}</v-list-item-title>
        </v-list-item>

        <v-list-item>
          <v-list-item-title>Climate: {{ planet.climate }}</v-list-item-title>
        </v-list-item>

        <v-list-item>
          <v-list-item-title>Gravity: {{ planet.gravity }}</v-list-item-title>
        </v-list-item>

        <v-list-item>
          <v-list-item-title>Terrain: {{ planet.terrain }}</v-list-item-title>
        </v-list-item>

        <v-list-item>
          <v-list-item-title
            >Surface water: {{ planet.surface_water }}</v-list-item-title
          >
        </v-list-item>

        <v-list-item>
          <v-list-item-title
            >Population: {{ planet.population }}</v-list-item-title
          >
        </v-list-item>
      </v-card>
    </v-col>
    <v-col>
      <list-card title="Films" :itemsUrls="planet.films" />
      <list-card title="Residents" :itemsUrls="planet.residents" />
    </v-col>
  </v-row>
</template>
<script>
import ListCard from "./ListCard.vue";

export default {
  components: { ListCard },
  name: "PlanetDetails",
  props: {
    planet: {
      type: Object,
      required: true,
    },
  },
};
</script>
