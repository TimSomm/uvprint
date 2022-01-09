<template>
  <section class="HeroSection">
    <div class="HeroSection__layout">
      <div class="HeroTextContainer">
        <div class="HeroTitleContainer">
          <h1>Nagyméretű digitális nyomtatás</h1>
        </div>
        <div class="HeroBodyContainer">
          <span
            >A szakma élvonalában tevékenykedünk 1994 óta. Ismerjük az ügyfelek igényeit, és hosszú
            távú létezésünk egyetlen záloga, ha ezeket az ügyféligényeket maximális értjük,
            kiszolgáljuk, és felhívjuk az ügyfelek figyelmét az egyes összetett folyamatok buktatóira
            is.</span
          >
        </div>
      </div>
      <div class="HeroImgContainer">
        <img src="./../../assets/img/printer.png" alt="printer" />
      </div>
    </div>
    <div class="HeroSection__partners">
      <PartnersCarousel />
    </div>
  </section>
</template>

<script>
import PartnersCarousel from './../PartnersCarousel.vue';

export default {
  name: 'HeroSection',
  components: {
    PartnersCarousel,
  },
};
</script>

<style scoped>
.HeroSection {
  --bodyFont: var(--fontWeightNormal) 20px / 1.555555556 var(--fontFamilyNav);
  --layoutWidthMax: 1080px;
  --columnMaxWidth: calc(var(--layoutWidthMax) * 0.25);
  --bodyMaxWidth: calc(var(--columnMaxWidth) * 3);
  z-index: 0;
}

.HeroSection__layout {
  display: flex;
  max-width: calc(var(--columnPaddingNormal) * 2 + var(--layoutWidth));
  margin: 0 auto;
  padding-block: 150px;
  margin-top: 150px;
}

.HeroTextContainer {
  display: grid;
  row-gap: 64px;
  padding-inline: 16px;
}

.HeroTitleContainer {
  --titleFontMin: 40;
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
    --titleFontMax: 84;
    --viewportMin: 600;
    --viewportMax: 1112;
  }
}

@media (max-width: 900px) {
  .HeroSection {
    padding-block: 50px;
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
    --titleFontSize: 84px;
  }
}
</style>
