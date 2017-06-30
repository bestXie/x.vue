<style lang="less">
    @import './index.less';
    /*ui-loading-block start*/
    .ui-loading-block {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 9999;
        display: -webkit-box;
        -webkit-box-orient: horizontal;
        -webkit-box-pack: center;
        -webkit-box-align: center;

        background: transparent;
    }

    .ui-loading-block .ui-loading-cnt {
        width: 1.2rem;
        height: 1.35rem;
        padding-top: .1rem;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-box-align: center;
        text-align: center;
        background: rgba(0, 0, 0, .65);
        border-radius: 6px;
        color: rgba(255, 255, 255, .9);
        /*font-size: 16px;*/
        font-size: .24rem;
    }

    .ui-loading-block.show {
        display: -webkit-box;
    }

    .show {
        visibility: visible;
    }

    .ui-loading-block .ui-loading-bright {
        margin: .1rem auto;
    }

    .ui-loading-bright {
        width: .6rem;
        height: .6rem;
        display: block;
        background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg%20viewBox%3D'0%200%20120%20120'%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20xmlns%3Axlink%3D'http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink'%3E%3Cdefs%3E%3Cline%20id%3D'l'%20x1%3D'60'%20x2%3D'60'%20y1%3D'7'%20y2%3D'27'%20stroke%3D'%23fff'%20stroke-width%3D'11'%20stroke-linecap%3D'round'%2F%3E%3C%2Fdefs%3E%3Cg%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(30%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(60%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(90%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(120%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(150%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.37'%20transform%3D'rotate(180%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.46'%20transform%3D'rotate(210%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.56'%20transform%3D'rotate(240%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.66'%20transform%3D'rotate(270%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.75'%20transform%3D'rotate(300%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.85'%20transform%3D'rotate(330%2060%2C60)'%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E");
        background-size: auto 100%;
        -webkit-background-size: auto 100%;
        -webkit-animation: xui-preloader-spin 1s steps(12) infinite;
    }

    @-webkit-keyframes xui-preloader-spin {
        100% {
            -webkit-transform: rotate(360deg);
        }
    }

    @keyframes xui-preloader-spin {
        100% {
            -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
        }
    }

    /*ui-loading-block end*/
    .geolocation-wrapper {
        width: 100%;
        height: 4rem;
    }

    .geolocation-content {
        width: 7.5rem;
        height: 4rem;
        margin: 0 auto;
        position: relative;
        background: url("../../app_img/geolocation-content-bg.jpg") 0 0 no-repeat;
        -webkit-background-size: 100%;
        background-size: 100%;
    }

    .searchBox-wrapper {
        width: 100%;
        height: .8rem;
        background: url("../../app_img/search-wrapper-bg.png") 0 0 no-repeat;
        -webkit-background-size: 100%;
        background-size: 100%;
        position: absolute;
        left: 0;
        top: 0;
    }

    .searchBox-box {
        width: 100%;
        height: 0.8rem;
        box-sizing: border-box;
        -moz-box-sizing: border-box;
        -webkit-box-sizing: border-box;
        position: relative;
        top: 0;
        left: 0;
        z-index: 1;
        display: flex;
        padding-right: .24rem;
    }

    .goto-back-ontent {
        padding-left: .24rem;
        height: 100%;
        width: .5rem;
        min-width: .6rem;
        max-width: .6rem;
        flex-grow: 0;
        .goto-back-icon {
            width: .18rem;
            height: 100%;
            background: url("../../app_img/ic-arrow-back-bg.png") center no-repeat;
            -webkit-background-size: .18rem auto;
            background-size: .18rem auto;
        }
    }

    .searchBox-ontent {
        width: auto;
        height: 100%;
        box-sizing: border-box;
        -moz-box-sizing: border-box;
        -webkit-box-sizing: border-box;
        padding: .1rem 0;
        flex-grow: 1;

        form {
            position: relative;
            width: 100%;
            height: 100%;
            box-sizing: border-box;
            -moz-box-sizing: border-box;
            -webkit-box-sizing: border-box;
            display: -ms-flexbox;
            display: flex;
            -webkit-box-flex: 1;
            -ms-flex: 1;
            -ms-flex-pack: justify;
            justify-content: space-between;
            -ms-flex-align: center;
            align-items: center;
            border: solid 1px #fff;
            border-radius: 0.8rem;
            .search-icon {
                width: 0.8rem;
                height: 100%;
                right: 0;
                top: 0;
                background: url('../../app_img/ic-search.png') center no-repeat;
                .background_size(@search-icon-background-size);
            }
            .search-input {
                width: 100%;
                height: 100%;
                box-sizing: border-box;
                -moz-box-sizing: border-box;
                -webkit-box-sizing: border-box;
                font-size: 0.28rem;
                padding-left: 0.2rem;
                padding-right: 0.8rem;
                color: #fff;
            }
            ::-webkit-input-placeholder { /* WebKit browsers */
                color: #fff;
            }
            :-moz-placeholder { /* Mozilla Firefox 4 to 18 */
                color: #fff;
            }
            ::-moz-placeholder { /* Mozilla Firefox 19+ */
                color: #fff;
            }
            :-ms-input-placeholder { /* Internet Explorer 10+ */
                color: #fff;
            }

        }
    }

    .search-tips {
        width: 100%;
        min-height: .4rem;
        line-height: .4rem;
        z-index: 1;
        font-size: .24rem;
        display: none;
        color: #fff;
        -webkit-border-radius: 3px;
        -moz-border-radius: 3px;
        border-radius: 3px;
        position: absolute;
        left: 50%;
        top: 0;
        text-align: center;
        -webkit-transform: translate(-50%, 0);
        -moz-transform: translate(-50%, 0);
        -ms-transform: translate(-50%, 0);
        -o-transform: translate(-50%, 0);
        transform: translate(-50%, 0);
        -webkit-transition: 0.5s ease-out 0s;
        -moz-transition: 0.5s ease-out 0s;
        -ms-transition: 0.5s ease-out 0s;
        -o-transition: 0.5s ease-out 0s;
        transition: 0.5s ease-out 0s;
        opacity: 0;
        padding: 0 .24rem;
        box-sizing: border-box;
        p {
            background-color: #5fb8fd;
        }
        &.showSearchTips {
            .top(@search-box-height);
            opacity: .9;
            display: block;
        }

    }

    .geolocation-ontent {
        width: 1rem;
        padding-left: .35rem;
        flex-grow: 0;
        display: flex;
        .geolocation-text {
            font-size: .28rem;
            color: #fff;
            line-height: .8rem;
            padding-left: .37rem;
            background: url("../../app_img/geolocation-icon.png") left center no-repeat;
            -webkit-background-size: .24rem auto;
            background-size: .24rem auto;
        }
    }

    .geolocation {
        width: 100%;
        height: 100%;
        position: relative;
        .round-box {

        }
        .round-item {
            width: .18rem;
            height: .18rem;
            border: 2px solid #e18893;
            -webkit-border-radius: 50%;
            -moz-border-radius: 50%;
            border-radius: 50%;
            position: absolute;
            display: flex;
            justify-content: center;
            align-items: center;
            &.isFocus {
                border: 2px solid #c41227;
            }
        }
        .round {
            width: .14rem;
            height: .14rem;
            background: #e18893;
            -webkit-border-radius: 50%;
            -moz-border-radius: 50%;
            border-radius: 50%;
            &.isFocus {
                background: #c41227;
            }
        }

    }

    .city-box {
        width: 100%;
        height: 100%;
        position: absolute;
        left: 0;
        top: 0;
    }

    .round-item.item01 {
        left: 205px;
        top: 188px;
    }

    .round-item.item02 {
        left: 340px;
        top: 192px;
    }

    .round-item.item03 {
        left: 582px;
        top: 194px;
    }

    .round-item.item04 {
        left: 605px;
        top: 212px;
    }

    .round-item.item05 {
        left: 590px;
        top: 230px;
    }

    .line-item {
        position: absolute;
    }

    .line-item.item01 {
        width: 130px;
        height: 18px;
        background: url("../../app_img/line-item01.png") 0 0 no-repeat;
        -webkit-background-size: 1.41rem auto;
        background-size: 1.41rem auto;
        top: 178px;
        left: 85px;
    }

    .line-item.item02 {
        width: 165px;
        height: 67px;
        background: url("../../app_img/line-item02.png") left bottom no-repeat;
        -webkit-background-size: 1.85rem auto;
        background-size: 1.85rem auto;
        top: 202px;
        left: 178px;
    }

    .line-item.item03 {
        width: 124px;
        height: 45px;
        background: url("../../app_img/line-item03.png") 0 0 no-repeat;
        -webkit-background-size: 1.41rem auto;
        background-size: 1.41rem auto;
        top: 160px;
        left: 463px;
    }

    .line-item.item04 {
        width: 158px;
        height: 60px;
        background: url("../../app_img/line-item04.png") left bottom no-repeat;
        -webkit-background-size: 1.78rem auto;
        background-size: 1.78rem auto;
        top: 218px;
        left: 453px;
    }

    .line-item.item05 {
        width: 56px;
        height: 118px;
        background: url("../../app_img/line-item05.png") right bottom no-repeat;
        -webkit-background-size: .72rem auto;
        background-size: .72rem auto;
        top: 240px;
        left: 600px;
    }

    .city-item {
        width: .95rem;
        height: .95rem;
        -webkit-border-radius: 50%;
        -moz-border-radius: 50%;
        border-radius: 50%;
        border: 2px solid rgba(255, 255, 255, .5);
        position: absolute;
        transition: all .3s;
        -webkit-transition: all .3s;
        &.isFocus {
            -webkit-transform: scale(1.2);
            transform: scale(1.2);
        }
    }

    .city-item.item01 {
        left: .36rem;
        top: 1.4rem;
        .city-bg {
            background: url("../../app_img/city-bg-02.png") 0 0 no-repeat;
            -webkit-background-size: 100%;
            background-size: 100%;
        }
    }

    .city-item.item02 {
        left: 1.22rem;
        top: 2.4rem;
        .city-bg {
            background: url("../../app_img/city-bg-01.png") 0 0 no-repeat;
            -webkit-background-size: 100%;
            background-size: 100%;
        }

    }

    .city-item.item03 {
        left: 3.95rem;
        top: 1.06rem;
        .city-bg {
            background: url("../../app_img/city-bg-02.png") 0 0 no-repeat;
            -webkit-background-size: 100%;
            background-size: 100%;
        }
    }

    .city-item.item04 {
        left: 3.76rem;
        top: 2.5rem;
        .city-bg {
            background: url("../../app_img/city-bg-01.png") 0 0 no-repeat;
            -webkit-background-size: 100%;
            background-size: 100%;
        }
    }

    .city-item.item05 {
        left: 6.11rem;
        top: 2.86rem;
        .city-bg {
            background: url("../../app_img/city-bg-01.png") 0 0 no-repeat;
            -webkit-background-size: 100%;
            background-size: 100%;
        }
    }

    .city-item {
        .city-bg {
            width: 100%;
            height: 100%;
            -webkit-border-radius: 50%;
            -moz-border-radius: 50%;
            border-radius: 50%
        }
        .city-text {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            -webkit-border-radius: 50%;
            -moz-border-radius: 50%;
            border-radius: 50%;
            background: rgba(0, 0, 0, .5);
            font-size: .28rem;
            color: #f2f2f2;
            display: flex;
            justify-content: center;
            align-items: center;
            p {
                max-width: 100%;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                font-size: .26rem;
                text-align: center;
            }
            &.isFocus {
                background: rgba(0, 0, 0, 0);
            }
        }

    }

    .cityDialog-title {
        width: 100%;
        height: .8rem;
        line-height: .8rem;
        color: #fff;
        font-size: .3rem;
        text-align: center;
        background: #0d90c6;
        max-width: 750px;
        margin: 0 auto;
    }

    .page-tips {
        text-align: center;
        font-size: .24rem;
        color: rgb(153, 153, 153);
        padding-top: .2rem;
    }

</style>
<template>
    <div class="index-wrapper">
        <div class="ui-loading-block" v-if="loading">
            <div class="ui-loading-cnt">
                <i class="ui-loading-bright"></i>
                <!--<p>加载中...</p>-->
            </div>
        </div>
        <div class="scroll-content">

            <div class="geolocation-wrapper">
                <div class="geolocation-content">
                    <geolocation :propData="{geolocatioDomList:geolocatioDomList,cityDom:cityDom,nowCity:nowCity}"
                                 @starClick="cityClick"></geolocation>
                    <div class="searchBox-wrapper ">
                        <div class="searchBox-box">
                            <div class="goto-back-ontent" @click="gotoBack">
                                <div class="goto-back-icon"></div>
                            </div>
                            <div class="searchBox-ontent">
                                <form @submit.prevent="submit">
                                    <input type="text" maxlength="50" v-model="searchTxet" placeholder="搜索您要查找的内容"
                                           class="search-input c-color" autocomplete="off"/>
                                    <div class="search-icon p-a" @click="search"></div>
                                </form>
                            </div>
                            <div class="geolocation-ontent" v-if="cityName">
                                <div class="geolocation-text">{{cityName}}</div>
                            </div>
                            <div class="search-tips" :class="{'showSearchTips':showSearchTips}">
                                <p>{{showSearchTips}}</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <div class="card-wrapper abnormal-item c-bg" v-if="listOfDist.length>0">
                <div class="card-t-box">
                    <div class="card-t-c" style="border-left:0 ">
                        <p class="card-t-c-icon" style=" padding-left: .32rem;">{{nowCity}}地区服务</p>
                    </div>
                </div>
                <div class="card-c-box">
                    <div class="card-c">
                        <div class="card-row">
                            <div class="card-rol abnormal-item" v-for="item,index in listOfDist"
                                 @click="goAnchor(index)" :class="item.isFocus">
                                {{item.name}}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="card-box" v-if="services.length>0">
                <div class="card-wrapper  c-bg abnormal-item">
                    <div class="card-t-box">
                        <!--<div class="card-t-c" :style="{borderLeftColor:item.cardborderLeftcolor}">-->
                        <div class="card-t-c">
                            <p>{{servicesName}}</p>
                        </div>
                    </div>
                    <div class="card-c-box">
                        <div class="card-c">
                            <div class="card-row">
                                <div class="card-rol abnormal-item" v-for="i in services"
                                     @click="openItemDetail(i)">
                                    {{i.name}}
                                    <div class="hot" v-if="i.hot">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="card-box " v-if="searchList.length>0">
                <div class="card-wrapper  c-bg abnormal-item" v-for="(item, index) in searchList"
                     :id="'anchor-'+item.id">
                    <div class="card-t-box">
                        <div class="card-t-c" :style="{borderLeftColor:item.cardborderLeftcolor}">
                            <p>{{item.name}}</p>
                        </div>
                    </div>
                    <div class="card-c-box" v-if="item.services">
                        <div class="card-c">
                            <div class="card-row">
                                <div class="card-rol abnormal-item" v-for="i in item.services"
                                     @click="openItemDetail(i,item.name)">
                                    {{i.name}}
                                    <div class="hot" v-if="i.hot">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="page-tips" v-if="distId&&searchList.length==0&&services.length==0&&listOfDist.length==0">
                <p>没有搜索到服务结果的信息</p>
            </div>
            <div class="goto-top" @click="gotoTop" v-if="searchBoxTop">
            </div>

            <vDialog :dialog="dialog">
                <div slot="body">
                    <itemDetails :resolve="dialog"></itemDetails>
                </div>
            </vDialog>

            <vDialog :dialog="cityDialog">
                <div slot="body">
                    <div class="cityDialog-title">请选择服务地区</div>
                    <div class="geolocation-content">
                        <geolocation :propData="cityDialog.data"
                                     @starClick="cityClick"></geolocation>
                    </div>
                </div>
            </vDialog>
        </div>
    </div>
</template>

<script>
    import ScrollEl from './ScrollEl.js';
    import vDialog from '../../../../components/v-dialog/index.vue';
    import itemDetails from '../itemDetails/itemDetails.vue';
    import geolocation from '../geolocation/index.vue';
    import {
        get_yellow_pages_list,
        get_yellow_pages_search,
        get_district_list,
        get_serviceType_listOfDist,
        get_coordinate_convert
    } from '../../api/index.js';
    export default {
        components: {
            itemDetails,
            vDialog,
            geolocation
        },
        data: function () {
            return {
                searchBoxTop: false,
                searchTxet: '',
                cardborderLeftcolor: 'red_black_green_yellow_blue_purple_gray_brown_tan_syan'.split('_'),
                dialog: {
                    isShow: false,
                    bgHide: true,
                    data: {},
                    success: this.confirmExTable
                },
                cityDialog: {
                    isShow: false,
                    data: {},
                    success: this.confirmExTable
                },
                showSearchTips: 0,
                searchList: [],
                companyId: '',
                ifSearch: false,

                districtsList: [],
                listOfDist: [],
                services: [],
                servicesName: '',
                cityName: '',
                cityDom: [],
                nowCity: '',
                geolocatioDomList: [],
                distId: '',
                ifNowCity: false,
                ifNowCityYes: false,
                loading: false,
            }
        },

        mounted: function () {
            this.init();
        },
        methods: {
            init () {
                this.render();
                this.dd_ready();
                this.isCompanyIdValid(this.pagesListAjax);
                this.scrollSearchInit();
                let getLocationFlag = localStorage.getItem('getLocationFlag');
                if (getLocationFlag) {
                    this.ifNowCity = true;

                    this.getlistOfDist();
                } else {
                    this.getLocation();
                }
            },
            alert (opt) {
                opt = opt || {};
                alert(opt.message);
            },
            dd_ready () {
                let _this = this;
                dd.ready(function () {
                    dd.ui.webViewBounce.disable();
                    dd.ui.pullToRefresh.disable();
                    _this.alert = function (opt) {
                        opt = opt || {};
                        dd.device.notification.alert({
                            message: opt.message,
                            title: opt.title || "提示",//可传空
                            buttonName: opt.buttonName || "确定",
                            onSuccess: function () {
                            },
                            onFail: function (err) {
                            }
                        });
                    };
                });
            },
            render () {
                this.loading = false;
                this.timer = null;
                this.companyId = this.getParamValue('companyId') || this.$route.query.companyId || '';
                this.test = this.getParamValue('companyId') || this.$route.query.companyId || '';
                this.cityDomList = {
                    '纽约': '01',
                    '纽约市': '01',
                    '里斯本': '02',
                    '里斯本市': '02',
                    '北京': '03',
                    '北京市': '03',
                    '上海': '04',
                    '上海市': '04',
                    '香港': '05',
                };
                this.geolocatioDomList = [
                    {boxClass: 'line', itemClass: 'item'},
                    {boxClass: 'round', itemClass: 'item'},
                    {boxClass: 'city', itemClass: 'item'},
                ]

            },
            setCityDom(data){
                let arr = [];
                for (let item of data) {
                    if (item.distName && this.cityDomList[item.distName]) {
                        arr.push({
                            distName: item.distName,
                            distId: item.distId,
                            classType: this.cityDomList[item.distName],
                            isFocus: ''
                        })
                    }
                }
                this.cityDom = arr;
            },
            setNowCityType(){
                if (!this.cityName&&!this.nowCity) {
                    this.citySelect()
//                    this.nowCity = this.districtsList[0].distName;
//                    this.distId = this.districtsList[0].distId;
                    return false;
                }
                let flag = false;
                for (let item of this.cityDom) {
                    item.isFocus = '';
                    if (item.distName == this.nowCity || item.distName == this.nowCity.substring(0, this.nowCity.length - 1)) {
                        this.distId = item.distId;
                        this.nowCity = item.distName;
                        item.isFocus = 'isFocus';
                        flag = true;
                    }
                }
                if (!flag) {
                    this.citySelect();
                }

            },
            citySelect(){
                this.cityDialog.data={geolocatioDomList:this.geolocatioDomList,cityDom:this.cityDom,nowCity:true}
                this.cityDialog.isShow = true;

            },
            cityClick(data){
                if (data && data.distName) {
                    this.nowCity = data.distName;
                    this.cityDialog.isShow = false;
                    this.distId = data.distId;

                    this.setNowCityType();
                    this.getlistOfDist(data.distId)
                }
            },
            getLocation(){
                if (navigator.geolocation) {
                    navigator.geolocation.getCurrentPosition(this.showPosition, this.showError);
                }
                else {
                    this.ifNowCity = true;
                    this.getlistOfDist();
                    localStorage.setItem('getLocationFlag', true);
                    console.log('位置信息获取失败');
                }
            },
            showPosition(position){
                let _this = this;
                let p = new BMap.Map("allmap");
                let point = new BMap.Point(position.coords.longitude, position.coords.latitude);
                let gc = new BMap.Geocoder();
                gc.getLocation(point, function (rs) {
                    let addComp = rs.addressComponents;
                    _this.cityName = addComp.city || '';
//                    _this.nowCity = addComp.city || '';
                    _this.ifNowCity = true;
                    _this.getlistOfDist();
                });
            },
            showError (error){
                this.ifNowCity = true;
                this.getlistOfDist();
                switch (error.code) {
                    case error.PERMISSION_DENIED:
                        console.log('用户不允许地理定位');
                        localStorage.setItem('getLocationFlag', true);
                        break;
                    case error.POSITION_UNAVAILABLE:
                        console.log('无法获取当前位置');
                        break;
                    case error.TIMEOUT:
                        console.log('操作超时');
                        break;
                    case error.UNKNOWN_ERROR:
                        console.log('未知错误');
                        break;
                }
            },
            scrollSearchInit () {
                let _this = this;
                new ScrollEl({
                    scrollboxEl: $('.scroll-content'),
                    scrollEl: {
                        searchScrollEl: {
                            el: $('.search-wrapper'),
                            largeFn: function () {
                                _this.searchBoxTop = true;
                            },
                            lessFn: function () {
                                _this.searchBoxTop = false;
                            }
                        }
                    }
                });
            },
            ifSearchfocus () {
                //this.ifSearch = true;
            },
            ifSearchblur () {
                //this.ifSearch = false;
            },
            isCompanyIdValid (callback) {
                if (this.companyId) {
                    callback && callback();
                } else {
                    this.alert({message: '公司id无效'});
                }
            },
            AjaxShoeErrcode(data, callback){
                this.loading = false;
                if (data.errcode == 0) {
                    callback && callback(data);
                } else {
                    alert(JSON.stringify(data));
                }
            },
            pagesListAjax () {
                let _this = this;
                this.loading = true;
                get_district_list({compId: this.companyId}).then(data => {
                    _this.AjaxShoeErrcode(data.data || {}, _this.setdistrictsList);
                }).catch(function (err) {
                    _this.loading = false;
                    alert(JSON.stringify(err));
                });
            },
            setdistrictsList(data){
                if (data.districtsList && data.districtsList.length > 0) {
                    this.districtsList = data.districtsList;
                    this.setCityDom(this.districtsList);
                    this.ifNowCityYes = true;
                    this.getlistOfDist();
                }
            },
            getlistOfDist(){
                if (!this.ifNowCity || !this.ifNowCityYes) {
                    return false;
                }
                let _this = this;

                this.setNowCityType();

                if (this.distId) {
                    this.loading = true;
                    get_serviceType_listOfDist({distId: this.distId}).then(data => {
                        _this.AjaxShoeErrcode(data.data || {}, _this.setlistOfDist);
                    }).catch(function (err) {
                        alert(JSON.stringify(err));
                        _this.loading = false;
                    });
                }

            },
            setlistOfDist(data){
                this.searchList = [];
                if (data.serviceTypes && data.serviceTypes.length > 0) {
                    this.listOfDist = data.serviceTypes;
                    this.services = this.listOfDist[0].services || [];
                    this.servicesName = this.listOfDist[0].name;
                    this.listOfDist[0].isFocus = 'isFocus';
                } else {
                    this.listOfDist = [];
                    this.services = [];
                    this.servicesName = [];
                }
            },

            getParamValue (name) {
                let reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
                let r = window.location.search.substr(1).match(reg);
                if (r != null)
                    return unescape(r[2]);
                return null;
            },
            openItemDetail (data, name) {
                data = data || {};
                if (data.numBak1 == 1) {
                    data = data || {};
                    data.typeName = name;
                    this.dialog.data = data;
                    this.dialog.isShow = true;
                } else if (data.charBak1) {
                    window.location.href = data.charBak1
                }

            },
            goAnchor(index) {
                this.searchList = [];
                if (this.listOfDist[index]) {
                    for (let i = 0, iLen = this.listOfDist.length; i < iLen; i++) {
                        this.listOfDist[i].isFocus = '';
                        if (i === index) {
                            this.listOfDist[i].isFocus = 'isFocus';
                        }
                    }
                    this.services = this.listOfDist[index].services || [];
                    this.servicesName = this.listOfDist[index].name;
                } else {
                    this.services = [];
                }
            },
            setListOfDistFocus(){
                let obj = {};
                for (let item of this.searchList) {
                    obj[item.typeId] = true;
                }
                for (let vlue of this.listOfDist) {
                    vlue.isFocus = '';
                    if (obj[vlue.id]) {
                        vlue.isFocus = 'isFocus';
                    }

                }
            },
            gotoTop () {
                $('.scroll-content').scrollTop(0);
            },
            gotoBack () {
                /*if (window.history.length > 1) {
                 window.history.go(-1);
                 window.history.back();
                 } else {
                 }*/
                var backUrl = getCookie("lastUrl");
                if (backUrl != null && backUrl != undefined && backUrl.trim() != "") {
                    location = backUrl;
                    return;
                }
                backUrl = getCookie("lastUrlBack111");
                if (backUrl != null && backUrl != undefined && backUrl.trim() != "") {
                    location = backUrl;
                    return;
                }
                //location = 'http://moapp.fosun.com/portal';
                //location = 'http://ulink.fosun.com/portal';
                location = "/portal/#/home/foo/adv1";
                //location = "/#/home/foo/adv1";
            },
            submit (e) {
                if (!this.searchTxet || this.loading) {
                    return false;
                }
                this.searchAjax();
            },
            search () {
                if (!this.searchTxet) {
                    this.isCompanyIdValid(this.pagesListAjax);
                    return false;
                }
                this.isCompanyIdValid(this.searchAjax);
            },
            searchAjax () {
                let _this = this;
                if (!this.distId) {
                    return false;
                }
                _this.loading = true;

                get_serviceType_listOfDist({distId: this.distId, content: this.searchTxet}).then(data => {
                    _this.AjaxShoeErrcode(data.data || {}, _this.searchAjaxCallback);
                }).catch(function (err) {
                    alert(JSON.stringify(err));
                    _this.loading = false;
                });
                /* get_yellow_pages_search({
                 distId: this.distId,
                 content: this.searchTxet
                 }).then(function (data) {
                 _this.AjaxShoeErrcode(data.data || {}, _this.searchAjaxCallback);
                 }).catch(function (err) {
                 alert(JSON.stringify(err));
                 _this.loading = false;
                 });*/

            },
            searchAjaxCallback (data) {
                let _this = this;
                if (data.errcode == 0) {
                    if (data.serviceTypes && data.serviceTypes.length > 0) {
                        this.searchList = data.serviceTypes || [];
                        this.services = [];
                        this.listOfDist = [];
                        this.searchTxetTips = this.searchTxet;
                        this.setListOfDistFocus();
                    } else {
                        this.searchList = [];
                    }
                    this.showSearchTips = this.searchList.length > 0 ? '搜索到' + this.searchList.length + '条符合条件的信息' : '没有符合条件的黄页';
                    clearTimeout(this.timer);
                    this.timer = setTimeout(function () {
                        _this.showSearchTips = 0;
                    }, 2000);
                } else {

                }
            }
        }
    }
    ;
</script>

