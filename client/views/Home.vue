<template>
  <div class="bg-theme">
    <title-header></title-header>

    <div class="container">
      <p class="sub-header mt-5 mb-5">Here is the full list of prizes that you can win.</p>

      <div class="row pb-5">
        <div class="col-md-4 mb-3" v-for="(prize, key) in prizes" :key="`${prize.name}${key}`">
          <div class="bg-white">
            <div class="image-container">
              <img :src="prize.imageUrl" :alt="prize.name">
            </div>

            <div class="content-container text-center bg-white">
              <span v-text="`Win a ${prize.name}`" class="d-block mb-4"></span>

              <button class="btn btn-warning text-white btn-pill px-4 py-2" @click.prevent="$router.push({ name: 'reward', params: { id: prize._id } })">Redeem ></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Prizes } from "../../imports/api/prizes.js";
import TitleHeader from '../components/TitleHeader.vue'

export default {
  name: 'Home',
  components: {
    TitleHeader
  },
  data () {
    return {}
  },
  meteor: {
    $subscribe: {
      prizes: []
    },
    prizes() {
      return Prizes.find({}).fetch()
    }
  }
}
</script>

<style scoped lang="scss">
.sub-header {
  text-align: center;
  font-size: 18px;
}
</style>
