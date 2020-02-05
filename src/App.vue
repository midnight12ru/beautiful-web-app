<template>
    <div id="app" :class='{dark: themeDark}'>
        <MenuBWA @switchTheme="toggleTheme"/>
        <ContainerBWA></ContainerBWA>
    </div>
</template>

<script>

    import MenuBWA from "./components/MenuBWA/MenuBWA";
    import ContainerBWA from "./components/ContainerBWA";
    import {ref} from "@vue/composition-api";

    export default {
        name: 'app',
        components: {
            MenuBWA, ContainerBWA
        },
        setup() {

            let themeDark = ref(false)

            let toggleTheme = () => {
                themeDark.value = !themeDark.value
            };

            return {
                themeDark, toggleTheme
            }
        }
    }
</script>
