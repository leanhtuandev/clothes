<template>
  <div class="header">
    <div class="container-fuild">
      <div class="row">
        <div class="logo-header col-md-3">
          <img src="./public/img/adidas-logo.png" alt="" style="position: relative;">
        </div>
        <div class="items-header col-md-6">
          <ul style="list-style:none;">
            <li><router-link to="/">  <a href="">Home</a> </router-link></li>
            <li style="position: relative" v-on:click="activateMale = !activateMale" @mouseleave="activateM">
              <router-link to="">Nam</router-link>
              <div class="menu-male" style="position: absolute;z-index: 999;" v-show="activateMale">
                <router-link to="/Category"><div>Quần áo</div></router-link>
                <div>Giày</div>
                <div>Phụ kiện</div>
                <div>Giảm giá</div>
                <div>Thể thao</div>
              </div>
            </li>
            <li style="position:relative" v-on:click="activateFemale = !activateFemale" @mouseleave="activateF" >
              <router-link to="/">Nữ</router-link>
              <div class="menu-female" style="position: absolute; z-index: 999;" v-show="activateFemale">
                <div>Quần áo</div>
                <div>Giày</div>
                <div>Phụ kiện</div>
                <div>Giảm giá</div>
                <div>Thể thao</div>
              </div>
            </li>
            <li><router-link to="/">Trẻ Em</router-link></li>
            <li><router-link to="/">Các nhãn hiệu</router-link></li>
          </ul>
        </div>
        <div class="users-item col-md-3">
          <div class="header-icon">
            <img class="icon-user" v-on:click="activate = !activate"  src="./public/img/icon-header-01.png"  alt="" style="position: relative; padding: 5px 10px">
            <div v-show="activate" style="position: absolute;
                        top: 44px;
                        background-color: white;
                        margin-top: 10px;
                    ">

                <router-link  to="/Login">
                  <div class="btn-login"  style="padding: 10px 30px; color: black">
                    Login
                  </div>
                </router-link>
                <router-link to="/Register">
                  <div class="btn-register" style="padding: 10px 30px; color: black">
                    Register
                  </div>
                </router-link>

            </div>
            <div class="linedivide1"></div>
            <router-link to="/"><img src="./public/img/icon-header-02.png" alt="" style="padding: 5px 10px"></router-link>

          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: 'header',
  data () {
    return {
      activateMale: false,
      activateFemale: false,
      activate: false
    }
  },
  methods: {
    activateM: function () {
      if (this.activateMale === true) {
        this.activateMale = !this.activateMale
      }
    },
    activateF: function () {
      if (this.activateFemale === true) {
        this.activateFemale = !this.activateFemale
      }
    },
    activateL: function () {
      if (this.activate === true) {
        this.activate = !this.activate
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
.header {
  min-height: 80px;
  font-family: 'Montserrat', sans-serif;
  position: fixed;
  width: 100%;
  background-color: white;
  z-index: 999;
  box-shadow: 0px 3px 0px 0px #7d7d7d8f;
}
a:hover, a:focus, a:active {
  outline: none;
  outline-style: none;
  outline-width: 0;
  text-decoration: none;
  color: #ff6a00;
}
.logo-header {
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.logo-header img {
  height: 80px;
}
ul {
  list-style: none;
  height: 80px;
  display: flex;
  align-items: center;
  padding: 0;
  margin: 0;
}
ul li {
  display: inline-block;
  padding: 20px 15px;

}
ul li a {
  font-size: 15px;
  color: #333333;
}
.items-header.col-md-6 {
  display: flex;
  justify-content: center;
}
.item-header ul li {
  padding: 20px 15px ;
}

.users-item {
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.header-icon {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}
.linedivide1 {
    display: block;
    height: 20px;
    width: 1px;
    background-color: #e5e5e5;
    margin-left: 23px;
    margin-right: 23px;
    margin-top: 5px;
}
.btn-login:hover {
  background-color: #ff6a00;
  color: white !important;
}
.btn-register:hover {
  background-color: #ff6a00;
  color: white !important;
}
.icon-user:hover {
  cursor: pointer;
}
.menu-male {
  background-color: white;
  width: 300px;
  left: -20px;
}
.menu-male div {
  padding: 10px 25px;
}
.menu-male div:hover {
  background-color: #ff6a00;
  color: white;
  cursor: pointer;
}
.menu-female {
  background-color: white;
  width: 300px;
  left: -20px;
}
.menu-female div {
  padding: 10px 25px;
}
.menu-female div:hover {
  background-color: #ff6a00;
  color: white;
  cursor: pointer;
}
</style>
