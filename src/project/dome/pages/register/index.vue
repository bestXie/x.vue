<template>
    <div class="register-wrapper am-animation-fade">
        <div class="ui-loading-block"  v-if="loading">
            <div class="ui-loading-cnt"><i class="ui-loading-bright"></i>
                <p>加载中...</p></div>
        </div>
        <div class="header-wrapper">
            <div class="back-box">
                <div class="back" @click="back">
                    <div class="back-icon"><text>返回</text></div>
                </div>
            </div>
            <div class="avatar-box">
                <div class="avatar">
                    <image v-if="user.avatar" :src="user.avatar" class="acatar-img" onerror="this.style.display='none'"></image>
                </div>
            </div>
            <div class="user-box">
                <div class="user-name" v-html="user.fullname"  v-if="user.fullname"></div>
                <div class="user-email"  v-html="user.email"  v-if="user.email"></div>
                <div class="user-mobile" v-html="user.mobile1"  v-if="user.mobile1"></div>
            </div>
        </div>

        <div class="form-wrapper">

            <form class="form-box"  @submit.prevent="submitPrevent">
                <div class="form-group ">
                    <label for="password" class="form-label icon-password-re"></label>
                    <div class="form-input">
                        <input type="password"  autocomplete="off" v-model="user.password" @focus="inputFocus"  @keyup.enter="submit"  placeholder="输入密码" maxlength="18" name="password"
                               id="password"></input>
                    </div>
                </div>

                <div class="form-group">
                    <label for="pass_again" class="form-label icon-password-ret"></label>
                    <div class="form-input">
                        <input type="password"  autocomplete="off"  v-model="user.password_again" @focus="inputFocus"  @keyup.enter="submit"  placeholder="确认密码" maxlength="18"
                               name="password_again" id="pass_again"></input>
                    </div>
                </div>

                <div class="btn-box">
                    <button type="submit" class="btn" @click="submit">账号初始化</button>
                </div>
            </form>
        </div>

    </div>
</template>
<script>

    import dingtalk from 'weex-dingtalk';
    const modal = weex.requireModule('modal');
    const globalEvent = weex.requireModule('globalEvent');
    const stream = weex.requireModule('stream');
    //    console.log('start generator-package');



    export default {
        name: 'register',
        data: function () {
            return {
                user: {
                    password: '',
                    password_again: '',
                    avatar: '',
                    fullname: '',
                    mobile1: '',
                },
                loading: false
            }
        },
        mounted: function () {
            console.log(dingtalk);
            dingtalk.ready(function () {
                const dd = dingtalk.apis;
                // 设置导航
                dd.biz.navigation.setTitle({
                    title: 'CAS登陆验证'
                });
            });

            //resume
            dingtalk.on('resume', function () {
                console.log('resume weex generator-package')
            });

            //pause
            dingtalk.on('pause', function () {
                console.log('pause weex generator-package');
            });
            this.init();
        },
        methods: {
            init() {
                this.render();
                this.getUserInfo();
                this.dd_ready();
            },
            render() {
                this.loading = false;
                this.ajaxBaseUrl = 'http://ouat.fosun.com';
                this.user.dataSource = this.getDataSource() || '';
                this.cUrl = this.getParamValue('curl') || this.$route.query.curl || '';
            },
            _ifTestJobCode() {
                let testJobCode = this.getParamValue('testJobCode') || this.$route.query.testJobCode || '';
                if (testJobCode) {
                    return true
                }

                return false
            },
            alert(opt) {
                opt = opt || {};
                alert(opt.message);
                opt.onSuccess && opt.onSuccess();
            },
            getUserInfo() {
                let _this = this;
                if (this._ifTestJobCode()) {
                    _this.user.email = this.getParamValue('testJobCode') || this.$route.query.testJobCode || '';
                }
                fosun_oapi_login.getDDAccount(function (user) {
                    _this.user.jobCode = user.dd_id;
                    _this.user.email = user.email;
                    _this.user.fullname = user.fullname;
                    _this.user.mobile1 = user.mobile1;
                    _this.user.avatar = user.avatar || 'http://o.fosun.com/user/' + user.dd_id + '/portrait';
                });
            },
            dd_ready() {
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
                                opt.onSuccess && opt.onSuccess();
                            },
                            onFail: function (err) {
                            }
                        });
                    }
                });
            },
            getParamValue (name) {
                var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
                var r = window.location.search.substr(1).match(reg);
                if (r != null)
                    return unescape(r[2]);
                return null;
            },
            dd_chat() {
                let _this = this;
                dd.biz.util.open({
                    name: "chat",
                    params: {
                        corpId: 'ding7a05491d2e914134',//企业ID
                        users: ["itsupport@fosun.com"]//小ding热线
                    },
                    onFail: function () {
                        alert('网络异常');
                    }
                });
            },
            submit(e) {
                if (!this.user.email || !this.user.mobile1) {
                    this.alert({'message': '用户信息获取失败'});
                }
                if (!this.user.password || !this.user.password_again) {
                    this.alert({'message': '请输入密码'});
                    return false;
                }
                if (this.user.password !== this.user.password_again) {
                    this.alert({'message': '两次密码输入不一致'});
                    return false;
                }

                this.register();
            },
            submitPrevent(){
                return false;
            },
            register(){
                let _this = this;
                let params = JSON.stringify({
                    email: this.user.email || '',
                    name: this.user.fullname || '',
                    enName: this.user.enName || '',
                    workNo: this.user.workNo || '',//工号
                    password: this.user.password || '',//:密码（必填）
                    mobile: this.user.mobile1 || '',//手机（必填）
                    department: this.user.department || '',//: 部门
                    validDate: this.user.validDate || '',//: 有效期(yyyy - MM - dd)
                    dataSource: this.user.dataSource || '' //账号来源(必填, 最好是系统名称)
                });
                this.loading = true;
                $.ajax({
                    type: 'POST',
                    url: this.ajaxBaseUrl + '/new_portal/api/cas/register',
                    data: params,
                    contentType: "application/json",
                    success: function (data) {
                        data = JSON.parse(data);

                        _this.loading = false;
                        if (data && data.errcode) {
                            if (data.errcode === '0') {
                                _this.alert({
                                    'message': "账号初始化成功", 'onSuccess': function () {
                                        _this.$router.push({
                                            name: 'login', query: {
                                                curl: _this.cUrl
                                            }
                                        })
                                    }
                                });
                                return;
                            }

                            if (data.errcode === '1') {
                                _this.alert({'message': data.errmsg || "账号已存在"});
                                return;
                            }

                            return
                        }


                    },
                    dataType: 'JSON',
                    error: function (data) {
                        _this.alert({'message': "loginCAS_error" + JSON.stringify(data)});
                        _this.loading = false;
                    }
                });
            },
            back(){
                var _this = this;
                _this.$router.push({
                    name: 'login', query: {
                        curl: _this.cUrl
                    }
                })
            },
            isIphone (){
                if (navigator.userAgent) {
                    if (navigator.userAgent.indexOf('iPhone') > -1 || navigator.userAgent.indexOf('iPad') > -1) {
                        return true;
                    }
                }
                return false;
            },
            isAndroid (){
                if (navigator.userAgent) {
                    if (navigator.userAgent.indexOf('Android') > -1 || navigator.userAgent.indexOf('Linux') > -1) {
                        return true;
                    }
                }
                return false;
            },
            getDataSource(){
                var str = '其他';
                if (this.isIphone()) {
                    str = 'iPhone'
                } else if (this.isAndroid()) {
                    str = 'Android'
                }
                return str;
            },
            inputFocus(e) {
                e.currentTarget.focus();
            }
        }
    }
