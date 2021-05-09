<template>
  <div id="home" @mousewheel="handleMouseWheel" v-swipeup="showCenter">
    <!-- 遮罩：防止用户在动画播放期间点击屏幕 -->
    <div
      class="mask_ban_touch"
      v-if="!flag"
      style="width: 100%; height: 100%; z-index: 999; position: absolute"
    ></div>

    <!-- github 徽标 -->
    <a
      v-if="$config.GITHUB"
      class="github mdi mdi-github-circle"
      :href="$config.GITHUB"
    ></a>

    <!-- 中间LOGO部分 -->
    <div
      :style="{ background: `url(${imgUrl})` }"
      :class="[{ wrapper_blur: centerShow }, 'wrapper', 'bg-blur']"
    >
      <div :class="['img_shadow', { img_shadow_show: imgLoded }]"></div>
      <div class="inner" style="cursor: pointer" @click="goToBlog">
        <!-- <img
          :class="['R_logo', { R_logo_top: flag }]"
          src="../assets/logo.svg"
        /> -->
        <svg :class="['R_logo', { R_logo_top: flag }]" viewBox="0 0 200 207.2401861358533" height="207.2401861358533" width="200" style="width: 200px; height: 207.24px; position: absolute; transform: translate(-50%, -50%) scale(0.45165); z-index: 0; cursor: pointer;"><defs id="SvgjsDefs1128"></defs><g id="SvgjsG1129" featurekey="nameFeature-0" transform="matrix(6.011679413637434,0,0,6.011679413637434,4.812151787887776,-50.732534685478086)" fill="#ffffff"><path d="M14.28 29.72 c-1.12 4.68 -3.16 10.16 -8.2 12.08 c-1.4 0.56 -3.24 -0.04 -3.72 -0.64 c-0.08 -0.12 -0.16 -0.24 -0.2 -0.4 c-1.04 -0.12 -2 -0.56 -2.4 -1.12 c-0.68 -0.84 -0.6 -2.12 -0.48 -3.16 c0.64 -5.8 1.48 -11.44 2.4 -17.24 c0.12 -0.8 0.44 -1.4 0.76 -1.88 c-0.6 0.2 -1.36 0.44 -2.48 0.72 c0.12 -3.48 1.44 -6.92 3 -8 c2.16 -1.52 6.08 -2.16 8.36 -0.16 c1 0.88 1.72 2.04 2.2 3.32 c3.2 3.92 1.84 11.88 0.76 16.48 z M12.08 27.64 c1.16 -4.92 2.56 -13.48 -1.4 -16.96 c-1.84 -1.6 -5.16 -1.16 -7.16 0.2 c-1.12 0.8 -2.36 3.64 -2.52 5.88 c0.68 -0.2 2.04 -0.72 2.72 -0.72 c0.24 0 0.6 0.08 0.48 0.52 c-0.12 0.36 -0.56 0.8 -0.8 1.16 c-0.32 0.44 -0.6 0.96 -0.72 1.68 c-0.92 5.76 -1.76 11.4 -2.44 17.2 c-0.08 0.88 -0.16 1.8 0.28 2.44 c0.4 0.52 2.16 1.08 3.48 0.56 c4.92 -1.88 6.96 -7.24 8.08 -11.96 z M9.52 21 c-0.24 3.48 -0.92 8.2 -3.12 11.56 c-0.56 0.84 -1.04 1.6 -2.28 1.48 c0.64 -6.28 1.2 -12.08 2.76 -17.92 c2.68 -1.6 2.76 3.64 2.64 4.88 z M8.56 20.12 c-0.6 2.76 -1.04 5.48 -1.4 8.28 c0.88 -2.6 1.44 -5.72 1.4 -8.28 z M32.44 11.239999999999998 c0.16 1.04 -0.36 4.4 -1.64 4.96 c-1.04 0.44 -2.88 -0.04 -4.16 0.52 c-2.2 9.52 -3.28 15.52 -4.04 26.08 c-0.92 0.4 -2.92 -0.32 -3.8 -1.4 c-1.76 -0.4 -3.48 -1.68 -3.28 -3.28 c0.32 -2.72 1.92 -15.28 3.6 -19.92 c-0.48 0.16 -0.88 0.28 -1.2 0.36 c0 -0.6 0.08 -1.24 0.2 -1.88 c-0.88 0.28 -1.88 0.6 -3 0.92 c0 -3 0.76 -5.36 1.96 -6.56 c1.48 -1.52 11.24 -3.12 14.08 -2.44 c0.08 0.6 0.08 1.56 -0.08 2.6 c0.6 -0.04 1.08 -0.04 1.36 0.04 z M30.24 9.399999999999999 c-1.48 -0.2 -3.84 0.24 -5.36 0.4 c-1.96 0.24 -6.32 1.16 -7.08 1.96 c-0.92 0.88 -1.6 2.8 -1.68 4.52 c0.88 -0.24 5.48 -1.92 5.92 -1 c0.28 0.6 -0.68 1.32 -1.08 1.72 c-0.36 0.36 -0.68 0.72 -0.8 1.2 c-1.76 6.68 -2.84 13.16 -3.64 20.04 c-0.16 1.32 2.68 2.8 3.88 2.4 c0.76 -10.48 1.84 -16.48 4.08 -26.08 c1.44 -0.64 3.2 -0.08 4.24 -0.56 c1.08 -0.44 1.64 -3.44 1.52 -4.6 z"></path></g></svg>
        <div :class="['hello', { hello_bottom: flag }]">
          <div>{{ slogan[i] }}</div>
          <div class="hello_bottom_text">
            点击以访问 {{ $config.BLOG_NAME }}
          </div>
        </div>
      </div>
    </div>

    <!-- 上下滑动指示器 -->
    <div
      :class="['bottom', { bottom_show: flag }]"
      style="cursor: pointer"
      @click="centerShow = !centerShow"
    >
      <div class="bottom-icon">
        <transition name="fade">
          <i v-if="!centerShow" class="mdi-chevron-up mdi"></i>
          <i v-if="centerShow" class="mdi-chevron-down mdi"></i>
        </transition>
      </div>
      <div class="bottom-info">Slide UP</div>
    </div>

    <!-- 备案号 -->
    <a
      class="record_number"
      :class="{ record_number_show: flag }"
      href="http://beian.miit.gov.cn/"
      v-if="recordNumber"
      >{{ recordNumber }}</a
    >

    <!-- 导航抽屉 -->
    <transition name="fade">
      <div class="shadow" v-show="centerShow"></div>
    </transition>
    <transition name="slide">
      <div v-show="centerShow" class="center_wrapper" @click="hideCenter">
        <div class="center_inner" @click="stopPropagation">
          <center @hide="hideCenter" ref="center"></center>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
