<style lang="less" scoped>
    @import './index.less';
</style>

<template>
    <div class="wrapper">
        <p class="title">Hello</p>
        <p class="subtitle" v-on:click="getClick">{{ link }}</p>
        <p class="subtitle" v-on:click="getClick2">{{ login }}</p>

        <modify :propData="banner" ></modify>
    </div>
</template>

<script>
    import axios from 'axios'
    import {getCasCheck} from '../../api/index.js'
    import modify from '../../components/modify/index.vue'

    export default {
        name: 'home',
        components: {
            modify
        },
        data () {
            return {
                link: 'DingTalk',
                login: 'login',
                register: 'register',
                dome: 'dome',
                banner: [
                    {
                        type: 'modulesBanner',
                        id: 1,
                        name: 111
                    },
                    {
                        id: 2,
                        type: 'modulesApplication',
                        name: 222
                    },
                    {
                        type: 'modulesBanner',
                        id: 1,
                        name: 111
                    },
                    {
                        id: 2,
                        type: 'modulesApplication',
                        name: 222
                    },
                    {
                        type: 'modulesBanner',
                        id: 1,
                        name: 111
                    },
                    {
                        id: 2,
                        type: 'modulesApplication',
                        name: 222
                    }
                ]
            }
        },

        mounted () {
            axios.get('http://ouat.fosun.com/new_portal/api/cas/check?email=ceshi@.ddd.com').then((res) => {
                console.log(res);
                console.log(111)
            }).catch(function (err) {
                console.log(err);
            });
            getCasCheck({email: 'ceshi@.ddd2.com'}).then(res => {
                console.log(res)
            });
        },
        methods: {
            getClick () {
                this.$router.push('dingtalk');
            },
            getClick2 () {
                this.$router.push('login');
            },
            getClick3 () {
                this.$router.push('register');
            },
            starClick(data){
                console.log(data, 1);
            }
        }
    }
</script>
