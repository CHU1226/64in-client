<template>
    <div id="app" class="fcc app800">
        <div class="row mt-3">
            <div class="col-12 fcc flex-wrap">
                <el-image :src="require('../../assets/bar-chart-and-polyline.svg')" class="col-4"></el-image>
                <el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange" class="fcc d-flex mb-3 mt-5 w-100">
                    全選
                </el-checkbox>
                <el-checkbox-group v-model="checkedChartType" @change="handleCheckedCitiesChange">
                    <el-checkbox v-for="city in chart_type" :label="city" :key="city">{{city}}</el-checkbox>
                </el-checkbox-group>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ChartPrefer",
        data() {
            return {
                chart_type: [
                    "圓餅圖",
                    "長條圖(直)",
                    "長條圖(橫)",
                    "雷達圖",
                    "折線圖",
                ],
                checkAll: false,
                checkedChartType: [],
                isIndeterminate: true,
                correspondType: [
                    "Pie",
                    "Bar",
                    "HorizontalBar",
                    "Radar",
                    "Line"
                ]
            }
        },
        props: {
            selected: Object,
            world_data: Object
        },
        methods: {
            handleCheckAllChange(val) {
                this.checkedChartType = val ? this.chart_type : [];
                this.isIndeterminate = false;
            },
            handleCheckedCitiesChange(value) {
                let checkedCount = value.length;
                this.checkAll = checkedCount === this.chart_type.length;
                this.isIndeterminate = checkedCount > 0 && checkedCount < this.chart_type.length;
            }
        },
        created() {
            this.selected.prefer.chart_type.forEach((e) => {
                this.checkedChartType.push(this.chart_type[this.correspondType.indexOf(e)]);
            });
        },
        watch: {
            checkedChartType: {
                handler() {
                    this.checkedChartType.forEach((e) => {
                        if(this.selected.prefer.chart_type.indexOf(this.correspondType[this.chart_type.indexOf(e)]) == -1)
                            this.selected.prefer.chart_type.push(this.correspondType[this.chart_type.indexOf(e)]);
                    });
                },
                immediate: true,
                deep: true
            },
        }
    }
</script>

<style scoped>

</style>