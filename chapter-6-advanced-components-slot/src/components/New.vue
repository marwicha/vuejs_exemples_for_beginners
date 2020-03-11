<template>

<div>
    <h3> New Quote</h3>
    <button @click="counter++"> increase </button>

    {{counter}}
</div>

</template>


<script>
export default {

    data() {
        return {
            counter: 0
        }
    },

    destroyed() {
        console.log("destroyed")
    },

    deactivated() {
        console.log("Deactivaed")
    },

    activated() {
        console.log("Activated")
    },
    
}
</script>

<style>

</style>