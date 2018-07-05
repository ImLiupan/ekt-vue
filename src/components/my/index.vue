<template>
    <div>
        <div class="common-main pl-no pr-no pt-no">
            <router-link to="/info" tag="div" class="my-wrapper">
                <div class="gravatar">
                    <img src="http://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTIkOLSKMHtUqFT45pQzlE4wGgg4k3olR7PgkJdw47DOwYCXNzCiaDpwIGDR4n517GCnO0dz33oiarlg/132">
                </div>
                <p class="bold">发给发给</p>
                <p class="small">18119635374</p>
            </router-link>
            <div class="list-wrapper sp text-right mt0">
                <ul>
                    <router-link to="/commission" tag="li" class="has-ico has-arrow">
                        <i class="ico ico-1"></i>
                        <label>我的佣金</label>
                        <b class="big red">0.00</b>
                        <span class="small vertical-bottom">元</span>
                        <i class="arrow"></i>
                    </router-link>
                </ul>
                <ul>
                    <li class="has-ico has-arrow">
                        <i class="ico ico-2"></i>
                        <label>提现账户</label>
                        <i class="arrow"></i>
                    </li>
                </ul>
                <ul>
                    <router-link to="/about" tag="li" class="has-ico has-arrow">
                        <i class="ico ico-3"></i>
                        <label>关于我们</label>
                        <i class="arrow"></i>
                    </router-link>
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
