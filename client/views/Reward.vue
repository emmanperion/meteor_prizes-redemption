<template>
  <div class="bg-theme">
    <title-header></title-header>

    <div class="container pt-5" v-if="typeof prize !== 'undefined'">
      <div class="row">
        <div class="col-md-6">
          <div class="image-container">
            <img :src="prize.imageUrl" :alt="prize.name">
          </div>
        </div>
        <!-- /.col -->

        <div class="col-md-6">
          <div class="content-container bg-white p-5">
            <h2 v-text="prize.name"></h2>

            <hr>

            <button class="btn btn-warning text-white btn-pill px-4 py-2" v-b-modal.redeemConfirmation>Redeem ></button>

            <hr>

            <p class="m-0" v-text="`${prize.quantity} left in stock`"></p>
          </div>
        </div>
        <!-- /.col -->
      </div>
      <!-- /.row -->

      <hr style="margin: 50px 0;">

      <div class="description-container">
        <div class="row">
          <div class="col-md-3">
            <h3>Description</h3>
          </div>

          <div class="col-md-9">
            <p class="m-0" v-text="prize.description"></p>
          </div>
        </div>
      </div>
    </div>
    <!-- /.container -->

    <redeem-confirmation-modal
        v-if="typeof prize !== 'undefined'"
        :prize="prize"
        @redeemed="redeemed">
    </redeem-confirmation-modal>

    <congratulations-modal :prize="prize"></congratulations-modal>
  </div>
  <!-- /.reward-page -->
</template>

<script>
import { Prizes } from "../../imports/api/prizes.js";
import TitleHeader from '../components/TitleHeader.vue'
import RedeemConfirmationModal from '../components/RedeemConfirmationModal.vue'
import CongratulationsModal from '../components/CongratulationsModal.vue'

export default {
  name      : 'Reward',
  components: {
    TitleHeader,
    RedeemConfirmationModal,
    CongratulationsModal
  },
  data() {
    return {
      id: this.$route.params.id
    }
  },
  methods: {
    redeemed() {
      this.$bvModal.show('redeemSuccess')
      this.$bvModal.hide('redeemConfirmation')
    }
  },
  meteor: {
    $subscribe: {
      prize: function() {
        return [this.id]
      }
    },
    prize() {
      return Prizes.findOne()
    }
  }
}
</script>

<style scoped lang="scss">
.content-container {
  h2 {
    margin-bottom: 50px;
  }

  p {
    font-size: 12px;
  }

  hr {
    margin: 30px 0;
  }
}

.description-container {
  padding-bottom: 90px;
  padding-top: 45px;

  h3 {
    font-weight: bold;
  }

  p {
    font-size: 18px;
  }
}
</style>
