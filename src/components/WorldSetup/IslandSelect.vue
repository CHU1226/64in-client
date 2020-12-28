<template>
    <div id="app" class="app800">
        <div class="row mt-3">
            <!--       all island select         -->
            <div class="col-20 br"
                 v-if="selected.location.island == null || (selected.location.island == key && selected.location.island != null)"
                 v-for="[key, value] in (Object.entries(world_data.islands))">
                <h3 class="text-center text-select" @click="selected.location.island = key">{{ key }}</h3>
            </div>
            <!--       in this island's sub-islands         -->
            <div class="col-70 fac br pl-2 pr-2" v-if="selected.location.island != null">
                <div class="overflow-auto ">
                    <el-radio
                            v-for="(value, index) in world_data.islands[selected.location.island]"
                            v-model="selected.location.island_id"
                            :value="(value['id'])"
                            :label="value['id']"
                    >
                        {{ value.sub_name }}
                    </el-radio>
                </div>
            </div>
            <!--        edit island button        -->
            <div class="col-10pa fec" v-if="selected.location.island != null">
                <el-button @click="selected.location.island_id = null; selected.location.island = null" type="search" icon="el-icon-edit" circle></el-button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "IslandSelect",
        props: {
            selected: Object,
            world_data: Object
        }
    }
</script>

<style scoped>
    .br {
        border-right: .1px rgba(0, 0, 0, .1) solid;
        cursor: pointer;
    }
    .br:last-child {
        border: unset!important;
    }
    .text-select {
        color: #777;
        transition: ease-in-out .2s;
    }
    .text-select:hover {
        color: #409EFF;
    }
</style>