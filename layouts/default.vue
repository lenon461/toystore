<template>
  <v-app>
    <v-row>
      <v-col cols="12" md="3" style="background: green;">
        <menu-tab></menu-tab>
      </v-col>
      <v-col cols="12" md="9" style="background: white;">
        <nuxt/>
      </v-col>
    </v-row>
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
