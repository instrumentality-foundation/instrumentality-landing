<template>

  <div id="app">

    <!-- Navigation bar component -->
    <Navbar />

    <router-view />

    <!-- Footer component with credits and everything -->
    <Footer />

  </div>

</template>

<script>
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';
import UIkit from "uikit";
import Icons from "uikit/dist/js/uikit-icons";

UIkit.use(Icons);

export default {
  name: 'App',
  components: {
    Navbar,
    Footer
  }
}
</script>

<style lang="less">
  @import "../node_modules/uikit/src/less/uikit.less";
  @import "./assets/theme.less";

  
</style>
