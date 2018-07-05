<template>
    <div>
        <div class="common-main pl-no pr-no pt-no">
            <div class="customer-wrapper">
                <ul class="btns clearfix">
                    <li class="li1">
                        <a href="/xafc/ekt/public/index.php/index/member/memberlist.html">
                            <i class="ico ico-1"></i>全部客户
                            <i class="arrow arrow-1"></i>
                        </a>
                    </li>
                    <li class="li2 slideModalJs">
                        <a href="javascript:;">
                            <i class="ico ico-2"></i>快速推荐
                            <i class="arrow arrow-2"></i>
                        </a>
                    </li>
                </ul>
                <div class="layout-three-point">
                    <div class="container">
                        <a href="/xafc/ekt/public/index.php/index/member/memberlist/memberstatus/2.html">
                            <p class="number">0</p>
                            <p>已确认</p>
                        </a>
                        <a href="/xafc/ekt/public/index.php/index/member/memberlist/memberstatus/3.html" class="has-line">
                            <p class="number">0</p>
                            <p>已到访</p>
                        </a>
                        <a href="/xafc/ekt/public/index.php/index/member/memberlist/memberstatus/6.html">
                            <p class="number">0</p>
                            <p>已成交</p>
                        </a>
                    </div>
                </div>
            </div>
            <div class="list-wrapper sp text-right">
                <ul>
                    <a href="/xafc/ekt/public/index.php/index/member/memberlist/memberstatus/5.html">
                        <li class="has-arrow">
                            <label>待确认客户</label>1 <i class="arrow"></i>
                        </li>
                    </a>
                </ul>
                <ul>
                    <a href="/xafc/ekt/public/index.php/index/member/memberlist/isouverdue/2.html">
                        <li class="has-arrow">
                            <label>即将过期客户</label>0 <i class="arrow"></i>
                        </li>
                    </a>
                </ul>
                <ul>
                    <a href="/xafc/ekt/public/index.php/index/member/memberlist/isouverdue/3.html">
                        <li class="has-arrow">
                            <label>已过期客户</label>1 <i class="arrow"></i>
                        </li>
                    </a>
                </ul>
                <ul>
                    <a href="/xafc/ekt/public/index.php/index/member/memberlist/memberstatus/1.html">
                        <li class="has-arrow bd-b-no">
                            <label>无效客户</label> 1 <i class="arrow"></i>
                        </li>
                    </a>
                </ul>
            </div>
        </div>
        <common-navbar></common-navbar>
    </div>
</template>

<script>
    import Nabbar from '../../components/common/nabbar'

    export default {
        name: '',
        data() {
            return {

            }
        },
        components: {
            'common-navbar': Nabbar
        }
    }
</script>

<style scoped>

</style>
