<template>
    <div class="recommend-backdrop" :class="{'active': state == 1}" @click.self="hide(-1)">
        <div class="recommend-wrapper" :class="{'recommend-up': state == 1}">
            <div class="recommend-content">
                <div class="recommend-header">
                    <span class="recommend-close" @click.self="hide(-1)"></span>
                    <h4 class="recommend-title">{{!appoint_id ? '快速': ''}}推荐客户</h4>
                </div>
                <div class="recommend-body">
                    <div class="form-control form-label form-label-x">
                        <label class="lab"><i class="ico-x"></i>姓名</label>
                        <input type="text" placeholder="请输入姓名">
                        <span class="close"></span>
                    </div>
                    <div class="form-control form-label form-label-x">
                        <label class="lab"><i class="ico-x"></i>手机号</label>
                        <input type="tel" placeholder="请输入手机号" maxlength="11">
                        <span class="close"></span>
                    </div>
                    <div class="form-control form-label form-label-x">
                        <label class="lab"><i class="ico-x"></i>意向楼盘</label>
                        <select ref="select">
                            <option :value="item.id" v-for="(item,index) in house" :key="item.id" :selected="appoint_id">{{item.name}}</option>
                        </select>
                        <span class="arrow" :style="{display: appoint_id ? 'none': 'block'}"></span>
                    </div>
                    <div class="form-control form-label form-label-x">
                        <label class="lab"><i class="ico-x visibie-hidden"></i>意向备注</label>
                        <input type="text" placeholder="请输入客户意向备注">
                        <span class="close"></span>
                    </div>
                    <div class="form-btn">
                        <a href="javascript:;" class="btn btn-submit disabled">立即推荐</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    const preventDefault = (e) => {
        e.preventDefault()
    } 

    export default {
        data() {
            return {
                state: 0,
                appoint_id: 0,
                house : [
                    {
                        'name':'蓝光公园1号',
                        'id': 1
                    },
                    {
                        'name':'合肥云谷',
                        'id': 2
                    },
                    {
                        'name':'远大东都1号',
                        'id': 3
                    },
                    {
                        'name':'淮南碧桂园',
                        'id': 4
                    },
                    {
                        'name':'龙湖名城',
                        'id': 5
                    },
                    {
                        'name':'弘阳时光澜庭',
                        'id': 6
                    },
                    {
                        'name':'中梁江城1621',
                        'id': 7
                    },
                    {
                        'name':'伟星时代广场',
                        'id': 8
                    },
                    {
                        'name':'碧桂园中南·双玺',
                        'id': 9
                    },
                    {
                        'name':'玖珑府',
                        'id': 10
                    }
                ]
            }
        },
        mounted() {
            this.$el.setAttribute('von-recommend', '')
        },
        destroyed() {
            document.body.removeChild(this.$el)
        },
        methods: {
            show(options) {
                if(options && options.appoint_id){
                    this.appoint_id = options.appoint_id
                }
                this.state = 1
                document.body.addEventListener('touchmove', preventDefault)
            },
            hide() {
                this.state = 0
                document.body.removeEventListener('touchmove', preventDefault)
                let wrapper = document.querySelector('[von-recommend] > .recommend-wrapper')
                wrapper.addEventListener('webkitTransitionEnd', () => {
                    this.$destroy()
                }, false)
            },
            getState() {
                return this.state
            }
        }
    }
</script>

<style scope>
    .recommend-backdrop {
        -webkit-transition: background-color .15s ease-in-out;
        transition: background-color .15s ease-in-out;
        position: fixed;
        top: 0;
        left: 0;
        z-index: 11;
        width: 100%;
        height: 100%;
        background-color: transparent;
    }

    .recommend-backdrop.active {
        background-color: rgba(0, 0, 0, .45);
    }

    .recommend-wrapper {
        -webkit-transform: translate3d(0, 100%, 0);
        transform: translate3d(0, 100%, 0);
        -webkit-transition: all .5s cubic-bezier(.36, .66, .04, 1);
        transition: all .5s cubic-bezier(.36, .66, .04, 1);
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        width: 100%;
        max-width: 500px;
        margin: auto;
    }

    .recommend-up {
        -webkit-transform: translateZ(0);
        transform: translateZ(0);
    }

    .recommend-wrapper {
        -webkit-transition-duration: .3s;
        transition-duration: .3s;
        -webkit-transition-timing-function: cubic-bezier(.4, .6, .2, 1);
        transition-timing-function: cubic-bezier(.4, .6, .2, 1);
    }

    .recommend {
        margin-left: 8px;
        margin-right: 8px;
        width: auto;
        z-index: 11;
        overflow: hidden;
    }

    .recommend-content {
        background: #fff;
        padding: 16.5px 22.5px;
        border-top-left-radius: 8px;
        border-top-right-radius: 8px;
    }

    .recommend-header {
        font-size: 19px;
        color: #333;
        position: relative;
    }

    .recommend-header .recommend-close {
        display: inline-block;
        width: 15px;
        height: 15px;
        background: url(//a.statics.xafc.com/ekt/img/slice/3.png) no-repeat center center;
        background-size: 100%;
        right: 0;
        top: 5px;
        position: relative;
        position: absolute;
        cursor: pointer;
    }

    .recommend-header .recommend-close:before {
        content: '';
        position: absolute;
        top: -10px;
        left: -10px;
        right: -10px;
        bottom: -10px;
    }

    .recommend-header .modal-title {
        padding-right: 50px;
    }

    .recommend-content .form-control input {
        padding: 11px 20px 14px 0;
        vertical-align: top;
    }

    .recommend-content .form-label .lab {
        top: -1.5px;
        height: 44px;
        line-height: 44px;
    }

    .recommend-content select {
        padding: 9px 20px 14px 0;
    }

    .recommend-content .form-btn {
        margin: 15px 0 0 0
    }
</style>
