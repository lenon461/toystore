<template>
  <div class="text-center">
    <v-progress-circular 
      :value="value" 
      :size="size"
    >
    {{questions[this.count]}}
    </v-progress-circular>
  </div>
</template>
<script>
export default {
  data() {
    return {
      size: 256,
      questions: [
        '질문 1',
        '질문 2',
        '질문 3',
        '질문 4',
        '질문 5',
        ]
    }
  },
  computed: {
    value(){
      return (100 / this.questions.length) * this.count
    }
  },
  props: {
    count: Number,
  },
  methods: {
  },
  updated(){
    if(this.value >= 100){  
      console.log('updated')
      this.$emit('AnsweringEnd')
    }
  }
}
</script>

<style>

</style>