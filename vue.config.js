module.exports = {
    css: {
        loaderOptions: {
            less: {
                prependData: `@import "@/assets/theme.less";`
            }
        }
    }
}