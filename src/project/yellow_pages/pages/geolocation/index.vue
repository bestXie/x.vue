<template>
    <div class="geolocation">

        <div v-if="propData.nowCity" v-for="i in propData.geolocatioDomList" :key="i" :class="i.boxClass+'-box'">
            <div v-for="item in propData.cityDom"
                 :class="i.boxClass+'-'+i.itemClass+' '+i.itemClass+ item.classType +' '+ item.isFocus"
                 @click="starClick(item)">
                <div v-if="i.boxClass=='round'" :class="i.boxClass+' '+ item.isFocus"></div>
                <div v-if="i.boxClass=='city'" :class="i.boxClass+'-bg'"></div>
                <div v-if="i.boxClass=='city'" :class="i.boxClass+'-text'+' '+ item.isFocus"><p>
                    {{item.distName}}</p>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
    import index from './index'
    export default index
</script>