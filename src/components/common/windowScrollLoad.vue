<template>
    <div class="wrapper">
        <div class="lists-wrap content">
            <slot></slot>
        </div>
    	<div class="status-wrap">
            <div class="status-loading" v-show="load_status === 1"><i class="icon icon-loading icon-spin"></i> 加载中...</div>
            <div class="status-no-data" v-show="load_status === 2">暂无数据</div>
            <div class="status-no-more" v-show="load_status === 3">没有更多了~</div>
        </div>
        <ico-msg-layout ico="ico-net" text="网络异常" v-if="page === 1 && load_status === 4"></ico-msg-layout>
    </div>
</template>

<script>
    import icoMsgLayout from '@/components/common/icoMsgLayout'

    export default {
        name: '',
        data() {
            return {
                is_lock: false,
                page: 1,
                load_status: 1
            }
        },
        props: ['data','api'],
        mounted(){
            this.getData();
            window.addEventListener('scroll', this.scrollListener,false)
        },
        methods:{
            scrollListener(){
                let wScrollY = window.scrollY || window.pageYOffset;
                var wInnerH = window.innerHeight;
                var clientHeight = document.body.clientHeight;
                if (wScrollY + wInnerH + 100 >= clientHeight) {
                    this.getData();
                }
            },
            // 判断是否能出现滚动条（一屏是否能够填满）
            isHasScroll() {
                let clientHeight = document.body.clientHeight;
                var wInnerH = window.innerHeight;
                if (clientHeight > wInnerH) {
                    return true;
                }
                return false;
            },
            getData(){
                if(this.is_lock) return;
                this.is_lock = true;
                this.api({
                    page: this.page
                }).then((res)=>{
                    if(res.status === 200 && res.data){
                        let _len = res.data.length;
                        if(_len === 0){
                            this.is_lock = true;
                            if(this.page === 1){
                                // 暂无数据
                                this.load_status = 2;
                            }else{
                                // 没有更多了~
                                this.load_status = 3;
                            }
                        }else if(_len === 10){
                            this.is_lock = false;
                            // 加载中...
                            this.load_status = 1;
                        }else if(_len < 10){
                            this.is_lock = true;
                            if(this.page === 1){
                                // 不显示状态
                                this.load_status = 0;
                            }else{
                                // 没有更多了~
                                this.load_status = 3;
                            }
                        }
                        if(this.page === 1){
                            this.$emit('updateData',res.data)
                        }else{
                            let data = this.data.concat(res.data);
                            this.$emit('updateData',data)
                        }
                        this.page++;
                        if(!this.isHasScroll()) this.getData();
                    }
                }).catch((error)=>{
                    this.is_lock = false;
                    this.load_status = 4;
                })
            }
        },
        components:{
            'ico-msg-layout': icoMsgLayout
        },
        beforeDestroy(){
            window.removeEventListener('scroll',this.scrollListener,false)
        }
    }
</script>

<style>
    .status-no-net{

    }
</style>