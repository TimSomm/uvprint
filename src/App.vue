<template>
  <div id="app">
    <SiteHeader />
    <HomePageGradient />
  </div>
</template>

<script>
import SiteHeader from './components/navbar/SiteHeader.vue';
import HomePageGradient from './components/gradient/HomePageGradient.vue';


export default {
  name: 'App',
  components: {
    SiteHeader,
    HomePageGradient,
  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Encode+Sans:wght@200;300;400;600&display=swap');

html {
  --fontFamily: 'Encode Sans', 'Helvetica Neue', 'Arial', sans-serif;
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
  --layoutWidthMax: 60%;
  --columnPaddingNormal: 16px;
  --hoverTransition: 150ms cubic-bezier(0.215, 0.61, 0.355, 1);
  --cardBorderRadius: 8px;
  --cardShadowXLarge: 0 50px 100px -20px rgba(50, 50, 93, 0.25), 0 30px 60px -30px rgba(0, 0, 0, 0.3);
  --cardShadowXLargeMargin: 48px;
}

@media (min-width: 1112px) {
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
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
</style>
