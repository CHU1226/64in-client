<template>
    <div id="app">
        <div class="container fixed-bottom apple-blur">
            <div class="row navbar-inner">
                <router-link to="/" class="col-20 fcc">
                    <i class="el-icon-files"></i>
                </router-link>
                <router-link to="/search" class="col-20 fcc">
                    <i class="el-icon-search"></i>
                </router-link>
                <router-link to="/profile" class="col-20 fcc">
                    <el-avatar v-if="user_profile.avatar != undefined" :src="user_profile.avatar"></el-avatar>
                    <el-avatar v-if="user_profile.avatar == undefined" icon="el-icon-user-solid"></el-avatar>
                </router-link>
                <router-link to="/post/new" class="col-20 fcc">
                    <i class="el-icon-upload"></i>
                </router-link>
                <router-link to="/setting" class="col-20 fcc">
                    <i class="el-icon-setting"></i>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Navbar",
        props: {
            user_profile: Object
        },
        data() {
            return {
                nav_item: []
            }
        },
        methods: {
            fetch_nav_item() {

            }
        },
        created() {

        }
    }
</script>

<style scoped>
    .navbar-inner {
        height: 60px;
        border-top: .1px rgba(0, 0, 0, .1) solid;
    }
    .navbar-inner i {
        font-size: 25px;
        color: #777;
    }
    a {
        text-decoration: none;
    }
</style>