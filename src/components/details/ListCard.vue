<template>
  <v-row>
    <v-col>
      <v-card auto elevation="10">
        <v-card-title> {{ title }} </v-card-title>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            :disabled="itemsUrls.length === 0"
            icon
            @click="showList = !showList"
          >
            <v-icon>{{
              showList ? "mdi-chevron-up" : "mdi-chevron-down"
            }}</v-icon>
          </v-btn>
        </v-card-actions>

        <v-expand-transition>
          <v-list v-show="showList">
            <v-list-item
              @click="goToResouce(item)"
              v-for="item in loadedItems"
              :key="item.url"
            >
              <v-list-item-title
                v-text="item.name || item.title"
              ></v-list-item-title>
            </v-list-item>
          </v-list>
        </v-expand-transition>
      </v-card>
    </v-col>
  </v-row>
</template>
<script>
import { getCategoryItem } from "@/services/StarWarsService";
import EventBus from "@/plugins/event-bus.js";

export default {
  props: {
    title: {
      type: String,
    },
    itemsUrls: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      showList: false,
      loadedItems: [],
    };
  },
  watch: {
    itemsUrls() {
      this.showList = false;
    },
    showList() {
      if (
        this.itemsUrls.length > 0 &&
        this.showList &&
        this.loadedItems.length === 0
      ) {
        this.itemsUrls.forEach((url) => {
          this.loadItems(url);
        });
      }
    },
  },
  methods: {
    goToResouce(item) {
      const category = item.url
        .replace("http://swapi.dev/api/", "")
        .split("/")[0];
      EventBus.$emit("openDetails", item, category);
    },
    loadItems(url) {
      getCategoryItem(url)
        .then((response) => {
          this.loadedItems.push(response);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>
