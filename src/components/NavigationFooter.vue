<template>
  <div class="navigation-footer">
    <el-button class="left-button" @click="$emit('leftButtonClicked')" type="primary" text>{{this.leftButtonText}}</el-button>
    <el-button class="right-button" @click="$emit('rightButtonClicked')" type="primary" bg>{{this.rightButtonText}}</el-button>
  </div>
</template>

<script>
export default {
  name: 'NavigationFooter',
  emits: ['leftButtonClicked', 'rightButtonClicked'],
  props: {
    leftButtonText: String,
    rightButtonText: String,
  }
}
</script>

<style scoped>

.navigation-footer {
  display: flex;
  justify-content: space-around;
}

.left-button {
  /*margin-left: auto;*/
}

.right-button {
  /*margin-left: auto;*/
}

</style>
