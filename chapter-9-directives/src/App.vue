<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Custom Directives</h1>

                <p v-highlight:background.delayed="'red'"> Color this </p>

                <p v-local-directive-highlight:background.delayed.blink="'red'"> Color this </p>
               
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                
            }
        },

        directives: {
            // name of the directive
            'local-directive-highlight': {

                bind(el, binding, vnode) {
                      let delayed = 0

                      if (binding.modifiers['delayed']) {
                          delayed = 3000
                      }

                      if (binding.modifiers['blink']) {
                          let mainColor = binding.value
                          let secondColor = 'blue'

                          let currentColor = mainColor

                           setTimeout(() => {

                             setInterval(() => {
                                 // switch colors
                                 currentColor == secondColor ? currentColor = mainColor : currentColor = secondColor

                            if (binding.arg) {

                             el.style.backgroundColor = currentColor
    
                             } else {
                             el.style.color = currentColor
                              }
                             }, 1000);
                            
                         }, delayed)

                      } else {

                           setTimeout(() => {
                             if (binding.arg) {

                             el.style.backgroundColor = binding.value 
    
                             } else {
                             el.style.color = binding.value 
                              }
                         }, delayed)
                      }
                }
            }

        }
    }
</script>

<style>

</style>
