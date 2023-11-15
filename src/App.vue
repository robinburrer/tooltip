<script setup lang="ts">

import  WithTooltipVue from './components/CompWithTooltip.vue';

const handleActive = () => {
  console.log('foo')
}

</script>

<template>
  <b>sdf</b>
  <WithTooltipVue location="top">
    <v-btn type="submit" color="primary" class="mb-4">
      <v-tooltip activator="parent" location="top">Tooltip</v-tooltip>
      Click me
    </v-btn>
  </WithTooltipVue>

  <WithTooltipVue location="bottom">
    <v-btn type="submit" color="primary" class="mb-4">
      <v-tooltip activator="parent" location="bottom">Tooltip</v-tooltip>
      Click me
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
