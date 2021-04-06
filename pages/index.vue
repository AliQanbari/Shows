<template>
  <div class="container">
    <div>
      <div v-for="show in shows" :key="show.slug">
        <Show :show="show" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  computed: {
    shows(){
      return this.$nuxt.$store.state.shows;
    }
  }
})
</script>