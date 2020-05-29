<template>
    <div id="paths">
        
        <!-- This next section describes the prices for using Instrumentality -->
        <section class="uk-section uk-child-width-expand@m uk-flex uk-flex-middle" uk-grid>
            <PathCard v-bind:pathName="card1.pathName" v-bind:features="card1.features" v-bind:price="card1.price" />
            <PathCard v-bind:pathName="card2.pathName" v-bind:features="card2.features" v-bind:price="card2.price" />
            <PathCard v-bind:pathName="card3.pathName" v-bind:features="card3.features" v-bind:price="card3.price" />
        </section>

    </div>    
</template>

<script>
import PathCard from './PathCard.vue';

export default {
    name: 'Paths',
    components: {
        PathCard
    },
    data: function() {
        return {
            card1: {
                pathName: 'The hobbyist',
                features: [
                    {name: 'All the productivity features'},
                    {name: 'Integrations with Github and Gitlab'},
                    {name: 'Access to the newest updates'}
                ],
                price: 'Free'
            },
            
            card2: {
                pathName: 'The professional',
                features: [
                    {name: "All hobbyist's perks"},
                    {name: 'Assign skills and experience to teammates'},
                    {name: 'The app learns and adjusts the stats to automatically asign tasks'}
                ],
                price: '$15/team/month (maximum of people in a team: 20)'
            },

            card3: {
                pathName: "The 'I don't follow your rules' person",
                features: [
                    {name: 'Configure your own Instrumentality subscripion with whatever you need! (Upcoming)'}
                ],
                price: 'Varies depending on chosen features'
            }
        }
    }
}
</script>

<style lang="less" scoped>

</style>