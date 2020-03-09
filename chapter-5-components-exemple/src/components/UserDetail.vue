<template>
    <div class="component">
        <h3>You may view the User Details here</h3>
        <p>Many Details</p>

        <p> Username is : {{ switchName() }} </p>

        <button @click="resetName"> Reset name </button>

    </div>
</template>

<script>

export default {

// child component

props: {
    // Multiple types are valid
    myName : { 
        type: String,
        required : true       
    }
},

methods: {
    switchName() {
        return this.myName.split("").reverse().join("");
    },

    resetName() {
        this.myName = "Marwa"

        // emit event from child to parent 
        this.$emit('nameWasReset', this.myName)
    }
},

}
</script>

<style scoped>
    div {
        background-color: lightcoral;
    }
</style>
