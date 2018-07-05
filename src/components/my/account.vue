<template>
    <div>
        <div class="list-wrapper sp text-right">
            <ul>
                <li>
                    <label>持卡人姓名</label>克鲁斯
                    <i class="ico-msg" @click="showAlert"></i>
                </li>
            </ul>
            <ul>
                <li class="has-arrow">
                    <label>开户行</label>
                    <select class="js-color">
                        <option value="0">请选择开户行</option>
                        <option value="1">中国工商银行</option>
                    </select>
                    <i class="arrow"></i>
                </li>
            </ul>
            <ul>
                <li class="bd-b-no">
                    <label>银行卡号</label>
                    <input type="text" placeholder="请输入银行卡号">
                </li>
            </ul>
        </div>
        <div class="btn-wrapper">
            <a href="javascript:;" @click="keepData()" class="btn">保存</a>
        </div>
    </div>
</template>

<script>
    import { mapGetters,mapMutations } from 'vuex'

    export default {
        name: '',
        data() {
            return {

            }
        },
        beforeRouteEnter (to, from, next) {
            next(vm => {
                /*
                    若无需完善客户 强制跳到 /my
                 */
                if(vm.account_ide){
                    vm.$router.replace('/my')
                }
            })
        },
        methods:{
            showAlert(){
                this.$dialog.alert({
                    title: '提现说明',
                    content: '完善提现账户后才能申请提现',
                    cancelText: '取消',
                    okText: '我知道了',
                    effect: 'scale'
                })
            },
            keepData(){
                this.set_account_ide(true);
                this.$toast.show('保存成功', 1500).then(() => {
                    this.$router.replace('/forward')
                })
            },
            ...mapMutations([
                'set_account_ide'
            ])
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
