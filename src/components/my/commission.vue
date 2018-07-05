<template>
    <div>
        <div class="layout-fb-main">
            <div class="commission-wrapper">
                <div class="container clearfix">
                    <div class="t">
                        <div class="price">230,000.00</div>
                        <p>账户余额（元）</p>
                    </div>
                    <ul class="b">
                        <li class="li1">
                            <div class="price">
                                16500.00
                            </div>
                            <p>累计佣金</p>
                        </li>
                        <li class="li2">
                            <div class="price">
                                6500.00
                            </div>
                            <p>累计提现</p>
                        </li>
                        <li class="li3">
                            <div class="price">
                                6500.00
                            </div>
                            <p>一级佣金</p>
                        </li>
                        <li class="li4">
                            <div class="price">
                                6500.00
                            </div>
                            <p>二级佣金</p>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="stream-lists">
                <div class="title">佣金明细</div>
                <div class="content" id="streamLists">
                    <a href="">
                        <div class="l">
                            <p class="normal">神州大地会</p>
                            <p class="gray">2018-04-23 12:55</p>
                        </div>
                        <div class="r">
                            <span class="bold normal">+1500.00</span>元
                        </div>
                    </a>
                </div>
            </div>
        </div>
        <div class="layout-fb-btns fixed">
            <router-link to="/record">提现记录</router-link>
            <a href="javascript:;" @click="applyPut" class="active confirmBtnJs">申请提现</a>
        </div>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex'

    export default {
        name: '',
        data() {
            return {

            }
        },
        methods:{
            applyPut(){
                if(this.account_ide){
                    this.$router.push('/forward')
                }else{
                    this.$dialog.confirm({
                        title: '提现说明',
                        content: '完善提现账户后才能申请提现',
                        cancelText: '取消',
                        okText: '立即完善',
                        effect: 'scale'
                    }).then((res) => {
                        if(res){
                            this.$router.push('/account')
                        }
                    })
                }
            }
        },
        computed: {
            ...mapGetters([
              'account_ide'
            ])
        }
    }
</script>

<style scoped>

</style>
