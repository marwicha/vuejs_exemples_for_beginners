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
    :to= "{name: 'userEdit', params: { id: $route.params.id} }"> 
    Edit User </router-link>

</div>
</template>