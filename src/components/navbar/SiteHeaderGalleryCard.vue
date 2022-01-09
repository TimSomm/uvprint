<template>
  <a href="#">
    <div class="SiteHeader__galleryCard">
      <div class="SiteHeader__galleryIconContainer">
        <img :src="require(`./../../assets/img/${data.logo}`)" :alt="data.logo" />
      </div>
      <div class="SiteHeader__galleryTextContainer">
        <div class="SiteHeader__galleryLabelContainer">
          <span class="title">
            {{ data.label }}
          </span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="HoverArrow HoverArrow--sizeSmall SiteNavItem__arrow"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path
              d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z"
            />
          </svg>
        </div>
        <div class="SiteHeader__galleryBodyContainer">
          {{ data.body }}
        </div>
      </div>
    </div>
  </a>
</template>

<script>
export default {
  name: 'SiteHeaderGalleryCard',
  props: ['data'],
};
</script>

<style scoped>
a {
  text-decoration: none;
  color: #0a2540;
}

.SiteHeader__galleryCard {
  display: flex;
  align-items: center;
}

.SiteHeader__galleryTextContainer {
  display: flex;
  flex-direction: column;
  min-width: 40vw;
  font: var(--fontWeightSemiBold) 14px / 1.4 var(--fontFamilyNav);
}

.SiteHeader__galleryLabelContainer {
  display: flex;
  align-items: center;
}

.title {
  margin-right: 10px;
}

.SiteHeader__galleryIconContainer {
  width: 50px;
  margin-right: 25px;
}

.SiteHeader__galleryIconContainer img {
  width: inherit;
  height: inherit;
}

.SiteHeader__galleryBodyContainer {
  opacity: 0.5;
  transition: var(--hoverTransition);
  transition-property: opacity;
}

.HoverArrow {
  --arrowHoverTransition: 150ms cubic-bezier(0.215, 0.61, 0.355, 1);
  --arrowLineOpacity: 0;
  position: relative;
  top: 1px;
  stroke-width: 2px;
  opacity: 0;
  vertical-align: middle;
}

.HoverArrow--sizeSmall {
  stroke-width: 1.5px;
}

.SiteNavItem__arrow.HoverArrow {
  transition: var(--hoverTransition);
  transition-property: opacity;
}

a:hover .HoverArrow,
a:hover .SiteHeader__galleryBodyContainer {
  opacity: 1;
}

a:hover .HoverArrow {
  animation: 1s infinite jumpRight cubic-bezier(0.25, -0.5, 0.17, 1.2);
}

@keyframes jumpRight {
  0% {
    transform: translateX(0%);
  }
  50% {
    transform: translateX(5px);
  }
  100% {
    transform: translateX(0%);
  }
}

@media (min-width: 1200px) {
  .SiteHeader__galleryTextContainer {
    font: var(--fontWeightNormal) 16px / 1.4 var(--fontFamilyNav);
  }
}
</style>