function randomNum(minNum, maxNum) {
  switch (arguments.length) {
    case 1:
      return parseInt(Math.random() * minNum + 1, 10);
    case 2:
      return parseInt(Math.random() * (maxNum - minNum + 1) + minNum, 10);
    default:
      return 0;
  }
}
import center from "./center.vue";
export default {
  name: "home",
  data() {
    this.startTime = new Date();
    return {
      flag: false, // 动画是否播放完毕
      slogan: [],
      i: 0,
      centerShow: false, // 导航抽屉显示状态
      imgLoded: false, // 背景图片加载状态
      imgUrl: ""
    };
  },
  components: {
    center
  },
  computed: {
    recordNumber() {
      return this.$config.RECORD_NUMBER;
    }
  },
  methods: {
    goToBlog() {
      window.location.href = this.$config.BLOG_URL;
    },
    _jieliu(callback, delay) {
      let currentTime = new Date();
      if (currentTime - this.startTime > delay) {
        callback();
        this.startTime = new Date();
      }
    },
    handleMouseWheel(e) {
      if (e.deltaY < 0) {
        // 如果鼠标滚轮向上滚动
        if (!this.centerShow) {
          this.centerShow = true;
        } else {
          this._jieliu(() => {
            this.$refs.center.scroller.scrollBy(
              0,
              100,
              500,
              "cubic-bezier(0.23, 1, 0.32, 1)"
            );
          }, 500);
        }
      } else {
        // 如果鼠标滚轮向下滚动
        if (!this.centerShow) {
          return;
        } else {
          this._jieliu(() => {
            this.$refs.center.scroller.scrollBy(
              0,
              -100,
              500,
              "cubic-bezier(0.23, 1, 0.32, 1)"
            );
          }, 500);
        }
      }
    },
    showCenter() {
      this.centerShow = true;
    },
    hideCenter() {
      this.centerShow = false;
    },
    stopPropagation(e) {
      e.stopPropagation();
    }
  },
  mounted() {
    setTimeout(() => {
      this.flag = true;
    }, 1300);
    // 图片懒加载
    this.imgUrl = this.$config.BACKGROUND_IMG_URL;
    var img = new Image();
    img.src = this.imgUrl;
    img.onload = () => {
      this.imgLoded = true;
    };
    this.slogan = this.$config.SLOGAN;
    this.i = randomNum(0, this.slogan.length - 1);
  }
};
</script>

