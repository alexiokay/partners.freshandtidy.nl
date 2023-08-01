<template lang="pug">
div(class="md:pt-[3rem]")
    h1(class="w-full text-center text-5xl font-semibold") Locations
   
    div(class="flex w-full my-8 mt-12 px-8 text-xl justify-between")

        p Select a regions of Netherlands where you want to provide your services

        button(@click="isModalOpen = true" class="bg-violet-800 hover:bg-violet-600 text-white px-4 py-2 rounded-md w-[7rem] text-xl") Save
    div(ref="map" class=" h-[calc(40rem)] w-full z-10" id="map")

   
    p(class="text-lg font-bold mb-2") Gemeenten:
    ul
        li(v-for="city in selectedProvinces" :key="city") {{ city.name }}
    
    ModalApproved(@close="isModalOpen = false" v-if="isModalOpen" :isOpen="isModalOpen" :data="selectedProvinces" mode="update" @confirm="onConfirmSave" @no="isModalOpen = false" class="z-50")
    div(v-show="isSavingModal" class="fixed bottom-6 left-[24rem] w-[10rem] h-[3rem] rounded-md shadow-lg bg-white z-50 px-4 py-2 flex items-center justify-center") {{ isSaving ? "Saving..." : "" || !isSaving && isSaved ? "Saved" : "Error" }}
</template>

<script setup lang="ts">
import { nextTick } from "vue";
import "leaflet/dist/leaflet.css";
import netherlandsGeoJSON from "@/assets/netherlands2.json"; // Replace with the path to your Netherlands GeoJSON file
import NlCities from "@/assets/nl-cities-all.json";
import { useUserStore } from "@/stores/User";
import {
  polygon,
  pointsWithinPolygon,
  booleanPointInPolygon,
  point,
  multiPolygon,
} from "@turf/turf";

const userStore = useUserStore();

const token = "3cb1238aa7c01989251b0481bead53ab7001f87e";

const nuxtApp = useNuxtApp();
const selectedProvinces = ref([]);
const selectedSubCities = ref([]);
const map = ref();
const isModalOpen = ref(false);
const isSaving = ref(false);
const isSaved = ref(false);
const isSavingModal = ref(false);

const onConfirmSave = async () => {
  isModalOpen.value = false;

  isSaving.value = true;
  isSavingModal.value = true;

  isModalOpen.value = false;
  const response = await updateProvinces(selectedProvinces.value, token);
  isSaving.value = false;
  if (response === false) {
    isSaved.value = false;
  } else {
    isSaved.value = true;
  }
  setTimeout(() => {
    isSavingModal.value = false;
    isSaved.value = false;
  }, 3000);

  // The code here will only be executed after updateProvinces completes successfully
  // For example, you can close the modal here:
};

let netherlandsLayer = null;

const initMap = () => {
  const mapContainer = document.getElementById("map");
  map.value = nuxtApp.L.map(mapContainer).setView([52.3676, 4.9041], 8);

  // Create a custom boundary layer for the Netherlands
  netherlandsLayer = nuxtApp.L.geoJSON(netherlandsGeoJSON, {
    style: function (feature) {
      // Define the default style for the regions
      return {
        fillColor: "transparent", // Transparent fill color
        color: "#3388ff", // Border color of the regions
        weight: 2, // Border width
      };
    },
    onEachFeature: function (feature, layer) {
      // Attach the click event handler to each region layer
      layer.on("click", () => {
        handleRegionClick(feature, layer);
      });
    },
  });

  netherlandsLayer.addTo(map.value);

  map.value.setMaxBounds(netherlandsLayer.getBounds());

  nuxtApp.L.tileLayer(
    "https://service.pdok.nl/brt/achtergrondkaart/wmts/v2_0/water/EPSG:3857/{z}/{x}/{y}.png",
    {
      minZoom: 6,
      maxZoom: 19,
      bounds: [
        [50.5, 3.25],
        [54, 7.6],
      ],
      attribution:
        'Kaartgegevens &copy; <a href="https://www.kadaster.nl">Kadaster</a>',
      transparent: true, // Set the tile layer to use a transparent background
    }
  ).addTo(map.value);
  map.value.on("click", (e) => {
    const lat = e.latlng.lat;
    const lng = e.latlng.lng;
  });
};

// use fetch to get getLocalizations
const tempProvinces = await getLocalizations(token);
selectedProvinces.value = tempProvinces;
console.log(selectedProvinces.value);

// Function to handle the region click event
function handleRegionClick(clickedFeature, layer) {
  // Get the ID or unique identifier of the clicked region
  const regionName = clickedFeature.properties.NAME_2; // Replace 'id' with the actual property that uniquely identifies each region

  // Check if the region is already selected
  const selectedIndex = selectedProvinces.value.findIndex(
    (province) => province.name === regionName
  );

  if (selectedIndex !== -1) {
    // If the region is already selected, remove it from the selectedProvinces array
    selectedProvinces.value.splice(selectedIndex, 1);

    // Reset the style to the default
    layer.setStyle({
      fillColor: "transparent",
      color: "#3388ff",
      weight: 2,
    });
  } else {
    // If the region is not selected, add it to the selectedProvinces array
    const province = {
      name: clickedFeature.properties.NAME_2,
      id: clickedFeature.properties.GID_2,
    };

    selectedProvinces.value.push(province);

    // Apply a new style to indicate selection
    layer.setStyle({
      fillColor: "red",
      color: "white",
      weight: 2,
    });
  }
}

// onBeforeRouteLeave((to, from, next) => {
//   if (!isModalOpen.value) {
//     // Prevent navigation if the modal is open
//     next(false);
//     isModalOpen.value = true;
//   } else {
//     // Continue with the navigation
//     next();
//   }
// });

onMounted(() => {
  initMap();

  // function to set selectedRegions and make the regions color on a map
  function setRegionsColor() {
    netherlandsLayer.eachLayer((layer) => {
      const regionId = layer.feature.properties.NAME_2;

      const isSelected = selectedProvinces.value.some(
        (province) => province.name === regionId
      );

      if (isSelected) {
        console.log("change color");
        // If the region is selected, apply the new style
        layer.setStyle({
          fillColor: "red", // You can choose any color to indicate selection
          color: "white", // Border color of the selected region
          weight: 2, // Border width
        });
      } else {
        // If the region is not selected, reset the style to the default
        netherlandsLayer.resetStyle(layer);
      }
    });
  }

  setRegionsColor();
});
</script>

<style lang="scss"></style>
