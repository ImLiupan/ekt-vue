<template>
    <div class="login-wrapper">
        <div class="logos">
            <span class="logo"></span>
        </div>
        <ul class="tab">
            <li @click="changeTab(0)" :class="{ active: current_tab === 0 }">登录
                <i class="ico-arrow"></i>
            </li>
            <li @click="changeTab(1)" :class="{ active: current_tab === 1 }">注册
                <i class="ico-arrow"></i>
            </li>
        </ul>
        <div class="tab-content" v-show="current_tab === 0">
            <div class="common-pd">
                <div class="form-control">
                    <i class="ico ico-iphone"></i>
                    <input type="tel" placeholder="请输入手机号" maxlength="11" v-model.trim="login_param.iphone">
                    <span class="close"></span>
                </div>

                <send-valid-code class="form-control form-code" has-close="close" has-ico="ico ico-code" :api="api_cryptcode" :iphone="login_param.iphone" v-model.trim="login_param.code"></send-valid-code>

                <div class="form-btn">
                    <a href="javascript:;" @click="login" class="btn btn-submit" :class="{disabled: is_disabled_login}">登录</a>
                </div>
                <p class="msg">
                    注册/登录即代表同意
                    <a href="agreement.html">《E客通用户协议》</a>
                </p>
            </div>
        </div>
        <div class="tab-content" v-show="current_tab === 1">
            <div class="common-pd">
                <div class="form-control form-label">
                    <label class="lab">手机号</label>
                    <input type="tel" placeholder="请输入手机号" maxlength="11" v-model.trim="register_param.iphone">
                    <span class="close"></span>
                </div>
                <send-valid-code class="form-control form-code form-label" has-close="close" has-lab="lab" :api="api_cryptcode" :iphone="register_param.iphone" v-model.trim="register_param.code"></send-valid-code>
                <div class="form-control form-label">
                    <label class="lab">真实姓名</label>
                    <input type="text" placeholder="请输入您的真实姓名" v-model.trim="register_param.name">
                    <span class="close"></span>
                </div>
                <div class="form-control form-label form-radio">
                    <label class="lab">性别</label>
                    <label class="radio">
        						<input type="radio" name="register_sex" value="1" v-model="register_param.sex">
        						<span>
        							<i class="ico ico-true"></i>
        						</span> 男
        					</label>
                    <label class="radio">
        						<input type="radio" name="register_sex" value="2" v-model="register_param.sex">
        						<span>
        							<i class="ico ico-true"></i>
        						</span> 女
        					</label>
                </div>
                <div class="form-control form-label">
                    <label class="lab">身份证号</label>
                    <input type="text" placeholder="请输入您的身份证号" v-model.trim="register_param.idcard">
                    <span class="close"></span>
                </div>
                <div class="form-btn">
                    <a href="javascript:;" @click="register" class="btn btn-submit" :class="{disabled: is_disabled_register}">注册</a>
                </div>
                <p class="msg">注册成功自动绑定您当前微信</p>
            </div>
        </div>
    </div>
</template>

<script>
    import {
        api_cryptcode,
        api_login,
        api_register
    } from '@/api'
    import sendValidCode from '@/components/common/sendValidCode.vue'
    import {
        validIphone,
        validUserName,
        validIdCard
    } from '@/common/validate'
    import {
        mapMutations
    } from 'vuex'

    export default {
        name: 'Login',
        data() {
            return {
                current_tab: 0,
                login_param: {
                    iphone: '',
                    code: ''
                },
                register_param: {
                    iphone: '',
                    code: '',
                    name: '',
                    sex: '',
                    idcard: ''
                },
                api_cryptcode: api_cryptcode
            }
        },
        /*
        	临时做法：处理body背景颜色
         */
        beforeRouteEnter(to, from, next) {
            document.body.setAttribute("class", "");
            next();
        },
        beforeRouteLeave(to, from, next) {
            document.body.setAttribute("class", "bg-f0f0f0");
            next();
        },
        methods: {
            changeTab(val) {
                this.current_tab = val;
            },
            login() {
                if (this.is_disabled_login) return;

                if (!validIphone(this.login_param.iphone)) {
                    this.toast('请输入正确的手机号');
                    return
                }
                api_login(this.login_param).then((res) => {
                    $toast.show(res.msg, 1500).then(() => {
                        this.set_login(res.data.token);
                        let redirect = decodeURIComponent(this.$route.query.redirect || '/');
                        this.$router.replace({
                            path: redirect
                        })
                    })
                })
            },
            register() {
                if (this.is_disabled_register) return;

                if (!validIphone(this.register_param.iphone)) {
                    this.toast('请输入正确的手机号');
                    return
                }
                if (!validUserName(this.register_param.name)) {
                    this.toast('请输入您的真实姓名');
                    return
                }
                if (!validIdCard(this.register_param.idcard)) {
                    this.toast('请输入正确的身份证号');
                    return
                }
                api_register(this.register_param).then((res) => {
                    $toast.show(res.msg, 1500).then(() => {
                        this.set_login(res.data.token);
                        let redirect = decodeURIComponent(this.$route.query.redirect || '/');
                        this.$router.replace({
                            path: redirect
                        })
                    })
                })
            },
            toast(str) {
                $toast.show(str, 1500)
            },
            ...mapMutations([
                'set_login'
            ])
        },
        components: {
            sendValidCode
        },
        computed: {
            is_disabled_login() {
                return !this.login_param.iphone || !this.login_param.code
            },
            is_disabled_register() {
                return !this.register_param.iphone || !this.register_param.code || !this.register_param.name || !this.register_param.sex || !this.register_param.idcard
            }
        }
    }
</script>

<style scope>
    .login-wrapper .tab-content {
        display: block
    }
</style>
