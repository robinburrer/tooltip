<script setup lang="ts">
    console.log('foo')



</script>


<template>
    <div class="base-container">



        <slot>


        </slot>

        <div class="nose">|</div>

    </div>
</template>


<style scoped>
.base-container {

    position: relative;
    width: fit-content;
}

.nose {
    top: -20px;
    left: 50%;
    position: absolute;
    color: red;
}
</style>