<template lang="pug">
div(class=" -mt-[2rem] md:pt-[2rem] " )
    div(class="flex flex-col gap-y-4")
      h1(class="w-full text-center text-3xl lg:text-5xl font-medium") Your Area
    
      div(class="flex flex-col sm:flex-row w-full mb-4  px-8 text-lg justify-between gap-x-4 gap-y-3")

          p Select a regions of Netherlands where you want to provide your services

          button(@click="isModalOpen = true" class="bg-violet-800 hover:bg-violet-600 text-white px-4 py-2 rounded-md sm:w-[7rem] text-xl h-auto w-full") Save
    div(ref="map" class=" h-[calc(40rem)] w-full z-10 relative" id="map" )
    div#regionDropdown(v-show="isRegionDropdown" class="absolute   w-[15rem] h-[20rem] bg-black  text-white z-50 p-4 rounded-md")
        p(class="text-lg font-bold mb-2") Region:
        //- contains settings for the region dropdown clicked on
        div(class="flex items-center justify-between")
            h1(class="text-lg font-bold") Region Settings
            button(@click="regionDropdown = false" class="text-xl") x
        div(class="flex items-center justify-between")
           
            select(v-model="selectedRegion" class="w-[10rem] h-[2rem] rounded-md border border-gray-300")
                option(v-for="region in selectedProvinces" :key="region.id" :value="region.id") {{ region.name }}



   
    p(class="text-lg font-bold mb-2") Gemeenten:
    ul
        li(v-for="city in selectedProvinces" :key="city") {{ city.name }}
    
    ModalApproved(@close="isModalOpen = false" v-if="isModalOpen" :isOpen="isModalOpen" :data="selectedProvinces" mode="update" @confirm="onConfirmSave" @no="isModalOpen = false" class="z-50")
    div(v-show="isSavingModal" class="fixed bottom-6 left-[24rem] w-[10rem] h-[3rem] rounded-md shadow-lg bg-white z-50 px-4 py-2 flex items-center justify-center") {{ isSaving ? "Saving..." : "" || !isSaving && isSaved ? "Saved" : "Error" }}
</template>

<script setup lang="ts">
import { nextTick } from "vue";
import "leaflet/dist/leaflet.css";
import netherlandsGeoJSON from "~~/assets/netherlands2.json"; // Replace with the path to your Netherlands GeoJSON file
import NlCities from "~~/assets/nl-cities-all.json";
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

const isRegionDropdown = ref(false);
let selectedLayer = null; // Keep track of the selected layer globally if not already defined

const openRegionDropdown = (e, layer) => {
  e.originalEvent.preventDefault(); // Correct place to call preventDefault

  // Now handle the dropdown logic
  selectedLayer = layer; // Select the layer

  layer.setStyle({
    fillColor: "blue", // Different color to indicate focus
    color: "white",
    weight: 3,
  });

  // Set the position of the dropdown menu
  const regionDropdown = document.getElementById("regionDropdown");
  regionDropdown.style.left = `${e.originalEvent.pageX}px`;
  regionDropdown.style.top = `${e.originalEvent.pageY}px`;

  isRegionDropdown.value = true; // Show the dropdown
};

const closeRegionDropdown = () => {
  if (selectedLayer) {
    // Reset the style of the selected layer
    // check if selected LAyer is within the selectedProvinces and if not then reset the style if yes bring the style to red
    const isSelected = selectedProvinces.value.some(
      (province) => province.name === selectedLayer.feature.properties.NAME_2
    );

    if (!isSelected) {
      selectedLayer.setStyle({
        fillColor: "transparent",
        color: "#3388ff",
        weight: 2,
      });
    } else {
      selectedLayer.setStyle({
        fillColor: "red",
        color: "white",
        weight: 2,
      });
    }
  }

  isRegionDropdown.value = false; // Hide the dropdown
};
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
      layer.on({
        click: (e) => handleRegionClick(feature, layer, e),
        contextmenu: (e) => {
          openRegionDropdown(e, layer);
          e.originalEvent.preventDefault(); // Prevent default browser context menu
        },
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
// const tempProvinces = await getLocalizations(token);
// selectedProvinces.value = tempProvinces;
// console.log(selectedProvinces.value);

useFetch(async () => {
  const tempProvinces = await getLocalizations(token);
  selectedProvinces.value = tempProvinces;
});

// Function to handle the region click event
function handleRegionClick(clickedFeature, layer) {
  // Get the ID or unique identifier of the clicked region
  if (isRegionDropdown.value) {
    closeRegionDropdown();
  } else {
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
  watch(selectedProvinces, (newValue) => {
    setRegionsColor();
  });
});
</script>

<style lang="scss"></style>
