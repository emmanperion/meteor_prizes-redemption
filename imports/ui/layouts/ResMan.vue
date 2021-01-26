<template>
  <div>
    <main-header></main-header>
    <div class="main-body">
      <router-view/>
    </div>
    <main-footer></main-footer>
  </div>
</template>

<script>
import MainHeader from './components/Header.vue'
import MainFooter from './components/Footer.vue'

export default {
  name: 'ResMan',
  components: {
    MainHeader,
    MainFooter
  }
}
</script>

<style scoped>

</style>
