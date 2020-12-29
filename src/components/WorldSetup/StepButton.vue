<template>
    <div id="app">
        <div class="row mt-5 fac">
            <div class="col-4"></div>
            <div class="col-4 fac">
                <div class="row">
                    <div class="col-6 fcc flex-wrap">
                        <el-button
                                type="search"
                                icon="el-icon-back"
                                :disabled="now_state.now <= 0 || now_state.back_disabled"
                                @click="now_state.now -= 1"
                                circle>
                        </el-button>
                        <p class="w-100 text-center mt-2"
                           v-bind:class="[now_state.back_disabled ? 'text-disabled' : 'text-secondary']"
                        >
                            Back
                        </p>
                    </div>
                    <div class="col-6 fcc flex-wrap">
                        <el-button
                                type="search"
                                icon="el-icon-right"
                                :disabled="now_state.now > (state_list.length - 2) ||now_state.next_disabled"
                                @click="now_state.now += 1"
                                circle>
                        </el-button>
                        <p class="w-100 text-center mt-2"
                           v-bind:class="[now_state.back_disabled ? 'text-disabled' : 'text-secondary']">
                            Continue
                        </p>
                    </div>
                </div>
            </div>
            <div class="col-4"></div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "StepButton",
        props: {
            now_state: Object,
            state_list: Array
        }
    }
</script>

<style scoped>

</style>