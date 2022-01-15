<template>
  <header class="SiteHeader variant--Overlay theme--Transparent">
    <div class="SiteHeader__container">
      <div class="SiteHeader__navContainer">
        <a href="#" class="SiteHeader__logoLink">
          <img src="./../../assets/img/logo.svg" alt="logo" class="SiteHeader__logo" />
        </a>
        <nav class="SiteHeader__nav" @mouseover="overHeader = true" @mouseleave="leaveHeader">
          <ul class="SiteHeader__navList">
            <li class="SiteHeader__navItem">
              <button
                ref="serviceLink"
                class="SiteHeader__navItem_link"
                aria-haspopup="true"
                @mouseover="overNavLink('serviceLink')"
              >
                Szolgáltatások
              </button>
            </li>
            <li class="SiteHeader__navItem">
              <button
                ref="galleryLink"
                class="SiteHeader__navItem_link"
                aria-haspopup="true"
                @mouseover="overNavLink('galleryLink')"
              >
                Galéria
              </button>
            </li>
            <li class="SiteHeader__navItem">
              <button class="SiteHeader__navItem_link">Partnerek</button>
            </li>
            <li class="SiteHeader__navItem">
              <button class="SiteHeader__navItem_link">Kapcsolat</button>
            </li>
          </ul>
        </nav>
        <button class="SiteHeader__navItem_link SiteHeader__langNav">
          <img src="./../../assets/img/en.png" alt="en" />
        </button>
        <div class="SiteHeader__menuNav">
          <button
            class="MenuButton"
            title="Open mobile navigation"
            data-js-target="SiteHeader.menuButton"
            v-on:click="openMobileMenu()"
          >
            <svg width="16" height="10" viewBox="0 0 16 10">
              <title>Open mobile navigation</title>
              <g fill="var(--knockoutColor)" fill-rule="evenodd">
                <rect y="8" width="16" height="2" rx="1"></rect>
                <rect y="4" width="16" height="2" rx="1"></rect>
                <rect width="16" height="2" rx="1"></rect>
              </g>
            </svg>
          </button>
        </div>
      </div>
    </div>
    <SiteHeaderMobileMenu :isHidden="isMobileSiteMenuHidden" @leavingMobileMenu="closeMobileMenu" />
    <SiteHeaderMenu
      id="SiteHeaderMenu"
      :aria-hidden="isSiteMenuHidden"
      :offset="arrowOfSet"
      :activeSiteMenu="activeSiteMenu"
      @leavingMenu="closeDesktopMenu"
    />
  </header>
</template>

<script>
import SiteHeaderMenu from './SiteHeaderMenu.vue';
import SiteHeaderMobileMenu from './SiteHeaderMobileMenu.vue';

export default {
  name: 'SiteHeader',
  components: {
    SiteHeaderMenu,
    SiteHeaderMobileMenu,
  },
  data() {
    return {
      isSiteMenuHidden: 'true',
      isMobileSiteMenuHidden: 'true',
      overSiteMenu: false,
      overHeader: false,
      activeSiteMenu: '',
      arrowOfSet: 0,
    };
  },
  methods: {
    getCenter(element) {
      const left = this.$refs[element].getBoundingClientRect().left;
      const right = this.$refs[element].getBoundingClientRect().right;
      const middle = (right - left) / 2;
      const center = left + middle;
      return center;
    },
    overNavLink(navlink) {
      this.isSiteMenuHidden = 'false';
      this.arrowOfSet = this.getCenter(navlink);
      this.activeSiteMenu = navlink;
    },
    leaveSiteMenu() {
      setTimeout(() => {
        if (!this.overSiteMenu && !this.overHeader) {
          this.isSiteMenuHidden = 'true';
        }
      }, 250);
    },
    leaveHeader() {
      this.overHeader = false;
      this.leaveSiteMenu();
    },
    closeDesktopMenu(event) {
      this.overSiteMenu = event;
      this.leaveSiteMenu();
    },
    openMobileMenu() {
      this.isMobileSiteMenuHidden = 'false';
    },
    closeMobileMenu(event) {
      this.isMobileSiteMenuHidden = event;
    },
  },
};
</script>

