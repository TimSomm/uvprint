<template>
  <section class="BottomNavSection" id="bottomNavSection">
    <div class="Section__masked">
      <div class="Section__backgroundMask">
        <div class="Section__background"></div>
      </div>
      <div class="BottomNavSection__container">
        <div class="BottomNavSection__layout">
          <div class="BottomNavSection__contentGrid">
            <div class="BottomNavSection__firstCol BottomNavSection__col">
              <h3 class="BottomNavSection__nameTitle">uvprint</h3>
            </div>
            <div class="BottomNavSection__secondCol BottomNavSection__col">
              <div>
                <h4 class="BottomNavSection__title">Galéria</h4>
                <ul class="BottomNavSection__galleryList BottomNavSection__list">
                  <li class="BottomNavSection__galleryItem BottomNavSection__item"><a href="#">Zászló képek</a></li>
                  <li class="BottomNavSection__galleryItem BottomNavSection__item"><a href="#">Autó dekor képek</a></li>
                  <li class="BottomNavSection__galleryItem BottomNavSection__item"><a href="#">Plakát képek</a></li>
                  <li class="BottomNavSection__galleryItem BottomNavSection__item"><a href="#">Kirakat matrica képek</a></li>
                  <li class="BottomNavSection__galleryItem BottomNavSection__item"><a href="#">Roll-up képek</a></li>
                  <li class="BottomNavSection__galleryItem BottomNavSection__item"><a href="#">Összes kép</a></li>
                </ul>
              </div>
              <div>
                <h4 class="BottomNavSection__title">Navigáció</h4>
                <ul class="BottomNavSection__navList BottomNavSection__list">
                  <li class="BottomNavSection__navItem BottomNavSection__item"><a href="#">English</a></li>
                  <li class="BottomNavSection__navItem BottomNavSection__item"><a href="#">Főoldal</a></li>
                  <li class="BottomNavSection__navItem BottomNavSection__item"><a href="#">Partnerek</a></li>
                  <li class="BottomNavSection__navItem BottomNavSection__item"><a href="#">Kapcsolat</a></li>
                </ul>
              </div>
            </div>
            <div class="BottomNavSection__thirdCol BottomNavSection__col">
              <h4 class="BottomNavSection__title">Szolgáltatások</h4>
              <ul class="BottomNavSection__serviceList BottomNavSection__list">
                <li class="BottomNavSection__serviceItem BottomNavSection__item"><a href="#">Molinó</a></li>
                <li class="BottomNavSection__serviceItem BottomNavSection__item"><a href="#">Ponyva</a></li>
                <li class="BottomNavSection__serviceItem BottomNavSection__item"><a href="#">Plakát</a></li>
                <li class="BottomNavSection__serviceItem BottomNavSection__item"><a href="#">Zászló</a></li>
                <li class="BottomNavSection__serviceItem BottomNavSection__item"><a href="#">Laminált és plexi</a></li>
                <li class="BottomNavSection__serviceItem BottomNavSection__item"><a href="#">Kirakat matrica</a></li>
                <li class="BottomNavSection__serviceItem BottomNavSection__item"><a href="#">Hozott anyag</a></li>
                <li class="BottomNavSection__serviceItem BottomNavSection__item"><a href="#">Öntapadó fólia</a></li>
                <li class="BottomNavSection__serviceItem BottomNavSection__item"><a href="#">Laminálás</a></li>
                <li class="BottomNavSection__serviceItem BottomNavSection__item"><a href="#">Roll-up</a></li>
                <li class="BottomNavSection__serviceItem BottomNavSection__item"><a href="#">Koncert</a></li>
                <li class="BottomNavSection__serviceItem BottomNavSection__item"><a href="#">Stand</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "BottomNavSection"
}
</script>

<style scoped>
.BottomNavSection {
  position: relative;
  z-index: 1;
  background-color: #f6f9fc;
}

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
  width: 100%;
  top: 0;
  left: 0;
  transform-origin: 0 100%;
  transform: skewY(-6deg);
  background: #f6f9fc;
  overflow: hidden;
}

.BottomNavSection__container {
  max-width: var(--layoutWidth);
  margin: 0 auto;
}

.BottomNavSection__layout {
  max-width: calc(var(--columnPaddingNormal) * 2 + var(--layoutWidth));
  padding-inline: 32px;
  padding-bottom: 5vh;
  padding-top: 2vh;
}

.BottomNavSection__contentGrid {
  display: grid;
  grid: auto/repeat(3,1fr);
  row-gap: 20px;
}

.BottomNavSection__col {
  display: flex;
  flex-direction: column;
  padding-left: 32px;
}

.BottomNavSection__nameTitle {
  text-transform: lowercase;
}

.BottomNavSection__secondCol {
  display: grid;
  row-gap: 20px;
}

.BottomNavSection__list {
  list-style: none;
}

.BottomNavSection__title {
  margin-bottom: 8px;
}

.BottomNavSection__item {
  margin: 5px 0;
}

a {
  text-decoration: none;
  color: #0a2540;
  transition: opacity 150ms ease-in;
}

a:hover {
  opacity: 0.2;
}

@media (max-width: 740px) {
  .BottomNavSection__contentGrid {
    grid: auto/repeat(2,1fr);
  }

  .BottomNavSection__firstCol {
    grid-column: span 2;
    margin-bottom: 44px;
  }
}

@media (max-width: 410px) {
  .BottomNavSection__contentGrid {
    grid: auto/repeat(1,1fr);
  }

  .BottomNavSection__firstCol {
    grid-column: span 1;
  }
}
</style>