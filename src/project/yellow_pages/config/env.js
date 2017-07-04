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



if (process.env.NODE_ENV == 'development') {//开发
    baseUrl = 'http://10.160.144.183:8080/';
    baseUrl = 'http://121.43.33.60:8090/';
    baseUrl = 'http://10.160.144.230:8080/';
    baseUrl = 'http://moapp.fosun.com/';
} else if (process.env.NODE_ENV == 'production') {//生产
    baseUrl = 'http://121.43.33.60:8090/';
    baseUrl = 'http://10.160.144.230:8080/';
    baseUrl = 'http://moapp.fosun.com/';
}


export {
    baseUrl
}