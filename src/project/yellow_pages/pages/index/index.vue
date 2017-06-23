<template>
    <div class="index-wrapper">
        <div class="search-box c-bg" v-if="searchBoxTop">
            <div class="search p-r">
                <form @submit.prevent="submit">
                    <input type="text" maxlength="50" v-model="searchTxet" placeholder="搜索您要查找的内容"
                           class="search-input c-color" autocomplete="off"/>

                    <div class="search-icon p-a" @click="search"></div>
                    <div class="search-tips" :class="{'showSearchTips':showSearchTips}">
                        {{showSearchTips}}
                    </div>
                </form>
            </div>
        </div>
        <div class="scroll-content">
            <div class="banner-wrapper p-r">
                <div class="banner"><img src="../../app_img/banner.png" alt=""/></div>
                <div class="goto-back p-a" @click="gotoBack"></div>
            </div>

            <div class="search-wrapper c-bg">
                <div class="search-box c-bg" v-if="!searchBoxTop">
                    <div class="search p-r">
                        <form @submit.prevent="submit">
                            <input type="text" maxlength="50" v-model="searchTxet" placeholder="搜索您要查找的内容"
                                   class="search-input c-color" autocomplete="off"/>

                            <div class="search-icon p-a" @click="search"></div>
                            <div class="search-tips" :class="{'showSearchTips':showSearchTips}">
                                {{showSearchTips}}
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            <div class="card-wrapper abnormal-item c-bg">
                <div class="card-c-icon-box">
                    <div class="card-c">
                        <ul class="card-row">
                            <li class="card-rol " v-for="item in yellowPagesList"
                                @click="goAnchor('#anchor-'+item.id)">
                            <span class="card-icon">
                                <i v-if="item.picPath"
                                   :style="{background: 'url('+item.picPath+') center no-repeat','background-size': '100% auto'}">
                                </i>
                                <i v-else class="icon_fosun"></i>
                            </span>

                                <p>{{item.name || ''}}</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div class="card-box " v-if="!ifSearch">
                <div class="card-wrapper  c-bg abnormal-item" v-for="(item, index) in yellowPagesList"
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

            <div class="card-box abnormal-item" v-if="searchList.length>0">
                <div class="card-wrapper  c-bg">
                    <div class="card-c-box">
                        <div class="card-c">
                            <div class="card-row">
                                <div class="card-rol abnormal-item" v-for="i in searchList" @click="openItemDetail(i)">
                                    {{i.name}}
                                    <div class="hot" v-if="i.hot">
                                        <span>hot</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="goto-top" @click="gotoTop" v-if="searchBoxTop">

            </div>

            <vDialog :dialog="dialog">
                <div slot="body">
                    <itemDetails :resolve="dialog"></itemDetails>
                </div>
            </vDialog>
        </div>
    </div>
</template>

<script>
    import ScrollEl from './ScrollEl.js';
    import vDialog from '../../../../components/v-dialog/index.vue';
    import itemDetails from '../itemDetails/itemDetails.vue';
    import {get_yellow_pages_list, get_yellow_pages_search} from '../../api/index.js';
    export default {
        data: function () {
            return {
                searchBoxTop: false,
                searchTxet: '',
                cardborderLeftcolor: 'red_black_green_yellow_blue_purple_gray_brown_tan_syan'.split('_'),
                dialog: {
                    isShow: false,
                    data: {},
                    success: this.confirmExTable
                },
                showSearchTips: 0,
                yellowPagesList: [],
                searchList: [],
                companyId: '',
                ifSearch:false
            }
        },
        components: {
            itemDetails,
            vDialog
        },
        mounted: function () {
            this.init();
            console.log(1);
            console.log(22);
        },
        methods: {
            init () {
                this.render();
                this.dd_ready();
                this.isCompanyIdValid(this.pagesListAjax);
                this.scrollSearchInit();
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
                    }

                });
            },
            render () {
                this.timer = null;
                this.companyId = this.getParamValue('companyId') || this.$route.query.companyId || '';
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
            pagesListAjax () {
                let _this = this;
                get_yellow_pages_list({companyId: this.companyId}).then(data => {
                    _this.pagesListAjaxCallback(data.data);
                });
            },
            pagesListAjaxCallback (data) {
                let serviceTypes = data.serviceTypes || [];
                for (let i = 0, iLen = serviceTypes.length; i < iLen; i++) {
                    serviceTypes[i].cardborderLeftcolor = this.cardborderLeftcolor[Math.round(Math.random() * (this.cardborderLeftcolor.length - 1) + 1)];
                }
                this.searchList = [];
                this.yellowPagesList = serviceTypes
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
                data.typeName = name;
                this.dialog.data = data;
                this.dialog.isShow = true;
            },
            goAnchor(selector) {
                let anchor = this.$el.querySelector(selector);
                document.getElementsByClassName('scroll-content')[0].scrollTop = anchor.offsetTop - document.getElementsByClassName('search-box')[0].offsetHeight;
                //document.body.scrollTop = anchor.offsetTop
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
                if (!this.searchTxet) {
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
                get_yellow_pages_search({
                    companyId: this.companyId,
                    content: this.searchTxet
                }).then(function (data) {
                    _this.searchAjaxCallback(data.data);
                });

            },
            searchAjaxCallback (data) {
                let _this = this;
                if (data.errcode == 0) {
                    this.searchList = data.services || [];
                    this.yellowPagesList = [];
                    this.showSearchTips = this.searchList.length > 0 ? '搜索到' + this.searchList.length + '条符合条件的信息' : '没有符合条件的黄页';
                    clearTimeout(this.timer);
                    this.timer = setTimeout(function () {
                        _this.showSearchTips = 0;
                    }, 2000);
                } else {

                }
            }
        }
    };
</script>

<style lang="less">
    @import './index.less';
</style>
