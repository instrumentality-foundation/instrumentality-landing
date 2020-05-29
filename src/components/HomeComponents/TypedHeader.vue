<template>
    <div id="typed-header">
        <h1 id="typewriter"></h1>
        <h2 id="subtitle" class="uk-animation-slide-bottom-medium">Your project management software with <span>superpowers!</span></h2>
    </div>
</template>

<script>
import Typewriter from "typewriter-effect/dist/core";

export default {
    name: 'TypedHeader',

    mounted() {
        var typewriter = new Typewriter ('#typewriter', {
            loop: false,
            delay: 75,
        });

        if (window.screen.width < 740) {
            typewriter.typeString("Instrumentality").start();
        }
        else {
            typewriter.typeString('To-do')
            .deleteAll()
            .typeString('Projects')
            .deleteAll()
            .typeString('Hobbies')
            .deleteAll()
            .typeString('Instrumentality')
            .start();
        }
    }
}
</script>

<style lang="less" scoped>
@import "../../assets/theme.less";

@min-size: 32;
@max-size: 128;

#typewriter {
    font-family: 'Cantarell', sans-serif;
    cursor: default;
    font-size: calc(32px + (@max-size - @min-size) * ((100vw - 320px) / (@max-vw - @min-vw)));
    color: @text-color-dark;
}

#subtitle {
    font-family: 'Cantarell', sans-serif;
    color: @text-color-dark;
    cursor: default;
    font-size: calc(16px + ((@max-size - 32) - (@min-size - 16)) * ((100vw - 320px) / (@max-vw - @min-vw)));
}

#subtitle span {
    color: @brand-color-dark;
    font-weight: bold;
}

</style>