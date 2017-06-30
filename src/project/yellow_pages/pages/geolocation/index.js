/**
 * Created by bestxie on 2017/3/31.
 */
"use strict";
let itemDetails = {
    props: ['propData'],
    data: function () {
        return {
        }
    },
    mounted: function () {
    },
    methods: {
        starClick(data){
            this.$emit('starClick',data)
        }
    }
}

export default itemDetails;