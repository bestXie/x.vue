/**
 * Created by bestxie on 2017/3/31.
 */
import sprDialog from '../../../../components/sprDialog/sprDialog.vue'
require('./index.less');
let indexVue = new sprWeb({
    data() {
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
            loading: false,
            showHeader:false
        }
    },
    mounted() {
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
            //this.ajaxBaseUrl = 'http://o.fosun.com';
            // this.casBaseUrl='https://oapi.fosun.com';
            this.ajaxBaseUrl = 'http://ouat.fosun.com';
            this.casBaseUrl = 'https://oapiuat.fosun.com:8445';

            this.getCasCheckUrl = this.ajaxBaseUrl + '/new_portal/api/cas/check?email=';
            this.GetRequest();
            this._debug_mode = false;
            this.showHeader = !this.isAndroid();

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
            let r = window.location.search.substr(1).match(reg);
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
                if (!_this.user.email) {
                    alert(JSON.stringify(_this.user))
                }
                _this.user.fullname = user.fullname || '';
                _this.user.mobible1 = user.mobible1 | '';
                _this.user.avatar = user.avatar || 'http://o.fosun.com/user/' + user.dd_id + '/portrait';


                _this.getCasCheck();

            });
        },
        getCasCheck(){
            let _this = this;
            this.loading = true;
            $.get(this.getCasCheckUrl + this.user.email, function (data) {
                _this.loading = false;
                data = JSON.parse(data);
                if (data.errcode !== '0') {
                    _this.showRegister = true;
                }
            }, function (data) {
                _this.loading = false;
                _this.alert({'message': data});
            })
        },
        submit(e) {
            if (!this.user.password || !this.user.email) {
                this.alert({'message': '请输入正确的格式'});
                return false;
            }
            if (!this.loading) {
                this.loginCAS();
            }
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
            var url = location.search;
            url = decodeURIComponent(url);
            if (url.indexOf("?") != -1) {
                var str = url.substr(1);
                var strs = str.split("&");
                for (var i = 0; i < strs.length; i++) {
                    if (strs[i].split("=")[0] == "curl") {

                        this.cUrl = strs[i].split("=")[1];
                    }
                    if (strs[i].split("=")[0] == "errorMessage") {
                        this.errorMessage = strs[i].split("=")[1];
                    }
                }
            }
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
            // this.GetRequest();
            this.debugAlert("cuUrl============" + this.cUrl);
            this.debugAlert("errorMessage============" + this.errorMessage);
            var login_Code = this.user.email.toLowerCase();
            var login_Pwd = this.user.password || "";
            var express_Pwd = login_Pwd;
            login_Pwd = this.encode64(login_Pwd);
            this.debugAlert("login_Pwd===========" + login_Pwd);
            this.loading = true;
            //https://oapi.fosun.com
            var urlt = this.casBaseUrl + "/api/oauth2/loginCAS?loginCode=" + login_Code + "&loginPassword=" + login_Pwd;
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
                        _this.alert({'message': "账号或者密码错误！"});
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

                        var locationUrl = _this.casBaseUrl + "/api/oauth2/authorize" + "?returnUrl=" + cuUrl + "&sysId=" + "fosun_oapi.oauth2.1002_1" + "&casUserId=" + login_Code;
                        window.location = locationUrl;
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
            this.$router.push({
                name: 'register', query: {
                    curl: _this.cUrl
                }
            })
        },
        inputFocus(e) {
            e.currentTarget.focus();
        }
    },
});
export default  indexVue;