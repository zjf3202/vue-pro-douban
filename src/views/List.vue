<template>
    <div class="list">
        <router-link
            v-for="view in views"
            :key="view.id"
            :to={name:view.name}
            replace=""
        >{{view.title}}</router-link>
        list
        <router-view></router-view>
    </div>
</template>

<style scoped>

</style>


<script>
export default {
    //具名路由
    data(){
        return{
            views:[
                {id:1,name:"guolei",title:"国内新闻"},
                {id:2,name:"guoji",title:"国际新闻"},
                ]
        }
    }
}
</script>