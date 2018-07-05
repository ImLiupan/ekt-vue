<template>
  	<div>
        <label v-if="hasLab" :class="hasLab">验证码</label>
        <i v-if="hasIco" :class="hasIco"></i>
        <input type="number" placeholder="请输入验证码" 
            :value="value"
            @input="$emit('input', $event.target.value)">
        <span v-if="hasClose" :class="hasClose"></span>
        <a href="javascript:;" class="a-code" :class="{disabled: code_lock && timers}" @click="getCode('login')">{{code_lock && timers? timer_code + 's': '获取验证码'}}</a>
    </div>
</template>

<script>
    const TIMER_CODE = 60

    import {validIphone} from '@/common/validate'

    export default{
        props: ['api','iphone','value','has-ico','has-close','has-lab'],
        data () {
            return {
                code_lock: false,
                timer_code: TIMER_CODE,
                timers: null
            }
        },
        methods: {
            getCode(type){
                if(!validIphone(this.iphone)){
                    this.toast('请输入正确的手机号');
                    return
                }
                if(this.code_lock) return;
                this.code_lock = true;
                this.api({
                    iphone: this.iphone,
                    type
                }).then((res) => {
                    this.toast('发送成功，请注意查收')
                    this.timers = setInterval(()=>{
                        this.timer_code--
                        if(this.timer_code <= 0){
                            clearInterval(this.timers)
                            this.timers = null
                            this.timer_code = TIMER_CODE
                            this.code_lock = false
                        }
                    },1000)
                }).catch((err) =>{
                    this.toast('网络繁忙，请稍后重试')
                    this.code_lock = false
                })
            },
            toast(str) {
                $toast.show(str, 1500)
            },
        }
    }
</script>