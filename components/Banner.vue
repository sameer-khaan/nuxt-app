<template>
    <v-container class="py-10">
        <v-row class="justify-between">
            <v-col cols="auto">
                <div class="text-2xl mb-8">{{ $t('banner.title') }}</div>
                <v-btn href="https://directksa.go.link" target="_blank" rounded="lg" varient="tonal" color="#ff8000" size="large">
                    <v-icon right class="pr-1">
                        <img src="/icons/icon-hands.webp" class="w-6">
                    </v-icon>
                    <div class="capital-case">{{ $t('banner.btnText') }}</div>
                    <v-icon icon="mdi-chevron-right" />
                </v-btn>
            </v-col>
            <v-col cols="auto">
                <img src="/explore-personalized-ticket-hand.webp">
            </v-col>
        </v-row>
    </v-container>
</template>