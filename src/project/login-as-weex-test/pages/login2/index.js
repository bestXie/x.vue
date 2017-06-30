/**
 * Created by bestxie on 2017/3/31.
 */
// import sprDialog from '../../../../components/sprDialog/sprDialog.vue'
require('./index.less');
import {
    ajaxBaseUrl,
    casBaseUrl
} from '../../config/env';
let indexVue = new sprWeb({
    data() {
        return {

        }
    },
    mounted() {
        this.init();
    },
    methods: {
        testClick(){
            this.$router.push('login3');
        }
    },
});
export default  indexVue;