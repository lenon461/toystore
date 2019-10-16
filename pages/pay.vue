<template>
  <section class="container">
    <div>
      <q-btn
        color="green" text-color="black" label="Standard"
        @click="request_pay">
        결제하기
      </q-btn>
    </div>
  </section>
</template>

<script>
import AppLogo from '~/components/AppLogo.vue'


export default {
  components: {
    AppLogo
  },
  head: {
    script: [
      { src: 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js' }
    ],
    link: [
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto' }
    ]
  },
  methods: {
    request_pay(){
      this.$IMP().request_pay({
          pg: 'html5_inicis',
          pay_method: 'card',
          merchant_uid: 'merchant_' + new Date().getTime(),
          name: '주문명:결제테스트',
          amount: 14000,
          buyer_email: 'iamport@siot.do',
          buyer_name: '구매자이름',
          buyer_tel: '010-1234-5678',
          buyer_addr: '서울특별시 강남구 삼성s동',
          buyer_postcode: '123-456'
      }, (result_success) => {
          //성공할 때 실행 될 콜백 함수
          var msg = '결제가 완료되었습니다.';
          msg += '고유ID : ' + result_success.imp_uid;
          msg += '상점 거래ID : ' + result_success.merchant_uid;
          msg += '결제 금액 : ' + result_success.paid_amount;
          msg += '카드 승인번호 : ' + result_success.apply_num;
          alert(msg);
      }, (result_failure) => {
          //실패시 실행 될 콜백 함수
          var msg = '결제에 실패하였습니다.';
          msg += '에러내용 : ' + result_failure.error_msg;
          alert(msg);
      })
    }
  }
}
</script>

<style>
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>

