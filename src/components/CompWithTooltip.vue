<script setup lang="ts">

import {ref, watch, computed} from 'vue'


interface Props {
    location: any;
    tooltipLabel: string;
}
defineProps<Props>()

const isTooltipActive = ref(false);



</script>


<template>
    <div class="base-container">

        <v-tooltip :location="location" open-delay="200" activator="parent" open-on-click
            v-model="isTooltipActive">{{tooltipLabel}}</v-tooltip>

        <slot>
        </slot>

        <div v-if="isTooltipActive" :class="{ 'nose': true,
        'nose-top': location === 'top',
        'nose-bottom': location === 'bottom',
        'nose-start': location === 'start',
        'nose-end': location === 'end',

  }"></div>


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


    width: 0;
    height: 0;
    border-left: 8px solid transparent;
    border-right: 8px solid transparent;
    border-bottom: 8px solid #424242;
    /* Adjust color as needed */

}

.nose-top {
    top: -10px;
    left: calc(50% - 8px);
    transform: rotate(180deg);
}

.nose-bottom {
    bottom: -10px;
    left: calc(50% - 8px);
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
