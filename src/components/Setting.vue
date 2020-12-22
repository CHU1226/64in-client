<template>
    <div id="app">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <h1 style="margin-top: 90px;"><strong>Setting</strong></h1>
                    <el-table :data="setting_items"
                              style="width: 100%;">
                        <el-table-column width="35">
                            <template slot-scope="scope">
                                <i v-bind:style="{background: scope.row.color}" :class="scope.row.icon"></i>
                            </template>
                        </el-table-column>
                        <el-table-column prop="title">
                        </el-table-column>
                    </el-table>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Setting",
        data() {
            return {
                setting_items: [
                    {
                        title: "帳戶資料設定",
                        icon: "el-icon-s-operation",
                        color: "#409EFF"
                    },
                    {
                        title: "帳戶安全",
                        icon: "el-icon-lock",
                        color: "#F56C6C"
                    },
                    {
                        title: "所在地",
                        icon: "el-icon-location",
                        color: "#E6A23C"
                    },
                    {
                        title: "健康",
                        icon: "el-icon-first-aid-kit",
                        color: "#fd7e14"
                    },
                    {
                        title: "通知設定",
                        icon: "el-icon-message-solid",
                        color: "#0d6efd"
                    },
                    {
                        title: "拉黑的使用者",
                        icon: "el-icon-remove",
                        color: "#20c997"
                    },
                    {
                        title: "錯誤報告",
                        icon: "el-icon-warning",
                        color: "#d63384"
                    },
                    {
                        title: "關於",
                        icon: "el-icon-info",
                        color: "#495057"
                    }
                ]
            }
        }
    }
</script>

<style scoped>
    i {
        font-size: 20px;
        color: white;
        padding: 2.5px;
        border-radius: 5px;
    }
    thead {
        display: none;
    }
</style>