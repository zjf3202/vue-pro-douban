<template>
    <div class="detail">
        我是详细页面！！！！{{$route.params.id}},{{$route.query.title}}
    </div>
</template>
<style scoped>

</style>
<script>
export default {
    created(){
        /* this.$http.get(URL,{
            params:{
                movieId:this.$route.params.id
            }
        }).then(res=>{

        })
    } */
}}
</script>