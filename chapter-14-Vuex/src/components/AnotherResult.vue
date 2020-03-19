<template>
<div>
    <p>Counter is: {{ doubleCounter }}</p>

    <p> Number of clicks {{ stringCounter }} </p>
</div>
</template>

<script>

import { mapGetters } from 'vuex'

    export default {
        // props: ['counter']

        //computed: {

            // counter() {
            //     // return this.$store.state.counter * 2
            //     return this.$store.getters.doubleCounter
            // },
            // clicks() {
            //     return this.$store.getters.stringCounter
            // }
           
       // }
       // will created computed properties
       computed: {

           ...mapGetters([
                'doubleCounter',
                'stringCounter'
           ])
       }
    }
</script>