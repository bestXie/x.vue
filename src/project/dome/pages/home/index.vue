<template>
    <div class="wrapper">
        <p class="title">Hello icepy</p>
        <p class="subtitle" v-on:click="getClick">{{ link }}</p>
        <p class="subtitle" v-on:click="getClick2">{{ login }}</p>
        <p class="subtitle" v-on:click="getClick3">{{ register }}</p>

    </div>
</template>
<script>

//    import dingtalk from 'weex-dingtalk';
//    const modal = weex.requireModule('modal');
//    const globalEvent = weex.requireModule('globalEvent');
    console.log('start generator-package');
    export default {
        name: 'home',
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
<style>
    .wrapper {
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 100%;
        height: 1100px;
    }

    .title {
        font-size: 60px;
        color: #505050;
        text-align: center;
    }

    .subtitle {
        display: block;
        font-size: 30px;
        color: #AAAAAA;
        text-align: center;
        margin-top: 20px;
    }
</style>
