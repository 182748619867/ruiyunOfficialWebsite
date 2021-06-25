<template>
    <div>
        index1
        <div @click="toView">跳转index2</div>
    </div>
</template>
<script>
export default {
    methods: {
        toView() {
            console.log(this);
            this.$router.push('/system/index2')
        }
    },
}
</script>