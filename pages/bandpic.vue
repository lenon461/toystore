<template>
  <div>
    <slide>dd</slide>
    <glide>dd</glide>
  </div>
</template>
<script>
import axios from 'axios'
import Glide from '~/components/Glide.vue'
import Slide from '~/components/Slide.vue'

const URL_GETPOSTS = 'http://54.180.80.188:9919/band'
export default {
  components: {
    Glide, Slide
  },
  data() {
    return {
    };
  },
  methods: {
  },

}
</script>

<style>
v-card-title {
  color: #0d55e4;
}
</style>

