<template>
    <div>
        <Header v-on:listenToChildEvent="onclick"></Header>
        <!-- <Banner></Banner> -->
        <keep-alive>
            <router-view></router-view>
        </keep-alive>
        <Footer></Footer>
    </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

export default {
    name:'Main',
    data() {
        return {
            
        }
    },
    components:{
        Header,
        // Banner,
        Footer
    },
    methods: {
        onclick(data){
            this.$router.push(data)
        }
    },
}
</script>