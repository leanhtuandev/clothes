<template>
  <div id="newproducts" style="color: #555555">
      <div class="container-fluid">
            <div class="list-newproducts">
                    <div class="title" style="">
                        <h2 style="text-transform: uppercase; font-weight: bold;">Sản Phẩm mới</h2>
                        <p>Sản phẩm mới</p>
                    </div>
                <div class="row">
                  <div v-for="image in images" :key="image.id" >
                      <router-link to="/Detail">
                        <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12 item-products">
                            <img :src="image.link" alt="" style="    max-width: -webkit-fill-available;max-height: 383px;">
                            <p style=" text-align: center; color: #767677">{{image.tag}}</p>
                            <h4 class="title-newproducts" style=" text-align: center;    font-size: 12px; text-transform: uppercase; color: black">{{image.title}}</h4>
                            <p class="price-newproducts" style="text-align: center; color: #00d237; font-size: 16px;font-size: 12px; color: black"> {{image.price}}đ</p>
                        </div>
                      </router-link>
                  </div>
              </div>
          </div>
      </div>
  </div>
</template>

<script>

export default {
  name: 'newproducts',
  data () {
    return {
      index: 0,
      images: [
        { link: require('./public/img/1.jpg'), id: 0, tag: 'Nam Sport Inspired', title: 'Quần short Chelsea 3 Sọc', price: 650000 },
        { link: require('./public/img/2.jpg'), id: 1, tag: 'Nam Originals', title: 'CTS MULTI TEE', price: 350000 },
        { link: require('./public/img/3.jpg'), id: 2, tag: 'Nam Đánh Gôn', title: 'Áo polo 3 Sọc Basic', price: 906500 },
        { link: require('./public/img/4.jpg'), id: 3, tag: 'Nam Originals', title: 'CTS CIRCLE TEE', price: 350000 },
        { link: require('./public/img/1.jpg'), id: 4, tag: 'Nam Sport Inspired', title: 'Quần short Chelsea 3 Sọc', price: 650000 },
        { link: require('./public/img/2.jpg'), id: 5, tag: 'Nam Originals', title: 'CTS MULTI TEE', price: 350000 },
        { link: require('./public/img/3.jpg'), id: 6, tag: 'Nam Đánh Gôn', title: 'Áo polo 3 Sọc Basic', price: 906500 },
        { link: require('./public/img/4.jpg'), id: 7, tag: 'Nam Originals', title: 'CTS CIRCLE TEE', price: 350000 }
      ]
    }
  }
}
</script>

<style >
h2 {
    text-align: center;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 70px;
    color: #f3f3f3;
    position: relative;

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
.list-newproducts {
}
.row {
    margin: 0;
}
.item-products {
    margin-bottom: 20px;
    padding-top: 20px;
    transition-property: box-shadow;
    transition-duration: .2s;
    border-radius: 5px;
    text-align: center;
}
.item-products:hover {
    box-shadow: 1px 1px 4px 4px #888888;
    cursor: pointer;
}
@media screen and (max-width: 576px) {
    h2 {
        font-size: 50px;
    }
}
</style>
