<template>
    <div id="foo">
        
    </div>
</template>

<script>
const util = require('util')

console.log("object received: ", this)
import Vue from 'vue';


const component =  Vue.component('name', {

    data: function (payload) {
        
        console.log("PAYLOAD OBJECT: ", payload.$attrs.prop)

        const fromDjango = payload.$attrs.prop;

        for (var prop in fromDjango){
            
            if ( fromDjango.hasOwnProperty(prop) ) {
                console.log(`KEY: ${prop},   VAL: ${fromDjango[prop]}`)
                var newP = document.createElement("p");
                var payLoadText = document.createTextNode(fromDjango[prop]); 
                newP.appendChild(payLoadText); 

                var currentDiv = document.getElementById("foo"); 
                document.body.insertBefore(newP, currentDiv); 

            }

        }


        return {
            data: payload
        }
    },

})

export default component;
</script>

<style>
</style>