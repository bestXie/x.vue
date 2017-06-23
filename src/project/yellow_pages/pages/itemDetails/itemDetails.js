/**
 * Created by bestxie on 2017/3/31.
 */
"use strict";
let itemDetails = {
    props: ['resolve'],
    data: function () {
        return {
            itemDetails: this.resolve
        }
    },
    mounted: function () {
    },
    methods: {
        cancel: function () {
            this.itemDetails.isShow = false;
        }
    }
}

export default itemDetails;