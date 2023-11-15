<script setup lang="ts">

interface Props {
    location: string;
}


const porps = defineProps<Props>()
    console.log('foo')



</script>


<template>
    <div class="base-container">



        <slot>


        </slot>

        <div :class="{ 'nose': true,
        'nose-top': location === 'top',
        'nose-bottom': location === 'bottom',
        'nose-start': location === 'start',
        'nose-end': location === 'end',

  }">|</div>


    </div>
</template>


<style scoped>
.base-container {

    position: relative;
    width: fit-content;
}

.nose {

    position: absolute;

}

.nose-top {
    top: -20px;
    left: 50%;
}

.nose-bottom {
    bottom: 0px;
    left: 50%;
}

.nose-start {
    top: 50px;
    left: 0;
}

.nose-end {
    top: 50px;
    right: 0;
}
</style>
