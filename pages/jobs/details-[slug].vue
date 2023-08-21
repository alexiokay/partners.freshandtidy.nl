<template lang='pug'>
div(class="md:pt-[2rem] h-full")
    div(class="flex w-full text-3xl gap-x-6 items-center py-4")
        h1(@click="router.back").font-semibold Jobs 
        ArrowIcon(class="w-6 h-6 cursor-pointer")
        span  Job - {{ $route.params.slug }}
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
                p Save   
</template>
        
<script setup lang='ts'>
import ArrowIcon from "~icons/ph/arrow-right";
import FiltersIcon from '~icons/bi/filter' 
import AddIcon from '~icons/ic/round-plus'
import ImportIcon from '~icons/pajamas/import'

const router = useRouter()
</script>
        
<style lang='scss'></style>