<template>
  <section class="IntroductionSection">
    <div class="Section__masked">
      <div class="Section__backgroundMask">
        <div class="Section__background"></div>
      </div>
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
              <span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga aut pariatur, repellat,
                dolorem quam quas quis, illum dolor id minima nostrum eligendi. Consequuntur aperiam
                tempora, omnis explicabo voluptates corrupti! Harum sit, perferendis ab dolorem
                magnam obcaecati itaque odio nobis beatae!
              </span>
              <span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga aut pariatur, repellat,
                dolorem quam quas quis, illum dolor id minima nostrum eligendi. Consequuntur aperiam
                tempora, omnis explicabo voluptates corrupti! Harum sit, perferendis ab dolorem
                magnam obcaecati itaque odio nobis beatae!
              </span>
              <span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga aut pariatur, repellat,
                dolorem quam quas quis, illum dolor id minima nostrum eligendi. Consequuntur aperiam
                tempora, omnis explicabo voluptates corrupti! Harum sit, perferendis ab dolorem
                magnam obcaecati itaque odio nobis beatae!
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Test',
};
</script>

<style scoped>
.Section__masked {
  overflow: hidden;
}

.Section__backgroundMask {
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: visible;
  z-index: -1;
}

.Section__background {
  position: relative;
  height: 100%;
  max-height: none;
  width: 100%;
  top: 0;
  left: 0;
  transform-origin: 100% 0;
  transform: skewY(6deg);
  background: #301934;
  overflow: hidden;
}

.IntroductionSection {
  position: relative;
  z-index: 1;
  color: #fff;
  background: #301934;
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
  padding-bottom: 10vh;
}

.IntroductionSection__header {
  display: grid;
  row-gap: 32px;
}

.caption {
  font: 500 22px / 1.5 var(--fontFamily);
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
