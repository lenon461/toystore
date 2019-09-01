<template>
  <v-app>
    <v-row style="background: grey;">
      <v-col cols="12" md="3" v-bind:style="[redStyles, overrideStyles]">
        <v-btn :disabled="isbuttonOff" @click="addcount">No</v-btn>
      </v-col>
      <v-col cols="12" md="6" v-bind:style="[blueStyles, overrideStyles]">
        <question-circle v-on:AnsweringEnd="blurring" :count="count"></question-circle>
      </v-col>
      <v-col cols="12" md="3" v-bind:style="[redStyles, overrideStyles]">
        <v-btn :disabled="isbuttonOff" @click="addcount(); addyescount()">Yes</v-btn>
      </v-col>
    </v-row>
    <h1>count{{count}}</h1>
    <h2>yescount{{yescount}}</h2>
    <v-row>
      <result-dialog v-if="isbuttonOff" :yescount="yescount"></result-dialog>

    </v-row>
    <v-row style="background: grey;">3</v-row>
    <v-row>4</v-row>
  </v-app>
</template>

<script>
import QuestionCircle from '~/components/QuestionCircle.vue'
import ResultDialog from '~/components/ResultDialog.vue'

export default {
  components: {
    QuestionCircle, ResultDialog
  },
  data(){
    return {
      count : 0,
      yescount : 0,
      isbuttonOff: false,
      redStyles: {
        background: 'red'
      },
      blueStyles: {
        background: 'blue'
      },
      overrideStyles: {
      },
    }
  },
  methods: {
    addcount(){
      this.count++;
    },
    addyescount(){
      this.yescount++;
    },
    blurring(){
      console.log('blur')
      this.overrideStyles.background = "grey"
      this.isbuttonOff = true
      this.isdialogOff = false
    }
  }
}
</script>

<style>
</style>

