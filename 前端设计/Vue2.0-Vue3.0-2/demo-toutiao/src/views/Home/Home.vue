<template>
  <div class="home-container">
    <van-nav-bar title="黑马头条" fixed />
    <!-- 导入、注册，并使用ArticleInfo组件 -->
    <!-- 在使用组件的时候，如果某个属性名是"小驼峰"形式，则绑定属性的时候，建议改写成"连字符"格式。例如： -->
    <!-- cmtCount建议写成cmt-count -->
    <van-pull-refresh v-model="refreshing" :disabled="finished" @refresh="onRefresh">
      <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
        <ArticleInfo v-for="item in artlist" :key="item.id" :title="item.title" :author="item.aut_name" :cmt-count="item.comm_count" :time="item.pubdate" :cover="item.cover"></ArticleInfo>
      </van-list>
    </van-pull-refresh>
  </div>
</template>

<script>
import { getArticleListAPI } from '@/api/articleAPI.js'
import ArticleInfo from '@/components/Article/ArticleInfo.vue'
// 鲁大师 提供了许多牛逼的函数 节流的函数、防抖的函数、操作数组的一系列函数、操作对象的一系列函数（对象的深拷贝、浅拷贝）
import _ from 'lodash'
let fn = null

export default {
  name: 'Home',
  data() {
    return {
      // 页码值
      page: 1,
      // 每页显示多少条数据
      limit: 10,
      // 文章数组
      artlist: [],
      // 是否正在加载下一页数据，如果loading为true，则不会反复触发load事件
      // 每当下一页数据请求回来之后，千万记得，把loading从true改为false
      loading: true,
      // 所有数据是否加载完毕了，如果没有更多数据了，一定要把finished更改成true
      finished: false,
      // 是否正在下拉刷新
      refreshing: true
    }
  },
  created() {
    this.initArticleList()
  },
  activated() {
    fn = this.recordTopHandler()
    window.addEventListener('scroll', fn)
  },
  deactivated() {
    window.removeEventListener('scroll', fn)
  },
  methods: {
    // 封装获取文章列表数据的方法
    async initArticleList(isRefresh) {
      const { data: res } = await getArticleListAPI(this.page, this.limit)
      if (isRefresh) {
        // 证明是下拉刷新；新数据在前，旧数据在后
        this.artlist = [...res, ...this.artlist]
        this.refreshing = false
      } else {
        // 证明是上拉加载更多；就数据在前，新数据在后
        this.artlist = [...this.artlist, ...res]
        this.loading = false
      }
      if (res.length === 0) {
        // 证明没有下一页数据了，直接把finished改为true，表示数据加载完了
        this.finished = true
      }
    },
    // 只要onLoad被调用，就应该请求下一页数据
    onLoad() {
      // 1.让页码值+1
      this.page++
      // 2.重新请求接口获取数据
      this.initArticleList()
    },
    onRefresh() {
      // 1.让页码+1
      this.page++
      // 2.重新请求接口获取数据
      this.initArticleList(true)
    },
    recordTopHandler() {
      return _.debounce(
        () => {
          this.$route.meta.top = window.scrollY
        },
        50,
        { trailing: true }
      )
    }
  },
  components: {
    ArticleInfo
  }
}
</script>

<style lang="less" scoped>
.home-container {
  padding: 46px 0 50px 0;
}
</style>
