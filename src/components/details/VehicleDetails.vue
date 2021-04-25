<template>
  <v-row>
    <v-col sm="12" md="6" lg="6">
      <v-card elevation="0">
        <v-card-title>Vehicle details</v-card-title>
        <v-list-item>
          <v-list-item-title> Name: {{ vehicle.name }} </v-list-item-title>
        </v-list-item>

        <v-list-item>
          <v-list-item-content>
            <v-list-item-title>Model: {{ vehicle.model }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item>
          <v-list-item-title
            >Manufacturer: {{ vehicle.manufacturer }}</v-list-item-title
          >
        </v-list-item>

        <v-list-item>
          <v-list-item-title
            >Cost in credits: {{ vehicle.cost_in_credits }} $</v-list-item-title
          >
        </v-list-item>

        <v-list-item>
          <v-list-item-title>Length: {{ vehicle.length }}</v-list-item-title>
        </v-list-item>

        <v-list-item>
          <v-list-item-title
            >Max atmosphering speed:
            {{ vehicle.max_atmosphering_speed }}</v-list-item-title
          >
        </v-list-item>

        <v-list-item>
          <v-list-item-title>Crew: {{ vehicle.crew }}</v-list-item-title>
        </v-list-item>

        <v-list-item>
          <v-list-item-title
            >Passengers: {{ vehicle.passengers }}</v-list-item-title
          >
        </v-list-item>

        <v-list-item>
          <v-list-item-title
            >Cargo capacity: {{ vehicle.cargo_capacity }}</v-list-item-title
          >
        </v-list-item>

        <v-list-item>
          <v-list-item-title
            >Consumables: {{ vehicle.consumables }}</v-list-item-title
          >
        </v-list-item>

        <v-list-item v-if="category === 'spaceships'">
          <v-list-item-title
            >Starship class: {{ vehicle.starship_class }}</v-list-item-title
          >
        </v-list-item>

        <v-list-item v-if="category === 'vehicles'">
          <v-list-item-title
            >Vehicle class: {{ vehicle.vehicle_class }}</v-list-item-title
          >
        </v-list-item>

        <v-list-item v-if="category === 'spaceships'">
          <v-list-item-title
            >Hyperdrive rating:
            {{ vehicle.hyperdrive_rating }}</v-list-item-title
          >
        </v-list-item>
      </v-card>
    </v-col>
    <v-col>
      <list-card title="Films" :itemsUrls="vehicle.films" />
      <list-card title="Pilots" :itemsUrls="vehicle.pilots" />
    </v-col>
  </v-row>
</template>
<script>
import ListCard from "./ListCard.vue";

export default {
  components: { ListCard },
  name: "VehicleDetails",
  props: {
    vehicle: {
      type: Object,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
  },
};
</script>
