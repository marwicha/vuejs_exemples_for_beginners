<template>
    <div class="component">
        <h3>You may view the User Details here</h3>
        <p>Many Details</p>

        <p> Username : {{ switchName() }} </p>

        <p> User age : {{ userAge }} </p>

        <button @click="resetName"> Reset name </button>


        <button @click="resetFn()"> Reset name with callback </button>

    </div>

</template>

<script>

import { eventBus } from '../main';

export default {

// child component

props: {
    // Multiple types are valid
    myName : { 
        type: String,
        required : true       
    },

    resetFn: Function,

    userAge: Number
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

// hook
created() {
// listner keeps running from the begining of this component on

 eventBus.$on('ageWasEdited', (age) => {

  this.userAge = age;
});

}
}
</script>

<style scoped>
    div {
        background-color: lightcoral;
    }
</style>
