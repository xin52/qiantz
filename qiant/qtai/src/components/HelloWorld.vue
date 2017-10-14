<template>
  <div class="hello" style="width:1100px;margin:0 auto;">
       <el-menu theme="dark" :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect" style="width:1100px;">
  <el-menu-item index="1" style="font-size:18px;font-weight:900;margin-left:15px;">个人博客</el-menu-item>

   <el-submenu :index="i.onedata.cnname" v-for="i in oneData">
    <template slot="title">{{i.onedata.cnname}}</template>
    <el-menu-item v-for="j in i.twodata" :index="j.cnname" >{{j.cnname}}</el-menu-item>
    
  </el-submenu>
  
  </el-menu>
     
     <div class="div">
       <el-breadcrumb separator="/" style="line-height:40px;margin:0 40px;">
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
           <el-breadcrumb-item>{{one}} </el-breadcrumb-item>
           <el-breadcrumb-item>{{two}}</el-breadcrumb-item>
         
        </el-breadcrumb>
     </div>
      <div class="main">
          <div class="left">
                  <el-table
                      :data="secdata"
                      style="width: 100%;margin:15px;"
                      :row-class-name="tableRowClassName" >
                      <el-table-column
                        prop="article_name"
                        label="标题"
                        width="180">
                      </el-table-column>
                      <el-table-column
                        prop="cnname_one"
                        label="分类"
                        width="180">
                      </el-table-column>
                      <el-table-column
                        prop="editer"
                        label="作者">
                      </el-table-column>
                      <el-table-column
                        prop="time"
                        label="时间">
                      </el-table-column>
            </el-table>
          </div>
          <div class="right">
                 <div class="fom">
                  <p>全站搜索</p>
                 </div>
                 <div class="cont">
                         <div class="one">
                           <input type="text" placeholder="请输入内容">
                         </div>
                         <div class="two">
                           <button>搜索</button>
                         </div>
                   </div>
                   <div class="mas">
                       <div class="fom">
                          <p>点击排行</p>
                        </div>
                         <ol>
                           <li><u>1</u>哈哈<span>0</span></li>
                           
                         </ol>
                   </div>
                    <div class="mas">
                       <div class="fom">
                          <p>最新文章</p>
                        </div>
                         <ol>
                           <li><u>1</u>宅急送<span>0</span></li>
                           
                         </ol>
                   </div>
                   
          </div>
      </div>

  </div>
</template>

<script>
 export default {
  name:"helloWorld",
    data() {
      return {
        activeIndex: '1',
        dataAll:[],
        activeIndex2: '1',
        tableData2: [],
        oneData:[],
        one:'',
        two:'',
        obj:null,
        secdata:[]
    
      };
    },
    created(){
      var _this=this;
         this.axios.get('http://localhost:9999/api/front_article/getNav').then(function(data){
               _this.oneData=data.data.data;

        })
         
    },
    mounted(){
      var _this=this;
        this.axios.get('http://localhost:9999/api/front_article/getArticleAll').then(function(data){
               _this.dataAll=data.data.data;//获取全部数据

                _this.secdata=_this.dataAll//获取默认数据

               console.log(_this.dataAll)

        })
    },
    watch:{
        obj(){
          var _this=this;
          _this.secdata=[]
           for(var i=0;i< _this.dataAll.length;i++){
              console.log(_this.one,_this.two)
               if(_this.dataAll[i].cnname_one==_this.one&&_this.dataAll[i].cnname_two==_this.two){
                console.log(11)
                   _this.secdata.push(_this.dataAll[i])
               }
        }}
    },
    methods: {
      tableRowClassName(row, index) {
        if (index === 1) {
          return 'info-row';
        } else if (index === 3) {
          return 'positive-row';
        }
        return '';
      },
      handleSelect(key, keyPath) {
        // console.log(key, keyPath);

        var _this=this;
        this.obj=keyPath
        this.one=keyPath[0];
        this.two=keyPath[1]
        
        

      }

      
    }

  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 .el-table .info-row {
    background: red;
  }

  .el-table .positive-row {
    background: orange;
  }
   *{
    margin:0;
    padding: 0;
    list-style: none;
    text-decoration: none;
    box-sizing:border-box;
   }
   
   .div{
    width: 100%;
     height: 40px;
     line-height: 40px;
     background:#8492A6;
   }
   .div p{
    margin-left: 20px;
    font-size: 16px;
   }
   .div p span{
    margin-left: 8px;
   }
   .div p b{
    margin-left: 8px;
   }
   .main{
    width: 100%;
    height: 400px;
    display: flex;
   }

    
   .left{
    width: 68%;
   }
   .right{
    width: 30%;
    height: auto;
      margin:20px 35px;
      border:3px solid orange;
      border-radius: 10px;
 
   }
   .fom{
     width: 300px;
    height: 25px;
    background: #13CE66;
     text-align: center;
     margin:10px auto;
     border-radius: 10px;
   }
   .fom p{
   
    color: #fff;
    font-weight: bold;
    font-size: 14px;
    line-height: 25px;

   }
   .cont{
    display: flex;
    margin:0 20px;
   }
   .one input{
    outline: 0;
    width: 200px;
    height: 30px;
    padding: 0 8px;
   }
   .two button{
    margin-left: 20px;
    background: 0;
    width: 80px;
    height: 30px;
    border:0;
    outline: 0;
    background: orange;
    color:#fff;

   }
   .mas{
   
     
   }
    .mas ol li u{
      margin-right: 10px;
      background: red;
      display: inline-block;
      width: 15px;
      height: 15px;
      line-height: 15px;
      text-align: center;

    }
    .mas ol{
       
    }
   .mas ol li{
     line-height: 25px;
      padding: 0 45px;
      

   }
   .mas ol li span{
    float: right;
   }
</style>
