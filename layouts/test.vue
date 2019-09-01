<template>
  <v-app>
  </v-app>
</template>
<script>
import MenuTab from '~/components/MenuTab.vue'

export default {
  name: 'defaultlayout',
  components: {
    MenuTab,
  },
  head(){
    return {
      title: '메인페이지'
    }
  }

}
</script>
