<script setup>
    const links = ref([
        { text: 'Branches', href: 'https://visa.directksa.com/website/contact?lang=en' },
        { text: 'About Us', href: 'https://visa.directksa.com/website/about?lang=en' },
        { text: 'Contact Us', href: 'https://visa.directksa.com/website/contact?lang=en' },
        { text: 'Track My Request', href: 'https://visa.directksa.com/website/track?lang=en' },
        { text: 'FAQs', href: 'https://visa.directksa.com/website/faq?lang=en' },
        { text: 'Terms & Conditions', href: 'https://visa.directksa.com/website/terms?lang=en' },
    ])
    const awards = ref([
        { code: '1', icon: 'https://assets.directksa.com/awards/gptw.png', width: 'w-14' },
        { code: '2', icon: 'https://assets.directksa.com/awards/wta2023.png', width: 'w-16' },
        { code: '3', icon: 'https://assets.directksa.com/awards/wta2024.png', width: 'w-16' },
        { code: '4', icon: 'https://assets.directksa.com/awards/isologo.jpeg', width: 'w-24' },
        { code: '5', icon: 'https://assets.directksa.com/awards/icef.png', width: 'w-20' },
    ])
    const socials = ref([
        { href: 'https://twitter.com/directksa_', icon: '/svgs/x.svg' },
        { href: 'https://www.facebook.com/DirectKS0A', icon: '/svgs/facebook.svg' },
        { href: 'https://www.instagram.com/directksa_', icon: '/svgs/instagram.svg' },
        { href: 'https://www.youtube.com/channel/UCUU8ulLEM4WFK103RZyPcgg', icon: '/svgs/youtube.svg' },
        { href: 'https://www.snapchat.com/add/direct-ksa?share_id=PsDqfmLVTgGfW1QIZgMrrQ&locale=en_US', icon: '/svgs/snapchat.svg' },
    ])
</script>

<template>
    <v-footer>
        <v-container fluid>
            <v-row justify="center">
                <v-col class="text-center q-mb-lg q-px-md">
                    <strong class="text-3xl text-gray-600">{{ $t('footer.downloadApp') }}</strong>
                </v-col>
            </v-row>
            <v-row justify="center" class="q-mb-xl">
                <v-col cols="auto" class="q-mx-sm">
                    <v-btn rounded="lg" href="https://directksa.go.link?adj_t=4bf1vwa" target="_blank" class="text-white" color="dark">
                        <strong>{{ $t('footer.appleStore') }}</strong>
                        <v-icon right class="pl-1">
                            <img src="/svgs/apple.svg" class="w-6">
                        </v-icon>
                    </v-btn>
                </v-col>
                <v-col cols="auto" class="q-mx-sm">
                    <v-btn rounded="lg" href="https://directksa.go.link?adj_t=m9jduzd" target="_blank" class="text-white" color="dark">
                        <strong>{{ $t('footer.googlePlay') }}</strong>
                        <v-icon right class="pl-1">
                            <img src="/svgs/google.svg" class="w-6">
                        </v-icon>
                    </v-btn>
                </v-col>
            </v-row>
            <v-row justify="center" class="q-mb-lg">
                <v-col cols="auto" v-for="link in links" :key="link.href">
                    <v-btn variant="text" href="link.href" target="_blank" class="text-black" text>
                        {{ link.text }}
                    </v-btn>
                </v-col>
            </v-row>
            <v-row justify="center" align="center" class="q-my-md q-px-md d-md-flex">
                <v-col cols="auto" class="q-mx-sm" v-for="award in awards" :key="award.code">
                    <img :src="award.icon" :class="award.width">
                </v-col>
            </v-row>
            <v-row justify="center" class="q-px-md">
                <p class="text-gray-400 text-center">
                    <strong>VAT: 311479280800003 - CR: 1010611219</strong>
                </p>
            </v-row>
            <v-row justify="center" class="q-px-md">
                <v-col cols="auto" v-for="social in socials" :key="social.href">
                    <v-btn variant="text" href="social.href" target="_blank" text icon>
                        <v-icon>
                            <img :src="social.icon" class="w-6">
                        </v-icon>
                    </v-btn>
                </v-col>
            </v-row>
            <v-divider opacity="1" class="q-my-md"></v-divider>
            <v-row justify="center" class="q-mb-lg">
                <v-col class="text-center">
                    <strong>2024 © </strong>
                    <strong>Direct for Travel & Tourism</strong>
                </v-col>
            </v-row>
        </v-container>
    </v-footer>
</template>