<template>
<div>
    <h3>Some User Details</h3>

    <p> Loaded ID: {{ $route.params.id}}</p>

     <!-- binding :to in order to pass other than string  -->

    <!-- <router-link tag="button" class="btn btn-primary"
    :to="'/user/' + $route.params.id + '/edit'"> 
    Edit User </router-link> -->

    <!-- a better way using named routing -->

    <router-link tag="button" class="btn btn-primary"
    :to= "link"> 
    Edit User </router-link>

</div>
</template>

<script>
export default {
    data() {
        return {
            link:  {
                    name: 'userEdit', 
                    params: { id: this.$route.params.id },
                    hash: '#data'
                } }
    },

   // life cycle hook implemented by the view router
   // we cannot acces our vue instance or data here in this method hook
    beforeRouteEnter (to, from, next) {
        // cannot do this
        // this.link
        // needs a callback to access data
        // next(vm => {
        //     vm.link
        // })
        // in case user authentificated call next otherwise next(false)

        if (true) {
         next()
        } else {
         next(false)
        }
    },

    // before navigating away
    beforeRouteLeave (to, from, next) {

        if (this.confirmed) {
           next();
        } else {
            if ( confirm("Are you sure ?")) {
                next()
            } else {
                next(false)
            }
        }
    }
}
</script>