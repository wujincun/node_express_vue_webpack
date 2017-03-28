<template>
    <div class="test">
        <input type="text" v-model="message"/>
        <span>{{message}}</span>
        <button @click="clickMe">ClickHere</button>
    </div>
</template>
<style lang="less" rel="stylesheet/less">

</style>
<script type="text/ecmascript-6">
    export default{
        name: 'app',
        data () {
            return {
                message: null
            };
        },
        methods: {
            clickMe(){
                alert(1)
            }
        }
    };

</script>
