<template lang="pug">
div(class="w-full py-8 px-12  bg-white rounded-xl flex items-center ")
    div(class="w-full flex flex-col h-full items-between justify-start gap-y-6  ")
            div(class="flex space-x-2 items-start  ")
                div(class="w-1/2 flex flex-col gap-y-2")
                    div(class="flex gap-x-4 items-center justify-start ")
                        p(class="  font-semibold text-2xl") Your Activity
                        div(class="rounded-full border-green-500 text-green-500 border-[0.1rem] px-4 py-1 flex items-center justify-center w-auto h-min gap-x-2")
                            StatsIcon(class="w-4 h-4")
                            p 14%
                    p(class="text-gray-500") Progress increased this week
                div(class="w-1/2 flex justify-end ")
                    v-select(
                        v-model="activeActivity"
                        :options="activities"
                        
                        class="w-[8rem] h-[2rem]"
                        label="name")
                    <!-- OPTIONALS: :reduce="(supplier) => supplier.id" @option:selected="(supplier)" @option:deselected="(supplier)" -->
            div(class="rounded-lg  border-2 relative border-white  ").overflow-hidden
                
            <Bar :data="chartData" :options="chartOptions"  class="max-h-[30rem]"/>

</template>

<script setup lang="ts">
import vSelect from "vue-select";
import "vue-select/dist/vue-select.css";

import StatsIcon from "~icons/streamline/money-graph-arrow-increase-ascend-growth-up-arrow-stats-graph-right-grow";

import { Bar } from "vue-chartjs";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js";
import { ref } from "vue";
ChartJS.register(
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
);

const chartData = ref({
  labels: ["January", "February", "March", "April", "May"],
  datasets: [
    {
      label: "Data One",
      backgroundColor: "#f87979",
      data: [40, 20, 12, 50, 10],
      //borderWidth: 10,
      barThickness: 12,
    },
  ],
});
const chartOptions = ref({
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
        },
      },
    ],
    x: {
      grid: {
        color: "white",
      },
    },
    y: {
      grid: {
        color: "rgb(242,242,242)",
      },
    },
  },
  plugins: {
    legend: {
      display: true,
    },
  },
});

const activities = ref(["dsadsa", "dsadsa"]);
const activeActivity = ref("dsadsa");
</script>

<style lang="scss"></style>
