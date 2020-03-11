<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
               
               <button @click="selectedComponent= 'appQuote'"> Quote </button>
               <button @click="selectedComponent= 'appAuthor'"> Author </button>
               <button @click="selectedComponent= 'appNew'"> New </button>

                <p> {{  selectedComponent }} </p>

                  <!-- Dynamic component to replace some content -->

                  <!-- Keep alive preserve the state -->
                  
                <keep-alive><component :is="selectedComponent">
                    <p> Default Content </p>
                    
                </component> </keep-alive>

               <!-- <app-quote> 

                   <h2 slot="title"> {{ quoteTitle }} </h2>

                   <p slot="content"> A wonderful Quote </p>

                   <!-- DEFAULT SLOT
                   
                   <p> A wonderful Quote </p>
                    -->

               <!-- </app-quote> -->
               
               
            </div>
        </div>
    </div>
</template>

<script>

import Quote from './components/Quote.vue'
import Author from './components/Author.vue'
import New from './components/New.vue'

    export default {

        components: {

            appQuote: Quote,
            appAuthor: Author,
            appNew: New
        },

        data() {
            return {
                quoteTitle: "The Quote",
                selectedComponent: "appQuote"
            }
        }
        
    }
</script>

<style>


</style>
