<template>
  <b-modal id="redeemSuccess" centered size="lg">
    <template v-slot:modal-header="{ close }">
      <div class="w-100">
        <button class="btn btn-flat" @click="close()">x</button>
      </div>
    </template>

    <template v-slot:default="{ hide }">
      <div class="text-center">
        <h2>Congratulations!</h2>

        <span>You redeemed</span>
        <br>
        <span v-text="prize.name"></span>.
      </div>
    </template>

    <template v-slot:modal-footer="{ close }">
      <div class="w-100 text-center">
        <button
            class="btn btn-warning btn-pill text-white px-4 py-2 mr-3"
            @click="$router.push({ name: 'home'})">
          Yes
        </button>
      </div>
    </template>
  </b-modal>
</template>

<script>
export default {
  name: "CongratulationsModal",
  props: ['prize'],
}
</script>

<style scoped>

</style>
