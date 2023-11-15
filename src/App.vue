<script setup lang="ts">
import {ref, watch} from 'vue'

import  WithTooltipVue from './components/CompWithTooltip.vue';




</script>

<template>
  <br>
  <br>
  <WithTooltipVue location="top" tooltip-label="top">
    <v-btn type="submit" color="primary">
      Click me
    </v-btn>
  </WithTooltipVue>
  <br>
  <WithTooltipVue location="bottom" tooltip-label="bottom 2">
    <v-btn type="submit" color="primary">

      Click me 2
    </v-btn>
  </WithTooltipVue>
</template>


<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
