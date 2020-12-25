/* eslint-disable vue/valid-v-for */
<template>
  <div id="banner">
        <div class="slide">
            <div class="slide-item" style="min-width: 100%; height: 820px;">
                <div :style="{backgroundImage: 'url(' + images[1].link + ')', height: '100%', backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }">
                    <div class="content-header" >
                        <button @click="push()">Shop now</button>
                    </div>
                </div>
            </div>
        </div>
  </div>
</template>

<script>

export default {
  name: 'banner',
  data () {
    return {
      index: 0,
      images: [
        { link: require('./public/img/cyber-punk-banner.jpg'), id: 0 },
        { link: require('./public/img/space-banner.jpg'), id: 1 }
      ]
    }
  },
  methods: {
    push () {
    }
  }
}
</script>

<style>
#banner {
    padding-top: 80px;
}
.content-header button {
    margin-top: 380px;
    padding: 10px 35px;
    font-size: 18px;
    margin-left: 45px;
    border: 0;
    border-radius: 3px;
    text-transform: uppercase;
}
.content-header button:hover {
  color: white;
  background-color: #e65540;

}
</style>
