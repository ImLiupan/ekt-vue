<template>
	<div>
		<div class="state-error" v-if="state === 'error'">
	        <div class="put-wrapper">
	            <div class="ico-state"></div>
	            <h1 class="price">提现失败</h1>
	            <p class="msg">失败原因：姓名与卡号不匹配</p>
	        </div>
	        <div class="list-wrapper" ref="waitListWrap">
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
	            <ul>
	                <li>
	                    <label>提现金额</label>2000.00元</li>
	            </ul>
	            <ul>
	                <li>
	                    <label>发起时间</label>2017-04-23 23:13:44</li>
	            </ul>
	        </div>
	        <div class="btn-wrapper">
	            <a href="" class="btn">重新发起提现</a>
	        </div>
	    </div>
	    <div class="state-wait" v-if="state === 'wait'">
	        <div class="put-wrapper">
	            <div class="ico-state"></div>
	            <h1 class="price">提现中</h1>
	            <p class="msg">预计7个工作日到账</p>
	        </div>
	        <div class="list-wrapper">
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
	            <ul>
	                <li>
	                    <label>提现金额</label>2000.00元</li>
	            </ul>
	            <ul>
	                <li>
	                    <label>发起时间</label>2017-04-23 23:13:44</li>
	            </ul>
	        </div>
	    </div>
	    <div class="state-success" v-if="state === 'success'">
	        <div class="put-wrapper">
	            <div class="ico-state"></div>
	            <h1 class="price">提现成功</h1>
	            <p class="msg">钱款已到帐</p>
	        </div>
	        <div class="list-wrapper">
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
	            <ul>
	                <li>
	                    <label>提现金额</label>2000.00元</li>
	            </ul>
	            <ul>
	                <li>
	                    <label>发起时间</label>2017-04-23 23:13:44</li>
	            </ul>
	        </div>
	    </div>
	    <not-found v-if="state === 404"></not-found>
	</div>
</template>
<script>
	import notFound from '@/components/not_found' 

    export default {
        name: '',
        data() {
            return {
            	record_id: null,
            	state: null
            }
        },
        beforeRouteEnter (to, from, next) {
        	next((vm)=>{
        		vm.record_id = to.params.id
        	});
        },
        mounted(){
        	console.log(this.$refs.waitListWrap)
   //      	this.$refs.waitListWrap.addEventListener('scroll', () => {
			// 	console.log(12)
			// }, false)

        	this.$nextTick(()=>{
        		/*
        			模拟
        	 	*/
			  	if(this.record_id === '111'){
	    			this.state = 'wait'
	    		}else if(this.record_id === '222'){
	    			this.state = 'success'
	    		}else if(this.record_id === '333'){
	    			this.state = 'error'	
	    		}else{
	    			this.state = 404	
	    		}
			})
        },
        methods:{
            
        },
        components:{
        	notFound
        }
    }
</script>