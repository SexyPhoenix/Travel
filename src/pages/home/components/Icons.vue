<template>
  <div class="icons">
    <swiper>
      <swiper-slide
        v-for="(page, index) of pages"
        :key="index"
      >
        <div
          class="icon"
          v-for="item of page"
          :key="item.id"
        >
          <div class="icon-img">
            <img class="icon-img-content" :src="item.imgUrl"/>
          </div>
          <p class="icon-desc">{{item.title}}</p>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>
<script>
export default {
  name: 'HomeIcons',
  data () {
    return {
      iconsList: [{
        'id': 1,
        'imgUrl': 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
        'title': '热门景点'
      }, {
        'id': 2,
        'imgUrl': 'http://img1.qunarzz.com/piao/fusion/1803/20/831d62d2e1c7be02.png',
        'title': '热门景点'
      }, {
        'id': 3,
        'imgUrl': 'http://img1.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png',
        'title': '热门景点'
      }, {
        'id': 4,
        'imgUrl': 'http://img1.qunarzz.com/piao/fusion/1811/f6/e54fad3ea337b02.gif',
        'title': '热门景点'
      }, {
        'id': 5,
        'imgUrl': 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
        'title': '热门景点'
      }, {
        'id': 6,
        'imgUrl': 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
        'title': '热门景点'
      }, {
        'id': 7,
        'imgUrl': 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
        'title': '热门景点'
      }, {
        'id': 8,
        'imgUrl': 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
        'title': '热门景点'
      }, {
        'id': 9,
        'imgUrl': 'http://img1.qunarzz.com/piao/fusion/1803/fa/2548667cb6e902.png',
        'title': '热门景点'
      }]
    }
  },
  computed: {
    pages: function () {
      const pages = []
      this.iconsList.forEach((item, index) => {
        const page = Math.floor(index / 8)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    }
  }
}
</script>
<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  @import '~styles/mixins.styl'
  .icons >>> .swiper-container
    height: 0
    padding-bottom: 50%
  .icon
    position: relative
    overflow: hidden
    float: left
    width: 25%
    height: 0
    padding-bottom: 25%
    .icon-img
      position: absolute
      top: 0
      left: 0
      right: 0
      bottom: .44rem
      box-sizing: border-box
      padding: .1rem
      .icon-img-content
        display: block
        margin: 0 auto
        height: 100%
    .icon-desc
      position: absolute
      left: 0
      right: 0
      bottom: 0
      height: .44rem
      line-height: .44rem
      text-align: center
      color: $darkTextColor
      ellipsis()
</style>
