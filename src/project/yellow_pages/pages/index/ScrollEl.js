/**
 * Created by bestxie on 2017/4/7.
 */
var scrollEl = (function () {

    function ScrollEl(args) {

        this.scrollEl = {};
        this.scrollboxEl = $(window);
        this.$doc = document.documentElement;
        this.$body = document.body;

        if (args && typeof args == 'object') {
            for (var key in args) {
                this[key] = args[key];
            }
            this.init();
        }
    }

    ScrollEl.prototype.init = function () {
        this.bindEvent();
    };

    ScrollEl.prototype.bindEvent = function () {
        var _this = this;
        //$('body').bind('touchmove touchend', function () {
        //    _this.windowScroll();
        //});
        document.body.addEventListener('touchmove',function(){
            _this.windowScroll();
        },false);
        document.body.addEventListener('touchend',function(){
            _this.windowScroll();
        },false);
        document.getElementsByClassName('scroll-content')[0].addEventListener('scroll',function(){
            _this.windowScroll();
        },false);
        /*this.scrollboxEl.bind('scroll', function () {
            _this.windowScroll();
        })*/
    };

    ScrollEl.prototype.windowScroll = function () {
        this.scrollTop = this.$doc.scrollTop || this.$body.scrollTop;
        for (var key in this.scrollEl) {
            this[key](this.scrollEl[key]);
        }
    };

    ScrollEl.prototype.searchScrollEl = function (set) {
        var t = $('.scroll-content').scrollTop();
        var ft = 100;
        if (t >= ft) {
            set.largeFn && set.largeFn({t: t, ft: ft});
        } else {
            set.lessFn && set.lessFn({t: t, ft: ft});
        }
    };

    return ScrollEl;

})();

export default  scrollEl;
