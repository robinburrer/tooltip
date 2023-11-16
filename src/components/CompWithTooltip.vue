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

        <div :class="{ 'triangle': true,
        'triangle--visible': isTooltipActive,
        'triangle--top': location === 'top',
        'triangle--bottom': location === 'bottom',
        'triangle--start': location === 'start',
        'triangle--end': location === 'end',
        }"></div>
    </div>
</template>


<style scoped>
.base-container {
    position: relative;
    width: fit-content;
    height: fit-content;
}

.triangle {
    position: absolute;
    transition: all 0.2s ease-in-out;
    opacity: 0;
    width: 0;
    height: 0;
    border-left: 8px solid transparent;
    border-right: 8px solid transparent;
    border-bottom: 8px solid #424242;
}

.triangle--visible {
    opacity: 1;
}

.triangle--top {

    top: -10px;
    left: calc(50% - 8px);
    transform: rotate(180deg);
}

.triangle--bottom {
    bottom: -10px;
    left: calc(50% - 8px);
}

.triangle--start {
    top: 50px;
    left: 0;
}

.triangle--end {
    top: 50px;
    right: 0;
}
</style>
