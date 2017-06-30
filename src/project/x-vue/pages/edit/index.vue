<template>
    <div class="wrapper">
        <confirm :confirm="confirm"></confirm>
        <router-view style="flex:1;"></router-view>
    </div>
</template>
<script>
    import confirm from '../../plugins/confirm/index.vue';
    import {mapGetters} from 'vuex';
    export default {
        name: 'edit',
        components: {
            confirm
        },
        mounted () {
        },
        computed: {
            ...mapGetters([
                'confirm'
            ])
        }
    }
</script>

<style lang="less">
    .wrapper {
        width: 100%;
        height: 100%;
    }
    .edit-container {
        width: 100%;
        height: 100%;
    }
</style>
