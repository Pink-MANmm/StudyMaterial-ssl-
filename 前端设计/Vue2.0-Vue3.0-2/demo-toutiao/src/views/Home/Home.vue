<template>
  <div class="home-container">
    <van-nav-bar title="黑马头条" fixed />
    <!-- 导入、注册，并使用ArticleInfo组件 -->
    <!-- 在使用组件的时候，如果某个属性名是"小驼峰"形式，则绑定属性的时候，建议改写成"连字符"格式。例如： -->
    <!-- cmtCount建议写成cmt-count -->
    <ArticleInfo v-for="item in artlist" :key="item.id" :title="item.title" :author="item.aut_name" :cmt-count="item.comm_count" :time="item.pubdate" :cover="item.cover"></ArticleInfo>
  </div>
</template>

<script>
import { getArticleListAPI } from '@/api/articleAPI.js'
import ArticleInfo from '@/components/Article/ArticleInfo.vue'

export default {
  name: 'Home',
  data() {
    return {
      // 页码值
      page: 1,
      // 每页显示多少条数据
      limit: 10,
      // 文章数组
      artlist: []
    }
  },
  created() {
    this.initArticleList()
  },
  methods: {
    // 封装获取文章列表数据的方法
    async initArticleList() {
      const { data: res } = await getArticleListAPI(this.page, this.limit)
      this.artlist = res
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
  .van-nav-bar {
    background-color: #007bff;
  }
  /deep/.van-nav-bar__title {
    color: white;
  }
}
</style>
