<template>
  <div class="SiteHeader__menuContainer theme--White">
    <div class="SiteHeader__arrow" :style="arrowTransform"></div>
    <div class="SiteMenu SiteHeader__menu" @mouseover="overSiteMenu" @mouseleave="leaveSiteMenu">
      <div class="Card Card--shadowXLarge SiteMenu__card" ref="siteMenuCard">
        <div :class="giveLayoutClass('serviceLink')" ref="serviceLink">
          <SiteServiceNavLayout />
        </div>
        <div :class="giveLayoutClass('galleryLink')" ref="galleryLink">
          <SiteGalleryHeader />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SiteServiceNavLayout from './SiteServiceNavLayout.vue';
import SiteGalleryHeader from './SiteGalleryHeader.vue';

export default {
  name: 'SiteHeaderMenu',
  data: () => ({
    value: undefined,
  }),
  props: {
    offset: Number,
    activeSiteMenu: String,
  },
  components: {
    SiteServiceNavLayout,
    SiteGalleryHeader,
  },
  computed: {
    arrowTransform() {
      return {
        transform: 'translateY(0) translateX(' + this.offset + 'px) rotate(45deg)',
      };
    },
  },
  created() {
    window.addEventListener('resize', this.resizeEventHandler);
  },
  destroyed() {
    window.removeEventListener('resize', this.resizeEventHandler);
  },
  updated() {
    this.setCardWidth(
      this.getWidth(this.activeSiteMenu) + 'px',
      this.getHeight(this.activeSiteMenu) + 'px'
    );
  },
  methods: {
    overSiteMenu() {
      this.value = true;
      this.$emit('leavingServices', this.value);
    },
    leaveSiteMenu() {
      this.value = false;
      this.$emit('leavingServices', this.value);
    },
    getHeight(el) {
      if (this.$refs[el] === undefined) return;
      return this.$refs[el].clientHeight;
    },
    getWidth(el) {
      if (this.$refs[el] === undefined) return;
      return this.$refs[el].clientWidth;
    },
    setCardWidth(width, height) {
      this.$refs.siteMenuCard.style.width = width;
      this.$refs.siteMenuCard.style.height = height;
    },
    resizeEventHandler() {
      let width = this.getWidth(this.activeSiteMenu) + 'px';
      let height = this.getHeight(this.activeSiteMenu) + 'px';
      this.setCardWidth(width, height);
    },
    giveLayoutClass(link) {
      let addClass = 'SiteMenu__section';
      if (link === 'serviceLink' && link !== this.activeSiteMenu) {
        addClass = 'SiteMenu__section SiteMenu__section--left';
      }
      if (link === 'galleryLink' && link !== this.activeSiteMenu) {
        addClass = 'SiteMenu__section SiteMenu__section--right';
      }
      return addClass;
    },
  },
};
</script>

<style scoped>
.theme--White {
  --backgroundColor: #fff;
  --linkColor: var(--accentColor);
  --linkHoverColor: #0a2540;
  --buttonColor: var(--accentColor);
  --buttonHoverColor: #0a2540;
  --buttonDisabledColor: #cfd7df;
  --buttonDisabledOpacity: 0.7;
  --knockoutColor: #fff;
  --knockoutDisabledColor: #8898aa;
  --guideSolidColor: rgba(66, 71, 112, 0.06);
  --guideDashedColor: rgba(66, 71, 112, 0.09);
  --titleColor: #0a2540;
  --textColor: #425466;
  --inputBackground: #f1f4f7;
  --inputPlaceholderColor: #acb9c5;
  --inputTextColor: #0a2540;
  --inputErrorAccentColor: #ff5191;
  --annotationColor: #8c9eb1;
  --maskFadeColor: rgba(0, 0, 0, 0.4);
  --navColor: #0a2540;
  --navHoverColor: #0a2540;
  --navHoverOpacity: 0.6;
  --footerColor: #0a2540;
  --cardBorderColor: #cbd6e0;
  --cardBackground: #fff;
  --subcardBackground: #f6f9fc;
  --gridSubcardBackground: #f6f9fc;
  --tableIconColor: #8c9eb1;
  --stripeAccentWhite: #fff;
  --stripeAccentLight: #e3e7ec;
  --stripeAccentDark: #0a2540;
  --bulletColor: #cfd7df;
  --footnoteTextColor: #4d5b78;
  --disclaimerTextColor: #707f98;
  --inlineCodeTextColor: #2c3a57;
  --inlineCodeBackground: #e6ecf2;
}

.SiteHeader__menuContainer {
  display: var(--desktopNavDisplay, block);
  position: absolute;
  top: calc(100% - 1px - var(--siteMenuArrowSpacing));
  left: 0;
  width: 100%;
  height: 1000px;
  z-index: 1;
  pointer-events: none;
  perspective: 2000px;
  overflow: hidden;
  transition-property: opacity;
  transition: var(--siteMenuTransition);
}

.SiteHeader__menuContainer[aria-hidden='false'] {
  pointer-events: auto;
}

.SiteHeader__arrow {
  --siteHeaderArrowBackgroundColor: var(--cardBackground);
  position: absolute;
  top: 8px;
  left: 0;
  margin: 0 0 0 -6px;
  width: 12px;
  height: 12px;
  transform: translateY(12px) translateX(var(--siteMenuArrowOffset)) translateX(50%) rotate(45deg);
  border-radius: 3px 0 0 0;
  background-color: var(--siteHeaderArrowBackgroundColor);
  box-shadow: -3px -3px 5px rgb(82 95 127 / 4%);
  transition-property: transform;
  transition-duration: var(--siteMenuTransition);
  z-index: 2;
}

.SiteMenu[hidden] {
  --siteMenuRotateX: -15deg;
}

.SiteMenu {
  --siteMenuOffset: 0;
  --siteMenuRotateX: 0;
  display: inline-block;
  padding-top: var(--siteMenuArrowSpacing);
  height: calc(var(--siteMenuHeight) + var(--siteMenuArrowSpacing)) 250px;
  transform: translateX(-50%) rotateX(var(--siteMenuRotateX));
  transform-origin: 50% -50px;
  transition: var(--siteMenuTransition);
  transition-property: transform, width, height;
  will-change: transform, width, height;
  z-index: 2;
  width: fit-content;
}

.SiteHeader__menu {
  position: absolute;
  top: 0;
  left: 50%;
}

.SiteMenu__card.Card {
  position: relative;
  height: 100%;
  will-change: width;
  transition: var(--siteMenuTransition);
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

.SiteMenu__section {
  --siteMenuSectionOffset: 0;
  display: inline-block;
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%) translateX(var(--siteMenuSectionOffset));
  transition: var(--siteMenuTransition);
  transition-property: transform, opacity;
  will-change: transform, opacity;
}

.SiteMenu__section--left {
  --siteMenuSectionOffset: -150px;
  opacity: 0;
  pointer-events: none;
}

.SiteMenu__section--right {
  --siteMenuSectionOffset: 150px;
  opacity: 0;
  pointer-events: none;
}
</style>
