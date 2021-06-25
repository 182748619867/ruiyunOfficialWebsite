<template>
    <div>
        <l-header></l-header>
        <router-view></router-view>
        <l-footer></l-footer>
    </div>
</template>
<script>
import LHeader from './header'
import LFooter from './footer'
export default {
    components:{
        LHeader,
        LFooter
    }
}
</script>