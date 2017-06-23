<template>
    <div class="components-wrapper">
        <div v-for="item,index in propData" :key="item.id" class="starList-wrapper">
            <component v-bind:is="item.type" :propData="item" @starClick="starClick(item)"></component>
            <modify-bar :propData="item" :index="index" @showModify="showModify"></modify-bar>
        </div>
    </div>
</template>

<script>
    import modifyBar from './modifyBar.vue'
    import {modulesBanner, modulesApplication} from '../modules.js'
    export default {
        components: {
            modifyBar,
            modulesBanner,
            modulesApplication
        },
        name: 'modify',
        data: function () {
            return {
            }
        },
        props: {
            propData:{default: []},
        },
        computed: {},
        mounted: function () {
            console.log(111);
        },
        methods: {
            showModify(index){
                console.log(index,'modify_index');
                return false
                if (this.propData.length > 0) {
                    for (let [index, value] of this.propData.entries()) { //遍历索引和元素
                        value.showModify = true;
                    }
                }
                console.log(this.propData);
            },
            starClick(data, type){
                if (type) {
                    return false;
                }
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