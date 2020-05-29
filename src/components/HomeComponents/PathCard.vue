<template>
    <div class="pathcard">
        <div class="uk-card">
            <div class="uk-card-header">
                <h3 class="uk-text-center">{{pathName}}</h3>
                <hr class="uk-divider-icon">
            </div>
            <div class="uk-card-body">
                <ul class="uk-text-center">
                    <li v-for="item in features" :key="item.name">
                        {{item.name}}
                    </li>
                </ul>
                <hr class="uk-divider-icon">
                <p class="price uk-text-center">Price: {{price}}</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'PathCard',
    props: {
        pathName: String,
        features: [],
        price: String
    }
}
</script>

<style lang="less" scoped>
@import "@/assets/theme.less";

    .pathcard {
        width: 80%;
    }

    .uk-card {
        background: white;
        margin: 12px;
    }

    ul {
        list-style: none;
        color: @text-color;
        font-family: 'Noto Sans', sans-serif;
        font-size: calc(12px + (32 - 12) * ((100vw - 320px) / (3840 - 320)));
    }

    ul li {
        margin-bottom: 5px;
    }

    p, h3 {
        color: @text-color;
        font-family: 'Noto Sans', sans-serif;
    }

    h3 {
        font-size: calc(12px + (48 - 12) * ((100vw - 320px) / (3840 - 320)));
    }

    p {
        font-size: calc(12px + (28 - 12) * ((100vw - 320px) / (3840 - 320)));
    }
</style>