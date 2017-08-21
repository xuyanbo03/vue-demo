<template>
  <div id="translateOutput">
    {{translatedText}}
  </div>
</template>

<script>
export default {
  name: 'translateOutput',
  props:[
      "translatedText"
  ]
}
</script>

<style scoped>
#translateOutput{
    text-align: center;
    font-family: sans-serif;
    font-size: 50px;
}
</style>
