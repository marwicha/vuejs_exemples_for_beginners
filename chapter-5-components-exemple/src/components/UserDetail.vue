<template>
    <div class="component">
        <h3>You may view the User Details here</h3>
        <p>Many Details</p>

        <p> Username is : {{ name }} </p>

    </div>
</template>

<script>

export default {

// child component

props: ['name']

}
</script>

<style scoped>
    div {
        background-color: lightcoral;
    }
</style>
