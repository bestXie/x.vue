<template>
    <div class="components-wrapper">
        <div v-for="item in propData" :key="item" class="starList-wrapper">
            <component v-bind:is="item.type" :propData="propData" @starClick="starClick"></component>
        </div>
    </div>
</template>

<script>
    import {modulesBanner, modulesApplication} from '../../util/modules.js'
    export default {
        components: {
            modulesBanner,
            modulesApplication
        },
        name: 'starList',
        data: function () {
            return {}
        },
        props: {
            propData: Array,
        },
        computed: {},
        mounted: function () {
            console.log(111);
        },
        methods: {
            starClick(data){
                this.$emit('starClick', data)
            }
        }
    }
</script>

<style scoped>
    .starList-wrapper {
        position: relative;
    }
</style>