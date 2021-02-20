<template>
    <div>
        <h3>Demo mixin outsize app</h3>
        <button class="btn btn-primary btn-block" @click="phones.unshift('huawei')">Thêm phone (huawei)</button>
        <input type="text" class="form-control mt-3 mb-3" v-model="keyword" placeholder="Lọc phone">
        <ul class="list-group">
            <li class="list-group-item" v-for="(phone, index) in filterPhone" :key="index">{{ phone }}</li>
        </ul>
        <hr>
        <h3>Filter by global Mixin (main.js)</h3>
        <input
            type="text"
            class="form-control mt-3 mb-3"
            v-model="keywordFiltCar"
            placeholder="Lọc car"
        />
        <ul class="list-group">
            <li class="list-group-item" v-for="(car, index) in filterCar" :key="index">{{ car }}</li>
        </ul>
    </div>
</template>
<script>
import { filterPhoneMixin } from '../../../filterPhoneMixin.js'
export default {
    mixins: [filterPhoneMixin]
}
</script>