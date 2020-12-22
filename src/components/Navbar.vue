<template>
    <div id="app">
        <div class="container fixed-bottom apple-blur">
            <div class="row navbar-inner">
                <div class="col-20 fcc">
                    <i class="el-icon-files"></i>
                </div>
                <div class="col-20 fcc">
                    <i class="el-icon-search"></i>
                </div>
                <div class="col-20 fcc">
                    <el-avatar v-if="user_profile.avatar != undefined" :src="user_profile.avatar"></el-avatar>
                    <el-avatar v-if="user_profile.avatar == undefined" icon="el-icon-user-solid"></el-avatar>
                </div>
                <div class="col-20 fcc">
                    <i class="el-icon-upload"></i>
                </div>
                <div class="col-20 fcc">
                    <i class="el-icon-setting"></i>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Navbar",
        props: {
            user_profile: Object
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
</style>