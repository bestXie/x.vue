/**
 * Created by bestxie on 2017/6/6.
 */

import {
    baseUrl
} from '../config/env'

import fetch from '../config/fetch';

/**
 *get_yellow_pages_list
 */
export const get_yellow_pages_list = (query) => fetch({
    url: 'http://moapp.fosun.com/' + 'yellowPage/api/serviceType/list',
    method: 'get',
    params: query
});

/**
 *get_district_list
 */
export const get_district_list = (query) => fetch({
    url: baseUrl + 'yellowPage/api/district/list',
    method: 'get',
    params: query
});

/**
 *get_serviceType_listOfDist
 */
export const get_serviceType_listOfDist = (query) => fetch({
    url: baseUrl + 'yellowPage/api/serviceType/listOfDist',
    method: 'get',
    params: query
});

/**
 *get_yellow_pages_search
 */
export const get_yellow_pages_search = (query) => fetch({
    url:  baseUrl +  'yellowPage/api/service/search',
    method: 'get',
    params: query
});

/**
 *get_coordinate_convert
 */
export const get_coordinate_convert = (query) => fetch({
    url: 'http://restapi.amap.com/v3/assistant/coordinate/convert',
    method: 'get',
    params: query
});



