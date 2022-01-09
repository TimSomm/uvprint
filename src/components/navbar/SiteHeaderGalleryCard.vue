<template>
  <a href="#">
    <div class="SiteHeader__galleryCard">
      <div class="SiteHeader__galleryIconContainer">
        <img :src="require(`./../../assets/img/${data.logo}`)" :alt="data.logo" />
      </div>
      <div class="SiteHeader__galleryTextContainer">
        <div class="SiteHeader__galleryLabelContainer">
          {{ data.label }}
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
  font: var(--fontWeightSemiBold) 20px / 1.4 var(--fontFamily);
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
  --arrowSpacing: 5px;
  --arrowHoverTransition: 150ms cubic-bezier(0.215, 0.61, 0.355, 1);
  --arrowLineOpacity: 0;
  position: relative;
  top: 1px;
  margin-left: var(--arrowSpacing);
  stroke-width: 2px;
  opacity: 0;
  vertical-align: middle;
}

.HoverArrow--sizeSmall {
  --arrowSpacing: 4px;
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
</style>
