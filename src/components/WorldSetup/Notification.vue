<template>
    <div id="app" class="app800 fac">
        <div class="row mt-3">
            <div class="col-12 fcc">
                <i class="el-icon-alarm-clock"></i>
            </div>
            <div class="col-12 fcc flex-wrap">
                <el-checkbox
                        :indeterminate="isIndeterminate"
                        v-model="checkAll"
                        @change="handleCheckAllChange"
                        class="fcc d-flex mb-3 mt-5 w-100">
                    全選
                </el-checkbox>
                <el-checkbox-group
                        v-model="selected.prefer.notification"
                        @change="handleCheckedCitiesChange">
                    <el-checkbox
                            v-for="[key, value] in (selected.prefer.data_type == 1 ? Object.entries(options.gui) : Object.entries(options.api))"
                            :label="key"
                            :key="key">
                        {{ value.name }}
                    </el-checkbox>
                </el-checkbox-group>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Notification",
        data() {
            return {
                options: {
                    gui: {
                        countries_news: {
                            name: "您關注的國家疫情新聞",
                            checked: false
                        },
                        local_news: {
                            name: "您所在的地區疫情新聞",
                            checked: true
                        },
                        following_post: {
                            name: "您所關注的用戶近期所發佈的貼文",
                            checked: true
                        },
                        hot_post: {
                            name: "熱門貼文",
                            checked: false
                        },
                        post_commend: {
                            name: "貼文留言",
                            checked: true
                        }
                    },
                    api: {
                        change: {
                            name: "API變更",
                            checked: true
                        },
                        new_function: {
                            name: "API新功能",
                            checked: true
                        }
                    }
                },
                checkAll: false,
                isIndeterminate: true,
            }
        },
        props: {
            selected: Object,
            world_data: Object
        },
        methods: {
            handleCheckAllChange(val) {
                this.checkedChartType = val ? (this.selected.prefer.data_type == 1 ? Object.entries(this.options.gui) : Object.entries(this.options.api)) : [];
                this.isIndeterminate = false;
            },
            handleCheckedCitiesChange(value) {
                let checkedCount = value.length;
                let fuck_hard = (this.selected.prefer.data_type == 1 ? Object.entries(this.options.gui) : Object.entries(this.options.api));
                this.checkAll =
                    checkedCount === fuck_hard.length;
                this.isIndeterminate = checkedCount > 0 && checkedCount < fuck_hard.length;
            }
        }
    }
</script>

<style scoped>
    .el-icon-alarm-clock {
        font-size: 233px;
        color: #4d5767;
    }
</style>