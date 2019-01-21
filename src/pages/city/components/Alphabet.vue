<template>
  <div class="list">
    <div class="item">A</div>
    <div class="item">B</div>
    <div class="item">C</div>
    <div class="item">D</div>
    <div class="item">E</div>
    <div class="item">F</div>
    <div class="item">G</div>
    <div class="item">H</div>
    <div class="item">I</div>
    <div class="item">J</div>
    <div class="item">K</div>
    <div class="item">L</div>
    <div class="item">M</div>
  </div>
</template>

<script>
export default {
  name: 'CityAlphabet'
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .list
    display: flex
    flex-direction: column
    justify-content: center
    position: absolute
    top: 1.58rem
    right: 0
    bottom: 0
    width: .4rem
    .item
      line-height: .44rem
      text-align: center
      color: $bgColor
</style>
