<template>
  <section class="IntroductionSection">
    <div class="Section__masked">
      <div class="Section__backgroundMask">
        <div class="Section__background"></div>
      </div>
      <div class="IntroductionSection__container">
        <div class="IntroductionSection__layout">
          <div class="IntroductionSection__header">
            <h3 class="caption">Lorem, ipsum.</h3>
            <h2 class="title">Lorem ipsum dolor sit amet consectetur.</h2>
          </div>
          <div class="IntroductionSection__contentContainer">
            <div class="IntroductionSection__imgContainer">
              <img src="./../../../../assets/img/introductionflag.png" alt="intro-flag" />
            </div>
            <div class="IntroductionSection__bodyContainer">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga aut pariatur, repellat,
                dolorem quam quas quis, illum dolor id minima nostrum eligendi. Consequuntur aperiam
                tempora, omnis explicabo voluptates corrupti! Harum sit, perferendis ab dolorem
                magnam obcaecati itaque odio nobis beatae!
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga aut pariatur, repellat,
                dolorem quam quas quis, illum dolor id minima nostrum eligendi. Consequuntur aperiam
                tempora, omnis explicabo voluptates corrupti! Harum sit, perferendis ab dolorem
                magnam obcaecati itaque odio nobis beatae!
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga aut pariatur, repellat,
                dolorem quam quas quis, illum dolor id minima nostrum eligendi. Consequuntur aperiam
                tempora, omnis explicabo voluptates corrupti! Harum sit, perferendis ab dolorem
                magnam obcaecati itaque odio nobis beatae!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: 'IntroductionSection',
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
  transform-origin: 0 0;
  transform: skewY(0);
  background: #f6f9fc;
  overflow: hidden;
}

.IntroductionSection {
  position: relative;
  z-index: 1;
  background-color: #f6f9fc;
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
  padding-top: 10vh;
  padding-bottom: 250px;
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

@media (max-width: 900px) {
  .IntroductionSection__layout {
    padding-bottom: 200px;
  }
  .IntroductionSection__contentContainer {
    grid-template-columns: repeat(1, 1fr);
  }
  .IntroductionSection__imgContainer {
    display: none;
  }
}
</style>
