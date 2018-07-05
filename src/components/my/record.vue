<template>
    <div>
        <div class="tab-wrapper">
            <ul class="tab-items">
                <li :class="{active: current_index === 0}" @click="changeTab(0)">
                    <a href="javascript:;">
                        <span>提现中</span>
                    </a>
                </li>
                <li :class="{active: current_index === 1}" @click="changeTab(1)">
                    <a href="javascript:;">
                        <span>提现成功</span>
                    </a>
                </li>
                <li :class="{active: current_index === 2}" @click="changeTab(2)">
                    <a href="javascript:;">
                        <span>提现失败</span>
                    </a>
                </li>
            </ul>
            <div class="tab-content" v-show="current_index === 0">
            	<window-scroll-load :data="wait_data" :api="api_record" @updateData="updateWaitData" class="stream-lists sp">
            		<router-link to="/result/111" v-for="(item,index) in wait_data" :key="item.id">
	                    <div class="l">
	                        <p class="normal">提现金额：
	                            <b>{{item.money}}</b>元</p>
	                        <p class="gray">发起时间：{{item.time}}</p>
	                    </div>
	                    <div class="r">
	                        <i class="arrow"></i>
	                    </div>
	                </router-link>
            	</window-scroll-load>
            </div>
            <div class="tab-content" v-show="current_index === 1">
                <div class="stream-lists sp">
                    <div class="content">
                        <router-link to="/result/222">
                            <div class="l">
                                <p class="normal">提现金额：
                                    <b>22222222222</b>元</p>
                                <p class="gray">发起时间：2018-04-23 12:55</p>
                            </div>
                            <div class="r">
                                <i class="arrow"></i>
                            </div>
                        </router-link>
                    </div>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed laborum voluptate suscipit rerum, dolorum impedit doloremque, officia. Et sit corrupti provident eligendi. Officia itaque corporis, vero, nesciunt quia repellendus vitae.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed laborum voluptate suscipit rerum, dolorum impedit doloremque, officia. Et sit corrupti provident eligendi. Officia itaque corporis, vero, nesciunt quia repellendus vitae.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed laborum voluptate suscipit rerum, dolorum impedit doloremque, officia. Et sit corrupti provident eligendi. Officia itaque corporis, vero, nesciunt quia repellendus vitae.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed laborum voluptate suscipit rerum, dolorum impedit doloremque, officia. Et sit corrupti provident eligendi. Officia itaque corporis, vero, nesciunt quia repellendus vitae.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed laborum voluptate suscipit rerum, dolorum impedit doloremque, officia. Et sit corrupti provident eligendi. Officia itaque corporis, vero, nesciunt quia repellendus vitae.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed laborum voluptate suscipit rerum, dolorum impedit doloremque, officia. Et sit corrupti provident eligendi. Officia itaque corporis, vero, nesciunt quia repellendus vitae.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed laborum voluptate suscipit rerum, dolorum impedit doloremque, officia. Et sit corrupti provident eligendi. Officia itaque corporis, vero, nesciunt quia repellendus vitae.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed laborum voluptate suscipit rerum, dolorum impedit doloremque, officia. Et sit corrupti provident eligendi. Officia itaque corporis, vero, nesciunt quia repellendus vitae.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed laborum voluptate suscipit rerum, dolorum impedit doloremque, officia. Et sit corrupti provident eligendi. Officia itaque corporis, vero, nesciunt quia repellendus vitae.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed laborum voluptate suscipit rerum, dolorum impedit doloremque, officia. Et sit corrupti provident eligendi. Officia itaque corporis, vero, nesciunt quia repellendus vitae.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed laborum voluptate suscipit rerum, dolorum impedit doloremque, officia. Et sit corrupti provident eligendi. Officia itaque corporis, vero, nesciunt quia repellendus vitae.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed laborum voluptate suscipit rerum, dolorum impedit doloremque, officia. Et sit corrupti provident eligendi. Officia itaque corporis, vero, nesciunt quia repellendus vitae.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed laborum voluptate suscipit rerum, dolorum impedit doloremque, officia. Et sit corrupti provident eligendi. Officia itaque corporis, vero, nesciunt quia repellendus vitae.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed laborum voluptate suscipit rerum, dolorum impedit doloremque, officia. Et sit corrupti provident eligendi. Officia itaque corporis, vero, nesciunt quia repellendus vitae.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed laborum voluptate suscipit rerum, dolorum impedit doloremque, officia. Et sit corrupti provident eligendi. Officia itaque corporis, vero, nesciunt quia repellendus vitae.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed laborum voluptate suscipit rerum, dolorum impedit doloremque, officia. Et sit corrupti provident eligendi. Officia itaque corporis, vero, nesciunt quia repellendus vitae.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed laborum voluptate suscipit rerum, dolorum impedit doloremque, officia. Et sit corrupti provident eligendi. Officia itaque corporis, vero, nesciunt quia repellendus vitae.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed laborum voluptate suscipit rerum, dolorum impedit doloremque, officia. Et sit corrupti provident eligendi. Officia itaque corporis, vero, nesciunt quia repellendus vitae.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed laborum voluptate suscipit rerum, dolorum impedit doloremque, officia. Et sit corrupti provident eligendi. Officia itaque corporis, vero, nesciunt quia repellendus vitae.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed laborum voluptate suscipit rerum, dolorum impedit doloremque, officia. Et sit corrupti provident eligendi. Officia itaque corporis, vero, nesciunt quia repellendus vitae.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed laborum voluptate suscipit rerum, dolorum impedit doloremque, officia. Et sit corrupti provident eligendi. Officia itaque corporis, vero, nesciunt quia repellendus vitae.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed laborum voluptate suscipit rerum, dolorum impedit doloremque, officia. Et sit corrupti provident eligendi. Officia itaque corporis, vero, nesciunt quia repellendus vitae.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed laborum voluptate suscipit rerum, dolorum impedit doloremque, officia. Et sit corrupti provident eligendi. Officia itaque corporis, vero, nesciunt quia repellendus vitae.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed laborum voluptate suscipit rerum, dolorum impedit doloremque, officia. Et sit corrupti provident eligendi. Officia itaque corporis, vero, nesciunt quia repellendus vitae.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed laborum voluptate suscipit rerum, dolorum impedit doloremque, officia. Et sit corrupti provident eligendi. Officia itaque corporis, vero, nesciunt quia repellendus vitae.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed laborum voluptate suscipit rerum, dolorum impedit doloremque, officia. Et sit corrupti provident eligendi. Officia itaque corporis, vero, nesciunt quia repellendus vitae.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed laborum voluptate suscipit rerum, dolorum impedit doloremque, officia. Et sit corrupti provident eligendi. Officia itaque corporis, vero, nesciunt quia repellendus vitae.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed laborum voluptate suscipit rerum, dolorum impedit doloremque, officia. Et sit corrupti provident eligendi. Officia itaque corporis, vero, nesciunt quia repellendus vitae.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed laborum voluptate suscipit rerum, dolorum impedit doloremque, officia. Et sit corrupti provident eligendi. Officia itaque corporis, vero, nesciunt quia repellendus vitae.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed laborum voluptate suscipit rerum, dolorum impedit doloremque, officia. Et sit corrupti provident eligendi. Officia itaque corporis, vero, nesciunt quia repellendus vitae.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed laborum voluptate suscipit rerum, dolorum impedit doloremque, officia. Et sit corrupti provident eligendi. Officia itaque corporis, vero, nesciunt quia repellendus vitae.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed laborum voluptate suscipit rerum, dolorum impedit doloremque, officia. Et sit corrupti provident eligendi. Officia itaque corporis, vero, nesciunt quia repellendus vitae.
                </div>
                <div class="status-wrap">
                    <div class="status-loading">
                        <i class="icon icon-loading icon-spin"></i> 加载中...</div>
                    <div class="status-no-data hide">暂无数据</div>
                    <div class="status-no-more hide">没有更多了~</div>
                </div>
            </div>
            <!-- <div class="tab-content" v-show="current_index === 2">
                <div class="stream-lists sp">
                    <div class="content">
                        <router-link to="/result/333">
                            <div class="l">
                                <p class="normal">提现金额：
                                    <b>3333333333</b>元</p>
                                <p class="gray">发起时间：2018-04-23 12:55</p>
                            </div>
                            <div class="r">
                                <i class="arrow"></i>
                            </div>
                        </router-link>
                    </div>
                </div>
                <div class="status-wrap">
                    <div class="status-loading"><i class="icon icon-loading icon-spin"></i> 加载中...</div>
                    <div class="status-no-data">暂无数据</div>
                    <div class="status-no-more">没有更多了~</div>
                </div>
            </div> -->
        </div>
    </div>
</template>

<script>
	import { api_record } from '@/api'
	import windowScrollLoad from '@/components/common/windowScrollLoad'

    export default {
        name: '',
        data() {
            return {
            	lock_load: false,
                current_index: 0,

                wait_data: [],
                success_data: [],
                error_data: [],
                api_record
            }
        },
        mounted(){
        	
        },
        methods:{
            changeTab(_index){
                this.current_index = _index;
                this.resetScroll()
            },
            resetScroll(){
            	if(window.scrollY) window.scroll(0,0);
            	else if(window.pageYOffset) window.pageYOffset = 0;
            },
            updateWaitData(res){
            	this.wait_data = res;
            }
        },
        components:{
        	'window-scroll-load': windowScrollLoad
        }
    }
</script>

<style scoped>

</style>
