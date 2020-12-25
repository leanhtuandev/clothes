<template>
  <div id="home">
    <Header/>
    <Banner/>
    <Category/>
    <banner-3/>
    <NewProducts/>
    <Footer/>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'
import Banner from '@/components/Banner.vue'
import NewProducts from '@/components/NewProducts.vue'
import Footer from '@/components/Footer.vue'
import Category from '@/components/Category.vue'
import Banner3 from '../components/Banner3.vue'

export default {
  name: 'home',
  components: {
    Header,
    Banner,
    NewProducts,
    Footer,
    Category,
    Banner3

  }
}
</script>
