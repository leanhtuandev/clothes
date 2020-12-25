<template>
  <div id="category">
      <div class="container">
          <div class="row">
              <div class="col-md-4">
                  <div class="dresses">
                      <img :src="link[0]" alt="">
                      <div class="category-item"><button>clothes</button></div>
                  </div>
                  <div class="sunglasses">
                      <img :src="link[3]" alt="">
                      <div class="category-item"><button>sunglasses</button></div>
                  </div>
              </div>
              <div class="col-md-4">
                  <div class="watches">
                      <img :src="link[1]" alt="">
                      <div class="category-item"><button>watches</button></div>
                  </div>
                  <div class="footerwear">
                      <img :src="link[4]" alt="">
                      <div class="category-item"><button>footerwear</button></div>
                  </div>
              </div>
              <div class="col-md-4">
                  <div class="bags">
                      <img :src="link[2]" alt="">
                      <div class="category-item"><button>bags</button></div>
                  </div>
                  <div class="sunglasses">
                      <img :src="link[3]" alt="">
                      <div class="category-item"><button>dresses</button></div>
                  </div>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'gategory',
  data () {
    return {
      link: [
        require('./public/img/banner-02.jpg'),
        require('./public/img/banner-03.jpg'),
        require('./public/img/banner-04.jpg'),
        require('./public/img/banner-05.jpg'),
        require('./public/img/banner-07.jpg'),
        require('./public/img/mũ-performance.jpg')
      ]
    }
  }
}
</script>

<style>
#category {
    padding-top: 40px;
    text-align: center;
}

#category img {
        width: 100%;
    }

.category-item {
    text-align: center;
}

.category-item button {
    padding: 12px 40px;
    font-size: 16px;
    text-transform: uppercase;
    border: 0;
    background-color: rgba(255,255,255,0.95);
}
.dresses {
    position: relative;
    margin-bottom: 30px;
    overflow: hidden;
    max-width: 370px !important;
}
.dresses .category-item {
    position: absolute;
    top: 87%;
    width: 100%;
}

.sunglasses {
    position: relative;
        margin-bottom: 30px;
        overflow: hidden;
    max-width: 370px !important;
}
.sunglasses .category-item {
    position: absolute;
        top: 82%;
    width: 100%;
}
.watches {
    position: relative;
        margin-bottom: 30px;
        overflow: hidden;
    max-width: 370px !important;
}
.watches .category-item {
    position: absolute;
    top: 82%;
    width: 100%;
}
.footerwear {
    position: relative;
        margin-bottom: 30px;
        overflow: hidden;
    max-width: 370px !important;
}
.footerwear .category-item {
    position: absolute;
     top: 87%;
    width: 100%;
}
.bags {
    position: relative;
        margin-bottom: 30px;
        overflow: hidden;
    max-width: 370px !important;
}
.bags .category-item {
    position: absolute;
        top: 87%;

    width: 100%;
}
#category button {
    transition-property: background-color;
  transition-duration: .4s;
}
#category button:hover {
    background: #e65540;
    color: white;
    animation-delay: 2s;
}
#category .col-md-4 div img {
    transition-property: transform;
    transition-duration: .5s;
}
#category .col-md-4 div img:hover {
    transform: scale(1.2);
}
.col-md-4 {
    display: inline-block;
}
</style>
