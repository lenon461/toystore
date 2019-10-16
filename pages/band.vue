<template>
  <section class="container">
      
    <template>
      <v-card
        height="280"
        width="800"
        class="mx-auto"
      >
        <v-card-title>이 달의 활동왕 </v-card-title>
        <v-card-text>{{MOM}}</v-card-text>
        <v-card-text>
          {{MOM}}님은
          총 {{obj.writepost}}개의 글을 작성하셨습니다. <br>
          총 {{obj.writecomment}}개의 댓글을 남기셨습니다. <br>
          총 {{obj.receivecomment}}개의 댓글을 유도하셨습니다. <br>
          총 {{obj.receiveemoticon}}개의 이모티콘을 유도하셨습니다. <br>
        </v-card-text>
        <v-card-actions>
          <v-btn @click="showMOM">Click</v-btn>
        </v-card-actions>
      </v-card>
    </template>

    <v-card
        v-for="(member, key) in candidate"
        :key="key"
        height="250"
        width="800"
        class="mx-auto"
      >
        <v-card-text>{{key}}</v-card-text>
        <v-card-text>
          {{key}}님은
          총 {{member.writepost}}개의 글을 작성하셨습니다. <br>
          총 {{member.writecomment}}개의 댓글을 남기셨습니다. <br>
          총 {{member.receivecomment}}개의 댓글을 유도하셨습니다. <br>
          총 {{member.receiveemoticon}}개의 이모티콘을 유도하셨습니다. <br>
        </v-card-text>
      </v-card>
  </section>
</template>
<script>
import axios from 'axios'
import AppLogo from '~/components/AppLogo.vue'

const URL_GETPOSTS = 'http://192.168.90.21:9919/band'
export default {
  components: {
    AppLogo
  },
  data() {
    return {
      'MOM' : '',
      'obj' : {},
      'candidate' : {},
    };
  },
  methods: {
     showMOM : async function(){
      const result = await axios.get(URL_GETPOSTS, {
      });
      this.candidate = result.data;
      let point = 0;
      for(let key of Object.keys(result.data)){
        let ele = (result.data[key]);
        if(ele.point > point && key != '나성욱' && key != '이진선'){ 
          point = ele.point
          this.MOM = key;
          this.obj = ele;
        }
      }
      return 1;
    }
  },

}
</script>

<style>
v-card-title {
  color: #0d55e4;
}
</style>

