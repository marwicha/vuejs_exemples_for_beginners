<template>

<div class="title">
<div> 

<slot name="title">  </slot>

<span style="color: #ccc"> 
  <slot name="subtitle"> The subtitle </slot>
</span>

</div>

<hr>

<div> 


 <!-- Named SLOT -->

<slot name="content">  </slot>


 <!-- DEFAULT SLOT
 <slot>  </slot>
  -->

</div>

</div>

</template>


<script>
export default {
    
}
</script>

<style scoped>

div {

    border: 1px solid #ccc;
    box-shadow: 1px 1px 2px black;
    padding: 30px;
    margin: 30px auto;
    text-align: center;
}

h2 {
  color: red;
}

.title {
  font-style: italic;
}

</style>