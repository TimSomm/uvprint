<template>
  <div
    class="SiteMobileMenu theme--White SiteHeader__mobileMenu"
    :aria-hidden="isHidden"
    ref="siteMobileMenu"
  >
    <div class="Card Card--shadowXLarge">
      <div class="SiteMenuSection">
        <div class="SiteMenuSection__body">
          <section class="SiteNavList">
            <h2 class="SiteNavList__title">Szolgáltatások</h2>
            <ul class="SiteNavList__list">
              <SiteMobileMenuCard v-for="data in serviceData" v-bind:key="data.label" :data="data" />
            </ul>
          </section>
        </div>
      </div>
      <div class="SiteMenuSection">
        <div class="SiteMenuSection__body">
          <section class="SiteNavList">
            <h2 class="SiteNavList__title">Galéria</h2>
            <ul class="SiteNavList__list">
              <SiteMobileMenuCard v-for="data in galleryData" v-bind:key="data.label" :data="data" />
            </ul>
          </section>
        </div>
      </div>
      <div class="SiteMenuSection">
        <div class="SiteMenuSection__body">
          <section class="SiteNavList">
            <h2 class="SiteNavList__title">Egyéb</h2>
            <ul class="SiteNavList__list">
              <SiteMobileMenuCard
                v-for="data in remainingNavData"
                v-bind:key="data.label"
                :data="data"
              />
            </ul>
          </section>
        </div>
      </div>
      <button class="SiteMobileMenu__closeButton" v-on:click="closeMobileMenu()">
        <svg width="50" height="50" viewBox="0 0 40 40">
          <title>Close mobile navigation</title>
          <path
            d="M25.6 14.3a1 1 0 0 1 0 1.4l-4.24 4.25 4.25 4.24a1 1 0 1 1-1.42 1.42l-4.24-4.25-4.24 4.25a1 1 0 0 1-1.42-1.42l4.25-4.24-4.25-4.24a1 1 0 0 1 1.42-1.42l4.24 4.25 4.24-4.25a1 1 0 0 1 1.42 0z"
            fill="#8898AA"
            fill-rule="evenodd"
          ></path>
        </svg>
      </button>
    </div>
  </div>
</template>

<script>
import SiteMobileMenuCard from './SiteMobileMenuCard.vue';

export default {
  name: 'SiteHeaderMobileMenu',
  components: {
    SiteMobileMenuCard,
  },
  data() {
    return {
      serviceData: [
        { label: 'Molinó', logo: 'molino.png' },
        { label: 'Ponyva', logo: 'tarp.png' },
        { label: 'Plakát', logo: 'placard.png' },
        { label: 'Zászló', logo: 'flag.png' },
        { label: 'Reklámtábla', logo: 'sign.png' },
        { label: 'Kirakat matrica', logo: 'sticker.png' },
        { label: 'Hozott anyag', logo: 'fabric.png' },
        { label: 'Öntapadó fólia', logo: 'car.png' },
        { label: 'Laminálás', logo: 'laminate.png' },
        { label: 'Roll-Up film', logo: 'rollup.png' },
        { label: 'Koncertek', logo: 'concert.png' },
        { label: 'Standok', logo: 'booth.png' },
      ],
      galleryData: [
        { label: 'Zászló képek', logo: 'gallery_flag.png' },
        { label: 'Autó dekor matrica képek', logo: 'gallery_car.png' },
        { label: 'Plakát képek', logo: 'gallery_poster.png' },
        { label: 'Kirakat matrica képek', logo: 'gallery_sticker.png' },
        { label: 'Roll-up képek', logo: 'gallery_rollup.png' },
      ],
      remainingNavData: [
        { label: 'Partnerek', logo: 'partners.png' },
        { label: 'Kapcsolat', logo: 'contact.png' },
        { label: 'Angol nyelv', logo: 'en.png' },
      ],
    };
  },
  methods: {
    closeMobileMenu() {
      this.$emit('leavingMobileMenu', 'true');
    },
  },
  props: ['isHidden'],
};
</script>

<style scoped>
.SiteMobileMenu {
  display: var(--mobileNavDisplay, block);
  --siteMenuMargin: var(--columnPaddingNormal);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  padding: var(--siteMenuMargin);
  z-index: 1;
}

.Card--shadowXLarge {
  --cardShadow: var(--cardShadowXLarge);
  --cardShadowMargin: var(--cardShadowXLargeMargin);
}

.Card {
  --cardMinHeight: 72px;
  position: relative;
  min-width: 100px;
  min-height: var(--cardMinHeight);
  border-radius: var(--cardBorderRadius);
  background: var(--cardBackground);
  box-shadow: var(--cardShadow);
  max-width: var(--cardMaxWidth, none);
  overflow: hidden;
}

.SiteHeader__mobileMenu {
  transform: scale(0.95);
  transform-origin: 100% 0;
  opacity: 0;
  pointer-events: none;
  transition: var(--siteMenuTransition);
  transition-property: transform, opacity;
}

.SiteHeader__mobileMenu[aria-hidden='false'] {
  transform: scale(1);
  opacity: 1;
  pointer-events: auto;
}

.SiteMenuSection {
  --siteMenuSpacing: 24px;
  position: relative;
}

.SiteMenuSection + .SiteMenuSection:before {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 1px;
  background: linear-gradient(
    90deg,
    rgba(66, 71, 112, 0.2),
    rgba(66, 71, 112, 0.2) 50%,
    transparent 0,
    transparent
  );
  background-size: 8px 1px;
  content: '';
}

.SiteMenuSection__body {
  padding: var(--siteMenuSpacing);
}

.SiteNavList {
  --siteNavIconSpacing: 10px;
  --siteNavListMinWidth: 254px;
  --siteNavIconSize: 16px;
  --siteNavListSpacing: 8px;
}

.SiteNavList__title {
  margin-bottom: calc(10px + var(--siteNavListSpacing));
  font: var(--fontWeightBold) 13px/1.538461538 var(--fontFamily);
  letter-spacing: 0.4px;
  text-transform: uppercase;
  color: #8898aa;
}

.SiteNavList__list {
  --columnCount: 2;
  min-width: var(--siteNavListMinWidth);
  margin: calc(var(--siteNavListSpacing) / -2);
  padding: 0;
  list-style: none;
  display: grid;
  grid: auto/repeat(var(--columnCount), 1fr);
}

@media (min-width: 600px) {
  .SiteNavList__list {
    --columnCount: 3;
  }
}

@media (min-width: 750px) {
  .SiteNavList__list {
    --columnCount: 4;
  }
}

@media (min-width: 900px) {
  .SiteMobileMenu {
    --mobileNavDisplay: none;
  }
}

.SiteMobileMenu__closeButton {
  position: absolute;
  top: 8px;
  right: 8px;
  border: none;
  outline: none;
  background: none;
}
</style>
