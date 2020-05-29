<template>
  <div class="card uk-flex uk-flex-center uk-margin-medium-top ">
    <div class="uk-card uk-card-small">
      <div class="uk-card-body uk-text-center">
        <div class="uk-card-header">
          <div class="uk-width-1-1">
            <img
              :src='imageSource'
              alt="Project Manager"
              width="128px"
              height="128px"
              :style="bgcolor"
            />
          </div>
          <h3 class="uk-text-center uk-width-1-1">{{header}}</h3>
          <hr class="uk-divider-icon" />
        </div>
        <p>
          {{content}}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: {
    imageSource: String,
    header: String,
    content: String,
    bgcolor: String
  },
};
</script>

<style lang="less" scoped>
@import "@/assets/theme.less";

.uk-card {
  background: white;
  width: 80%;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.16);
}

.uk-card-header img {
  border-radius: 15px;
  min-height: 128px;
}

.uk-card-header h3 {
  font-size: calc(18px + (64 - 18) * ((100vw - 320px) / (3840 - 320)));
  font-family: 'Noto Sans', sans-serif;
  color: @text-color;
}

.uk-card-body p {
  font-size: calc(14px + (32 - 16) * ((100vw - 320px) / (3840 - 320)));
  font-family: 'Noto Sans', sans-serif;
  color: @text-color;
}

hr::before,
hr::after,
hr {
  border-color: @brand-color-sister;
}

@media only screen and (min-width: 1920px) {
  .uk-card-header img {
    width: 256px;
    height: 256px;
  }
}

@media only screen and (min-width: 740px) {
  .uk-card-header img {
      box-shadow: 0 6px 8px 0 rgba(0, 0, 0, 0.5), 0 6px 24px 0 rgba(0, 0, 0, 0.28);
  }
}
</style>
