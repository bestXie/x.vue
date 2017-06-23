<template>
    <div class="modify-wrapper" @click="starClick(index)">
        {{propData}}
        <div class="modify-box">
            <div>编辑内容</div>
            <div>上移</div>
            <div>下移</div>
            <div>更改模板</div>
            <div>删除</div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'modifyBar',
        data: function () {
            return {

            }
        },
        props: {
            propData: {default: ''},
            index: {default: ''},
        },
        computed: {},
        mounted: function () {
            console.log(this.propData)
            console.log(12345)
        },
        methods: {
            starClick(index){
                console.log(index)
                this.$emit('showModify',index)
            }
        },
        components: {}
    }
</script>


<style scoped>


    .modify-wrapper {
        position: absolute;
        width: 100%;
        height: 100%;
        background: #ccc;
        top: 0;
        left: 0;
        opacity: .9;
    }
    .modify-box{
        width: 100%;
        height: 100px;
        background: red;
        position: absolute;
        bottom: 0;
        left: 0;
        display:flex;
    }
    .modify-box div {
        flex:1;
    }
</style>