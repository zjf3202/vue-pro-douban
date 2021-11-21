<template>
    <div class="home">
        home
        <ul>
            <li>
                <router-link to="/detail/1">新闻一</router-link>
                <router-link to="/detail/2?title=新闻二">新闻二</router-link>
                <router-link :to="{name:'zjf',params:{id:3},query:{title:'新闻一'}}">新闻三</router-link>
            </li>
        </ul>
    </div>
</template>

<style scoped>

</style>


<script>
export default {
    beforeRouteEnter(to,from,next){
        console.log("beforeRouteEnter",this)
        next()
    },
    beforeRouteLeave(to,from,next){
        console.log("beforeRouteLeave",this)
        next()
    }
}
</script>