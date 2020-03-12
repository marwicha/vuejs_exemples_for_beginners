<template>
    <div class="container">
    
    <app-header :quoteCount="quotes.length" :maxQuotes="maxQuotes"> </app-header>
    <app-new-quote @quoteAdded="newQuote"> </app-new-quote>
    <app-quote-grid :quotes="quotes" @quoteDeleted="deleteQuote"></app-quote-grid>

<div class="row" v-if="quotes.length > 0">
<div class="col-sm-12 text-center">
<alert class="alert alert-info">

   Info: Click on a Quote to delete 
</alert>
    </div>
</div>
    


    </div>
</template>

<script>

import QuoteGrid from './components/QuoteGrid.vue'
import NewQuote from './components/NewQuote.vue'
import Header from './components/Header.vue'

    export default {

        components: {
            appQuoteGrid : QuoteGrid,
            appNewQuote: NewQuote,
            appHeader: Header

        },

        data() {
            return {
                quotes: ['Just a quote to see Somehting'],
                maxQuotes: 10
            }
        },

        methods: {
            newQuote(quote) {

                if (this.quotes.length >= this.maxQuotes) {
                    return alert('please delete quotes first!!')
                }

                this.quotes.push(quote)

            },

            deleteQuote(index) {
                this.quotes.splice(index, 1)
            }
        },
        
    }
</script>

<style>
</style>
