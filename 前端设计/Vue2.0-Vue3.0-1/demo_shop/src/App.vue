<template>
  <div class="app-container">
    <!-- Header头部区域 -->
    <Header title="购物车案例"></Header>
    <!-- 循环渲染每一个商品的信息 -->
    <Goods
      v-for="item in list"
      :key="item.id"
      :id="item.id"
      :title="item.goods_name"
      :pic="item.goods_img"
      :price="item.goods_price"
      :state="item.goods_state"
      :count="item.goods_count"
      @state-change="getNewState"
    ></Goods>
    <!-- Footer区域 -->
    <Footer
      :isfull="fullState"
      @full-change="getFullState"
      :amount="amt"
      :all="total"
    ></Footer>
  </div>
</template>

<script>
//导入axios请求库  (npm i axios -S)
import axios from "axios";
//导入需要的组件
import Header from "@/components/Header/Header.vue";
import Goods from "@/components/Goods/Goods.vue";
import Footer from "@/components/Footer/Footer.vue";
import bus from "@/components/eventBus.js";

export default {
  created() {
    //调用请求数据的方法
    this.initCartList();
    bus.$on("share", (val) => {
      this.list.some((item) => {
        if (item.id === val.id) {
          item.goods_count = val.value;
          return true;
        }
      });
    });
  },
  data() {
    return {
      //用来存储购物车的数据，默认为空数组
      list: [],
    };
  },
  //计算属性
  computed: {
    //动态计算出全选的状态是true还是false
    fullState() {
      return this.list.every((item) => item.goods_state === true);
    },
    //已勾选商品的总价格
    amt() {
      //1.先filter过滤
      //2.再reduce累加
      return this.list
        .filter((item) => {
          return item.goods_state;
        })
        .reduce((total, item) => {
          return (total += item.goods_price * item.goods_count);
        }, 0);
    },
    //已勾选商品的总数量
    total() {
      return this.list
        .filter((item) => item.goods_state)
        .reduce((t, item) => {
          return (t += item.goods_count);
        }, 0);
    },
  },
  methods: {
    async initCartList() {
      //调用axios的get方法，请求列表数据
      const { data: res } = await axios.get("https://www.escook.cn/api/cart");
      //只要请求回来的数据，在页面渲染期间要用到，则必须转存到data中
      if (res.status === 200) {
        this.list = res.list;
        console.log(res);
      }
    },
    //接受子组件传递过来的数据
    //e的格式为{id,value}
    getNewState(e) {
      this.list.some((item) => {
        if (item.id === e.id) {
          item.goods_state = e.value;
          return true;
        }
      });
    },
    //接收Footer子组件传递过来的全选按钮的状态
    getFullState(val) {
      this.list.forEach((item) => (item.goods_state = val));
    },
  },
  components: {
    Header,
    Goods,
    Footer,
  },
};
</script>
<style>
</style>