<style scoped>
#SiteHeaderMenu[aria-hidden='true'] {
  opacity: 0;
}

#SiteHeaderMenu[aria-hidden='false'] {
  opacity: 1;
}

.theme--Transparent {
  --backgroundColor: none;
  --linkColor: #fff;
  --linkHoverColor: var(--linkColor);
  --linkHoverOpacity: 0.6;
  --buttonColor: hsla(0, 0%, 100%, 0.2);
  --buttonHoverColor: hsla(0, 0%, 100%, 0.4);
  --accentColor: #fff;
  --knockoutColor: #fff;
  --textColor: #fff;
  --guideSolidColor: rgba(66, 71, 112, 0.06);
  --guideDashedColor: rgba(66, 71, 112, 0.09);
  --titleColor: #fff;
  --maskFadeColor: rgba(0, 0, 0, 0.4);
  --stripeBackground: #fff;
}

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

.SiteHeader {
  --siteMenuTransition: 250ms;
  --siteMenuArrowSpacing: 13px;
  --siteMenuArrowOffset: 0;
  position: relative;
  z-index: 2;
  background-color: var(--backgroundColor);
}

.SiteHeader.variant--Overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  background: none;
}

.SiteHeader__container {
  position: relative;
  max-width: calc(var(--columnPaddingNormal) * 2 + var(--layoutWidth));
  margin: 0 auto;
  padding: 0 var(--columnPaddingNormal);
}

.SiteHeader__navContainer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 56px;
  padding: 32px var(--columnPaddingNormal) 12px;
}

.SiteHeader__logoLink {
  display: block;
  outline: none;
  padding: 4px;
  margin: -4px;
}

.SiteHeader__logo {
  display: block;
  max-width: 160px;
  height: 80px;
}

nav {
  display: block;
}

.SiteHeader__navList {
  display: var(--desktopNavDisplay, flex);
  align-items: center;
  margin: 0;
  padding: 0;
  list-style: none;
}

.SiteHeader__navItem {
  opacity: 1;
  transition: all 200ms ease;
}

.SiteHeader__navItem:hover,
.SiteHeader__navItem_link:hover {
  opacity: var(--linkHoverOpacity);
}

.SiteHeader__navItem_link[aria-haspopup='true'] {
  cursor: default;
  transition: var(--hoverTransition);
  transition-property: color, opacity;
}

.SiteHeader__navItem_link,
.SiteHeader__navItem_link.Link {
  padding: 10px 20px;
  font: var(--fontWeightBold) 16px / 1.6 var(--fontFamily);
  letter-spacing: 0.2px;
  color: var(--navColor);
  cursor: pointer;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background-color: transparent;
  border: none;
  outline: none;
  transition: all 200ms ease;
}

.SiteHeader__langNav {
  display: var(--desktopNavDisplay, flex);
  align-items: center;
  justify-content: center;
  width: 155px;
}

.SiteHeader__langNav img {
  height: 40px;
}

.SiteHeader__menuNav {
  display: var(--mobileNavDisplay, initial);
}

.MenuButton {
  --buttonHeight: 32px;
  display: inline-flex;
  align-items: center;
  height: var(--buttonHeight);
  padding: 0 calc(var(--buttonHeight) / 2);
  border-radius: calc(var(--buttonHeight) / 2);
  background-color: var(--buttonColor);
  color: var(--knockoutColor);
  transition: var(--hoverTransition);
  transition-property: background-color, opacity;
  border: none;
  outline: none;
}

.MenuButton:hover {
  background-color: var(--buttonHoverColor);
}

@media (min-width: 900px) {
  .SiteHeader {
    --mobileNavDisplay: none;
  }
}

@media (max-width: 899px) {
  .SiteHeader {
    --desktopNavDisplay: none;
  }
}
</style>
