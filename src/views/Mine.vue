<template>
    <div class="mine">
        <router-link to="/">mine</router-link>
        <button @click="show">mine</button>
    </div>
</template>

<style scoped>

</style>


<script>
export default {    
    methods:{
        show(){
            let flg=confirm("你确定要返回吗")
            if(flg){
                this.$router.push("/")
            }
        }
    }
}
</script>