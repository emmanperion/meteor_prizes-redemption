<template>
  <b-modal id="redeemConfirmation" centered size="lg">
    <template v-slot:modal-header="{ close }">
      <div class="w-100">
        <button class="btn btn-flat" @click="close()">x</button>
      </div>
    </template>

    <template v-slot:default="{ hide }">
      <div class="text-center">
        <h2>Are you sure?</h2>

        <img :src="prize.imageUrl" :alt="prize.name">

        <p>Redeem for <span v-text="prize.name"></span></p>
      </div>
    </template>

    <template v-slot:modal-footer="{ close }">
      <div class="w-100 text-center">
        <button
            class="btn btn-warning btn-pill text-white px-4 py-2 mr-3"
            @click="redeem">
          Yes
        </button>
        <button
            class="btn btn-secondary btn-pill px-4 py-2"
            @click="close()">
          Cancel
        </button>
      </div>
    </template>
  </b-modal>
</template>

<script>
export default {
  name   : "RedeemConfirmationModal",
  props  : ['prize'],
  methods: {
    redeem() {
      if (this.currentUser) {
        Meteor.call('prize.redeemed', this.prize._id._str, (error, result) => {
          if (error) {
            alert(error)
          } else {
            this.$emit('redeemed', this.prize)
          }
        });
      } else {
        alert('You need to be logged in to redeem a prize.')
      }
    }
  },
  meteor : {
    currentUser() {
      return Meteor.user();
    }
  }
}
</script>

<style lang="scss">

</style>
