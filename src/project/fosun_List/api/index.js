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
    url: baseUrl + 'yellowPage/api/serviceType/list',
    method: 'get',
    params: query
});

/**
 *get_yellowPage_service_search
 */
export const get_yellowPage_service_search = (query) => fetch({
    url: baseUrl + 'yellowPage/api/service/search',
    method: 'get',
    params: query
});

