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

if (process.env.LOCAL_ROOT == 'development') {
    // baseUrl = 'http://ouat.fosun.com'
}
export {
    baseUrl
}