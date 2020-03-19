<template>
<div>

<h3>Edit the User</h3>

<div style="height: 700px">  </div>

<p id="data"> Some extra data</p>

<hr> 

<button class="btn btn-primary"
 @click="confirmed = true">
  Confirm 
  </button>

</div>
</template>

<script>
export default {

    data() {
        return {
            confirmed: false
        }
    }
}
</script>