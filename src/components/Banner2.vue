<template>
  <div id="banner2">
      <div class="container">
          <div class="row">
                <div style="">
                    <div class="col-md-6 lookbook">
                        <h4>The Beauty</h4>
                        <h5>Look book</h5>
                        <p>View Collection</p>
                    </div>
                </div>

                <div class="col-md-6 sale">
                    <p>{{sale.title}}</p>
                    <div style="display: flex; align-items: center; justify-content: center; ">
                        <h6 style="text-decoration: line-through;">${{sale.oldprice}} </h6><div style="padding: 0 10px;"></div>
                        <h6 class="last-price">${{sale.newprice}} </h6>
                    </div>
                    <div class="countdown" style="display: flex; align-item:center; justify-content:center;">

                            <div><p style="font-size: 16px; margin: 0; padding-top: 5px;">{{hours}}</p> Hrs</div>
                            <div><p style="font-size: 16px; margin: 0; padding-top: 5px;">{{minutes}}</p> Mins</div>
                            <div><p style="font-size: 16px; margin: 0; padding-top: 5px;">{{seconds}}</p> Secs</div>
                        </div>
                </div>
          </div>

      </div>
  </div>
</template>

<script>
export default {
  name: 'banner2',
  data () {
    return {
      sale: { link: require('./public/img/banner-05.jpg'), id: 0, title: 'Gafas sol Hawkers one', oldprice: 25.50, newprice: 15.90 },
      hours: 0,
      minutes: 0,
      seconds: 0,
      temp: 30000
    }
  },
  methods: {
    countDownTimer () {
      if (this.temp > 0) {
        setTimeout(() => {
          this.temp -= 1
          this.countDownTimer()
          this.hours = Math.floor((this.temp / 3600))
          this.minutes = Math.floor((this.temp % 3600) / 60)
          this.seconds = Math.floor((this.temp % 3600) % 60)
        }, 1000)
      }
    }
  },
  created () {
    this.countDownTimer()
  },
  filter () {

  }

}
</script>

<style>
#banner2 {
    background-color: #f2f2f2;
    padding: 55px 0;
    color: #555555;
}
    .lookbook {
        background-image: url('./public/img/banner-08.jpg');
        background-size: cover;
        background-position: center;
        min-height: 400px;
        background-color: rgba(0, 0, 0, 0.0);
        padding: 0 10px;
        color: white;
        text-align: center;
    }
    .lookbook:hover {
        cursor: pointer;
    }
    .lookbook h4 {
        font-size: 32px;
        font-family: 'montserrat';
        font-weight: 900;
        padding-top: 30%;
        letter-spacing: 2px;
    }
    .lookbook h5 {
        font-size: 50px;
        text-transform: uppercase;
        font-weight: 600;
        letter-spacing: 2px;

    }
    .lookbook p {
        font-size: 20px;
        font-family: 'montserrat';
        font-weight: 900;
        letter-spacing: 2px;
    }
    .sale {
        background-image: url('./public/img/shop-item-09.jpg');
        background-size: cover;
        background-position: center;
        min-height: 400px;
        background-color: #ffffff;
        padding: 0 10px;
        text-align: center;

    }
    .sale:hover {
        cursor: pointer;
    }
    .sale p {
        padding-top: 45%;
        font-size: 18px;
    }
    .sale div h6 {
        font-size: 18px;
    }
    .last-price {
        color: red;
    }
    .countdown div {
        width: 60px;
        height: 60px;
        padding: 2px 15px;
        margin: 0 5px;
        border: 1px solid #a5a5a5;

    }
</style>
