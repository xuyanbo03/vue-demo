<template>
  <div v-theme:column="'narrow'" id="show-blogs">
      <h1>博客总览</h1>
      <input type="text" placeholder="搜索" v-model="search">
      <div v-for="blog in filteredBlogs" class="single-blog">
          <router-link v-bind:to="'/demo/vueBlog/blog/'+blog.id">
            <h2 v-rainbow>{{blog.title | to-uppercase}}</h2>
          </router-link>
          <article>
              {{blog.content | snippet}}
          </article>
      </div>
  </div>
</template>

<script>
export default {
  name: 'show-blogs',
  data(){
      return{
          blogs:[],
          search:""
      }
  },
  created(){
      this.$http.get("https://vue-blog-ae37c.firebaseio.com/posts.json").then(function(data){
            // this.blogs=data.body.slice(0,10);
            //promise对象
            return data.json();
        }).then(function (data) {
            //data为普通对象
            var blogsArray=[];
            for(let key in data){
                data[key].id=key;
                blogsArray.push(data[key]);
            }
            this.blogs=blogsArray;
        })
  },
  computed:{
      filteredBlogs:function(){
          return this.blogs.filter((blog)=>{
              return blog.title.match(this.search);
          })
      }
  },
  filters:{
      //ES5
    //   "to-uppercase":function(value){
    //       return value.toUpperCase();
    //   },
      //ES6新语法，作为一个方法使用
      toUppercase(value){
          //value接收blog.title的值
          return value.toUpperCase();
      },
      snippet(value) {
        //value接收blog.body的值
        return value.slice(0,100)+"...";
      }
  },
  directives:{
      "rainbow":{
        //钩子函数
        bind(el,binding,vnode){
            el.style.color="#"+Math.random().toString(16).slice(2,8);
        }
      },
      "theme":{
        //钩子函数
        bind(el,binding,vnode){
            if(binding.value=='wide'){
                el.style.maxWidth="1260px";
            }else if(binding.value=='narrow'){
                el.style.maxWidth="560px";
            }

            if(binding.arg=='column'){
                el.style.background="#6677cc";
                el.style.padding="20px";
            }
        }
      }
  }
}
</script>

<style scoped>
#show-blogs{
    margin: 0 auto;
    max-width: 800px;
}

.single-blog{
    padding: 20px;
    margin: 20px 0;
    box-sizing: border-box;
    background: #eee;
    border:1px dotted #aaa;
}

#show-blogs a{
    color:#444;
    text-decoration: none;
}

input[type="text"]{
    padding: 8px;
    width: 100%;
    box-sizing: border-box;
}
</style>
