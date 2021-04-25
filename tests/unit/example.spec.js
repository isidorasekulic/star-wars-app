import { shallowMount } from "@vue/test-utils";
import AppBar from "@/components/AppBar.vue";
import Vuetify from 'vuetify';
import Vue from 'vue';

describe("AppBar.vue", () => {

  it("renders conponent", () => {
    Vue.use(Vuetify);
    const wrapper = shallowMount(AppBar, {
    });
    const appBar = wrapper.findAll({ name: 'v-app-bar' });
    expect(appBar.length).toBe(1);
  });
});
