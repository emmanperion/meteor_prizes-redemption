<template>
  <header class="main-header">
    <b-navbar toggleable="lg" type="light" variant="light">
      <b-navbar-brand href="#" @click.prevent="$router.push({ name: 'home' })" >ResMan</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <button
              class="btn btn-sm btn-secondary my-2 my-sm-0 mr-2"
              v-if="currentUser"
              @click.prevent="$router.push({ name: 'profile' })">
            Profile
          </button>
          <blaze-template
              template="loginButtons"
              tag="button"
              class="btn btn-sm btn-secondary my-2 my-sm-0">
          </blaze-template>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </header>
</template>

<script>
export default {
  name: 'MainHeader',
  meteor: {
    currentUser() {
      return Meteor.user();
    }
  }
}
</script>

<style scoped>

</style>
