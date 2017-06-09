
/**
 *cad登录用户认证
 */
export const getCasCheck = (email) => fetch('https://ui.ptlogin2.qq.com/cgi-bin/report', {email:email});

/**
 * 确认订单
 */
export const checkout = (geohash, entities, shopid) => fetch('/v1/carts/checkout', {
	come_from: "web",
	geohash,
	entities,
	restaurant_id: shopid,
}, 'POST');

