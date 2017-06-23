/**
* Created by bestXie on 2017/6/16.
*/
<template>
    <transition name="modal" v-if="confirm.show">
        <!--<div class="modal-mask" >-->
        <vMask :show="confirm.show" @maskClick="maskClick" :stylebg="'rgba(0,0,0,0.5)'">
            <!--<div class="modal-mask-bg" @click="hiddenDialog"></div>-->
            <div class="modal-wrapper">
                <div class="modal-container">
                    <div class="modal-header">
                        <slot name="header">
                            <div class="modal-default-title">
                                <h3>确定删除"公交路线"吗</h3>
                            </div>
                        </slot>
                    </div>

                    <div class="modal-body">
                        <slot name="body" :confirm="confirm">
                        </slot>
                    </div>

                    <div class="modal-footer">
                        <slot name="footer">
                            <button class="modal-default-button" @click="$emit('close')">
                                取消
                            </button>
                        </slot>
                    </div>
                </div>
            </div>
        </vMask>
        <!--</div>-->
    </transition>
</template>
<script>
    import vMask from '../mask/index.vue';

    export default {
        components: {
            vMask
        },
        props: ['confirm'],
        data: function () {
            return {
            }
        },
        mounted: function () {
//            console.log(this.vDialog);
        },
        methods: {
            maskClick: function () {
                this.confirm.isShow = false;
            },
            confirmData: function () {
                this.confirm.success(this.confirm.data)
            }
        },
    };
</script>

<style lang="less">
    .modal-mask {
        position: fixed;
        z-index: 9998;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        display: table;
        transition: opacity .3s ease;
    }

    .modal-wrapper {
        display: table-cell;
        vertical-align: bottom;
    }

    .modal-default-title {
        width: 100%;
        height: 120px;
        background: #f2f2f2;
        text-align: center;
        display: table;
    }

    .modal-default-title h3 {
        font-size: 26px;
        color: #8f8e94;
        display: table-cell;
        vertical-align: middle;
    }

    .modal-container {
        min-width: 5rem;
        min-height: .1rem;
        /*background-color: #fff;*/
        border-radius: 2px;
        /*box-shadow: 0 2px 8px rgba(0, 0, 0, .33);*/
        transition: all .3s ease;
        font-family: Helvetica, Arial, sans-serif;
    }

    .modal-body {
        /*margin: 20px 0;*/
    }

    .modal-default-button {
        margin-top: 20px;
        height: 90px;
        width: 100%;
        background: #fff;
        border: 0;
        font-size: 28px;
        color: #4a4a4a;
        text-align: center;
    }

    /*
     * The following styles are auto-applied to elements with
     * transition="modal" when their visibility is toggled
     * by Vue.js.
     *
     * You can easily play with the modal transition by editing
     * these styles.
     */

    .modal-enter {
        opacity: 0;
    }

    .modal-leave-active {
        opacity: 0;
    }

    .modal-enter .modal-container,
    .modal-leave-active .modal-container {
        -webkit-transform: scale(1.1);
        transform: scale(1.1);
    }
</style>