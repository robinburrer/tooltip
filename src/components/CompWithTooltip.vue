<script setup lang="ts">

import {ref, watch, computed} from 'vue'


interface Props {
    location: any;
    tooltipLabel: string;
}
const porps = defineProps<Props>()


const isTooltipActive = ref(false);

watch(isTooltipActive, () => {
  console.log('foo')
})


const showNose = ref(false)





</script>


<template>
    <div class="base-container">

        <v-tooltip :location="location" open-delay="200" activator="parent"
            v-model="isTooltipActive">{{tooltipLabel}}</v-tooltip>

        <slot>
        </slot>
        <div v-if="isTooltipActive" :class="{ 'nose': true,
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
    height: fit-content;
}

.nose {

    position: absolute;

}

.nose-top {
    top: -20px;
    left: 50%;
}

.nose-bottom {
    bottom: -20px;
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
