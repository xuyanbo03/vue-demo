<template>
  <div class="row" id="translateForm">
      <div class="col-md-6 col-md-offset-3">
        <form id="transForm" class="well form-inline" v-on:submit="forSubmit">
            <input class="form-control" type="text" placeholder="请输入需要翻译的内容" v-model="textToTranslate">
            <select class="form-control" v-model="language">
                <option value="en">English</option>
                <option value="zh">Chinese</option>
                <option value="mn">Mongolian</option>
                <option value="ko">Korean</option>
                <option value="ja">Japanese</option>
                <option value="ru">Russian</option>
            </select>
            <input class="btn btn-primary" type="submit" value="翻译">
        </form>
      </div>
  </div>
</template>

<script>
export default {
  name: 'translateForm',
  data(){
      return {
          textToTranslate:"",
          language:""
      }
  },
  methods:{
      forSubmit:function (e) {
          //事件注册，注册事件formSubmit,参数formSubmit与forSubmit方法不同
          this.$emit("formSubmit",this.textToTranslate,this.language);
          e.preventDefault();
      }
  },
  created:function(){
      this.language="en";
  }
}
</script>

<style scoped>
#transForm{
    border-radius: 10px;
    border: 1px solid #ccc;
}
</style>
