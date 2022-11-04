<template>
  <div>
    <van-cell>
      <!-- 标题区域的插槽 -->
      <template #title>
        <div class="title-box">
          <!-- 标题 -->
          <span>{{title}}</span>
          <!-- 单张图片 -->
          <img :src="cover.images[0]" alt="" class="thumb" v-if="cover.type===1">
        </div>
        <!-- 三张图片    -->
        <div class="thumb-box" v-if="cover.type===3">
          <img :src="item" alt="" class="thumb" v-for="(item,i) in cover.images" :key="i">
        </div>
      </template>
      <!-- label区域的插槽 -->
      <template #label>
        <div class="label-box">
          <span>作者 {{author}} &nbsp;&nbsp; {{cmtCount}} 评论 &nbsp;&nbsp; 发布日期 {{time}}</span>
          <!-- 关闭按钮 -->
          <van-icon name="cross" />
        </div>
      </template>
    </van-cell>
  </div>
</template>

<script>
export default {
  name: 'ArticleInfo',
  // 自定义属性
  props: {
    // 文章的标题
    title: {
      default: '',
      type: String
    },
    author: {
      default: '',
      type: String
    },
    // 评论数
    cmtCount: {
      default: '',
      // 通过数组形式，为当前属性定义多个可能的类型
      type: [Number, String]
    },
    time: {
      default: '',
      type: String
    },
    cover: {
      // 对象或数组默认值必须从一个工厂函数获取
      // default: function () {
      //   这个return的对象就是cover属性的默认值
      //   return { cover: 0 }
      // },
      type: Object
    }
  }
}
</script>

<style lang="less" scoped>
.label-box {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.thumb {
  //矩形黄金比例：0.618
  width: 113px;
  height: 70px;
  background-color: #f8f8f8;
  object-fit: cover;
}
.title-box {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}
.thumb-box {
  display: flex;
  justify-content: space-between;
}
</style>
