<template>
    <div>
        <div class="common-main">
            <div class="quick-panel clearfix">
                <a href="javascript:;" @click="fastRecommend()">
                    <i class="ico ico-1"></i>
                    <p>快速推荐</p>
                </a>
                <a href="">
                    <i class="ico ico-2"></i>
                    <p>全部楼盘</p>
                </a>
                <a href="">
                    <i class="ico ico-3"></i>
                    <p>佣金指南</p>
                </a>
                <a href="">
                    <i class="ico ico-4"></i>
                    <p>邀请注册</p>
                </a>
            </div>
            <div class="common-title">热销楼盘</div>
            <div class="house-wrapper" id="houseWrap" v-if="house_data && house_data.length !== 0">
                <div class="media clearfix" @click="showDetail(item.id)" v-for="(item,index) in house_data">
                    <div class="media-left">
                        <span class="mark">{{item.chacity}}</span>
                        <img class="media-object" :src="item.coverurl ? item.coverurl: 'http://statics.xafc.com/touch/v3.0/img/noimg240x160.png'">
                    </div>
                    <div class="media-body">
                        <h4 class="media-heading">{{item.housename}}</h4>
                        <p class="msg">参考均价：{{item.price == 0 ? '一房一价': item.price + '元/㎡'}}</p>
                        <p class="msg sp">{{item.area}}  {{item.bzone}}</p>
                        <p class="price sp">佣金：<span class="bold">{{item.commission}}</span>元/套</p>
                        <span class="btn" @click.stop="appointRecommend(item.id)">立即推荐</span>
                    </div>
                </div>
            </div>
            <div class="common-view-more" v-if="house_data && house_data.length > 10">
                <a href="">查看更多
    		            <i class="ico-arrow"></i>
    		        </a>
            </div>
            <div class="empty-wrapper" v-if="house_data && !loading && house_data.length === 0">
                <div>
                    <i class="ico-empty"></i>
                    <p>暂无数据</p>
                </div>
            </div>
        </div>
        <common-navbar></common-navbar>
    </div>
</template>

<script>
    import Nabbar from '../../components/common/nabbar'
    import {
        api_house
    } from '@/api'

    export default {
        name: '',
        data() {
            return {
                loading: true,
                house_data: []
            }
        },
        created() {
            api_house().then((res) => {
                this.loading = false;
                this.house_data = res.data;
            })
        },
        methods: {
            fastRecommend() {
                this.$recommend.show();
            },
            appointRecommend(_id){
                this.$recommend.show({
                    appoint_id: _id
                });
            },
            showDetail(_id){
                this.$router.push(`/detail/${_id}`)
            }
        },
        components: {
            'common-navbar': Nabbar
        }
    }
</script>

<style scoped>

</style>