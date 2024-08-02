<script setup>
    import { ref } from 'vue'
    import CurrencySwitcher from './CurrencySwitcher.vue'
    import LanguageSwitcher from './LanguageSwitcher.vue'

    const tab = ref(null)
    const links = ref([
        {
            text: 'Visas',
            href: 'https://directksa.com/en/visa',
            icon: 'https://assets.directksa.com/cdn-cgi/image/format=auto/menu/visa.png'
        },
        {
            text: 'Hotels',
            href: 'https://hotels.directksa.com?lang=en',
            icon: 'https://assets.directksa.com/cdn-cgi/image/format=auto/menu/hotels.png'
        },
        {
            text: 'Flights',
            href: 'https://flights.directksa.com?lang=en',
            icon: 'https://assets.directksa.com/cdn-cgi/image/format=auto/menu/flights.png',
        },
        {
            text: 'Schools',
            href: 'https://directksa.com/en/course',
            icon: 'https://assets.directksa.com/cdn-cgi/image/format=auto/menu/course.png'
        },
    ])
</script>

<template>
    <v-app-bar app flat>
        <v-toolbar class="px-4 bg-white">
            <v-app-bar-nav-icon></v-app-bar-nav-icon>
            <v-toolbar-title>
                <img src="/icons/logo.jpeg" alt="Direct for Travel & Tourism" width="75" height="35" class="cursor-pointer">
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <v-tabs v-model="tab" class="desktop-only">
                <v-tab v-for="link in links" :key="link.text" :href="link.href" target="_blank">
                    <v-icon left class="pr-1">
                        <img :src="link.icon" class="w-10">
                    </v-icon>
                    {{ link.text }}
                </v-tab>
            </v-tabs>
            <v-spacer></v-spacer>
            <CurrencySwitcher />
            <LanguageSwitcher />
        </v-toolbar>
    </v-app-bar>
</template>