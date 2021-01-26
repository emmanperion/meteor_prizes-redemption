<template>
  <component :is="layout">
    <router-view />
  </component>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import LayoutFull from './layouts/Full.vue'
import LayoutResman from './layouts/ResMan.vue'

export default {
  name: "App",
  components: {
    LayoutFull,
    LayoutResman
  },
  computed: {
    layout () {
      if (this.$route.meta.layout === 'full') return 'layout-full'
      return 'layout-resman'
    }
  }
}
</script>

<style lang="scss">
body {
  padding: 0;
  margin: 0;
}

.bg-theme {
  background: #f3f3f3;
}

.image-container {
  img {
    max-width: 100%;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
  }
}

.content-container {
  padding: 50px 15px;

  span {
    font-size: 20px;
    font-weight: bold;
  }
}

.btn-pill {
  border-radius: 50px;
}

// CustomModal
#redeemSuccess,
#redeemConfirmation {
  .modal-header {
    border-bottom: 0 !important;
    padding: 0 15px;
  }
  .modal-footer {
    border-top: 0 !important;
    padding-bottom: 40px;
  }

  h2 {
    font-weight: bold;
    margin-bottom: 20px;
  }

  img {
    border-radius: 100%;
    margin-bottom: 20px;
    max-width: 300px;
  }

  button.btn-flat {
    font-size: 30px;
    float: right;
  }

  button:not(.btn-flat) {
    width: 200px;
  }
}

// Accounts
#login-dropdown-list {
  top: 28px !important;
  right: 0 !important;
  left: auto !important;
}
#login-buttons {
  .login-link-and-dropdown-list {
    .login-link-text {
      text-decoration: none;
      color: #fff;
    }
  }
}
</style>
