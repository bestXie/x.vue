<style scoped>
    .starList-wrapper {

    }

    .starList-item {
        width: 100%;
        height: 2.4rem;
        padding: 20px 30px;
        border-bottom: 1px #ccc solid;
        overflow: hidden;
        display: -webkit-flex; /* Safari */
        display: flex;
        box-sizing: border-box;
    }

    .starList {
        width: 100%;
        height: 100%;
        display: flex;
        box-sizing: border-box;
        align-items: center;
    }

    .starList-l {
        width: 200px;
        height: 100%;
        border-radius: 10px;
    }

    .mystar_my_template {
        background: url("../../images/mystar/mystar_my_template.png") center no-repeat;
        -webkit-background-size: 100%;
        background-size: 100%;
    }

    .mystar_dd_market {
        background: url("../../images/mystar/mystar_dd_market.png") center no-repeat;
        -webkit-background-size: 100%;
        background-size: 100%;
        border: 1px #ccc solid;
    }

    .mystar_my_market {
        background: url("../../images/mystar/mystar_my_market.png") center no-repeat;
        -webkit-background-size: 100%;
        background-size: 100%;
    }

    .mystar_contact_us {
        background: url("../../images/mystar/mystar_contact_us.png") center no-repeat;
        -webkit-background-size: 100%;
        background-size: 100%;
        border: 1px #ccc solid;
    }

    .starList-c {
        flex: 1;
        width: calc(100% - 250px);
        align-items: center;
        display: flex;

        box-sizing: border-box;
    }

    .starList-r {
        width: 16px;
        height: 26px;
    }

    .starList-r-icon {
        width: 16px;
        height: 26px;
    }

    .starList-title {
        box-sizing: border-box;
        padding-left: 20px;
        max-width: 100%;
        padding-right: 40px;
    }

    .starList-title .title {
        font-size: 36px;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
        margin-bottom: 30px;
    }

    .starList-title .title-tips {
        font-size: 20px;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
    }
</style>

<template>

    <div class="wrapper">

        <section class="starList-wrapper">

            <div class="starList-item" v-for="item in starList" :key="item" @click="starClick(item)">
                <div class="starList star-flex">
                    <div class="starList-l " :class="'mystar_'+item.name"></div>
                    <div class="starList-c">
                        <div class="starList-title">
                            <h3 class="title">{{item.title}}</h3>
                            <p class="title-tips">{{item.titleTips}}</p>
                        </div>
                    </div>
                    <div class="starList-r">
                        <div class="starList-r-icon icon-back"></div>
                    </div>
                </div>
            </div>

        </section>


    </div>
</template>

<script>
    import {getCasCheck} from '../../api/index.js'

    import {mapGetters} from 'vuex';
    export default {
        name: 'page_mystar',

        data () {
            return {
                starList: []
            }
        },
        mounted () {
            this.setStarList();
            this.setPageTitle('我的星主页');
            this.$store.commit('confirm', {
                show:true
            });
        },
        computed: {

        },
        methods: {
            starClick(data){
                console.info(data)
            },
            setStarList(){
                this.starList = [
                    {
                        name: 'my_template',
                        title: '我的模板',
                        titleTips: '丰富的模板,可以编辑的模板'
                    },
                    {
                        name: 'dd_market',
                        title: '我的模板',
                        titleTips: '丰富的模板,可以编辑的模板'
                    },
                    {
                        name: 'my_market',
                        title: '我的模板',
                        titleTips: '丰富的模板,可以编辑的模板'
                    },
                    {
                        name: 'contact_us',
                        title: '我的模板',
                        titleTips: '丰富的模板,可以编辑的模板'
                    }
                ];
            },
            setPageTitle(data){
                dd.ready(function () {
                    dd.ui.webViewBounce.disable();
                    dd.ui.pullToRefresh.disable();
                    dd.biz.navigation.setTitle({
                        title: '我的星主页',//控制标题文本，空字符串表示显示默认文本
                        onSuccess: function (result) {

                        },
                        onFail: function (err) {
                            alert(err)
                        }
                    });

                    dd.biz.navigation.setRight({
                        show: true,//控制按钮显示， true 显示， false 隐藏， 默认true
                        control: true,//是否控制点击事件，true 控制，false 不控制， 默认false
                        text: '还原布局',//控制显示文本，空字符串表示显示默认文本
                        textColor: 'red',
                        onSuccess: function (result) {
                            //如果control为true，则onSuccess将在发生按钮点击事件被回调
                            /*
                                     {}
                                     */
                            alert(result)
                        },
                        onFail: function (err) {
                        }
                    });


                });
                dd.error(function (error) {
                    alert('dd error: ' + JSON.stringify(err));
                });
            }
        }
    }
</script>

