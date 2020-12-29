<template>
    <div id="app">
        <div class="container mt-5 container960">
            <div class="row">
                <!--       page title        -->
                <div class="col-2"></div>
                <div class="col-8 text-center">
                    <h1 style="color: #777;">{{ state_list[now_state.now] }}</h1>
                    <p class="text-secondary">In just a few steps, you can register and set up your COVID-19 Setting</p>
                </div>
                <div class="col-2"></div>
                <!--       world map         -->
                <div class="col-12 fcc" v-if="now_state.now == 0">
                    <img class="w-75" :src="require('../assets/Worldmap-blank.svg')" alt="">
                </div>
            </div>
            <IslandSelect v-if="now_state.now == 0"
                          :selected="selected"
                          :world_data="world_data">
            </IslandSelect>
            <CountrySelect v-if="now_state.now == 1"
                           :selected="selected"
                           :world_data="world_data">
            </CountrySelect>
            <DataPrefer v-if="now_state.now == 2"
                           :selected="selected"
                           :world_data="world_data">
            </DataPrefer>
            <ChartPrefer v-if="now_state.now == 3"
                        :selected="selected"
                        :world_data="world_data">
            </ChartPrefer>
            <Notification v-if="now_state.now == 4"
                         :selected="selected"
                         :world_data="world_data">
            </Notification>
            <Privacy v-if="now_state.now == 5"
                          :selected="selected"
                          :world_data="world_data">
            </Privacy>
            <StepButton
                    :now_state="now_state"
                    :state_list="state_list">
            </StepButton>
        </div>
    </div>
</template>

<script>
    import StepButton from "./WorldSetup/StepButton";
    import IslandSelect from "./WorldSetup/IslandSelect";
    import CountrySelect from "./WorldSetup/CountrySelect";
    import DataPrefer from "./WorldSetup/DataPrefer";
    import ChartPrefer from "./WorldSetup/ChartPrefer";
    import Notification from "./WorldSetup/Notification";
    import Privacy from "./WorldSetup/Privacy";
    export default {
        name: "WorldChart",
        data() {
            return {
                world_data: {
                    islands: [],
                    countries: []
                },
                selected: {
                    location: {
                        island: null,
                        sub_island: null,
                        island_id: null,
                        country: null,
                        country_id: null
                    },
                    date_from: null,
                    date_end: null,
                    prefer: {
                        data_type: 1,
                        chart_type: [],
                        notification: [],
                        countries: []
                    }
                },
                state_list: [
                    "Welcome",
                    "Country",
                    "Data Prefer",
                    "Chart Prefer",
                    "Notification",
                    "Privacy"
                ],
                now_state: {
                    back_disabled: true,
                    next_disabled: true,
                    now: 0
                }
            }
        },
        components: {
            StepButton,
            IslandSelect,
            CountrySelect,
            DataPrefer,
            ChartPrefer,
            Notification,
            Privacy
        },
        created() {
            this.getIslands();
        },
        methods: {
            getIslands() {
                this.axios
                    .get(this.$store.state.api.url + this.$store.state.api.version + "covid-19/islands")
                    .then(response => this.world_data.islands = response.data.data);
            },
            getCountries() {
                this.axios
                    .get(this.$store.state.api.url + this.$store.state.api.version + "covid-19/countries/" + this.selected.location.island_id)
                    .then(response => this.world_data.countries = response.data.data);
            },
            setCountry(country_id) {

            },
            setIsland(island_id) {

            },
            stepButtonUpdate() {
                switch (this.now_state.now) {
                    case 0:
                        this.now_state.back_disabled = true;
                        this.now_state.next_disabled = this.selected.location.island_id == null;
                        if(! this.now_state.next_disabled)
                            this.getCountries();
                        break;
                    case 1:
                        this.now_state.back_disabled = false;
                        this.now_state.next_disabled = this.selected.location.country_id == null;
                        break;
                    case 2:
                        this.now_state.back_disabled = false;
                        this.now_state.next_disabled = this.selected.prefer.data_type == null;
                }
            }
        },
        watch: {
            selected: {
                handler() {
                    this.stepButtonUpdate();
                },
                immediate: true,
                deep: true
            },
            now_state: {
                handler() {
                    this.stepButtonUpdate();
                },
                immediate: true,
                deep: true
            }
        }
    }
</script>
<style scoped>

</style>