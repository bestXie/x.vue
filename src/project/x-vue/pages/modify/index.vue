<style scoped>
    @import './index.less';
</style>

<template>
    <div class="wrapper">
        <p class="title">Hello icepy</p>
        <p class="subtitle" v-on:click="getClick">{{ link }}</p>
        <p class="subtitle" v-on:click="getClick2">{{ login }}</p>
        <p class="subtitle" v-on:click="getClick3">{{ register }}</p>
    </div>
</template>
<script>
    export default {
        name: 'modify',
        data: function () {
            return {
                link: 'DingTalk',
                login: 'login',
                register:'register'
            }
        },
        mounted: function () {

        },
        methods: {
            getClick: function () {
                this.$router.push('dingtalk');
            },
            getClick2: function () {
                this.$router.push('login');
            },
            getClick3: function () {
                this.$router.push('register');
            }
        }
    }
</script>

