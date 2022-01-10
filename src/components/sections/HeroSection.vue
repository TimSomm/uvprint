<template>
  <section class="HeroSection">
    <div class="Guides">
      <div class="GuidesContainer"></div>
    </div>
    <div class="HeroSection__container">
      <div class="HeroSection__layout">
        <div class="HeroTextContainer">
          <div class="HeroTitleContainer">
            <h1>Nagyméretű digitális nyomtatás</h1>
          </div>
          <div class="HeroBodyContainer">
            <span
              >A szakma élvonalában tevékenykedünk 1994 óta. Ismerjük az ügyfelek igényeit, és hosszú
              távú létezésünk egyetlen záloga, ha ezeket az ügyféligényeket maximális értjük,
              kiszolgáljuk, és felhívjuk az ügyfelek figyelmét az egyes összetett folyamatok
              buktatóira is.</span
            >
          </div>
        </div>
        <div class="HeroImgContainer">
          <img src="./../../assets/img/herorollup.png" alt="printer" />
        </div>
      </div>
    </div>
    <div class="HeroSection__gradientContainer">
      <HomePageGradient />
    </div>
  </section>
</template>

<script>
import HomePageGradient from './../gradient/HomePageGradient.vue';

export default {
  name: 'HeroSection',
  components: {
    HomePageGradient,
  },
};
</script>

<style scoped>
.HeroSection {
  --bodyFont: var(--fontWeightNormal) 20px / 1.555555556 var(--fontFamilyNav);
  --columnMaxWidth: calc(var(--layoutWidthMax) * 0.25);
  --bodyMaxWidth: calc(var(--columnMaxWidth) * 3);
  position: relative;
  z-index: 1;
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

.Guides {
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  padding: 0 var(--columnPaddingNormal);
  pointer-events: none;
}

.GuidesContainer {
  position: relative;
  display: grid;
  height: 100%;
  max-width: var(--layoutWidth);
  margin: 0 auto;
  border-inline: 2px solid rgba(66, 71, 112, 0.06);
  z-index: -1;
}

.HeroSection__layout {
  max-width: calc(var(--columnPaddingNormal) * 2 + var(--layoutWidth));
  padding-top: 150px;
  margin-top: 150px;
  padding-inline: 32px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
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
    padding-block: 50px;
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
