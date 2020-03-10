<template>
    <div class="component">
        <h3>You may edit the User here</h3>
        <p>Edit me!</p>

        <p> User age: {{ userAge }}</p>

        <button @click="editAge"> Edit age </button>

    </div>
</template>

<script>

import { eventBus } from '../main'

export default {

    props: ['userAge'],

    methods: {
        editAge() {
            
        this.userAge = 30

        // To pass data from child component to another child
        //eventBus.$emit('ageWasEdited', this.userAge)

        // Acces eventBus method

        eventBus.changeAge(this.userAge)

        }
        
    }
}

</script>

<style scoped>
    div {
        background-color: lightgreen;
    }
</style>
