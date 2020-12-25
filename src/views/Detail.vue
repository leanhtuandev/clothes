<template>
  <div id="detail">
      <Header/>
      <div class="container-fluid" style="padding-right: 0; padding-left: 0;">
          <div class="row" style="margin-top: 80px;">
              <div class="col-md-8 detail-left">
                  <div class="img-detail-left" style="height:600px; width: 100%"></div>
                  <div class="left-content">
                      <h3 class="title-content-section">Mô tả</h3>
                      <div class="left-body-section row">
                          <div class="col-md-6">
                              <h4 class="title-title-section">Giày Ultra4D</h4>
                              <span class="content-title-section">Giày chạy bộ hiệu năng cao với đế giữa có kết cấu dạng lưới tiên tiến.</span>
                              <p class="content-title-section-2">Chào mừng đến tương lai. Bạn đã sẵn sàng chưa? Công nghệ chạy bộ xuất sắc nhất của adidas đã có mặt trên đôi giày adidas Ultra4D này. Nhựa lỏng, ánh sáng và oxy kết hợp tạo nên đế giữa kết cấu dạng lưới đậm chất tương lai. Kết quả là độ tinh chỉnh chính xác và cảm giác thoải mái dài lâu. Thân giày bằng vải dệt kim ôm chân được bao bọc bởi khung má và lớp đệm gót giày nâng đỡ, cùng đế ngoài siêu bám đảm bảo cho bước chân luôn vững chãi.</p>
                          </div>
                          <div class="col-md-6">
                            <img src="../components/public/img/Giay_Ultra4D_trang_FX4089.jpg" alt="" style="max-height: 410px;max-width: -webkit-fill-available;">
                          </div>
                      </div>
                      <div class="parameter row">
                          <h4>Thông số</h4>
                          <li>Ôm vừa</li>
                          <li>Có dây buộc</li>
                          <li>Thân giày bằng vải dệt</li>
                          <li>Giày chạy bộ hiệu năng phù hợp với mọi điều kiện thời tiết</li>
                          <li>Đế giữa adidas 4D</li>
                          <li>Đế ngoài bằng cao su Continental™ cho độ ma sát tuyệt vời trong cả điều kiện thời tiết khô ráo và ẩm ướt.</li>
                          <li>Màu sản phẩm: Chalk White / Chalk White / Cloud White</li>
                          <li>Mã sản phẩm: FX40</li>
                      </div>
                  </div>
                  <div >
                      <h3 class="title-content-section" style="margin-top: 20px; padding-top: 20px; border-top: 1px solid gainsboro;"> Xếp hạng & đánh giá</h3>
                      <div class="comment-left">
                          <div class="row" style="text-align: center">
                              <div class="col-md-4 box-show" >
                                    <span class="fa fa-star checked"></span>
                                    <span class="fa fa-star checked"></span>
                                    <span class="fa fa-star checked"></span>
                                    <span class="fa fa-star"></span>
                                    <span class="fa fa-star"></span>
                                    <div style="font-size: 16px">294 Reviews</div>
                              </div>
                              <div class="col-md-7 offset-1 box-title">
                                  <div class="box-review" style="border: 1px solid #7d7d7d ;">Mới nhất</div>
                                  <div class="box-review" style="border: 1px solid #7d7d7d;">Hữu ích</div>
                                  <div class="box-review" style="border: 1px solid #7d7d7d;">Liên quan</div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
              <div class="col-md-4 detail-right">
                  <div class="right-content">
                      <h3 class="title-detail">Giày Ultra4D</h3>
                      <span class="tag-detail">Chalk White / Chalk White / Cloud White</span>
                      <p class="price-detail" style="margin-top: 10px; font-size: 18px;color: #02bf02;">6.000.000đ</p>
                      <span class="makeble-content">Đơn hàng được xác nhận sau khi xác nhận thanh toán. Không đổi hàng, trả hàng hay hoàn tiền trừ trường hợp pháp luật có quy định khác. Sản phẩm này không áp dụng bất kỳ chương trình ưu đãi và khuyến mãi nào. Giới hạn số lượng 1 sản phẩm trên mỗi đơn hàng.</span>
                  </div>
                  <div class="buy-section">
                      <span class="title-buy-section">Chọn size</span>
                      <div class="buy-checkbox">
                          <div class="item-checkbox">
                              <input type="radio" name="size" checked>XS
                          </div>
                          <div class="item-checkbox">
                              <input type="radio" name="size">XL
                          </div>
                          <div class="item-checkbox">
                              <input type="radio" name="size">XXL
                          </div>
                      </div>
                        <button class="btn-buy-section">Thêm vào giỏ hàng</button>
                  </div>
              </div>
          </div>
      </div>
      <Footer/>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
export default {
  name: 'detail',
  components: {
    Header,
    Footer
  },
  data () {
    return {

    }
  }
}
</script>

<style scoped>
.col-md-8.detail-left {
    padding: 0;
    border-right: 1px solid gainsboro;
}
.col-md-4.detail-right {
    position: fixed;
}
.title-detail {
    font-size: 40px;
    text-transform: uppercase;
}
.img-detail-left {
    background-image: url('../components/public/img/Giay_Ultra4D_trang_FX4089_01_standard.jpg');
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
}
.makeble-content {
    display: block;
    text-align: justify;
    font-size: 18px;
}
.buy-section {
    margin-top: 10px;
}
.title-buy-section {
    font-size: 18px;
    font-weight: bold;
    text-transform: uppercase;
}
.item-checkbox {
    display: inline-block;
    padding: 20px 20px 20px 20px;
}
.btn-buy-section {
    width: 100%;
    padding: 10px 0;
    font-size: 16px;
    background-color: #ff4700;
    color: white;
    border: 0;
    border-radius: 3px;
}
.btn-buy-section:hover {
    background-color: green;
}
.left-body-section {
    max-width: 850px;
    margin: 0 auto;
}
h3.title-content-section {
    text-align: center;
    font-size: 28px;
    text-transform: uppercase;
    font-weight: bold;
    margin-bottom: 30px;
    padding-bottom: 20px;
    border-bottom: 1px solid gainsboro;
}

h4.title-title-section {
    font-size: 30px;
    font-weight: bold;
    text-transform: uppercase;
    margin-bottom: 20px;
}
span.content-title-section {
    font-size: 26px;
    text-transform: uppercase;
    margin-bottom: 20px;
    display: block;
    text-align: justify;
}
p.content-title-section-2 {
    font-size: 16px;
    margin-bottom: 16px;
    display: block;
    text-align: justify;
}
.parameter.row {
    max-width: 850px;
    margin: 0 auto;
    margin-top: 40px;
    padding: 0 15px;
}
.parameter h4 {
    font-size: 27px;
    text-transform: uppercase;
    margin-bottom: 20px;
    font-weight: 600;
}
.parameter li {
    width: 50%;
    padding-left: 10px;
    font-size: 14px;
    padding-bottom: 6px;
    margin-bottom: 18px;
    list-style: outside;
    float: left;
}
.comment-left {
    max-width: 850px;
    margin: 0 auto;
    margin-bottom: 40px;
}
.col-md-4.box-show {
    padding: 25px 0;
    text-align: center;
    background-color: green;
    color: white;
}
.checked {
    color: orange;
}
.fa .fa-star {
    font-size: 17px;
}
.col-md-7.offset-1.box-title {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}
.box-title div {
    padding: 10px 45px;
}
.box-review:hover {
    color: white;
    background-color: #ff4700;
    cursor: pointer;
}
</style>
