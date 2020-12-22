<template>
    <div id="app">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="mt-5"></div>
                    <div class="mt-5"></div>
                    <h1 class="mt-5"><strong>Today</strong></h1>
                    <hr>
                    <div class="scroll_card">
                        <div class="card"
                             v-for="(data, index) in news"
                             :key="index"
                             v-bind:style="{background: `url(${data.background})`}">
                            <div class="card_description apple-blur" v-bind:style="{background: data.background_color}">
                                <span class="badge-outline mt-3" v-bind:style="{
                                    border: `.1px ${data.color} solid`,
                                    color: data.color
                                }"><i class="el-icon-location mr-1"></i> {{ data.point }}</span>
                                <h3 v-bind:style="{color: data.color}" class="mt-1 mb-1">
                                    {{ data.title }}
                                </h3>
                                <p v-bind:style="{color: data.color}" class="mt-0 mb-1">
                                    {{ data.description }}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-12">
                    <h2 class="mt-3"><strong>Charts</strong></h2>
                    <img class="chart" :src="image_prefix + 'charts.png'" alt="">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Index",
        data() {
            return {
                news: [],
                hot_posts: [],
                charts: [],
                image_prefix: "http://localhost/covid-20/img/"
            }
        },
        created() {
            // 模擬頁面一載入到API抓資料
            let data = this.fetch_today()
            this.news = data.news;
        },
        methods: {
            fetch_today() {
                return {
                    news: [
                        {
                            title: "COVID-20",
                            description: "109技藝競賽網頁設計第一名",
                            point: "lch1226",
                            background: this.image_prefix  + "home1.jpg",
                            created_at: "2020-12-12 12:12:12",
                            color: "#FFF",
                            background_color: "rgba(0, 0, 0, .4)",
                            post_id: 1
                        },
                        {
                            title: "桌面換這張金手第一",
                            description: "109技藝競賽網頁設計第一名",
                            point: "big push lch",
                            background: this.image_prefix  + "home4.jpg",
                            created_at: "2020-12-12 12:12:12",
                            color: "#FFF",
                            background_color: "rgba(0, 0, 0, .4)",
                            post_id: 2
                        },
                        {
                            title: "口罩地圖",
                            description: "唐鳳開發品質保證",
                            point: "lch1226",
                            background: this.image_prefix  + "pd2.jpg",
                            created_at: "2020-12-12 12:12:12",
                            color: "#333",
                            post_id: 3
                        },
                        {
                            title: "研究",
                            description: "COVID相關研究",
                            point: "lch1226",
                            background: this.image_prefix  + "home2.jpg",
                            created_at: "2020-12-12 12:12:12",
                            color: "#FFF",
                            background_color: "rgba(0, 0, 0, .4)",
                            post_id: 4
                        }
                    ],
                    hot_posts: [
                        {
                            title: "COVID-20",
                            description: "109技藝競賽網頁設計第一名",
                            point: "lch1226",
                            background: this.image_prefix  + "home1.jpg",
                            created_at: "2020-12-12 12:12:12",
                            color: "#FFF",
                            background_color: "rgba(255, 255, 255, .4)"
                        },
                        {
                            title: "COVID-20",
                            description: "109技藝競賽網頁設計第一名",
                            point: "lch1226",
                            background: this.image_prefix  + "home1.jpg",
                            created_at: "2020-12-12 12:12:12",
                            color: "#FFF",
                            background_color: "rgba(255, 255, 255, .4)"
                        }
                    ]
                }
            }
        }
    }
</script>

<style scoped>
    .scroll_card {
        max-width: 100%;
        display: inline-flex;
        overflow-x: auto;
    }
    .card {
        min-width: 300px;
        min-height: 350px;
        border-radius: 30px;
        margin-right: 15px;
        background-repeat: no-repeat!important;
        background-size: cover!important;
        background-position: center!important;
        overflow: hidden;
        box-sizing: border-box;
        border: none;
    }
    .card_description {
        position: absolute;
        padding: 0 15px 10px 15px;
        bottom: 0;
        border-radius: 30px 30px 0 0;
        width: 100%;
    }
    .badge-outline {
        display: inline-block;
        padding: .35em .65em;
        font-size: .75em;
        font-weight: 700;
        line-height: 1;
        color: #fff;
        text-align: center;
        white-space: nowrap;
        vertical-align: baseline;
        border-radius: .75rem;
    }
    .chart {
        width: 100%;
        border-radius: 15px;
        border: .1px rgba(0, 0, 0, .1) solid;
    }
</style>