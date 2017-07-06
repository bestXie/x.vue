/**
 * Created by bestxie on 2017/6/6.
 */
/**
 * 配置编译环境和线上环境之间的切换
 *
 * baseUrl: 域名地址
 * routerMode: 路由模式
 * imgBaseUrl: 图片所在域名地址
 *
 */


let baseUrl = 'http://moapp.fosun.com/';
let basePdfUrl = 'http://moapp.fosun.com/m/yellow_pages/statics/';



if (process.env.NODE_ENV == 'development') {//开发
    baseUrl = 'http://10.160.144.230:8080/';
    baseUrl = 'http://moapp.fosun.com/';
    // basePdfUrl = 'http://apptest.fosun.com/m/yellow_pages/statics/';
} else if (process.env.NODE_ENV == 'production') {//生产
    baseUrl = 'http://moapp.fosun.com/';
    basePdfUrl = 'http://moapp.fosun.com/m/yellow_pages/statics/';
    // basePdfUrl = 'http://apptest.fosun.com/m/yellow_pages/statics/';
}

export {
    baseUrl,
    basePdfUrl
}