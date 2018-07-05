<template>
    <div>
        <div class="list-wrapper sp">
            <ul>
                <li>
                    <label>姓名</label>克鲁斯</li>
            </ul>
            <ul>
                <li>
                    <label>开户行</label>中国工商银行</li>
            </ul>
            <ul>
                <li>
                    <label>银行卡号</label>6217 0016 3001 9186 151</li>
            </ul>
        </div>
        <div class="list-wrapper sp">
            <ul>
                <li>
                    <label>提现金额</label>
                    <input type="number" placeholder="请输入提现金额" id="putMoney">
                </li>
            </ul>
        </div>
        <p class="list-msg">本次可提现 23000.00 元</p>
        <div class="btn-wrapper mt20">
            <a href="javascript:;" class="btn disabled" id="putMoneyBtn">确定提现</a>
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
            
        }
    }
</script>

<style scoped>

</style>
