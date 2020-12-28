<template>
    <div id="app" class="fcc app800">
        <div class="row mt-3 fsc p-2">
            <div class="col-3 mb-3 flag"
                 v-for="(value, key) in world_data.countries" :key="key"
                 @click="selected.location.country_id = value.id">
                <el-image
                        style=""
                        :src="value.flag_url"
                        fit="cover"
                        class="flag-img">
                </el-image>
                <div class="fbc w-100 m-0">
                    <h5 class="text-secondary m-0">{{ value.nativeName }}</h5>
                    <i v-if="selected.location.country_id == value.id" class="el-icon-circle-check text-success"></i>
                </div>
                <span class="text-disabled">{{ value.name }}</span>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "CountrySelect",
        props: {
            selected: Object,
            world_data: Object
        },
        data() {
            return {
                page_now: 1
            }
        }
    }
</script>

<style scoped>
    .flag-img {
        object-fit: cover;
        border-radius: 5px;
        border: .1px rgba(0, 0, 0, .1) solid;
        width: 100%;
        height: 120px;
        cursor: pointer;
    }
    .flag {
        cursor: pointer;
        border-radius: 15px;
        padding: 15px;
        box-shadow: unset;
        transition: .2s ease-in-out;
    }
    .flag:hover {
        box-shadow: 0px 0px 10px 0px rgba(221, 221, 221, 0.9);
    }
    .row {
        max-height: 500px;
        overflow-x: unset;
        overflow-y: auto;
    }
</style>