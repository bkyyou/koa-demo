<template>
 <div class="aaa-container">
   aaaa
 </div>
</template>

<script>
export default {
 name: 'aaa',
 data() {
   return {

   }
 },
 componetns: {

 },
 beforeRouterEnter(to, form, next) {
   next(vm => {
     console.log('to', to)
   })
 },
 mounted() {

 },
 methods: {

 }
}
</script>

<style>
</style>
