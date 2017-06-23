export default{
    state: {
        count: 0,
        loadingShow: false,
        direction: 'forward',
        confirm: {
            show: false,
            data: {
                title: '',
                list: '',
                cancel: '取消'
            },
            onConfirm: '',
            onCancel: '',
            onHide: ''
        }
    },
    getters: {
        loadingShow: state => state.loadingShow,
        confirm: state => state.confirm,
    },
    mutations: {
        increment (state) {
            state.count++
        },
        balance (state) {

        },
        updateLoadingStatus (state, status) {
            state.loadingShow = status
        },
        confirm(state, status){
            state.confirm = status;
        }
    }
}
