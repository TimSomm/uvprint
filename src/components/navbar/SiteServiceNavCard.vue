<template>
  <li class="SiteServiceItem">
    <a href="#" class="SiteServiceItem__link">
      <span class="SiteServiceItem__iconContainer">
        <img :src="require(`./../../assets/img/${logo}`)" />
      </span>
      <span class="SiteServiceItem__labelContainer">
        <span class="SiteServiceItem__label">
          {{ label }}
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
        </span>
        <p class="SiteServiceItem__body">{{ body }}</p>
      </span>
    </a>
  </li>
</template>

<script>
export default {
  name: 'SiteServiceNavCard',
  props: {
    logo: String,
    label: String,
    body: String,
  },
};
</script>

<style scoped>
.SiteServiceItem {
  margin-left: 0;
  font: var(--fontWeightNormal) 14px / 1.4 var(--fontFamily);
  letter-spacing: 0.2px;
}

.SiteServiceItem {
  margin-top: var(--siteNavListSpacing);
}

a {
  text-decoration: none;
}

.SiteServiceItem__link {
  display: inline-flex;
  color: #0a2540;
  outline: none;
  align-items: center;
}

.SiteServiceItem__iconContainer {
  flex: 0 0 auto;
  width: var(--siteNavIconSize);
  height: var(--siteNavIconSize);
  margin-right: var(--siteNavIconSpacing);
}

.SiteServiceItem__iconContainer img {
  width: inherit;
  height: inherit;
}

.SiteServiceItem__labelContainer {
  text-align: start;
}

.SiteServiceItem__label {
  font-weight: var(--fontWeightSemiBold);
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

.SiteServiceItem__link:hover .HoverArrow,
.SiteServiceItem__link:hover .SiteServiceItem__body {
  opacity: 1;
}

.SiteServiceItem__body {
  color: inherit;
  opacity: 0.6;
  transition: var(--hoverTransition);
  transition-property: opacity;
  white-space: nowrap;
}

@media (min-width: 1200px) {
  .SiteServiceItem {
    font: var(--fontWeightNormal) 20px / 1.4 var(--fontFamily);
  }
}

</style>
