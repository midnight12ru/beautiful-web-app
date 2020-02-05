<template>
    <div class="menu">
        <div class="part part-left">left</div>
        <div class="date">{{date}}</div>
        <div class="part part-right" @click="$emit('switchTheme')">right</div>
    </div>
</template>

<script>
    import {ref, onMounted, reactive} from '@vue/composition-api'

    export default {
        name: 'MenuBWA',
        setup() {
            let date = ref(new Date().toLocaleDateString("ru", {
                weekday: 'long',
                day: 'numeric',
                month: 'long',
                year: 'numeric'
            }));

            return {
                date
            }
        }
    }
</script>

<style lang="scss" scoped>
    .menu {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        height: 92px;
        position: absolute;
        width: 100%;

        .date {
            flex: 1;
            text-align: center;
        }
    }
</style>
