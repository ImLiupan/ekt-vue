<template>
    <div>
        <div class="list-wrapper sp text-right">
            <ul>
                <li><label>姓名</label>XXXXX</li>
            </ul>
            <ul>
                <li><label>身份证号</label>34011119900708888x</li>
            </ul>
            <ul>
                <li class="bd-b-no"><label>手机号</label>13696548888</li>
            </ul>
        </div>
        <div class="btn-wrapper">
            <a href="javascript:;" @click="logout" class="btn">退出登录</a>
        </div>
    </div>
</template>

<script>
    import {
        mapMutations
    } from 'vuex'

    export default {
        name: '',
        data() {
            return {

            }
        },
        methods:{
            logout(){
                this.set_logout();
                this.$router.replace('/login');
            },
            ...mapMutations([
                'set_logout'
            ])
        }
    }
</script>

<style scoped>

</style>
