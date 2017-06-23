<template>
    <div class="itemDetails-wrapper">

        <div class="title"><p>{{itemDetails.data.department||''}}</p>

            <div class="cancel" @click="cancel"></div>
        </div>
        <div class="itemDetails-box">
            <div class="itemDetails-c">
                <div class="item"  v-if="itemDetails.data.typeName">
                    <div class="item-rol item-icon"></div>
                    <div class="item-rol item-l">服务类型：</div>
                    <div class="item-rol item-r">{{itemDetails.data.typeName}}</div>
                </div>
                <div class="item" v-if="itemDetails.data.name">
                    <div class="item-rol item-icon"></div>
                    <div class="item-rol item-l">服务名称：</div>
                    <div class="item-rol item-r">{{itemDetails.data.name}}</div>
                </div>
                <div class="item" v-if="itemDetails.data.serviceDescribe">
                    <div class="item-rol item-icon"></div>
                    <div class="item-rol item-l">服务描述：</div>
                    <div class="item-rol item-r">{{itemDetails.data.serviceDescribe}}</div>
                </div>
                <div class="item" v-if="itemDetails.data.principal">
                    <div class="item-rol item-icon"></div>
                    <div class="item-rol item-l">负责人：</div>
                    <div class="item-rol item-r">{{itemDetails.data.principal}}</div>
                </div>

            </div>
            <div class="itemDetails-b">
                <a class="itemDetails-box" v-if="itemDetails.data.principalMobile" :href="'tel:'+itemDetails.data.principalMobile" >
                        <span></span>
                        <span>{{itemDetails.data.principalMobile}}</span>
                </a>
                <a class="itemDetails-box" v-if="itemDetails.data.principalEmail"  :href="'mailto:'+itemDetails.data.principalEmail">
                        <span></span>
                        <span>{{itemDetails.data.principalEmail}}</span>
                </a>
            </div>
        </div>
    </div>
</template>

<script>
    import itemDetails from './itemDetails'
    export default itemDetails
</script>