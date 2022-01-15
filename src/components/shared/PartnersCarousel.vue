<template>
  <div class="SitePartnerSection__logoCarousel" ref="logoCarousel">
    <div class="SitePartnerSection__logoCarouselContainer">
      <div class="marquee">
        <ul class="marquee-content" ref="marqueeContent">
          <li v-for="logo in logos" v-bind:key="logo.img">
            <img :src="require(`./../../assets/img/${logo.img}`)" />
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PartnersCarousel',
  data() {
    return {
      logos: [
        {
          img: 'axial-logo.png',
          alt: 'Axial',
        },
        {
          img: 'Bobcat.png',
          alt: 'Bobcat',
        },
        {
          img: 'colas-logo.png',
          alt: 'Colas',
        },
        {
          img: 'JCB.png',
          alt: 'JCB',
        },
        {
          img: 'john-deere-logo.png',
          alt: 'John-Deere',
        },
      ],
    };
  },
  mounted() {
    this.computeMarqueeElements();
  },
  methods: {
    computeMarqueeElements() {
      const marqueeElementsDisplayed = getComputedStyle(this.$refs.logoCarousel).getPropertyValue(
        '--marquee-elements-displayed'
      );

      this.$refs.logoCarousel.style.setProperty(
        '--marquee-elements',
        this.$refs.marqueeContent.children.length
      );

      for (let i = 0; i < marqueeElementsDisplayed; i++) {
        this.$refs.marqueeContent.appendChild(this.$refs.marqueeContent.children[i].cloneNode(true));
      }
    },
  },
};
</script>

<style scoped>

.SitePartnerSection__logoCarousel {
  --marquee-width: 100%;
  --marquee-height: 10vh;
  --marquee-elements-displayed: 1;
  --marquee-element-width: calc(var(--marquee-width) / var(--marquee-elements-displayed));
  --marquee-animation-duration: calc(var(--marquee-elements) * 6s);
  padding-bottom: 2rem;
}

.marquee {
  width: var(--marquee-width);
  height: var(--marquee-height);
  overflow: hidden;
  position: relative;
  margin: 0 auto;
}

.marquee-content {
  list-style: none;
  height: 100%;
  display: flex;
  animation: scrolling var(--marquee-animation-duration) linear infinite;
}

@keyframes scrolling {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(calc(-1 * var(--marquee-element-width) * var(--marquee-elements)));
  }
}

.marquee-content li {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  width: var(--marquee-element-width);
  max-height: 100%;
}

.marquee-content li img {
  width: 100%;
  display: block;
  padding: 2px;
}

@media (max-width: 900px) {
  .SitePartnerSection__logoCarousel {
  --marquee-elements-displayed: 2;
}
}
</style>
