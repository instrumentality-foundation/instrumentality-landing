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
        features: Array,
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
        margin-bottom: 1em;
    }

    ul {
        list-style: none;
        color: @text-color;
        font-family: 'Noto Sans', sans-serif;
        font-size: 1em;
        padding: 0;
    }

    ul li {
        margin-bottom: .5em;
    }

    p, h3 {
        color: @text-color;
        font-family: 'Noto Sans', sans-serif;
    }

    h3 {
        font-size: 1.2em;
    }

    p {
        font-size: .85em;
    }

    hr::before,
        hr::after,
        hr {
            border-color: @brand-color-sister;
        }

    @media only screen and (min-width: 960px) {
        .pathcard {
            width: 32%;
        }

        ul {
            font-size: 1.2em;
        }

        h3 {
            font-size: 1.5em;
        }

        p {
            font-size: 1em;
        }
    }

    @media only screen and (min-width: 2560px) {
        ul {
            font-size: 1.5em;
        }

        h3 {
            font-size: 1.7em;
        }

        p {
            font-size: 1.2em;
        }
    }

</style>