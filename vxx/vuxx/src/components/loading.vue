<template>
        <div>
            {{names}}
        </div>
</template>
<script>
import {mapState,mapActions} from "vuex"
export default {
    name:"loading",
    data(){
        return{
            names:"这里是loading页面"
        }
    },
    computed:{
        ...mapState({
            states:(state)=>{
                console.log(this.$store.state.states)
                return state.states;
            }
        })
    },
    created(){
        var id=this.$route.query.id;
        console.log(id=this.$route.query.id)
        if(this.$route.query.id=="/"){
          
            this.getAllData({_this:this,id:id});
        }else if(this.$route.query.id=="/max"){
                this.maxs({_this:this,id:id});
        }
    },
    methods:{
        ...mapActions(["getAllData","maxs"])
  }
  
}
</script>
<style>

</style>


