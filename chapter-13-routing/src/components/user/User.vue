<template>
<div>
    <h1>The User Page</h1>

     <!-- <p>Loaded ID : {{id}} </p> -->

    <button @click="navigateTo"
     class="btn btn-primary">
      Go to Home
       </button>

       <hr>
       <router-view> </router-view>
</div>

</template>


<script>
export default {
    // data() {
    //     return {
    //         id: this.$route.params.id

    //     }
    // },

    // watch: {
    //     '$route'(to, from) {
    //         this.id = to.params.id
    //     }
    // },

    methods: {
        navigateTo() {
            this.$router.push('/')
        }
    },
}
</script>