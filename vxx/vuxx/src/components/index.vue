<template>
  <div class="hello">
    
      <button @click="clicks">跳转</button>
      <div class="section"></div>
  </div>
</template>

<script>
import {mapMutations,mapState} from "vuex"
export default {
  name: 'index',
  data () {
    return {
      headdata:[],
      tabledata:[],
      activeIndex: '1',
    }
  },
  created(){
   if(!this.$store.state.states){
     this.$router.push({path:"/loading",query:{id:"/"}})
   }
  
  },
  mounted(){

    this.headdata=this.$store.state.onedata;
    this.tabledata=this.$store.state.twodata;
  },
  methods:{
    ...mapState(["states","onedata","twodata"]),
    ...mapMutations([" state1"]),
     handleSelect(key, keyPath) {
        console.log(this.tabledata)
         this.tabledata.forEach(function(element) {
         }, this);
      
        
        
      },
      clicks(){
        this.$router.push({path:"/max"})
      }
  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
