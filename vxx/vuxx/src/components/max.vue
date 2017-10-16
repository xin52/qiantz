<template>
    <div>
        max
    </div>
</template>
<script>
import {mapState} from "vuex"
export default {
        name:"max",
        created(){
            if(!this.states1){
                console.log(this.states1)
                this.$router.push({path:"/loading",query:{id:"/max"}})
            }
             
        },
        computed:{
            ...mapState(["states1"])
        }
}
</script>
<style>

</style>


