<template lang='pug'>
div(class="md:pt-[2rem] h-full")
    div(class="flex w-full text-3xl gap-x-6 items-center py-4")
        h1.font-semibold Jobs
        div.jobs__menu__filters(class="flex items-center text-xl gap-x-2 text-blue-600")
            FiltersIcon(class="w-7 h-7")
            p(class="") Hide filters
        ButtonNormal.jobs__button__import( class=" ml-auto rounded-2xl text-base gap-x-3 text-blue-700  bg-blue-100")
            template(v-slot:icon)
                ImportIcon
                p Import
        ButtonNormal.jobs__button__add-jobs(@click="router.push('/jobs/new-job')" class="rounded-2xl  text-base gap-x-3 text-white  bg-blue-600")
            template(v-slot:icon)
                AddIcon
                p Add job
   
    table.jobs__list.table-auto(class="w-full mt-8  ")
        thead(class="border-b-2 border-gray-200 ")
                    tr.text-gray-500
                        th(class="px-4 py-2  w-auto ")
                            input(type="checkbox"  class="  w-5 h-5" @click="selectAllJobs")
                        th(class="px-4 py-2 text-start w-auto") Job title
                        th(class="px-4 py-2  w-auto") Location
                        th(class="px-4 py-2  w-auto text-start") Applicants no.
                        th(class="px-4 py-2 w-auto text-start") Last 7 days
                        th(class="px-4 py-2 w-auto")
        tbody(class=" mt-8  ")
            tr(v-if="jobs.length <=0" id="end-of-list") 
                
            tr(v-else v-for="(job, index) in jobs" :key="job.id" class="border-t   " :id="detectEndOfList(index)")
                td(class=" px-3 py-4 text-center w-[2rem]  ") 
                    input(type="checkbox" :checked="job.selected" class="w-5 h-5")
                td(class=" px-4 py-4    text-lg w-auto") 
                    div(class="flex  justify-start  items-center gap-x-4")
                    
                        NuxtLink(:to="`/jobs/details-${job.id}`" class="font-medium") {{ job.title }} 
                        div(class=" rounded-2xl text-sm px-2 py-1 bg-blue-100 text-blue-600") status
                    
                td(class=" px-4 py-4 text-lg w-auto ") 
                    div( class="flex items-center justify-center gap-x-2 w-full")
                        WorldIcon(v-if="job.location === 'Remote'" class="w-6 h-6")
                        LocationsIcon(v-else  class="w-6 h-6")
                        p {{ job.location }}
                td(class=" px-4 py-4 text-center")
                    div(class="flex items-center justify-center gap-x-2 w-full")
                        p {{ job.applicants }}
                        div(class=" rounded-2xl text-sm px-2 py-1 bg-blue-100 text-blue-600 font-semibold") 3 New
                td(class=" px-4  text-center  gap-x-2") 
                    <Line id="line-chart" :data="createDataSet(job.data)" :options="chartOptions"  class="max-h-[6rem]"/>
                td(class="text-center px-4 py-2 w-[2rem]")
                    OptionsIcon(class="w-7 h-7")

    

    div(class="flex absolute bottom-8")
        p.flex.gap-x-2
            span(class="text-gray-600") Displaying
            span(class="font-semibold") 25
            span(class="font-normal text-gray-600") out of
            span(class="font-semibold") 100
                
</template>
        
<script setup lang='ts'>
import FiltersIcon from '~icons/bi/filter' 
import AddIcon from '~icons/ic/round-plus'
import ImportIcon from '~icons/pajamas/import'
import WorldIcon from '~icons/fluent-mdl2/world'
import LocationsIcon from "~icons/carbon/location";
import OptionsIcon from "~icons/mi/options-horizontal";


import { Line } from "vue-chartjs";
import gradient from 'chartjs-plugin-gradient';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
} from 'chart.js'

// import ctx

const router = useRouter()
const activeFilter = ref('all')
const filters = ref([
    {
        name: 'All',
        isActive: true
    }, 
    {
        name: 'Published',
        isActive: false
    }, 
    {
        name: 'draft',
        isActive: false
    }, 
    {
        name: 'archived',
        isActive: false
    }, 
])

const jobs = ref([
    {
        id: 1,
        title: 'Senior Software Engineer',
        company: 'Google',
        location: 'Remote',
        status: 'Published',
        applicants: 10,
        date: '2 days ago',
        salary: '100,000',
        currency: 'USD',
        type: 'Full time',
        selected: false,
        data: [0, 0, 0, 4, 0, 2, 7],

    },
    {
        id: 1,
        title: 'Senior Software Engineer',
        company: 'Google',
        location: 'Remote',
        status: 'Published',
        applicants: 10,
        date: '2 days ago',
        salary: '100,000',
        currency: 'USD',
        type: 'Full time',
        selected: false,
        data: [40, 39, 30, 40, 39, 80, 40],

    }])

    const selectAllJobs = () => {
        
        jobs.value.forEach((job) => {
            job.selected = !job.selected
        })
    }

    ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
    gradient
)





const createDataSet = (data: number[]) => {
  return {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'Data One',
      fill: 'origin',
      pointStyle: false,

        borderWidth: 2,

      gradient: {
        backgroundColor: {
          axis: 'y',
          colors: {
            100: 'rgba(134, 164, 247, 0.70)',   // Sky color (blue)
            75: 'rgba(134, 164, 247, 0.45)', // Sky color (blue)
            50: 'rgba(134, 164, 247, 0.35)', // Sky color (blue)
            25: 'rgba(134, 164, 247, 0.1)', // Sky color (blue)
            0: 'rgba(134, 164, 247, 0)'     // Sky color (blue)
          }
        },
      
        
    },
      borderColor: '#4b77f3',

      data: data,
  
      cubicInterpolationMode: 'monotone',
      
      tension: 0.4
    }
  ]
}
}
const chartOptions = ref({
    responsive: true,
    plugins: {
      title: {
        display: false,
        text: 'Chart.js Line Chart'
      },
        legend: {
            display: false,
        },
        gradient,

        


    },
    interaction: {
      mode: 'index',
      intersect: false
    },
    scales: {
      x: {
        display: false,
        title: {
          display: true,
          text: 'Month'
        }
      },
      y: {
        display: false,
        title: {
          display: true,
          text: 'Value'
        },
        suggestedMin: 0,
        suggestedMax: 100

      }
    }
  },);

const detectEndOfList = (index: number) => {
  if (index === jobs.value.length - 1) {
    return "end-of-list";
  }
};


</script>
        
<style lang='scss'>


        th, td {
            width:250px;

        }

        


</style>