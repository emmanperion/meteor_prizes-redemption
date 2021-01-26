<template>
  <div class="bg-theme">
    <title-header title="Your Prizes"></title-header>

    <div class="container">
      <p class="sub-header text-center mt-5 mb-5">Here is the full list of your prizes.</p>

      <div class="row pb-5">
        <div class="col-md-12">
          <b-list-group>
            <b-list-group-item
              v-for="(prize, key) in redeemedPrizes"
              :key="key"
              v-text="prize.name">
            </b-list-group-item>
          </b-list-group>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Prizes } from "../../imports/api/prizes.js";
import TitleHeader from '../components/TitleHeader.vue'

export default {
  name: "Profile",
  components: {
    TitleHeader
  },
  meteor: {
    $subscribe: {
      redeemedPrizes: []
    },
    redeemedPrizes() {
      return Prizes.find({}).fetch()
    }
  }
}
</script>

<style scoped>

</style>
