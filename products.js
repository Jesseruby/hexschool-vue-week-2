import { createApp } from 'https://cdnjs.cloudflare.com/ajax/libs/vue/3.0.9/vue.esm-browser.js';

createApp({
  data() {
    return {
      apiUrl: 'https://vue3-course-api.hexschool.io/v2',
      apiPath: 'hexschoolvue',
      //原始產品
      product:[ 
        {
          category: "甜甜圈",
          content: "14 x 14 公分",
          description: "淋上濃郁的草莓糖霜，中心填入滑順不膩口的卡士達內餡，每一口都能吃到Q彈麵包體搭配酸甜草莓滋味，帶來滿滿幸福感！",
          id: "-L9tH8jxVb2Ka_DYPwng",
          is_enabled: false,
          origin_price: 150,
          price: 99,
          title: "草莓糖霜夾心甜甜圈",
          unit: "個",
          num: 0,
          imagesUrl: [
            "https://images.unsplash.com/photo-1626094309830-abbb0c99da4a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2832&q=80",
            "https://images.unsplash.com/photo-1604287094096-59a7dee979e1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80",
            "https://images.unsplash.com/photo-1604286888686-b262011bd4a8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80"
          ]
        },
        {
          category: "蛋糕",
          content: "10 x 60 公分",
          description: "蜜蜂蜜蛋糕，烤出金黃色飽滿色澤，夾層夾上酸酸甜甜的檸檬餡，清爽可口的滋味讓人口水直流！",
          id: "-McJ-VvcwfN1_Ye_NtVA",
          is_enabled: true,
          origin_price: 1000,
          price: 900,
          title: "蜂蜜檸檬蛋糕",
          unit: "條",
          num: 10,
          imagesUrl: [
            "https://images.unsplash.com/photo-1515754164677-ec9796621bcb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
            "https://images.unsplash.com/photo-1605466237772-cdc947448e3b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGxlbW9uJTIwY2FrZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
            "https://images.unsplash.com/photo-1515686954815-8667163e4edb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
          ]
        },
        {
          category: "蛋糕",
          content: "1 / 6 英吋(Inch)",
          description: "半熟巧克力有三層結構，層層夾帶著巧克力糕體、布朗尼、巧克力醬，讓半熟蛋糕充滿變化，新鮮食材口舌間輕盈滑步。",
          id: "-McJ-VyqaFlLzUMmpPpm",
          is_enabled: true,
          origin_price: 700,
          price: 600,
          title: "暗黑半熟巧克力蛋糕",
          unit: "片",
          num: 15,
          imagesUrl: [
            "https://images.unsplash.com/photo-1565792508300-25aefe1306ce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80",
            "https://images.unsplash.com/photo-1609105772057-3fa55ed2ceb7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80",
            "https://images.unsplash.com/photo-1607257882338-70f7dd2ae344?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1333&q=80",
          ]
        }
      ],
      //暫存產品
      tempProduct:[],
    }//.return
  },//.data
  methods:{
    checkAdmin() {
      const url = `${this.apiUrl}/api/user/check`;
      axios.post(url)
        .then(() => {
          this.getData();
        })//.then
        .catch((err) => {
          console.dir(err);
          // alert(err.data.message);// 會出錯，不知道為什麼？
          window.location = 'index.html';// 失敗轉回登入畫面
        })//.catch
    },//.checkAdmin
    getData() {
      const url = `${this.apiUrl}/api/${this.apiPath}/admin/products`;
      axios.get(url)
        .then((response) => {
          this.products = response.data.products;
        })//.then
        .catch((err) => {
          console.dir(err);
          //alert(err.data.message); // 會出錯，不知道為什麼？
        })//.catch
    },//.getData
    restoreProduct() {
      //重新載入產品
      this.tempProduct = [...this.product];
    },//.restoreProduct
    removeProduct(index) {
      // 刪除一個產品
      this.tempProduct.splice(index, 1);
    },//.removeProduct
  },//.methods
  mounted() {
    // 取出 Token
    const token = document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/, '$1');
    axios.defaults.headers.common.Authorization = token;
    this.checkAdmin();
    //載入產品
    this.tempProduct = [...this.product];
  },//.mounted
}).mount('#product');
