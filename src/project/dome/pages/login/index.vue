<template>
    <div class="login-wrapper">
        <div class="ui-loading-block" v-if="loading">
            <div class="ui-loading-cnt"><i class="ui-loading-bright"></i>

                <p>加载中...</p></div>
        </div>

        <div class="header-wrapper am-animation-fade">
            <div class="welcome-box"><p>WELCOME</p></div>
            <div class="avatar-box">
                <div class="avatar">
                    <image v-if="user.avatar" :src="user.avatar" class="acatar-img" alt=""
                           onerror="this.style.display='none'"></image>
                </div>
            </div>
        </div>

        <div class="form-wrapper">
            <form class="form-box" @submit.prevent="submitPrevent">
                <div class="form-group ">
                    <label for="email" class="form-label icon-bg-email"></label>
                    <div class="form-input">
                        <input type="text" autocomplete="off" v-model="user.email" maxlength="18"
                               placeholder="email" name="email" id="email"></input>
                    </div>
                </div>
                <div class="form-group">
                    <label for="password" class="form-label icon-bg-password"></label>
                    <div class="form-input">
                        <input type="password" autocomplete="off"
                               v-model="user.password" placeholder="password"
                               maxlength="18" name="password" class="password" id="password"></input>
                    </div>
                </div>

                <div class="btn-box">
                    <button type="submit" class="btn" @click="submit">登 录</button>
                </div>

                <div class="register-box" v-if="showRegister">
                    <div class="register" @click="register">
                        <text>首次登录</text>
                    </div>
                </div>
            </form>
        </div>

    </div>
</template>
<script>