</script>
<style>
    * {
        margin: 0;
        padding: 0;
    }
    li {
        list-style: none;
    }
    img {
        border: none;
    }
    input,
    select,
    textarea {
        outline: none;
        border: none;
        background: none;
    }
    textarea {
        resize: none;
    }
    a {
        text-decoration: none;
    }
    /*清除dotted*/
    a,
    label {
        blr: expression(this.onFocus=this.blur());
    }
    a,
    label {
        outline: none;
    }
    /*设置公用类*/
    .fl {
        float: left;
        display: inline;
    }
    .fr {
        float: right;
        display: inline;
    }
    .p-r {
        position: relative;
    }
    .p-a {
        position: absolute;
    }
    .fix {
        position: fixed;
    }
    .hide {
        visibility: hidden;
    }
    .show {
        visibility: visible;
    }
    /*禁止复制*/
    html,
    body {
        -moz-user-select: none;
        -webkit-user-select: none;
        -ms-user-select: none;
        -khtml-user-select: none;
        user-select: none;
    }
    html {
        -webkit-text-size-adjust: none;
        text-size-adjust: none;
        font-size: 12px;
        color: #131329;
        font-family: 'Helvetica Neue', Helvetica, STHeiTi, sans-serif;
    }
    html,
    body {
        width: 100%;
        height: 100%;
    }
    body {
        overflow: hidden;
        background-color: #e6e6e6;
        font-size: 0.12px;
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
        -webkit-overflow-scrolling: touch;
    }
    .c-bg {
        background: #f7f7f7;
    }
    .c-color {
        color: #131329;
    }
    body {
        background: url("../app_img/login-bg.jpg") bottom center no-repeat;
        -moz-background-size: 100% auto;
        -webkit-background-size: 100% auto;
        -o-background-size: 100% auto;
        background-size: 100% auto;
    }
    @-webkit-keyframes am-fade {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }
    @keyframes am-fade {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }
    .register-wrapper {
        background: #fff;
        position: absolute;
        bottom: 0;
        width: 100%;
        min-height: 100%;
        -webkit-animation-name: am-fade;
        animation-name: am-fade;
        -webkit-animation-duration: .8s;
        animation-duration: .8s;
        -webkit-animation-timing-function: linear;
        animation-timing-function: linear;
    }
    .register-wrapper .header-wrapper {
        width: 100%;
        text-align: center;
        background: url("../app_img/login-bg.jpg") top center no-repeat;
        background-size: 100% auto;
    }
    .register-wrapper .header-wrapper .back-box {
        overflow: hidden;
    }
    .register-wrapper .header-wrapper .back-box .back {
        padding-top: 30px;
        padding-bottom: 40px;
        width: 220px;
    }
    .register-wrapper .header-wrapper .back-box .back-icon {
        padding-left: 72px;
        text-align: left;
        color: #fff;
        font-size: 34px;
        background: url("../app_img/icon-back.png") 30px center no-repeat;
        background-size: 16px auto;
    }
    .register-wrapper .header-wrapper .back-box .back-icon p{
        color: #fff;
    }
    .register-wrapper .header-wrapper .avatar-box {
        text-align: center;
        font-size: 0;
    }
    .register-wrapper .header-wrapper .avatar-box .avatar {
        width: 184px;
        height: 184px;
        display: inline-block;
        -webkit-border-radius: 50%;
        -moz-border-radius: 50%;
        border-radius: 50%;
        margin: 0 auto;
        background: url("../app_img/user.png") center no-repeat;
        -moz-background-size: 100% auto;
        -webkit-background-size: 100% auto;
        -o-background-size: 100% auto;
        background-size: 100% auto;
    }
    .register-wrapper .header-wrapper .avatar-box .acatar-img {
        display: block;
        width: 100%;
        height: 100%;
        -webkit-border-radius: 50%;
        -moz-border-radius: 50%;
        border-radius: 50%;
    }
    .register-wrapper .header-wrapper .user-box {
        padding-top: 38px;
        padding-bottom: 55px;
        font-size: 32px;
        color: #fff;
        text-align: center;
    }
    .register-wrapper .header-wrapper .user-box .user-name {
        padding-bottom: 20px;
        font-size: 34px;
    }
    .register-wrapper .header-wrapper .user-box .user-email {
        padding-bottom: 20px;
    }
    .register-wrapper .form-wrapper {
        padding-top: 60px;
        color: #fff;
    }
    .register-wrapper .form-wrapper .form-box {
        width: 550px;
        margin: 0 auto;
    }
    .register-wrapper .form-wrapper .form-group {
        overflow: hidden;
        padding-top: 30px;
        padding-bottom: 20px;
        border-bottom: 1px solid #f0f0f0;
        position: relative;
        height: 100px;
    }
    .register-wrapper .form-wrapper .form-label {
        width: 100px;
        height: 50px;
        display: inline-block;
        float: left;
        position: absolute;
        left: 0;
    }
    .register-wrapper .form-wrapper .form-label.icon-password-re {
        background: url("../app_img/icon-password-re.png") 20px center no-repeat;
        background-size: 40px auto;
    }
    .register-wrapper .form-wrapper .form-label.icon-password-ret {
        background: url("../app_img/icon-password-ret.png") 20px center no-repeat;
        background-size: 40px auto;
    }
    .register-wrapper .form-wrapper .form-input {
        width: 450px;
        height: 50px;
        float: left;
        position: absolute;
        right: 0;
    }
    .register-wrapper .form-wrapper .form-input input {
        width: 100%;
        height: 50px;
        font-size: 36px;
        line-height: 50px;
        color: #ccc;
    }
    .register-wrapper .form-wrapper .btn-box {
        padding-top: 114px;
        padding-bottom: 10px;
        width: 100%;
    }
    .register-wrapper .form-wrapper .btn-box .btn {
        width: 100%;
        font-size: 30px;
        padding-top: 20px;
        padding-bottom: 20px;
        text-align: center;
        background: #26a6ff;
        color: #fff;
        border: 0;
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
        outline: 0;
        -webkit-transition-duration: 0.25s;
        transition-duration: 0.25s;
        border-radius: 3px;
        -moz-border-radius: 3px;
        -webkit-border-radius: 3px;
    }
    .register-wrapper ::-webkit-input-placeholder {
        /* WebKit browsers */
        color: #ccc;
    }
    .register-wrapper :-moz-placeholder {
        /* Mozilla Firefox 4 to 18 */
        color: #ccc;
    }
    .register-wrapper ::-moz-placeholder {
        /* Mozilla Firefox 19+ */
        color: #ccc;
    }
    .register-wrapper :-ms-input-placeholder {
        /* Internet Explorer 10+ */
        color: #ccc;
    }
    .register-wrapper .ui-loading-block {
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
    .register-wrapper .ui-loading-block .ui-loading-cnt {
        width: 1.2px;
        height: 1.35px;
        padding-top: .1px;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-box-align: center;
        text-align: center;
        background: rgba(0, 0, 0, 0.65);
        border-radius: 6px;
        color: rgba(255, 255, 255, 0.9);
        /*font-size: 16px;*/
        font-size: .24px;
    }
    .register-wrapper .ui-loading-block.show {
        display: -webkit-box;
    }
    .register-wrapper .show {
        visibility: visible;
    }
    .register-wrapper .ui-loading-block .ui-loading-bright {
        margin: 10px;
    }
    .register-wrapper .ui-loading-bright {
        width: 60px;
        height: 60px;
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
</style>
