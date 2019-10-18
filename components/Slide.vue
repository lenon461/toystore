<template>
  <v-container>
    
  
    <v-carousel>
      <v-carousel-item
        v-for="(banner,index) in banners"
        :key="index"
        
          :src="banner"
          class="grey lighten-2"
          :href="banner.src" 
      >
      </v-carousel-item>
      
    </v-carousel>
<!--     
      <v-btn @click="get">
        슬라이드로 보기
      </v-btn> -->
  </v-container>
</template>
<script>
import axios from 'axios'


  export default {
    data () {
      return {
        banners: [],
      }
    },
    created(){
      this.get();
    },
    methods: {
      get() {
        console.log("@@@")
        const URL_GETPICSS = 'http://54.180.80.188:9919/bandpic'
        axios.get(URL_GETPICSS).then((result) => {
          this.banners = Object.values(result.data);
          for(let i = 0; i < this.banners.length; i++){
            const ele = this.banners[i];
            this.banners[i] = {'src' : ele};
          }
          // this.banners = Object.values(result.data);
        });
        console.log("@@@")
          console.log(this.banners)
      }
    }
  }
</script>
