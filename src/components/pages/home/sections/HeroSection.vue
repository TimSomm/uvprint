<template>
  <section class="HeroSection">
    <div class="HeroSection__container">
      <div class="HeroSection__layout">
        <div class="HeroTextContainer">
          <div class="HeroTitleContainer">
            <h1>Nagyméretű digitális nyomtatás</h1>
          </div>
          <div class="HeroBodyContainer">
            <p
              >A szakma élvonalában tevékenykedünk 1994 óta. Ismerjük az ügyfelek igényeit, és hosszú
              távú létezésünk egyetlen záloga, ha ezeket az ügyféligényeket maximális értjük,
              kiszolgáljuk, és felhívjuk az ügyfelek figyelmét az egyes összetett folyamatok
              buktatóira is.</p
            >
          </div>
        </div>
        <div class="HeroImgContainer">
          <img src="./../../../../assets/img/herorollup.png" alt="printer" />
        </div>
        <div class="HeroBtnContainer">
          <a href="#gallerySection" class="HeroSection__gallery-btn" role="button">Galéria</a>
          <a href="#" class="HeroSection__contact-btn" role="button">Kapcsolat</a>
        </div>
      </div>
    </div>
    <div class="HeroSection__gradientContainer">
      <HomePageGradient />
    </div>
  </section>
</template>

<script>
import HomePageGradient from './../../../gradient/HomePageGradient.vue';

export default {
  name: 'HeroSection',
  components: {
    HomePageGradient,
  },
};
</script>

<style scoped>
.HeroSection {
  position: relative;
  z-index: 1;
  padding-bottom: 10vh;
}

.HeroSection__gradientContainer {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  transform: skewY(12deg) translateY(-50%);
  z-index: -1;
}

.HeroSection__container {
  display: flex;
  justify-content: center;
}

.HeroSection__layout {
  max-width: calc(var(--columnPaddingNormal) * 2 + var(--layoutWidth));
  margin-top: 150px;
  padding-inline: 32px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
}

.HeroTextContainer {
  display: grid;
  row-gap: 64px;
}

.HeroTitleContainer {
  --titleFontMin: 37;
  --titleFontMax: 68;
  --viewportMin: 375;
  --viewportMax: 600;
  --titleFontSize: calc(
    var(--titleFontMin) * 1px + (var(--titleFontMax) - var(--titleFontMin)) *
      (var(--windowWidth) - var(--viewportMin) * 1px) / (var(--viewportMax) - var(--viewportMin))
  );
  font: 500 var(--titleFontSize) / 1.04 var(--fontFamilyNav);
  letter-spacing: -0.04em;
}

.HeroBodyContainer {
  font: var(--bodyFont);
  max-width: var(--bodyMaxWidth);
  text-align: justify;
  word-break: break-word;
}

.HeroImgContainer {
  height: 500px;
  display: flex;
  align-items: center;
}

.HeroImgContainer img {
  height: inherit;
}

.HeroSection__partners {
  max-width: calc(var(--columnPaddingNormal) * 2 + var(--layoutWidth));
  margin: 0 auto;
  overflow: hidden;
}

.HeroBtnContainer {
  margin-top: 64px;
}

.HeroSection__gallery-btn {
  background: linear-gradient(to bottom right, #ef4765, #ff9a5a);
  border: 0;
  border-radius: 12px;
  color: #ffffff;
  cursor: pointer;
  display: inline-block;
  font-family: -apple-system, system-ui, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
  font-size: 16px;
  font-weight: 500;
  line-height: 2.5;
  outline: transparent;
  padding: 0 1rem;
  text-align: center;
  text-decoration: none;
  transition: all 300ms cubic-bezier(0.23, 1, 0.32, 1);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  white-space: nowrap;
  margin-right: 16px;
}

.HeroSection__gallery-btn:not([disabled]):focus {
  box-shadow: 0 0 0.25rem rgba(0, 0, 0, 0.5), -0.125rem -0.125rem 1rem rgba(239, 71, 101, 0.5),
    0.125rem 0.125rem 1rem rgba(255, 154, 90, 0.5);
}

.HeroSection__gallery-btn:not([disabled]):hover {
  box-shadow: 0 0 0.25rem rgba(0, 0, 0, 0.5), -0.125rem -0.125rem 1rem rgba(239, 71, 101, 0.5),
    0.125rem 0.125rem 1rem rgba(255, 154, 90, 0.5);
}

.HeroSection__contact-btn {
  appearance: none;
  background: transparent;
  border: 0;
  border-radius: 15px;
  box-sizing: border-box;
  color: #3b3b3b;
  cursor: pointer;
  display: inline-block;
  font-family: -apple-system, system-ui, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
  font-size: 16px;
  font-weight: 500;
  line-height: 2.5;
  margin: 0;
  outline: none;
  padding: 0 1rem;
  text-align: center;
  text-decoration: none;
  transition: all 300ms cubic-bezier(0.23, 1, 0.32, 1);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  will-change: transform;
}

.HeroSection__contact-btn:hover {
  color: #fff;
  background: linear-gradient(to bottom right, #ef4765, #ff9a5a);
  box-shadow: rgba(0, 0, 0, 0.25) 0 8px 15px;
}

@media (min-width: 600px) {
  .HeroTitleContainer {
    --titleFontMin: 50;
    --titleFontMax: 75;
    --viewportMin: 600;
    --viewportMax: 1112;
  }
}

@media (max-width: 900px) {
  .HeroSection {
    padding-top: 200px;
  }

  .HeroSection__layout {
    margin-top: 0;
    grid-template-columns: repeat(1, 1fr);
  }

  .HeroBodyContainer {
    max-width: 100vw;
  }

  .HeroImgContainer {
    display: none;
  }
}

@media (min-width: 1200px) {
  .HeroTitleContainer {
    --titleFontSize: 75px;
  }
}
</style>
