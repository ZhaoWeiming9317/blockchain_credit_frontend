<template>
  <div class="home_page_wrapper">
    <TopNavigation></TopNavigation>
    <MainPage></MainPage>
    <BackgroundPhoto></BackgroundPhoto>
  </div>
</template>

<script>
import TopNavigation from './TopNavigation'
import MainPage from './MainPage'
import BackgroundPhoto from './BackgroundPhoto'
export default {
  name: 'HomePage',
  components: {
    TopNavigation,
    MainPage,
    BackgroundPhoto
  }
}
</script>

<style scoped>
  .home_page_wrapper{
    width: 100%;
    height: 100%;
  }
</style>
