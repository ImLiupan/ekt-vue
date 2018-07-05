<template>
    <div class="empty-wrapper">
        <div>
            <i :class="ico"></i>
            <p>{{text}}</p>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            ico: {
                default: 'ico-empty',
            },
            text: {
                default: '暂无数据',
            }
        }
    }
</script>

<style>
    .empty-wrapper div .ico-net {
        display: inline-block;
        width: 69px;
        height: 66.5px;
        background: url(http://lp0124.com/static/ekt/img/net.png) no-repeat center center;
        background-size: 100%;
    }
</style>