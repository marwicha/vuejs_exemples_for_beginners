<template>
   
            <div>
                <h1>Filters & Mixins</h1>

                <input v-model="filterText">

                <ul>
                    <li v-for="(fruit,index) in filteredFruits" 
                    :key="index">
                    {{fruit}}
                    </li>
                </ul>
            </div>
</template>

<script>

import { fruitMixins } from './fruitMixins'

    export default {
      mixins: [fruitMixins]
      
    }
</script>

<style>

</style>