//    import dingtalk from 'weex-dingtalk';
//    const modal = weex.requireModule('modal');
//    const globalEvent = weex.requireModule('globalEvent');
//    const stream = weex.requireModule('stream');
    //console.log('start generator-package');
    export default {
        name: 'login',
        data: function () {
            return {
                isRemberPwdId: true,
                user: {
                    email: '',
                    password: '',
                    disabled: false,
                    avatar: '',
                    fullname: '',
                    mobible1: ''
                },
                showRegister: false,
                loading: false
            }
        },
        mounted: function () {
//            console.log(dingtalk);
//            dingtalk.ready(function () {
//                const dd = dingtalk.apis;
//                // 设置导航
//                dd.biz.navigation.setTitle({
//                    title: 'CAS登陆验证'
//                });
//            });
//
//            //resume
//            dingtalk.on('resume', function () {
//                console.log('resume weex generator-package')
//            });
//
//            //pause
//            dingtalk.on('pause', function () {
//                console.log('pause weex generator-package');
//            });
//            this.init();
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

                this.getCasCheckUrl = this.ajaxBaseUrl + '/new_portal/api/cas/check?email=';
                this.cUrl = this.$route.query.curl || this.getParamValue('curl') || '';
                this._debug_mode = false;

                this.errorMessage = '';
                this.keyStr = "ABCDEFGHIJKLMNOP" + "QRSTUVWXYZabcdef" + "ghijklmnopqrstuv" + "wxyz0123456789+/" + "=";
            },
            _ifTestJobCode() {
                return this.getParamValue('testJobCode') || this.$route.query.testJobCode || false;
            },
            alert(opt) {
                opt = opt || {};
                alert(opt.message);
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
                            },
                            onFail: function (err) {
                            }
                        });
                    }
                });
            },
            getParamValue (name) {
                let reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
                let r = location.search.substr(1).match(reg);
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
                        _this.alert({message: '网络异常'});
                    }
                });
            },
            getUserInfo() {
                let _this = this;
                if (this._ifTestJobCode()) {
                    _this.user.email = this.getParamValue('testJobCode') || this.$route.query.testJobCode || '';
                    _this.getCasCheck();
                }
                fosun_oapi_login.getDDAccount(function (user) {
                    _this.user.jobCode = user.dd_id;
                    _this.user.email = user.email || '';
                    _this.user.fullname = user.fullname || '';
                    _this.user.mobible1 = user.mobible1 | '';
                    _this.user.avatar = user.avatar || 'http://o.fosun.com/user/' + user.dd_id + '/portrait';


                    _this.getCasCheck();

                });
            },
            getCasCheck(){
                let _this = this;
                this.loading = true;
                stream.fetch({
                    url: this.getCasCheckUrl + this.user.email,
                    method: 'GET'

                }, function (data) {
                    _this.loading = false;

                    if (data.errcode !== '0') {
                        _this.showRegister = true;
                    }
                }, function (data) {
                    _this.loading = false;
                    _this.alert({'message': data});
                });
            },
            submit(e) {
                if (!this.user.password || !this.user.email) {
                    this.alert({'message': '请输入正确的格式'});
                    return false;
                }
                this.loginCAS();
                return false;


            },
            submitPrevent(){
                return false;
            },
            debugAlert(text) {
                if (this._debug_mode) {
                    this.alert({'message': text});
                }
            },
            GetRequest() {
                this.cUrl = this.getParamValue('curl') || this.$route.query.curl || '';
                this.errorMessage = this.getParamValue('errorMessage') || this.$route.query.errorMessage || '';
            },
            encode64(input) {
                var output = "";
                var chr1, chr2, chr3 = "";
                var enc1, enc2, enc3, enc4 = "";
                var i = 0;
                var keyStr = this.keyStr;
                do
                {
                    chr1 = input.charCodeAt(i++);
                    chr2 = input.charCodeAt(i++);
                    chr3 = input.charCodeAt(i++);

                    enc1 = chr1 >> 2;
                    enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
                    enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
                    enc4 = chr3 & 63;

                    if (isNaN(chr2)) {
                        enc3 = enc4 = 64;
                    } else if (isNaN(chr3)) {
                        enc4 = 64;
                    }

                    output = output +
                        keyStr.charAt(enc1) +
                        keyStr.charAt(enc2) +
                        keyStr.charAt(enc3) +
                        keyStr.charAt(enc4);
                    chr1 = chr2 = chr3 = "";
                    enc1 = enc2 = enc3 = enc4 = "";
                } while (i < input.length);

                return output;
            },
            urlEncode(str) {
                var that = this;
                var ret = "";
                var strSpecial = "!\"#$%&'()*+,/:;<=>?[]^`{|}~%";
                var tt = "";

                for (var i = 0; i < str.length; i++) {
                    var chr = str.charAt(i);
                    var c = that.str2asc(chr);
                    tt += chr + ":" + c + "n";
                    if (parseInt("0x" + c) > 0x7f) {
                        ret += "%" + c.slice(0, 2) + "%" + c.slice(-2);
                    } else {
                        if (chr == " ") ret += "+";
                        else if (strSpecial.indexOf(chr) != -1) ret += "%" + c.toString(16);
                        else ret += chr;
                    }
                }
                return ret;
            },
            str2asc(str){
                return str.charCodeAt(0).toString(16);
            },
            loginCAS(){
                var _this = this;
                this.GetRequest();
                this.debugAlert("cuUrl============" + this.cUrl);
                this.debugAlert("errorMessage============" + this.errorMessage);
                var login_Code = this.user.email.toLowerCase();
                var login_Pwd = this.user.password || "";
                var express_Pwd = login_Pwd;
                login_Pwd = this.encode64(login_Pwd);
                this.debugAlert("login_Pwd===========" + login_Pwd);
                this.loading = true;
                var urlt = 'https://oapi.fosun.com' + "/api/oauth2/loginCAS?loginCode=" + login_Code + "&loginPassword=" + login_Pwd;
                $.ajax({
                    url: urlt,
                    cache: false,
                    async: true,
                    context: document.body,
                    success: function (data) {
                        _this.loading = false;
                        data = JSON.parse(data);
                        _this.debugAlert("jsonData========" + JSON.stringify(data));
                        if (!data.resultFlag) {
                            _this.alert({'message': "Server access exception!"});
                            return;
                        }
                        if (data.resultFlag == "1") {
                            _this.alert({'message': "The account with this keycode was not found."});
                            return;
                        }
                        if (data.resultFlag == "0") {
                            if (_this.isRemberPwdId) {
                                var loginStorage = {
                                    loginCode: login_Code,
                                    loginPwd: login_Pwd,
                                    isRemberPwd: "on",
                                    rFlag: "false"
                                };
                                dd.util.localStorage.setItem({
                                    name: "CAS_login_storage",
                                    value: JSON.stringify(loginStorage),
                                    onSuccess: function (res) {
                                    },
                                    onFail: function () {
                                    }
                                });
                            } else {
                                var loginStorage = {
                                    loginCode: login_Code,
                                    loginPwd: login_Pwd,
                                    isRemberPwd: "off",
                                    rFlag: "true"
                                };
                                dd.util.localStorage.setItem({
                                    name: "CAS_login_storage",
                                    value: JSON.stringify(loginStorage),
                                    onSuccess: function (res) {
                                    },
                                    onFail: function () {
                                    }
                                });
                            }
                            var cuUrl = _this.urlEncode(_this.cUrl);
                            _this.debugAlert("encodecuUr==============" + cuUrl);

                            if (_this.isIphone()) {
                                _this._setRealAccountName("1002", "{" + login_Code + ":" + express_Pwd + "}");
                            } else if (_this.isAndroid()) {
                                _this._setRealAccountName("1002", "{loginid=" + login_Code + "&password=" + express_Pwd + "}");
                            }

                            var storageValue_1002_1 = {
                                "appUID": login_Code,
                                "isFosunGroup": "1",
                                "jobCode": login_Code,
                                "fullname": "",
                                "email": login_Code,
                                "stateCode1": "",
                                "mobile1": "",
                                "titleDesc": "",
                                "departNamePath": ""
                            };
                            _this._setRealAccountName("1002_1", JSON.stringify(storageValue_1002_1));
                            window.location = 'https://oapi.fosun.com' + "/api/oauth2/authorize" + "?returnUrl=" + cuUrl + "&sysId=" + "fosun_oapi.oauth2.1002_1" + "&casUserId=" + login_Code;
                        }
                    },
                    error: function (data) {
                        _this.alert({'message': "loginCAS_error" + JSON.stringify(data)});
                        _this.loading = false;
                    }
                });
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
            _setRealAccountName(sysId, storageValue){

                if (this.isIphone()) {
                    this.connectWebViewJavascriptBridge(function (bridge) {

                        //注册反调函数
                        try {
                            bridge.init(function (message, responseCallback) {
                                var data = {'Javascript Responds': 'Wee!'}
                                responseCallback(data);
                            });
                        } catch (e) {
                        }
                        var p = {};
                        p[sysId] = storageValue;
                        //alert(p[sysId]);
                        bridge.callHandler('setAccount', p, function (res) {
                            //redirect(storageValue);
                        });
                    });

                } else if (this.isAndroid() && this.isExitsFunction('dingtalk.setAccount')) {
                    this.debugAlert("inputLogin.html android set:" + storageValue);
                    dingtalk.setAccount(sysId, storageValue);
                    //redirect(storageValue);
                } else {
                    alert("Not support");
                }
            },
            connectWebViewJavascriptBridge(callback) {
                if (window.WebViewJavascriptBridge) {
                    callback(WebViewJavascriptBridge);
                } else {
                    document.addEventListener('WebViewJavascriptBridgeReady', function () {
                        try {
                            WebViewJavascriptBridge.init(function (data, responseCallback) {
                                this.debugAlert('WebViewJavascriptBridge init: ', data, responseCallback);
                            });
                        } catch (e) {
                            this.debugAlert(e.message);
                        }
                        callback(WebViewJavascriptBridge);
                    }, false);
                }

            },
            isExitsFunction(funcName) {
                try {
                    if (typeof(eval(funcName)) == "function") {
                        return true;
                    }
                } catch (e) {
                }
                return false;
            },
            register(){
                let _this = this;
                console.log(_this.cUrl)
                this.$router.push({
                    name: 'register', query: {
                        curl: _this.cUrl
                    }
                })
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

    .login-wrapper {
        width: 100%;
        min-height: 100%;
        -webkit-animation-name: am-fade;
        animation-name: am-fade;
        -webkit-animation-duration: .8s;
        animation-duration: .8s;
        -webkit-animation-timing-function: linear;
        animation-timing-function: linear;
        position: absolute;
        bottom: 0;
        background: url("../app_img/login-bg.jpg") bottom center no-repeat;
        -moz-background-size: 100% auto;
        -webkit-background-size: 100% auto;
        -o-background-size: 100% auto;
        background-size: 100% auto;
        /*header-wrapper start*/
        /*header-wrapper end*/
        /*form-wrapper start*/
        /*form-wrapper end*/
        /*input-placeholder start*/
        /*input-placeholder end*/
        /*ui-loading-block start*/
        /*ui-loading-block end*/
    }

    .login-wrapper .header-wrapper {
        width: 100%;
        padding-top: 146px;
        text-align: center;
    }

    .login-wrapper .header-wrapper .welcome-box {
        font-size: 48px;
        letter-spacing: 2px;
        color: #fff;
    }

    .login-wrapper .header-wrapper .welcome-box p {
        font-size: 48px;
        letter-spacing: 2px;
        color: #fff;
        text-align: center;
    }

    .login-wrapper .header-wrapper .avatar-box {
        padding-top: 90px;
        text-align: center;
        font-size: 0;
    }

    .login-wrapper .header-wrapper .avatar-box .avatar {
        width: 184px;
        height: 184px;
        display: inline-block;
        margin: 0 auto;
        -webkit-border-radius: 50%;
        -moz-border-radius: 50%;
        border-radius: 50%;
        background: url("../app_img/user.png") center no-repeat;
        -moz-background-size: 100% auto;
        -webkit-background-size: 100% auto;
        -o-background-size: 100% auto;
        background-size: 100% auto;
    }

    .login-wrapper .header-wrapper .avatar-box .acatar-img {
        display: block;
        width: 100%;
        height: 100%;
        -webkit-border-radius: 50%;
        -moz-border-radius: 50%;
        border-radius: 50%;
    }

    .login-wrapper .form-wrapper {
        padding-top: 74px;
        color: #fff;
    }

    .login-wrapper .form-wrapper .form-box {
        width: 550px;
        margin: 0 auto;
    }

    .login-wrapper .form-wrapper .form-group {
        overflow: hidden;
        padding-top: 30px;
        padding-bottom: 20px;
        border-bottom: 1px solid #fff;
        position: relative;
        height: 100px;
    }

    .login-wrapper .form-wrapper .form-label {
        width: 100px;
        height: 50px;
        display: inline-block;
        float: left;
        position: absolute;
        left: 0;
    }

    .login-wrapper .form-wrapper .form-label.icon-bg-email {
        background: url("../app_img/icon-email.png") 20px center no-repeat;
        background-size: 40px auto;
    }

    .login-wrapper .form-wrapper .form-label.icon-bg-password {
        background: url("../app_img/icon-password.png") 20px center no-repeat;
        background-size: 40px auto;
    }

    .login-wrapper .form-wrapper .form-input {
        width: 450px;
        height: 50px;
        float: left;
        position: absolute;
        right: 0;
    }

    .login-wrapper .form-wrapper .form-input input {
        width: 100%;
        height: 50px;
        font-size: 36px;
        line-height: 50px;
        color: #cccccc;
    }

    .login-wrapper .form-wrapper .form-input input.password {
        color: #ccc;
    }

    .login-wrapper .form-wrapper .btn-box {
        padding-top: 75px;
        padding-bottom: 10px;
        width: 100%;
    }

    .login-wrapper .form-wrapper .btn-box .btn {
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

    .login-wrapper .form-wrapper .register-box {
        padding-top: 65px;
        overflow: hidden;
        height: 115px;
        position: relative;
    }

    .login-wrapper .form-wrapper .register-box .register {
        width: 50%;
        float: right;
        text-align: right;
        height: 50px;
        position: absolute;
        right: 0;
        color: #fff;
        font-size: 30px;
    }

    .login-wrapper .form-wrapper .register-box .register p {
        text-align: right;
        color: #fff;
    }

    .login-wrapper ::-webkit-input-placeholder {
        /* WebKit browsers */
        color: #cccccc;
    }

    .login-wrapper :-moz-placeholder {
        /* Mozilla Firefox 4 to 18 */
        color: #cccccc;
    }

    .login-wrapper ::-moz-placeholder {
        /* Mozilla Firefox 19+ */
        color: #cccccc;
    }

    .login-wrapper :-ms-input-placeholder {
        /* Internet Explorer 10+ */
        color: #cccccc;
    }

    .login-wrapper .ui-loading-block {
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

    .login-wrapper .ui-loading-block .ui-loading-cnt {
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

    .login-wrapper .ui-loading-block.show {
        display: -webkit-box;
    }

    .login-wrapper .show {
        visibility: visible;
    }

    .login-wrapper .ui-loading-block .ui-loading-bright {
        margin: .1px;
    }

    .login-wrapper .ui-loading-bright {
        width: .6px;
        height: .6px;
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
