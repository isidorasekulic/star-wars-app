<template>
  <v-row>
    <v-col sm="12" md="6" lg="6" cols="12">
      <v-card elevation="0">
        <v-card-title>Film details</v-card-title>
        <v-list-item>
          <v-list-item-title> Title: {{ film.title }} </v-list-item-title>
        </v-list-item>

        <v-list-item>
          <v-list-item-content>
            <v-list-item-title
              >Episode: {{ film.episode_id }}</v-list-item-title
            >
          </v-list-item-content>
        </v-list-item>

        <v-list-item>
          <v-list-item-title>Director: {{ film.director }}</v-list-item-title>
        </v-list-item>

        <v-list-item>
          <v-list-item-title>Producer: {{ film.producer }}</v-list-item-title>
        </v-list-item>

        <v-list-item>
          <v-list-item-title
            >Release date: {{ film.release_date }}</v-list-item-title
          >
        </v-list-item>
      </v-card>
      <v-row>
        <v-col>
          <v-textarea
            outlined
            rows="10"
            :value="film.opening_crawl"
          ></v-textarea>
        </v-col>
      </v-row>
    </v-col>
    <v-col>
      <list-card title="Characters" :itemsUrls="film.characters" />
      <list-card title="Planets" :itemsUrls="film.planets" />
      <list-card title="Starships" :itemsUrls="film.starships" />
      <list-card title="Vehicles" :itemsUrls="film.vehicles" />
      <list-card title="Species" :itemsUrls="film.species" />
    </v-col>
  </v-row>
</template>
<script>
import ListCard from "./ListCard.vue";

export default {
  components: { ListCard },
  name: "FilmDetails",
  props: {
    film: {
      type: Object,
      required: true,
    },
  },
};
</script>
