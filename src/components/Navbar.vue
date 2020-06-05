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

.uk-navbar-nav li a {
    color: @text-color;
    font-size: 1em;
    font-family: 'Noto Sans', sans-serif;
    text-decoration: none;
    position: relative;
}

.uk-navbar-nav li a::before { // This is adding a nice underline effect
    content: "";
    position: absolute;
    width: 100%;
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: @brand-color;
    visibility: hidden;
    transform: scaleX(0);
    transition: all 0.3s ease-in-out 0s;
}

.uk-navbar-nav li a:hover::before {
    visibility: visible;
    transform: scaleX(1);
}

.uk-navbar-nav li a:hover {
    color: @brand-color;
}

.uk-logo {
  font-size: 1.25em;
}

.uk-logo img {
  height: 1.25em;
  width: auto;
}

.uk-logo span {
  color: @text-color;
}

.uk-logo span:hover {
  color: @brand-color;
}

// As display size goes up...

// What happens with small and medium devices -- Phones & Tablets
@media only screen and (max-width: 960px) {
  .uk-navbar-right, .uk-navbar-center {
    display: none;
  }
}

// What happens with medium sized devices -- Tablets
@media only screen and (min-width: 640px) {
  .uk-logo {
    font-size: 1.50em;
  }
}

// What happens with large devices -- Laptops
@media only screen and (min-width: 960px) {
  .uk-logo {
    font-size: 1.75em;
  }

  .uk-navbar-nav li a {
    font-size: 1.1em;
  }
}

// What happens with extra-large devices -- 4k displays
@media only screen and (min-width: 2560px) {
  .uk-logo {
    font-size: 2em;
  }

  .uk-navbar-nav li a {
    font-size: 1.4em;
  }
}
</style>