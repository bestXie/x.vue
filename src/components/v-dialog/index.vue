/**
* Created by bestXie on 2017/6/16.
*/
<template>
    <transition name="modal" v-if="dialog.isShow" >
        <div class="modal-mask" >
            <div class="modal-mask-bg"  @click="hiddenDialog"></div>
            <div class="modal-wrapper">
                <div class="modal-container">

                    <div class="modal-header">
                        <slot name="header">
                        </slot>
                    </div>

                    <div class="modal-body">
                        <slot name="body" :dialog="dialog">
                        </slot>
                    </div>

                    <div class="modal-footer">
                        <slot name="footer">
                          <!--  <button class="modal-default-button" @click="$emit('close')">
                                OK
                            </button>-->
                        </slot>
                    </div>
                </div>
            </div>
        </div>
    </transition>
</template>
<script>
    export default {
        props: ['dialog'],
        data: function () {
            return {

            }
        },
        mounted: function () {
//            console.log(this.dialog);
        },
        methods: {
            hiddenDialog: function () {
                this.dialog.isShow = false;
            },
            confirmData: function () {
                this.dialog.success(this.dialog.data)
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
    .modal-mask-bg{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, .5);
        transition: opacity .3s ease;
    }
    .modal-wrapper {
        display: table-cell;
        vertical-align: middle;
    }

    .modal-container {
        min-width: 5rem;
        min-height: 2rem;
        /*background-color: #fff;*/
        border-radius: 2px;
        /*box-shadow: 0 2px 8px rgba(0, 0, 0, .33);*/
        transition: all .3s ease;
        font-family: Helvetica, Arial, sans-serif;
    }

    .modal-header h3 {
        margin-top: 0;
        color: #42b983;
    }

    .modal-body {
        /*margin: 20px 0;*/
    }

    .modal-default-button {
        float: right;
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