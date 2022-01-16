<template>
  <section class="PartnersSection" id="partnersSection">
    <div class="PartnersSection__container">
      <div class="PartnersSection__layout">
        <div class="PartnersSection__partnerLayout">
          <div class="PartnersSection__partnerLogo">
            <img src="./../../../../assets/img/bramac-logo.svg" alt="bramac-logo" />
          </div>
          <div class="PartnersSection__partnerLogo">
            <img src="./../../../../assets/img/euronics-logo.svg" alt="euronics-logo" />
          </div>
          <div class="PartnersSection__partnerLogo">
            <img src="./../../../../assets/img/mvm-logo.svg" alt="mvm-logo" />
          </div>
          <div class="PartnersSection__partnerLogo">
            <img src="./../../../../assets/img/mogyi-logo.svg" alt="mogyi-logo" />
          </div>
          <div class="PartnersSection__partnerLogo">
            <img src="./../../../../assets/img/dr_padlo-logo.svg" alt="dr_padlo-logo" />
          </div>
          <div class="PartnersSection__partnerLogo">
            <img src="./../../../../assets/img/yara-logo.svg" alt="yara-logo" />
          </div>
          <div class="PartnersSection__partnerLogo">
            <img src="./../../../../assets/img/axial-logo.svg" alt="axial-logo" />
          </div>
          <div class="PartnersSection__partnerLogo">
            <img src="./../../../../assets/img/airmax-logo.svg" alt="airmax-logo" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'PartnersSection',
};
</script>

<style scoped>
.PartnersSection {
  position: relative;
  z-index: 1;
  padding-bottom: 10vh;
}

.PartnersSection__container {
  display: flex;
  justify-content: center;
}

.PartnersSection__layout {
  width: 100%;
  max-width: calc(var(--columnPaddingNormal) * 2 + var(--layoutWidth));
  margin-top: 10vh;
  padding-inline: 32px;
}

.PartnersSection__partnerLayout {
  display: grid;
  grid: auto/repeat(4, 1fr);
  justify-items: center;
  align-items: center;
  row-gap: 64px;
}

.PartnersSection__partnerLogo {
  width: 200px;
  height: 80px;
}

img {
  width: inherit;
  height: inherit;
}

@media (max-width: 1000px) {
  .PartnersSection__partnerLayout {
    grid: auto/repeat(2, 1fr);
  }

  .PartnersSection__partnerLogo {
    width: 120px;
  }
}
</style>
