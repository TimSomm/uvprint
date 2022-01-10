<template>
  <section class="IntroductionSection">
    <div class="Guides">
      <div class="GuidesContainer"></div>
    </div>
    <div class="IntroductionSection__container">
      <div class="IntroductionSection__layout">
        <div class="IntroductionSection__header">
          <h2 class="caption">Lorem, ipsum.</h2>
          <h1 class="title">Lorem ipsum dolor sit amet consectetur.</h1>
        </div>
        <div class="IntroductionSection__contentContainer">
          <div class="IntroductionSection__imgContainer">
            <img src="./../../assets/img/introductionflag.png" alt="intro-flag" />
          </div>
          <div class="IntroductionSection__bodyContainer">
            <div class="IntroductionSection__bgContainer">
              <IntroductionSectionBg />
            </div>
            <span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga aut pariatur, repellat,
              dolorem quam quas quis, illum dolor id minima nostrum eligendi. Consequuntur aperiam
              tempora, omnis explicabo voluptates corrupti! Harum sit, perferendis ab dolorem magnam
              obcaecati itaque odio nobis beatae!
            </span>
            <span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga aut pariatur, repellat,
              dolorem quam quas quis, illum dolor id minima nostrum eligendi. Consequuntur aperiam
              tempora, omnis explicabo voluptates corrupti! Harum sit, perferendis ab dolorem magnam
              obcaecati itaque odio nobis beatae!
            </span>
            <span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga aut pariatur, repellat,
              dolorem quam quas quis, illum dolor id minima nostrum eligendi. Consequuntur aperiam
              tempora, omnis explicabo voluptates corrupti! Harum sit, perferendis ab dolorem magnam
              obcaecati itaque odio nobis beatae!
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import IntroductionSectionBg from './../shared/IntroductionSectionGradient.vue';

export default {
  name: 'IntroductionSection',
  components: {
    IntroductionSectionBg,
  },
};
</script>

<style scoped>
.IntroductionSection {
  position: relative;
  z-index: 1;
  padding-block: 10vh;
  background-color: rgba(243, 247, 252, 0.761);
}

.IntroductionSection__container {
  display: flex;
  justify-content: center;
}

.IntroductionSection__layout {
  max-width: calc(var(--columnPaddingNormal) * 2 + var(--layoutWidth));
  padding-inline: 32px;
  display: grid;
  row-gap: 110px;
}

.IntroductionSection__header {
  display: grid;
  row-gap: 32px;
}

.caption {
  font: 500 22px / 1.5 var(--fontFamily);
  color: #5d3fd3;
}

.title {
  font: 600 38px / 1.5 var(--fontFamily);
}

.IntroductionSection__contentContainer {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
}

.IntroductionSection__bodyContainer {
  font: var(--bodyFont);
  max-width: var(--bodyMaxWidth);
  text-align: justify;
  word-break: break-word;
  display: grid;
  row-gap: 32px;
}

.IntroductionSection__imgContainer {
  height: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.IntroductionSection__imgContainer img {
  height: inherit;
}

.IntroductionSection__bgContainer {
  position: absolute;
  bottom: 0;
  left: 0;
  height: 100%;
  width: 100%;
  transform: skewY(12deg) translateY(100%);
  z-index: -1;
}

@media (max-width: 900px) {
  .IntroductionSection__contentContainer {
    grid-template-columns: repeat(1, 1fr);
  }
  .IntroductionSection__imgContainer {
    display: none;
  }
}
</style>
