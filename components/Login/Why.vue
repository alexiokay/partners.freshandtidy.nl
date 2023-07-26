<template lang="pug">
div(class="flex flex-col space-y-2 text-gray-800")

    div(class="flex w-full items-center space-x-4")
        nuxt-img(src="/images/login/fast_order.png", format="webp" width="120", height="120" class="w-20 h-20")
        p zamawiaj szybciej
    div(class="flex w-full items-center space-x-4")
        nuxt-img(src="/images/login/order_review.png", format="webp" width="120", height="120" class="w-20 h-20")
        p sprawdzaj poprzednie zamówienia
    div(class="flex w-full items-center space-x-4")
        nuxt-img(src="/images/login/order_status.png", format="webp" width="120", height="120" class="w-20 h-20")
        p śledź status zamówienia
    div(class="flex w-full items-center space-x-4")
        nuxt-img(src="/images/login/price_tag.png", format="webp" width="120", height="120" class="w-20 h-20")
        p korzystaj z rabatów i promocji
</template>

<script setup lang="ts"></script>

<style lang="sass"></style>
