/**
 * Created by bestxie on 2017/3/31.
 */
import sprDialog from '../../../../components/sprDialog/sprDialog.vue'
require('./index.less');
import {
    ajaxBaseUrl,
    casBaseUrl
} from '../../config/env'
let indexVue = new sprWeb({
    data() {
        return {
            user: {
                password: '',
                password_again: '',
                avatar: '',
                fullname: '',
                mobile1: '',
            },
            loading: false,
            showHeader: false
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
            this.showHeader = !this.isAndroid();
            this.ajaxBaseUrl = casBaseUrl;
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
                _this.user.avatar = user.avatar || _this.ajaxBaseUrl + user.dd_id + '/portrait';
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
            if (!this.loading) {
                this.register();
            }
        },
        submitPrevent(){
            return false;
        },
        register(){
            let _this = this;
            let params = {
                jobCode: this.user.jobCode || '',
                email: this.user.email || '',
                name: this.user.fullname || '',
                enName: this.user.enName || '',
                workNo: this.user.workNo || '',//工号
                password: this.user.password || '',//:密码（必填）
                mobile: this.user.mobile1 || '',//手机（必填）
                department: this.user.department || '',//: 部门
                validDate: this.user.validDate || '',//: 有效期(yyyy - MM - dd)
                dataSource: this.user.dataSource || '' //账号来源(必填, 最好是系统名称)
            };
            this.loading = true;
            $.ajax({
                type: 'POST',
                url: this.ajaxBaseUrl + '/api/oauth2/registerCAS',
                data: params,
                dataType: 'json',
                contentType: "application/x-www-form-urlencoded",
                success: function (data) {
                    data = JSON.parse(data);
                    if (data.errcode == 0) {
                        _this.alert({
                            'message': '账号注册成功！', 'onSuccess': function () {
                                _this.$router.push({
                                    name: 'login', query: {
                                        curl: _this.cUrl
                                    }
                                })
                            }
                        });
                    }

                    if (data.errcode == '1') {
                        _this.alert({'message': data.errmsg || "账号已存在"});
                    }
                    _this.loading = false;

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
            let str = '其他';
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
});
export default  indexVue;