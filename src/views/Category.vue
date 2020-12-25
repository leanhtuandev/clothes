<template>
  <div id="categorys">
      <Header/>
      <Banner/>
      <div class="container-fluid">
          <div class="categorys-content">
            <div class="categorys-title">
                <div class="title">
                    <h2 style="text-transform: uppercase; font-weight: bold;">Quần áo nam</h2>
                    <p style="">Quần áo nam</p>
                </div>
            </div>
            <div class="categorys-list row">
                <div class="col-md-3 filter-category">
                    <div class="price-range">
                        <h5>Khoảng giá</h5>
                        <input type="number" placeholder="đ Từ"> -
                        <input type="number" placeholder="đ Đến">
                        <button>Tìm kiếm</button>
                    </div>
                    <div class="status-category">
                        <h5>Tình trạng</h5>
                        <span><input type="radio" name="status">Sản phẩm mới</span>
                        <span><input type="radio" name="status">Sản phẩm đã dùng</span>
                    </div>
                    <div class="evaluate">
                        <h5>Đánh giá</h5>
                        <div class="five-star star">
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked" ></span>
                            <span class="fa fa-star checked"></span>
                        </div>
                        <div class="four-star star">
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star"></span>
                            <span style="padding-left: 10px">Trở lên</span>
                        </div>
                        <div class="three-star star">
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star"></span>
                            <span class="fa fa-star"></span>
                            <span style="padding-left: 10px">Trở lên</span>
                        </div>
                        <div class="two-star star">
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star"></span>
                            <span class="fa fa-star"></span>
                            <span class="fa fa-star"></span>
                            <span style="padding-left: 10px">Trở lên</span>
                        </div>
                        <div class="one-star star">
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star"></span>
                            <span class="fa fa-star"></span>
                            <span class="fa fa-star"></span>
                            <span class="fa fa-star"></span>
                            <span style="padding-left: 10px">Trở lên</span>
                        </div>
                        <button>Xóa tất cả</button>
                    </div>
                </div>
                <div class="col-md-9 category-items">
                    <div class="row">
                        <div v-for="image in images" :key="image.id">
                            <router-link to="/Detail">
                                <div class="col-lg-3 col-md-4 cl-sm-6 col-xs-12 item-products">
                                    <img :src="image.link" alt="" style="    max-width: -webkit-fill-available;max-height: 383px;">
                                    <p style=" text-align: center; color: #767677">{{image.tag}}</p>
                                    <h4 style=" text-align: center;font-size: 12px; text-transform: uppercase; color: black">{{image.title}}</h4>
                                    <p style="text-align: center; color: #00d237; font-size: 16px;font-size: 12px; color: black"> {{image.price}}đ</p>
                                </div>
                            </router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
      <Footer/>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Banner from '@/components/Banner.vue'
import Footer from '@/components/Footer.vue'
export default {
  name: 'category',
  components: {
    Header,
    Banner,
    Footer
  },
  data () {
    return {
      index: 0,
      images: [
        { link: require('../components/public/img/1.jpg'), id: 0, tag: 'Nam Sport Inspired', title: 'Quần short Chelsea 3 Sọc', price: 650000 },
        { link: require('../components/public/img/2.jpg'), id: 1, tag: 'Nam Originals', title: 'CTS MULTI TEE', price: 350000 },
        { link: require('../components/public/img/3.jpg'), id: 2, tag: 'Nam Đánh Gôn', title: 'Áo polo 3 Sọc Basic', price: 906500 },
        { link: require('../components/public/img/4.jpg'), id: 3, tag: 'Nam Originals', title: 'CTS CIRCLE TEE', price: 350000 },
        { link: require('../components/public/img/1.jpg'), id: 4, tag: 'Nam Sport Inspired', title: 'Quần short Chelsea 3 Sọc', price: 650000 },
        { link: require('../components/public/img/2.jpg'), id: 5, tag: 'Nam Originals', title: 'CTS MULTI TEE', price: 350000 },
        { link: require('../components/public/img/3.jpg'), id: 6, tag: 'Nam Đánh Gôn', title: 'Áo polo 3 Sọc Basic', price: 906500 },
        { link: require('../components/public/img/4.jpg'), id: 7, tag: 'Nam Originals', title: 'CTS CIRCLE TEE', price: 350000 }
      ]
    }
  }
}
</script>

<style scoped>
.price-range {
    margin-top: 20px;
    padding-bottom: 40px;
    border-bottom: 1px solid gainsboro;
}
.price-range h5{
    font-size: 18px;
    font-weight: bold;
    text-transform: uppercase;
}
.price-range input {
    margin-bottom: 20px;
    padding: 10px 10px;
    width: 48%;
}
.price-range button {
    padding: 10px 25px;
    width: 100%;
    font-size: 14px;
    color: white;
    border: 0;
    background-color: #ff4700;
    text-transform: uppercase;
}
.price-range button:hover {
    background-color: green;

}
.status-category {
    padding: 20px 0;
    border-bottom: 1px solid gainsboro;
}
.status-category h5{
    font-size: 18px;
    font-weight: bold;
    text-transform: uppercase;
}
.status-category span {
    display: block;
}
.status-category span input {
    margin-right: 10px;
}
.checked {
    color: orange;
}
.evaluate {
    padding: 20px 0;
}
.evaluate h5 {
    font-size: 18px;
    font-weight: bold;
    text-transform: uppercase;
}
.evaluate .star {
    font-size: 16px;
}
.evaluate button {
    padding: 10px 25px;
    width: 100%;
    font-size: 14px;
    color: white;
    border: 0;
    background-color: #ff4700;
    text-transform: uppercase;
    margin-top: 20px;
}
h2 {
    text-align: center;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 70px;
    color: #f3f3f3;
    position: relative;
    margin-bottom: 20px;
}
.title {
    position: relative;
}
.title p {
    text-transform: uppercase;
    position: absolute;
    font-size: 32px;
    top: 28px;
    font-weight: bold;
    color: #ff4700;
    margin-left: auto;
    margin-right: auto;
    left: 0;
    right: 0;
    text-align: center;
}
.item-products:hover {
    box-shadow: 1px 1px 4px 4px #888888;
    cursor: pointer;
}
.item-products {
    margin-bottom: 20px;
    text-align: center;
    padding-top: 10px;
}
.evaluate button:hover {
   background-color: green;
}
</style>