<style lang="scss" scoped>
#home {
  height: 100%;
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  .github {
    display: block;
    position: absolute;
    top: 10px;
    right: 10px;
    color: white;
    font-size: 2rem;
    z-index: 1;
    cursor: pointer;
  }
  .wrapper {
    background-size: cover !important;
    overflow: hidden;
    align-items: center;
    justify-content: center;
    display: flex;
    border-radius: 100%;
    animation: logoEnter 1.2s;
    animation-fill-mode: forwards;
    transition: all 0.8s;
    .inner {
      position: relative;
      .R_logo {
        height: 7rem;
        position: absolute;
        transform: translate(-50%, -50%);
        transition: all 1s;
        top: 0;
      }
      .R_logo_top {
        top: -3.2rem;
      }
      .hello {
        color: #ffffff;
        width: 18.75rem;
        text-align: center;
        position: absolute;
        transform: translate(-50%, -50%);
        font-size: 1.5rem;
        opacity: 0;
        top: 100px;
        transition: all 1s;
      }
      .hello_bottom {
        opacity: 1;
        top: 3.5rem;
        .hello_bottom_text {
          font-size: 1rem;
          margin-top: 0.5rem;
          padding-top: 0.5rem;
          border-top: 1px solid #fff;
        }
      }
    }
  }
  .img_shadow {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    background-color: #fda085;
    overflow: hidden;
    transition: all 0.5s;
  }
  .img_shadow_show {
    background-color: rgba(0, 0, 0, 0.5);
  }
  .wrapper_blur {
    filter: blur(1px);
  }
  .bottom {
    font-size: 2rem;
    position: absolute;
    color: #fff;
    bottom: 0%;
    opacity: 0;
    transition: all 1s;
    text-align: center;
    .bottom-info {
      font-size: 1rem;
      margin-top: 5px;
      animation: float 4s infinite ease-in-out;
    }
  }
  .bottom_show {
    bottom: 50px;
    opacity: 1;
  }
  .shadow {
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.4);
  }
  .center_wrapper {
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 2;
    .center_inner {
      width: 70%;
      position: absolute;
      overflow: hidden;
      border-radius: 0.5rem;
      left: 0;
      right: 0;
      margin: 0 auto;
      bottom: 5%;
      height: 70%;
    }
  }
  .record_number {
    width: 100%;
    text-align: center;
    color: #fff;
    text-decoration: none;
    font-size: 12px;
    line-height: 30px;
    background: rgba(0, 0, 0, 0.4);
    position: fixed;
    bottom: 0;
    transform: translateY(30px);
    transition: transform ease 1s;
  }
  .record_number_show {
    transform: translateY(0px);
  }
}

@media screen and (max-width: 900px) {
  #home {
    .center_wrapper {
      .center_inner {
        width: 100%;
        bottom: 0px;
        padding: 10px;
        box-sizing: border-box;
      }
    }
  }
}

.slide-enter-active,
.slide-leave-active {
  transition: all 0.8s ease;
}

.slide-enter,
.slide-leave-to {
  transform: translateY(100%);
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.8s ease;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

@keyframes logoEnter {
  0% {
    opacity: 0;
    width: 0rem;
    height: 0rem;
  }
  20% {
    opacity: 1;
    width: 15rem;
    height: 15rem;
  }
  80% {
    transform: rotate(360deg);
    width: 15rem;
    height: 15rem;
  }
  100% {
    transform: rotate(360deg);
    width: 100%;
    height: 100%;
    border-radius: 0;
  }
}

@keyframes float {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(0);
  }
}
</style>
