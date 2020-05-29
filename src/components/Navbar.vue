<template>
  <!-- Main component wrapper -->
  <div class="navigation-component" uk-sticky="sel-target: .uk-navbar-container; cls-active: uk-navbar-sticky">

    <!-- Real navbar container -->
    <nav uk-navbar class="uk-navbar-container">

      <!-- This part will be placed on the left side -->
      <div class="uk-navbar-left"><div>
        <a href="#" class="uk-navbar-item uk-logo">
          <img src="@/assets/Logo/Instrumentality-Logo.svg" alt="The Instrumentality Project Logo" />
          <span class="uk-margin-left">Instrumentality</span>
        </a>
      </div></div>

      <div class="uk-navbar-center">
        <ul class="uk-navbar-nav">
          <li>
            <a href="">Team updates</a>
          </li>
          <li>
            <a href="">Features</a>
          </li>
          <li>
            <a href="">For developers</a>
          </li>
        </ul>
      </div>

      <!-- This part will be displayed on the right side -->
      <div class="uk-navbar-right">
        <div>
          <ul class="uk-navbar-nav">
            <li>
              <a href="">Login</a>
            </li>
            <li>
              <a href="">Signup</a>
            </li>
          </ul>
        </div>
      </div>

    </nav>
  </div>
</template>

<script>
export default {
  name: "Navbar"
};
</script>

<style lang="less" scoped>
@import "../assets/theme.less";

.uk-navbar-container  {
  background-color: rgba(255, 255, 255, 0.75) !important;
  backdrop-filter: blur(5px);
}

.uk-logo img {
  height: 48px;
  width: auto;
}

.uk-logo span {
  color: @text-color;
}

.uk-logo span:hover {
  color: @brand-color;
}

// Diferent screen sizes
@media only screen and (min-width: 2000px) {
  .uk-logo img {
    height: 64px;
    width: auto;
  }
}
</style>