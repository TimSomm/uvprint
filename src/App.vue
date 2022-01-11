<template>
  <div id="app">
    <Guides />
    <SiteHeader />
    <HeroSection />
    <IntroductionSection />
    <GallerySection />
  </div>
</template>

<script>
import Guides from './components/shared/Guides.vue';
import SiteHeader from './components/navbar/SiteHeader.vue';
import HeroSection from './components/pages/home/sections/HeroSection.vue';
import IntroductionSection from './components/pages/home/sections/IntroductionSection.vue';
import GallerySection from './components/pages/home/sections/GallerySection.vue';

export default {
  name: 'App',
  components: {
    Guides,
    SiteHeader,
    HeroSection,
    IntroductionSection,
    GallerySection,
  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Encode+Sans:wght@200;300;400;600&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@200;300;400;500;600&display=swap');

html {
  --fontFamily: 'Montserrat', 'Helvetica Neue', 'Arial', sans-serif;
  --fontFamilyNav: 'Encode Sans', 'Helvetica Neue', 'Arial', sans-serif;
  --fontWeightLight: 200;
  --fontWeightNormal: 300;
  --fontWeightSemiBold: 425;
  --fontWeightBold: 600;
  --navColor: #fff;
  --navLogoWidth: 160px;
  --scrollbarWidth: 15px;
  --gutterWidth: 16px;
  --windowWidth: calc(100vw - var(--scrollbarWidth));
  --layoutWidth: calc(var(--windowWidth) - var(--gutterWidth) * 2);
  --layoutWidthMax: 1080px;
  --columnPaddingNormal: 16px;
  --hoverTransition: 150ms cubic-bezier(0.215, 0.61, 0.355, 1);
  --cardBorderRadius: 8px;
  --cardShadowXLarge: 0 50px 100px -20px rgba(50, 50, 93, 0.25), 0 30px 60px -30px rgba(0, 0, 0, 0.3);
  --cardShadowXLargeMargin: 48px;
  --bodyFont: var(--fontWeightNormal) 20px / 1.555555556 var(--fontFamilyNav);
  --columnMaxWidth: calc(var(--layoutWidthMax) * 0.25);
  --bodyMaxWidth: calc(var(--columnMaxWidth) * 3);
}

@media (min-width: 1200px) {
  :root {
    --layoutWidth: var(--layoutWidthMax);
    --gutterWidth: calc(var(--windowWidth) / 2 - var(--layoutWidth) / 2);
  }
}

#app {
  font-family: var(--fontFamily);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  overflow: hidden;
  position: relative;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
</style>
