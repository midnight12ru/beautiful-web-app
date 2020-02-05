<template>
    <div id="app" :class='{dark: themeDark}'>
        <MenuBWA @switchTheme="toggleTheme"/>
        <ContainerBWA></ContainerBWA>
        <div class="fbr"></div>
    </div>
</template>

<script>

    import MenuBWA from "./components/MenuBWA/MenuBWA";
    import ContainerBWA from "./components/ContainerBWA";
    import {onMounted, ref} from "@vue/composition-api";
    import getGeoData from "./api/getGeoData";
    import getWeatherData from "./api/getWeatherData";

    export default {
        name: 'app',
        components: {
            MenuBWA, ContainerBWA
        },
        setup() {
            let themeDark = ref(false);
            let weather = ref([]);

            let toggleTheme = () => {
                themeDark.value = !themeDark.value
            };

            onMounted(async () => {
                let i = await getGeoData()

                weather.value =await getWeatherData(i.latitude, i.longitude)
                console.log(weather.value)

            });

            return {
                themeDark, toggleTheme
            }
        }
    }
</script>
