<template>
  <div class="title-header">
    <span v-text="getTitle"></span>
  </div>
</template>

<script>
export default {
  name: 'TitleHeader',
  props: ['title'],
  computed: {
    getTitle() {
      return this.title ? this.title : 'Rewards'
    }
  }
}
</script>

<style scoped lang="scss">
.title-header {
  background: #0274bb;
  text-align: center;
  padding: 80px 15px;

  span {
    font-size: 30px;
    color: #fff;
    font-weight: bold;
  }
}
</style>
