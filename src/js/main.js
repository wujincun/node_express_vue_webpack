
/**
 * Created by Administrator on 2017/3/26.
 */
import Vue from "vue";
new Vue({
    el:'#app',
    data(){
        return{
            message:null
        }
    },
    methods:{
        clickMe(){
            alert(1)
        }
    }
})