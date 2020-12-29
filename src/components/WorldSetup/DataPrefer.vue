<template>
    <div id="app" class="fcc app800 p-5 pt-3 mb-0 pb-0">
        <div class="container">
            <div class="row">
                <div class="col-6" @click="selected.prefer.data_type = 0; selected.prefer.notification = []">
                    <div class="card fcc p-3">
                        <img class="w-75 mb-2" :src="require('../../assets/code.png')" alt="">
                        <h3 class="text-secondary mt-2">
                            <strong>API</strong>
                        </h3>
                        <p class="text-disabled">recommend for developer</p>
                        <el-button v-if="selected.prefer.data_type == 0" class="mt-2 btn40px" type="success" icon="el-icon-check" circle></el-button>
                        <el-button v-if="selected.prefer.data_type != 0" class="mt-2 btn40px" circle></el-button>
                    </div>
                </div>
                <div class="col-6" @click="selected.prefer.data_type = 1; selected.prefer.notification = []">
                    <div class="card fcc p-3">
                        <img class="w-75 mb-2" :src="require('../../assets/control.png')" alt="">
                        <h3 class="text-secondary mt-2">
                            <strong>GUI</strong>
                        </h3>
                        <p class="text-disabled">recommend for all users</p>
                        <el-button v-if="selected.prefer.data_type == 1" class="mt-2 btn40px" type="success" icon="el-icon-check" circle></el-button>
                        <el-button v-if="selected.prefer.data_type != 1" class="mt-2 btn40px" circle></el-button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "DataPrefer",
        data() {
            return {

            }
        },
        props: {
            selected: Object,
            world_data: Object
        }
    }
</script>

<style scoped>
    .card {
        border-radius: 15px;
        cursor: pointer;
        user-select: none;
    }
    .btn40px {
        width: 40px;
        height: 40px;
        outline: none;
    }

</style>