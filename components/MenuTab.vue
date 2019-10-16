<template>
  <v-tabs
    background-color="indigo"
    dark
    vertical
  >
    <v-tab
      v-for="(i, index) in tabs"
      :key="index"
      :to="i.path"
    >
      {{ i.name }}
      <v-icon>{{ i.icon }}</v-icon>
    </v-tab>
  </v-tabs>
</template>
<script>

export default {
  name: 'menutab',
  data() {
    return {
      tabs: [
        { name: 'home', icon: 'mdi-house', path: '/' },
        { name: 'shopping', icon: 'mdi-shop', path: '/shopping' },
        { name: 'band', icon: 'mdi-shop', path: '/band' },
        { name: 'bandpic', icon: 'mdi-shop', path: '/bandpic' },
        { name: 'pay', icon: 'mdi-shop', path: '/pay' },
      ]
    }
  },
}
</script>


