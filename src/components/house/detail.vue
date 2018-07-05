<template>
    <div>
        <div class="layout-fb-main">
	        <div class="house-detail">
	            <div class="broadcast" ref="broadcast">
	                <div class="broadcast-items" ref="broadcastItems">
	                    <div class="item" v-for="(item,index) in broadcast_data">
	                        <img :src="item" width="100%">
	                    </div>
	                </div>
	                <div class="broadcast-dots" id="broadcastDots">
	                	<span class="dot" :class="{active: current_page_index === index}" v-for="(dot,index) in dots"></span>
	                </div>
	            </div>
	            <div class="pd-lat-12">
	                <h1>
	                    万科时光之光
	                    <span class="lab">别墅 | 住宅 | 商铺</span>
	                </h1>
	                <p class="red">
	                    <b>25556</b>元/平</p>
	                <div class="labels">
	                    <span class="label label-orange">在售</span>
	                    <span class="label label-gray">综合体</span>
	                    <span class="label label-gray">改善房</span>
	                    <span class="label label-gray">1号线</span>
	                </div>
	                <p>
	                    <span class="gray">优惠：</span>待定</p>
	                <p>
	                    <span class="gray">开盘：</span>加推了12#、15#、17#楼</p>
	                <p>
	                    <span class="gray">地址：</span>庐州大道与南京路交汇处</p>
	            </div>
	        </div>
	        <div class="common-panel">
	            <div class="panel-title">项目推荐</div>
	            <div class="panel-content">
	                <h3>万科时代之光备案11#、36套房源 </h3>
	                <p>万科时代之光备案11#，36套房源，装修，高层，备案均价18999.15元/㎡。与上次备案均价相比基本持平!</p>
	                <div class="img-box">
	                    <img src="http://img3.xafc.com/run/www/focuspicture/20180627/5b32e7422e86d.jpg">
	                </div>
	            </div>
	        </div>
	        <div class="alink-wrapper">
	            <a href="">查看楼盘详情
	                <i class="arrow"></i>
	            </a>
	        </div>
	    </div>
	    <div class="layout-fb-btns fixed">
	        <a href="">
	            <span class="red">佣金：
	                <b>6000</b>元/套</span>
	        </a>
	        <a href="javascript:;" class="active confirmBtnJs">立即推荐</a>
	    </div>
    </div>
</template>

<script>
	import BScroll from 'better-scroll'

    export default {
        name: '',
        data() {
            return {
            	_scroll: null,
            	current_page_index: 0,
            	broadcast_data: [
            		'http://img3.xafc.com/run/www/focuspicture/20180628/5b3438cf8833b.jpg',
            		'http://img3.xafc.com/run/www/focuspicture/20180627/5b32e99a4e900.jpg',
            		'http://img3.xafc.com/run/www/focuspicture/20180628/5b3438fe4ca4e.jpg',
            		'http://img3.xafc.com/run/www/focuspicture/20180628/5b34392216d18.jpg',
            		'http://img3.xafc.com/run/www/focuspicture/20180628/5b3439367d38a.jpg'
            	],
            	dots : []
            }
        },
        methods:{
        	_setSlideWidth(isResize) {
	        	this.children = this.$refs.broadcastItems.children
	        	this.dots = new Array(this.children.length)

	        	let width = 0
	        	let slideWidth = this.$refs.broadcast.clientWidth
	        	this.$refs.broadcast.style.height = slideWidth * 420 / 750 + 'px';
	        	for (let i = 0; i < this.children.length; i++) {
	          		let child = this.children[i]
	          		child.style.width = slideWidth + 'px'
	          		width += slideWidth
	        	}
	        	if (!isResize) {
	         		width += 2 * slideWidth
	        	}
	        	this.$refs.broadcastItems.style.width = width + 'px'
	      	},
	      	_onScrollEnd() {
	      		let pageIndex = this._scroll.getCurrentPage().pageX
		        this.current_page_index = pageIndex
	      	}
        },
        mounted(){
        	this._setSlideWidth();
        	this._scroll = new BScroll(this.$refs.broadcast, {
                scrollX: true,
                scrollY: false,
                momentum: false,
                snap: {
                    loop: true,
                    threshold: 0.3,
                    speed: 400
                },
                bounce: false,
                stopPropagation: true
            });
            this._scroll.on('scrollEnd', this._onScrollEnd)
        }
    }
</script>

<style scoped>

</style>
